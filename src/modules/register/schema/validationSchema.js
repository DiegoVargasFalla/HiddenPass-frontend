import * as yup from 'yup';

export const useRegisterSchema = yup.object().shape(
    {
        name: yup.string()
            .min(4, '¡El nombre debe tener almenos 4 caracteres!')
            .required('¡El nombre es obligatorio!'),

        email: yup.string()
            .email('¡Formato de correo no válido!')
            .required('¡El correo es obligatorio!'),

        password: yup.string()
            .min(5, '¡Por tu seguridad la contraseña debe tener al menos 16 caracteres!')
            .required('¡La contraseña es obligatoria!'),

        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], '¡Las contraseñas deben coincidir!')
            .required('¡Debes confirmar tu contraseña!'),
    }
);