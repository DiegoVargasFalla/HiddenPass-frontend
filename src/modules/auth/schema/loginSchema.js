import * as yup from 'yup';

export const useSchemaLogin = yup.object().shape({
    email: yup
    .string()
    .email('¡Formato de correo no válido!')
    .required('¡El correo es obligatorio!'),

    password: yup
    .string()
    .min(12, '¡La clave maestra debe tener al menos 12 caracteres!')
    .required('¡La contraseña es obligatoria!'),
})