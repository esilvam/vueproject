<template>
    <div>
        <h1>Registro de Usuario</h1>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Nombre" /> 
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>

            <div class="form">
                <label for="correo">Correo:</label>
                <Field v-model="email" type="email" name="correo" id="correo" placeholder="Correo Electrónico" />            
                <ErrorMessage name="correo"></ErrorMessage>    
            </div>

            <div class="form">
                <button type="submit">Registrar</button>
            </div>      
            
        </Form>
        
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegistrarStore } from '../stores/registrarStore';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');

const onSubmit = (values) => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Formulario enviado con los siguientes valores:', values);

};
</script>

<style scoped>
.form {
    margin-bottom: 15px;
}
</style>
