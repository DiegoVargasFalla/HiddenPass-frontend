import { defineStore } from "pinia";
import { readonly, ref } from "vue";
import { useEncryptionsUtilsStore } from "./EncryptionsUtilsStore";
import { useAuthenticationStore } from "@/modules/auth/store/authenticationStore";
import axios from "axios";
import { useRegisterStore } from "@/modules/register/store/registerStore";

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
        showItem: Boolean,

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

            if (indexNote !== -1) {
                this.listNotes.splice(indexNote, 1);
            }
        },
        async saveNote(title, content, token) {
            this.loadCirlce = true;

            const authentication = useAuthenticationStore();

            if(await authentication.checkAuthentication()) {
                const encryptionsUtilsStore = useEncryptionsUtilsStore();
                const registerStore = useRegisterStore();

                const zoneDateClient = encryptionsUtilsStore.getTimeZone();
                const encryptedTitlte = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), title);
                const encryptedContent = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), content);
                const isoDate = encryptionsUtilsStore.getIsoDate();

                const noteEntityDTO = {
                    title: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedTitlte),
                    content: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedContent),
                    isoDate: isoDate,
                    zoneDateClient: zoneDateClient,

                }

                try { // http://localhost:8080/system/api/v1/add-note

                    const response = await axios.post('/api/v1/add-note',
                        noteEntityDTO,
                        { headers: { Authorization: `Bearer ${token}` } }
                    )

                    const data = response.data;

                    if (data) {

                        this.loadCirlce = false;
                        data.content = this.note;
                        data.title = this.title;
                        this.note = '';
                        this.title = '';
                        return data;
                    }
                }
                catch (error) {
                    this.loadCirlce = false;
                    console.log(error);
                }
            }
            
        },
        async bringNotes() { 

            const authenticationStore = useAuthenticationStore();
            if(await authenticationStore.checkAuthentication()) {
                const encryptionsUtilsStore = useEncryptionsUtilsStore();
            
                const registerStore = useRegisterStore();
                const token = authenticationStore.getToken();

                try { //  http://localhost:8080/system/api/v1/notes-user
                    const response = await axios.post('/api/v1/notes-user',
                        {},
                        { headers: { Authorization: `Bearer ${token}` } }
                    );

                    const data = response.data;
                    if (data) {
                        
                        for(const n of data) {
                            n.title = await encryptionsUtilsStore.decryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), encryptionsUtilsStore.exportBase64ToUnit8Array(n.title));
                            n.content = await encryptionsUtilsStore.decryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), encryptionsUtilsStore.exportBase64ToUnit8Array(n.content));
                        }

                        this.reverseListNotes(data);
                        this.showLoaderNotes = false;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },
        async deleteNote(id) {

            const authenticationStore = useAuthenticationStore();

            if(await authenticationStore.checkAuthentication()) {
                const token = authenticationStore.getToken();

                try { // http://localhost:8080/system/api/v1/delete-note
                    const response = await axios.delete('/api/v1/delete-note',
                        {
                            headers: { Authorization: `Bearer ${token}` },
                            data: { noteId: id }
                        }
                    )

                    const data = response.data;
                    if (data === true) {
                        this.confirmDeleteNote = true;
                        this.updateListNote(this.noteToDeleteId);
                    }
                }
                catch (error) {
                    
                    console.log(error)
                }
            }
        },
        async editNote() {
            return true;
        },
        async updateNote() {

            const authenticationStore = useAuthenticationStore();

            this.showLoaderSaveUpdate = true;

            if(await authenticationStore.checkAuthentication()) {
                const authenticationStore = useAuthenticationStore();
                const encryptionsUtilsStore = useEncryptionsUtilsStore();
                const registerStore = useRegisterStore();

                const token = authenticationStore.getToken();

                if (this.newNoteDTO.title !== null) {
                    const encryptedTitle = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), this.newNoteDTO.title);
                    this.newNoteDTO.title = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedTitle);
                } if (this.newNoteDTO.note !== null) {
                    const encrypteContent = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), this.newNoteDTO.content)
                    this.newNoteDTO.content = encryptionsUtilsStore.exportUnit8ArrayToBase64(encrypteContent);
                }

                try { // http://localhost:8080/system/api/v1/update-note
                    const response = await axios.patch('/api/v1/update-note',
                        this.newNoteDTO,
                        { headers: { Authorization: `Bearer ${token}` } }
                    )

                    const data = response.data
                    if (data) {
                        // console.log('-> data'),
                            console.log(data)

                        this.listNotes.forEach(p => {
                            if (p.id === this.idNote) {
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
    }
})
