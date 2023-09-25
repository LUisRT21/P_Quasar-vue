<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <q-card-section>
        <q-icon name="ion-ios-home" />
      </q-card-section>
      <router-view />
      <div class="container">
        <q-card
          v-for="(phone, index) in phones"
          :key="index"
          style="max-width: 100%"
          direction="row"
        >
          <!-- Imagen de la tarjeta -->
          <q-card-section>
            <q-img
              :src="phone.imagenURL"
              :alt="phone.modelo"
              class="q-pa-md"
              border="2px solid black"
            />
          </q-card-section>
          <!-- Contenido de la tarjeta -->
          <q-card-section>
            <p class="text-weight-bold">Precio: ${{ phone.precio }}</p>
            <p>{{ phone.modelo }}</p>
            <!-- Accion de la tarrjeta -->
            <q-btn color="primary" label="Ver detalles" />
            <q-btn color="secondary" icon="ion-cart" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    return { phones: phones };
  },
});
const phones = [
  {
    modelo: 'iPhone 14 Pro Max',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 1299,
    os: 'iOS 16',
    Tamaño: 6.7,
    Almacenamiento: 128,
    ram: 6,
  },
  {
    modelo: 'Samsung Galaxy S23 Ultra',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 1199,
    os: 'Android 13',
    Tamaño: 6.8,
    Almacenamiento: 256,
    ram: 8,
  },
  {
    modelo: 'Google Pixel 7 Pro',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 899,
    os: 'Android 13',
    Tamaño: 6.7,
    Almacenamiento: 128,
    ram: 12,
  },
  {
    modelo: 'OnePlus 9T',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 799,
    os: 'OxygenOS 12',
    Tamaño: 6.55,
    Almacenamiento: 256,
    ram: 8,
  },
  {
    modelo: 'Xiaomi Mi 12',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 899,
    os: 'MIUI 14',
    Tamaño: 6.8,
    Almacenamiento: 128,
    ram: 10,
  },
  {
    modelo: 'Sony Xperia 5 III',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 999,
    os: 'Android 13',
    Tamaño: 6.1,
    Almacenamiento: 128,
    ram: 8,
  },
  {
    modelo: 'LG G9 ThinQ',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 749,
    os: 'Android 12',
    Tamaño: 6.4,
    Almacenamiento: 256,
    ram: 6,
  },
  {
    modelo: 'Huawei P50 Pro',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 1099,
    os: 'HarmonyOS 3.0',
    Tamaño: 6.6,
    Almacenamiento: 512,
    ram: 8,
  },
  {
    modelo: 'Motorola Moto G7',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 249,
    os: 'Android 11',
    Tamaño: 6.2,
    Almacenamiento: 64,
    ram: 4,
  },
  {
    modelo: 'Nokia 9 PureView',
    imagenURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
    precio: 599,
    os: 'Android 10',
    Tamaño: 5.99,
    Almacenamiento: 128,
    ram: 6,
  },
];
</script>
