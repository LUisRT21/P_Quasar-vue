<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="q-card col-12 col-sm-6 col-md-5 col-lg-3">
        <q-card-section>
          <q-carousel
            swipeable
            animated
            v-model="slide"
            v-model:fullscreen="fullscreen"
            thumbnails
            infinite
          >
            <q-carousel-slide :name="1" :img-src="phone.imagen[0]" />
            <q-carousel-slide :name="2" :img-src="phone.imagen[1]" />
            <q-carousel-slide :name="3" :img-src="phone.imagen[2]" />
            <q-carousel-slide :name="4" :img-src="phone.imagen[3]" />
          </q-carousel>
        </q-card-section>
      </q-card>
      <div class="row">
        <div class="col-12">
          <q-list class="col-12">
            <q-list-item>
              <q-icon name="phone" />
              <q-label>{{ phone.modelo }},</q-label>
            </q-list-item>
            <q-list-item>
              <q-icon name="tv" />
              <q-label>{{ phone.Tamaño }} Pulgadas,</q-label>
            </q-list-item>
            <q-list-item>
              <q-icon name="server" />
              <q-label>{{ phone.Almacenamiento }} memoria interna,</q-label>
            </q-list-item>
            <q-list-item>
              <q-icon name="memory" />
              <q-label>{{ phone.ram }} memoria ram,</q-label>
            </q-list-item>
          </q-list>
        </div>
        <div class="col-12">
          <p class="text-h6 text-weight-bold">${{ phone.precio }}</p>
          <q-btn color="primary" label="Comprar" class="justify-center q-ma-xs">
          </q-btn>
          <q-card class="q-ma-md" style="width: 100%; height: 50px">
            <q-card-section>
              <p>{{ phone.vendedor }},{{ phone.numero }}</p>
              <p></p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
  <router-view />
</template>

<script>
import telefonos from 'src/components/telefonos.ts';
import { ref } from 'vue';
export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
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
