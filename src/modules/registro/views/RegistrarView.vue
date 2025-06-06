<template>
    <div>
        <h1>Registro de Usuario</h1>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre">Nombre:</label>
                <Field type="text" name="nombre" id="nombre" placeholder="Nombre" /> 
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>

            <div class="form">
                <label for="correo">Correo:</label>
                <Field type="email" name="correo" id="correo" placeholder="Correo Electrónico" />            
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

const onSubmit = (values) => {
    console.log('Formulario enviado con los siguientes valores:', values);
    
    // Aquí puedes agregar la lógica para enviar los datos al servidor
};
</script>

<style scoped>
.form {
    margin-bottom: 15px;
}
</style>
