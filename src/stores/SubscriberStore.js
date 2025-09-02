import axios from "axios";
import { defineStore } from "pinia";
import { useShowLayerPopsUp } from "@/modules/dashboard/store/layerPopsUpStore";

export const useSubscriberStore = defineStore('subscriberStore', {
    state: () => ({
        subscriberEmail: '',
        showPopUp: false,
        showCheckIconSubcriber: false
    }),
    actions: {
        getSubcriberEmail() {
            return this.subscriberEmail;
        },
        setSubscriberEmail(value) {
            this.subscriberEmail = value;
        },
        async subcribeUser() {
            const subcriberStore = useSubscriberStore();
            const layerPopsUpStore = useShowLayerPopsUp();
            try {
                const response = await axios.post('/api/v1/subscriber',
                    {email: this.subscriberEmail}
                )

                const dada = response.data;
                if(dada) {
                    subcriberStore.showCheckIconSubcriber = true;
                    setTimeout(() => {
                        layerPopsUpStore.setShowLayerPopsUp(false);
                        this.showPopUp = false;
                        this.subscriberEmail = "";
                        subcriberStore.showCheckIconSubcriber = false;
                    }, 2000);
                }
            } catch(error) {
                console.log();
            }
        }
    }
})

