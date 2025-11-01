import { defineStore } from "pinia";
import axios from "axios";
import { useAuthenticationStore } from "@/modules/auth/store/authenticationStore";

export const useRegisterLinkStore = defineStore('registerLink', {
    state: () => ({
        email: '',
        loadCircle: false,
        sendMail: false,
        labelSendMail: "enviar",
        countSendAgain: 0,
        disabledSend: false,
        existMail: false
    }),
    actions: {
        getExistMail() {
            return this.existMail;
        },
        setExistMail(value) {
            this.existMail = value;
        },
        getDisabledSend() {
            return this.disabledSend;
        },
        setDisabledSend(value){
            this.disabledSend = value;
        },
        getCountSendAgain() {
            return this.countSendAgain;
        },
        setCountSendAgain(value) {
            this.countSendAgain = value;
        },
        getLabelSendMail() {
            return this.labelSendMail;
        },
        setLabelSnedMail(value) {
            this.labelSendMail = value
        },
        getSendMail() {
            return this.sendMail;
        },
        setSendMail(value) {
            this.sendMail = value;
        },
        getLoadCircle(){
            return this.loadCircle;
        },
        setLoadCircle(value) {
            this.loadCircle = value;
        },
        async generateRegisterLink() {
            const authenticationStore = useAuthenticationStore();
            const existMailRequest = await authenticationStore.checkMail({email: this.email})
            if(this.email.length > 0) {
                if(!existMailRequest) {
                    try {
                        const response = await axios.get(`/api/v1/generate-register-token/${this.email}`);

                        const data = response.data;
                        if(data) {
                            this.loadCircle = true;
                            setTimeout(async () => {
                                this.loadCircle = false;
                                this.sendMail = true;
                                this.labelSendMail = "volver a enviar"
                                this.disabledSend = true;
                                this.existMail = false;
                                await this.waitToSend();
                            }, 1400)
                            return;
                        }
                    } catch (error) {
                        console.log()
                    }
                } else if(existMailRequest) {
                    this.existMail = true;
                }
            } else {
                console.log("-> fill field")
            }
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async waitToSend() {
            for(let i = 35; i >= 0; i-- ) {
                this.countSendAgain = i;
                await this.sleep(1000);
            };
            this.countSendAgain = "00"
            this.disabledSend = false;
        }
    }
})