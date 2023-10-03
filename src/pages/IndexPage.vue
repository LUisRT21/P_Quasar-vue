<template>
  <q-page class="row items-center justify-evenly accent">
    <q-card>
      <q-card-section>
        <q-card-section>
          <q-form>
            <q-card-section horizontal>
              <q-card-section>
                <q-input prefix="$" label="Precio:" v-model="precio" outlined />
              </q-card-section>
              <q-card-section>
                <q-input prefix="$" label="hasta:" v-model="hasta" outlined />
              </q-card-section>
              <q-card-section horizontal>
                <q-card-section>
                  <div class="text-h6">Ordenar por:</div>
                </q-card-section>
                <q-card-section>
                  <div class="q-gutter-sm">
                    <q-btn color="primary">
                      <q-icon left size="2em" name="ion-arrow-up" />
                      <div>Precio</div>
                    </q-btn>
                    <q-btn color="primary" label="Fecha" />
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card-section>
          </q-form>
        </q-card-section>
      </q-card-section>
    </q-card>
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="container">
        <q-card
          v-for="(phone, index) in phones"
          :key="index"
          class="card hover-grow"
          @click="openDialog(index)"
        >
          <!-- Imagen de la tarjeta -->
          <q-card-section>
            <q-img :src="phone.imagen" class="q-pa-md" />
          </q-card-section>
          <!-- Contenido de la tarjeta -->
          <q-card-section class="card-content">
            <p class="text-weight-bold">Precio: ${{ phone.precio }}</p>
            <p class="q-mb-sm">{{ phone.modelo }}</p>
            <!-- Accion de la tarrjeta -->
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="dialogOpen">
      <q-card class="informacion-card">
        <q-card-actions>
          <div class="q-btn-group">
            <q-btn
              class="boton-cerrar"
              color="primary"
              @click="dialogOpen = false"
            >
              <q-icon items-center size="2em" name="ion-close" />
            </q-btn>

            <q-btn
              class="boton-carrito"
              color="primary"
              @click="agregarAlCarrito()"
            >
              <q-icon name="ion-cart" />
            </q-btn>
          </div>
        </q-card-actions>
        <q-card-section>
          <template v-if="selectedPhoneIndex !== null">
            <div>
              <q-img
                :src="phones[selectedPhoneIndex].imagen"
                class="card-extra"
                flex="col"
              >
                <q-list class="caracteristicas-verticales">
                  <q-list-item>
                    <q-icon name="money" />
                    <q-label>${{ phones[selectedPhoneIndex].precio }}</q-label>
                  </q-list-item>
                  <q-list-item>
                    <q-icon name="phone" />
                    <q-label>{{ phones[selectedPhoneIndex].modelo }}</q-label>
                  </q-list-item>
                  <q-list-item>
                    <q-icon name="tv" />
                    <q-label
                      >{{ phones[selectedPhoneIndex].Tamaño }} Pulgadas</q-label
                    >
                  </q-list-item>
                  <q-list-item>
                    <q-icon name="server" />
                    <q-label
                      >{{ phones[selectedPhoneIndex].Almacenamiento }} memoria
                      interna</q-label
                    >
                  </q-list-item>
                  <q-list-item>
                    <q-icon name="memory" />
                    <q-label
                      >{{ phones[selectedPhoneIndex].ram }} memoria ram</q-label
                    >
                  </q-list-item>
                  <q-list-item>
                    <q-icon name="code" />
                    <q-label>{{ phones[selectedPhoneIndex].os }}</q-label>
                  </q-list-item>
                </q-list>
              </q-img>
            </div>
          </template>
        </q-card-section>
      </q-card>
    </q-dialog>

    <router-view />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      precio: '',
      hasta: '',
      phones: [
        {
          modelo: 'iPhone 14 Pro Max',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 1299,
          os: 'iOS 16',
          Tamaño: 6.7,
          Almacenamiento: 128,
          ram: 6,
        },
        {
          modelo: 'Samsung Galaxy S23 Ultra',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 1199,
          os: 'Android 13',
          Tamaño: 6.8,
          Almacenamiento: 256,
          ram: 8,
        },
        {
          modelo: 'Google Pixel 7 Pro',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 899,
          os: 'Android 13',
          Tamaño: 6.7,
          Almacenamiento: 128,
          ram: 12,
        },
        {
          modelo: 'OnePlus 9T',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 799,
          os: 'OxygenOS 12',
          Tamaño: 6.55,
          Almacenamiento: 256,
          ram: 8,
        },
        {
          modelo: 'Xiaomi Mi 12',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 899,
          os: 'MIUI 14',
          Tamaño: 6.8,
          Almacenamiento: 128,
          ram: 10,
        },
        {
          modelo: 'Sony Xperia 5 III',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 999,
          os: 'Android 13',
          Tamaño: 6.1,
          Almacenamiento: 128,
          ram: 8,
        },
        {
          modelo: 'LG G9 ThinQ',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 749,
          os: 'Android 12',
          Tamaño: 6.4,
          Almacenamiento: 256,
          ram: 6,
        },
        {
          modelo: 'Huawei P50 Pro',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 1099,
          os: 'HarmonyOS 3.0',
          Tamaño: 6.6,
          Almacenamiento: 512,
          ram: 8,
        },
        {
          modelo: 'Motorola Moto G7',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 249,
          os: 'Android 11',
          Tamaño: 6.2,
          Almacenamiento: 64,
          ram: 4,
        },
        {
          modelo: 'Nokia 9 PureView',
          imagen: 'https://cdn.quasar.dev/img/parallax2.jpg',
          precio: 599,
          os: 'Android 10',
          Tamaño: 5.99,
          Almacenamiento: 128,
          ram: 6,
        },
      ],
      dialogOpen: false,
      selectedPhoneIndex: null,
    };
  },
  methods: {
    openDialog(index) {
      this.selectedPhoneIndex = index;
      this.dialogOpen = true;
    },
  },
};
</script>
