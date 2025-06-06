<template>
  <h1>Hola, bienvenido a Vue</h1>
  <p>Contador: {{ contador }}</p>

  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
  <button @click="resetear">Resetear</button>  

</template>

<script setup>
import { ref } from 'vue';

const contador = ref(0);

function incrementar() {
  contador.value++;
}
function decrementar() {
  contador.value--;
}
function resetear() {
  contador.value = 0;
}


</script>

<style scoped>
p {
  font-size: 20px;
  color: red;
}

</style>
