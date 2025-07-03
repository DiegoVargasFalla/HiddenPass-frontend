import * as yup from 'yup';

export const useSchemaLogin = yup.object().shape({
    email: yup
    .string()
    .email('¡Formato de correo no válido!')
    .required('¡El correo es obligatorio!'),

    password: yup
    .string()
    .min(5, '¡Por tu seguridad la contraseña debe tener al menos 16 caracteres!')
    .required('¡La contraseña es obligatoria!'),
})