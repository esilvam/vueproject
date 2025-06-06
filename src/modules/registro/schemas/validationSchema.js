import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string()
        .required('El nombre es obligatorio')
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .max(50, 'El nombre no puede exceder los 50 caracteres')
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, 'El nombre solo puede contener letras'),

    correo: yup.string()
        .required('El email es obligatorio')
        .email('Debe ser un email válido'),
});       