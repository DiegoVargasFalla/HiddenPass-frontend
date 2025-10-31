import * as yup from 'yup';


export const useRegisterLinkSchema = yup.object().shape(
    {
        email: yup.string()
            .email('¡Formato de correo no válido!')
             .required('¡El correo es obligatorio!'),
    }
);