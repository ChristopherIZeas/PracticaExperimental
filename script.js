'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // === Elementos del DOM ===
    const elements = {
        btnToggleInfo: document.getElementById('btn-toggle-info'),
        vipInfo: document.getElementById('vip-info'),
        form: document.getElementById('registro-form'),
        inputNombre: document.getElementById('nombre'),
        inputEmail: document.getElementById('email'),
        inputPassword: document.getElementById('password'),
        checkboxTerminos: document.getElementById('terminos'),
        errorMsg: document.getElementById('form-error'),
        successMsg: document.getElementById('form-success'),
        btnNavRegistro: document.querySelector('.nav__link--cta'),
    };

    // === Expresiones Regulares ===
    const PATTERNS = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    };

    // === Funciones de Utilidad ===
    const resetErrors = () => {
        elements.errorMsg.classList.add('hidden');
        elements.inputNombre.classList.remove('input-error');
        elements.inputEmail.classList.remove('input-error');
        elements.checkboxTerminos.parentElement.classList.remove('input-error-text');
    };

    const showError = (inputElement, message) => {
        if (inputElement === elements.checkboxTerminos) {
            inputElement.parentElement.classList.add('input-error-text');
        } else if (inputElement) {
            inputElement.classList.add('input-error');
        }
        alert(message);
    };

    const validateForm = () => {
        const nombre = elements.inputNombre.value.trim();
        const email = elements.inputEmail.value.trim();
        const password = elements.inputPassword.value;
        const terminos = elements.checkboxTerminos.checked;

        if (nombre === '') {
            return { isValid: false, element: elements.inputNombre, message: 'El nombre es obligatorio.' };
        }
        if (nombre.length < 3) {
            return { isValid: false, element: elements.inputNombre, message: 'El nombre debe tener al menos 3 caracteres.' };
        }
        if (!PATTERNS.nombre.test(nombre)) {
            return { isValid: false, element: elements.inputNombre, message: 'El nombre solo puede contener letras y espacios.' };
        }

        if (email === '') {
            return { isValid: false, element: elements.inputEmail, message: 'El correo electrónico es obligatorio.' };
        }
        if (!PATTERNS.email.test(email)) {
            return { isValid: false, element: elements.inputEmail, message: 'Ingresa un correo electrónico válido.' };
        }

        if (password === '') {
            return { isValid: false, element: elements.inputPassword, message: 'La contraseña es obligatoria.' };
        }
        if (password.length < 8) {
            return { isValid: false, element: elements.inputPassword, message: 'La contraseña debe tener mínimo 8 caracteres.' };
        }

        if (!terminos) {
            return { isValid: false, element: elements.checkboxTerminos, message: 'Debes aceptar los términos y condiciones.' };
        }

        return { isValid: true };
    };

    // === Manejadores de Eventos ===
    const handleToggleVip = () => {
        const isHidden = elements.vipInfo.classList.toggle('hidden');
        elements.btnToggleInfo.textContent = isHidden ? 'Ver beneficios VIP' : 'Ocultar beneficios VIP';
    };

    const handleSubmit = (evento) => {
        evento.preventDefault();
        resetErrors();

        const validation = validateForm();

        if (!validation.isValid) {
            showError(validation.element, validation.message);
            return;
        }

        elements.form.classList.add('hidden');
        elements.successMsg.classList.remove('hidden');

        const tipoEntrada = document.querySelector('input[name="tipo_entrada"]:checked').value;
        console.log("--- Datos listos para enviar ---");
        console.log("Nombre:", elements.inputNombre.value.trim());
        console.log("Email:", elements.inputEmail.value.trim());
        console.log("Password:", elements.inputPassword.value);
        console.log("Tipo:", tipoEntrada);

        alert('¡Registro Exitoso!');
    };

    const handleOpenRegistration = () => {
        elements.form.classList.remove('hidden');
        elements.successMsg.classList.add('hidden');
        elements.form.reset();
        resetErrors();
    };

    // === Inicialización de Eventos ===
    elements.btnToggleInfo.addEventListener('click', handleToggleVip);
    elements.form.addEventListener('submit', handleSubmit);
    elements.btnNavRegistro.addEventListener('click', handleOpenRegistration);
});
