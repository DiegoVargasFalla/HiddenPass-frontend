import { defineStore } from "pinia";
import { readonly, ref } from "vue";
import { useEncryptionsUtilsStore } from "./EncryptionsUtilsStore";
import { useAuthenticationStore } from "@/modules/auth/store/authenticationStore";
import axios from "axios";


export const useNoteStore = defineStore('noteStore', {
    state: () => ({
        idNote: 0, 
        note: ref(''),
        title: ref(''),
        date: 0,
        listNotes: [],
        loadCirlce: false,
        error: false,
        showListNotes: false,
        confirmDeleteNote: false,
        showConfirmDeleteNote: false,
        noteToDeleteId: 0,
        showLoaderNotes: false,
        showEditNote: false,
        noChanges: false,
        showLoaderSaveUpdate: false,
        readonly: false,

        newNoteDTO: {
            id: null,
            title: null,
            content: null,
            masterKey: null,
            aesKey: null,
            ivFront: null
        }
    }),
    actions: {
        getNote() {
            return this.note;
        },
        setNote(value) {
            this.note = value;
        },
        clearNote() {
            this.note = '';
        },
        saveNote(value) {
            console.log(value)
        },
        getTitle() {
            return this.title;
        },
        setTitle(value) {
            this.title = value;
        },
        getListNotes() {
            return this.listNotes;
        },
        setListNotes(value) {
            this.listNotes = value;
        },
        getLoadCirlce() {
            return this.loadCirlce;
        },
        setLoadCircle(value) {
            this.loadCirlce = value;
        },
        getError() {
            return this.error;
        },
        setError(value) {
            this.error = value;
        },
        reverseListNotes(list) {
            const reverseList = [...list].reverse();
            this.listNotes = reverseList;
        },
        updateListNote(id) {
            const index = this.listNotes.indexOf()
        },
        setShowConfirDeleteNote(value) {
            this.showConfirmDeleteNote = value;
        },
        updateListNote(id) {
            const indexNote = this.listNotes.findIndex(item => item.id === id);

            if(indexNote !== -1) {
                this.listNotes.splice(indexNote, 1);
            }
        },
        async saveNote(title, content, masterKey, token){
            this.loadCirlce = true;
            const encryptionsUtilsStore = useEncryptionsUtilsStore();

            const importedPublicKeyBack = await encryptionsUtilsStore.importRSAPublicKey(encryptionsUtilsStore.getPublicKeyBack());

            const AESKey = encryptionsUtilsStore.getAesKeyFront();
            
            const iv = encryptionsUtilsStore.getIvFront();
            const zoneDateClient = encryptionsUtilsStore.getTimeZone();

            const encryptedTitlte = await encryptionsUtilsStore.encryptWithAES(title, AESKey, iv);
            const encryptedContent = await encryptionsUtilsStore.encryptWithAES(content, AESKey, iv);
            const isoDate = encryptionsUtilsStore.getIsoDate();

            const aesKeyRaw = await encryptionsUtilsStore.exportAESKey(encryptionsUtilsStore.getAesKeyFront());
            const encryptedAESKey = await encryptionsUtilsStore.encryptAESKeyWithPublicKeyBackend(aesKeyRaw, importedPublicKeyBack);
            const ivBase64 = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptionsUtilsStore.getIvFront());

            const noteEntityDTO = {
                title: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedTitlte),
                content: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedContent),
                isoDate: isoDate,
                zoneDateClient: zoneDateClient,
                masterKey: masterKey,
                encryptedAesKey: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedAESKey),
                ivFront: ivBase64,
            }

            try { // http://localhost:8080/system/api/v1/add-note

                const response = await axios.post('/api/v1/add-note', 
                noteEntityDTO,
                {headers: {Authorization: `Bearer ${token}`}}
                )

                const data = response.data;

                if(data) {

                    this.loadCirlce = false;
                    data.content = this.note;
                    data.title = this.title;
                    this.note = '';
                    this.title = '';
                    console.log("se guardo correctamente")
                    return data;
                    }
                } 
                catch (error) {
                    console.log(error);
                }
        },
        async bringNotes() {

            const encryptionsUtilsStore = useEncryptionsUtilsStore();
            const authenticationStore = useAuthenticationStore();

            const aesKeyRaw = await encryptionsUtilsStore.exportAESKey(encryptionsUtilsStore.getAesKeyFront());
            const importedPublicKey = await encryptionsUtilsStore.importRSAPublicKey(encryptionsUtilsStore.getPublicKeyBack());
            const encryptedAesKey = await encryptionsUtilsStore.encryptAESKeyWithPublicKeyBackend(aesKeyRaw, importedPublicKey);
            const token = authenticationStore.getToken();

            const body = {
                masterKey: authenticationStore.getPassword(),
                aesKey: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedAesKey),
                ivFront: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptionsUtilsStore.getIvFront())
            }


            try { //  http://localhost:8080/system/api/v1/notes-user
                const response = await axios.post('/api/v1/notes-user', 
                    body,
                    {headers: {Authorization: `Bearer ${token}`}}
                );

                const data = response.data;

                if (data) {
                    this.reverseListNotes(data);

                    this.listNotes.forEach(async n => {
                        n.title = await encryptionsUtilsStore.decryptWithAES(n.title, encryptionsUtilsStore.getAesKeyFront(), encryptionsUtilsStore.getIvFront());
                        n.content = await encryptionsUtilsStore.decryptWithAES(n.content, encryptionsUtilsStore.getAesKeyFront(), encryptionsUtilsStore.getIvFront());
                    })
                    this.showLoaderNotes = false;
                }
            } catch (error) {
                console.log(error);
            }
        },
        async deleteNote(id) {
            const authenticationStore = useAuthenticationStore();
            const token = authenticationStore.getToken();

            try { // http://localhost:8080/system/api/v1/delete-note
                const response = await axios.delete('/api/v1/delete-note', 
                    {
                        headers: {Authorization: `Bearer ${token}`},
                        data: { noteId: id}
                    }
                )

                const data = response.data;
                if(data === true) {
                    this.confirmDeleteNote = true;
                    this.updateListNote(this.noteToDeleteId);
                }
            }
            catch(error) {
                console.log(error)
            }
        },
        async editNote(){
            return true;
        },
        async updateNote() {

            this.showLoaderSaveUpdate = true;

            const authenticationStore = useAuthenticationStore();
            const encryptionsUtilsStore = useEncryptionsUtilsStore();

            const token = authenticationStore.getToken();

            const importedRSA = await encryptionsUtilsStore.importRSAPublicKey(encryptionsUtilsStore.getPublicKeyBack());
            const aesKeyRaw = await encryptionsUtilsStore.exportAESKey(encryptionsUtilsStore.getAesKeyFront());
            const encryptedAESKey = await encryptionsUtilsStore.encryptAESKeyWithPublicKeyBackend(aesKeyRaw, importedRSA);

            this.newNoteDTO.masterKey = authenticationStore.getPassword();
            this.newNoteDTO.aesKey = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedAESKey);
            this.newNoteDTO.ivFront = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptionsUtilsStore.getIvFront());

            if(this.newNoteDTO.title !== null) {
                const encryptedTitle = await encryptionsUtilsStore.encryptWithAES(this.newNoteDTO.title, encryptionsUtilsStore.getAesKeyFront(), encryptionsUtilsStore.getIvFront());
                this.newNoteDTO.title = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedTitle);
            } if(this.newNoteDTO.note !== null) {
                const encrypteContent = await encryptionsUtilsStore.encryptWithAES(this.newNoteDTO.content, encryptionsUtilsStore.getAesKeyFront(), encryptionsUtilsStore.getIvFront());
                this.newNoteDTO.content = encryptionsUtilsStore.exportUnit8ArrayToBase64(encrypteContent);
            }

            try { // http://localhost:8080/system/api/v1/update-note
                const response = await axios.patch('/api/v1/update-note', 
                    this.newNoteDTO,
                    {headers: {Authorization: `Bearer ${token}`}}
                )

                const data = response.data
                if(data) {
                    console.log('-> data'),
                    console.log(data)

                    this.listNotes.forEach(p => {
                        if(p.id === this.idNote) {
                            p.title = this.title
                            p.content = this.note
                        }
                    })
                    this.showLoaderSaveUpdate = false;
                    this.noChanges = false;
                    this.newNoteDTO.id = null;
                    this.newNoteDTO.title = null
                    this.newNoteDTO.content = null
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
})
