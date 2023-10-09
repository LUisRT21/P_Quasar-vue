<template>
  <div>
    <p>Modelo: {{ phone.modelo }}</p>
    <p>Precio: {{ phone.precio }}</p>
    <p>Sistema operativo: {{ phone.os }}</p>
    <p>Tamaño de la pantalla: {{ phone.Tamaño }}</p>
    <p>Capacidad de almacenamiento: {{ phone.Almacenamiento }}</p>
    <p>Cantidad de RAM: {{ phone.ram }}</p>
  </div>
</template>

<script>
import telefonos from 'src/components/telefonos.ts';

export default {
  data() {
    return {
      phone: null, // Agregar el objeto phone
    };
  },
  created() {
    // Obtener el índice del teléfono de la URL
    const phoneIndex = parseInt(this.$route.params.index);

    // Verificar si el índice es válido
    if (
      !isNaN(phoneIndex) &&
      phoneIndex >= 0 &&
      phoneIndex < telefonos.phones.length
    ) {
      // Buscar el teléfono correspondiente en el arreglo phones
      this.phone = telefonos.phones[phoneIndex];
    } else {
      // Manejar el caso en el que el índice no sea válido
      console.error(`Índice de teléfono inválido: ${phoneIndex}`);
    }
  },
};
</script>
