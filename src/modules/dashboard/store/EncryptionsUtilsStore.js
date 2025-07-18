import axios from "axios";
import { defineStore } from "pinia";
import { date } from "yup";

export const useEncryptionsUtilsStore = defineStore('encryptionsUtilsStore', {
    state: () => ({
        publicKeyFront: '',
        privateKeyFront: '',
        publicKeyBack: '',
        aeskeyFront: '',
        ivFront: '',
        keyPair: null,
    }),
    actions: {
        getPublicKeyFront() {
            return this.publicKeyFront;
        },
        setPublicKeyFront(value) {
            this.publicKeyFront = value;
        },
        getPrivteKeyFront() {
            return this.privateKeyFront;
        },
        setPrivateKeyFront(value) {
            this.privateKeyFront = value;
        },
        getPublicKeyBack() {
            return this.publicKeyBack;
        },
        setPublicKeyBack(value) {
            this.publicKeyBack = value;
        },
        getAesKeyFront() {
            return this.aeskeyFront;
        },
        setAesKeyFront(value) {
            this.aeskeyFront = value;
        },
        getKeyPair() {
            return this.keyPair;
        },
        setKeyPair(value) {
            this.keyPair = value;
        },
        setIvFront(value) {
            this.ivFront = value;
        },
        getIvFront() {
            return this.ivFront;
        },
        getIsoDate() {
            const time = Date.now();
            const today = new Date(time);
            return today;
        },
        getTimeZone() {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            return timeZone;
        },
        async bringPublicKeyBack() {
            try {
                // const token = sessionStorage.getItem('tokenAuthentication')

                const response = await axios.get('/api/v1/pk',
                        // { headers: { Authorization: `Bearer ${token}` } }
                    );

                    const data = response.data
                    if(data) {
                        
                        this.setPublicKeyBack(data)
                        sessionStorage.setItem('publicKeyBackend', this.publicKeyBack)
                    }
            } catch (error) {
                console.log(error);
            }
        },
        async generateKeyPair() {
            const keyPair = await window.crypto.subtle.generateKey(
                {
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256",
                },
                true,
                ["encrypt", "decrypt"]
            );
            this.setKeyPair(keyPair);
        },
        async generateAesKey() {
            const aesKey = await window.crypto.subtle.generateKey(
                {
                    name: "AES-CBC",
                    length: 256,
                },
                true,
                ["encrypt", "decrypt"]
            );
            const iv = window.crypto.getRandomValues(new Uint8Array(16))

            this.setAesKeyFront(aesKey);
            this.setIvFront(iv);
        },
        exportUnit8ArrayToBase64(value) {
            const base64 = btoa(String.fromCharCode(...value))
            return base64;
        },
        exportBase64ToUnit8Array(base64Text) {
            const binaryDer = Uint8Array.from(atob(base64Text), c => c.charCodeAt(0))
            return binaryDer;
        },
        async encryptWithAES(plainText, aesKey, iv) {
            const encoder = new TextEncoder();
            const encodedText = encoder.encode(plainText);

            const encypted = await window.crypto.subtle.encrypt(
                {
                    name: "AES-CBC",
                    iv: iv
                },
                aesKey,
                encodedText
            );

            return new Uint8Array(encypted);
        },
        async decryptWithAES(base64Encrypted, aesKey, iv) {
            const encryptedData =  this.exportBase64ToUnit8Array(base64Encrypted);

            const decryptedBuffer = await window.crypto.subtle.decrypt(
                {
                    name: "AES-CBC",
                    iv: iv
                },
                aesKey,
                encryptedData.buffer
            )

            const decoder = new TextDecoder();
            return decoder.decode(decryptedBuffer);

        },
        async importRSAPublicKey(base64PublicKey) {

            //convertir la clave Base64 a ArrayBuffer
            const binaryDer = Uint8Array.from(atob(base64PublicKey), c => c.charCodeAt(0))

            return await window.crypto.subtle.importKey(
                "spki",
                binaryDer.buffer,
                {
                    name: "RSA-OAEP",
                    hash: "SHA-256"
                },
                false,
                ["encrypt"]
            );
        },
        async exportAESKey(aesKey) {
            const rawKey = await window.crypto.subtle.exportKey("raw", aesKey)
            
            return new Uint8Array(rawKey);
        },
        async encryptAESKeyWithPublicKeyBackend(aesKeyBytes, importedPublicKey) {
            const encryptedAESkey = await window.crypto.subtle.encrypt(
                {
                    name: "RSA-OAEP"
                },
                importedPublicKey,
                aesKeyBytes
            );
            return new Uint8Array(encryptedAESkey);
        },
        async encryptMk(value) {

            const encoder = new TextEncoder();
            const encodeData = encoder.encode(value);

            const importedPubliKey = await this.importRSAPublicKey(this.publicKeyBack);

            const encryptedMk = await window.crypto.subtle.encrypt(
                {
                    name: "RSA-OAEP"
                },
                importedPubliKey,
                encodeData
            );
            return new Uint8Array(encryptedMk);
        },
        async encryptPlainTexWithRSA(plainText) {
            const encoder = new TextEncoder();
            const encodedText = encoder.encode(plainText);

            const importedPublicKey = await this.importRSAPublicKey(this.publicKeyBack);

            const encryptedText = await window.crypto.subtle.encrypt(
                {
                    name: "RSA-OAEP"
                },
                importedPublicKey,
                encodedText
            );
            return new Uint8Array(encryptedText);
        },

        // functions Knowledge zero
        async generateIvAndSalt() {
            const array = new Uint8Array(16);
            window.crypto.getRandomValues(array);
            return array;
        },
        async deriveKey(mk, salt) {
            const encoder = new TextEncoder();
            const password = encoder.encode(mk);

            const keyMaterial = await crypto.subtle.importKey(
                "raw",
                password,
                {name: "PBKDF2"},
                false,
                ["deriveKey"]
            );

            const derivedKey = await crypto.subtle.deriveKey(
                {
                    name: "PBKDF2",
                    salt,
                    iterations: 100000,
                    hash: "SHA-256",
                },
                keyMaterial,
                {
                    name: "AES-GCM",
                    length: 256,
                },
                true,
                ["encrypt", "decrypt"]
            )
            return derivedKey;
        },
        async exportDerivedKey(value) {
            const exportedKey = await window.crypto.subtle.exportKey(
                "raw",
                value,
            )
            return new Uint8Array(exportedKey);
        },
        async importKey(key) {
            const rawKey = this.exportBase64ToUnit8Array(key);
            const importedKey = await crypto.subtle.importKey(
                'raw',
                rawKey,
                {name: 'AES-GCM'},
                false,
                ["encrypt", "decrypt"]
            );
            return importedKey;
        },
        async encryptWithDerivedKey(derivedKey, iv, plainText) {

            const encoder = new TextEncoder();
            const data = encoder.encode(plainText);

            const encryptedData = await crypto.subtle.encrypt(
                {
                    name: "AES-GCM",
                    iv,
                },
                derivedKey,
                data
            );
            return new Uint8Array(encryptedData);
        },
        async decryptWithDerivedKey(derivedKey, iv, encryptedData) {

            const decryptedData = await crypto.subtle.decrypt(
                {
                    name: "AES-GCM",
                    iv
                },
                derivedKey,
                encryptedData
            )
            return new TextDecoder().decode(decryptedData);
        }
    }
})