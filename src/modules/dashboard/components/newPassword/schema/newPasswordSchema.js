import * as yup from 'yup';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';;


export function useNewPasswordSchema() {

    const urlList = [];
    const passwordList = [];

    const authenticationStore = useAuthenticationStore();
    authenticationStore.getListPassword().forEach(password => {
        urlList.push(password.url)
        passwordList.push(password.password);
    })

    return yup.object().shape({
        username: yup
        .string()
        .required('¡El usuario es obligatorio!'),

        url: yup
        .string()
        .notOneOf(urlList, "¡esta url  ya existe!")
        .required('!La url es obligatorio¡')
        .matches(
            /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/,
            'Debe ser un dominio o subdominio válido (ejemplo.com)'
        ),
        
        password: yup
        .string()
        .notOneOf(passwordList, "¡esta contraseña ya existe!")
        .required('¡La contraseña es obligatoria!')
    })
}