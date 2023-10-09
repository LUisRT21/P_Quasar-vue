<template>
  <div class="q-pa-md row items-start q-gutter-md row">
    <q-card class="q-card col-12 col-sm-6 col-md-5 col-lg-4">
      <q-card-section>
        <q-img :src="phone.imagen" class="q-pa-md"> </q-img>
        <q-carousel swipeable animated v-model="slide" thumbnails infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </q-card-section>
    </q-card>
    <div class="row">
      <q-list class="caracteristicas-verticales">
        <q-list-item>
          <q-icon name="phone" />
          <q-label>{{ phone.modelo }}</q-label>
        </q-list-item>
        <q-list-item>
          <q-icon name="tv" />
          <q-label>{{ phone.Tamaño }} Pulgadas</q-label>
        </q-list-item>
        <q-list-item>
          <q-icon name="server" />
          <q-label>{{ phone.Almacenamiento }} memoria interna</q-label>
        </q-list-item>
        <q-list-item>
          <q-icon name="memory" />
          <q-label>{{ phone.ram }} memoria ram</q-label>
        </q-list-item>
      </q-list>
    </div>
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
    const phoneIndex = parseInt(this.$route.params.telefono);

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
