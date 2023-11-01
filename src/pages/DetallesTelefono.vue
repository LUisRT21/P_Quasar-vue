<template>
  <q-page>
    <div class="gt-sm">
      <div class="row">
        <div class="col">
          <q-card>
            <q-card-section>
              <q-carousel
                swipeable
                animated
                v-model="slide"
                v-model:fullscreen="fullscreen"
                thumbnails
                infinite
              >
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
        </div>
        <div class="col">
          <div class="row q-ma-lg">
            <h4>{{ phone.titulo }}, estado {{ phone.estado }}</h4>
            <div class="row q-mx-lg"></div>
            <spam class="text-h6 text-center">${{ phone.precio }}</spam>
          </div>
          <div class="row">
            <div class="col-5 q-ma-lg">
              <q-btn-toggle
                spread
                color="primary"
                :options="[{ label: 'comprar', value: 'comprar' }]"
              />
              <div class="row q-ma-lg">
                <div class="col">
                  <div class="row">
                    <div>
                      <spam>vendedor:{{ phone.vendedor }}</spam>
                    </div>
                    <div>
                      <spam>telefono:{{ phone.numero }}</spam>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-mb-lg flex-center">
        <div class="col-8">
          <h4 class="text-center">DESCRIPCION</h4>
          <div class="row">
            <div class="col">
              <fieldset style="flex: 1">
                <p>
                  Modelo: {{ phone.modelo }}
                  <br />
                  Precio: {{ phone.precio }}
                  <br />
                  Sistema operativo: {{ phone.os }}
                  <br />
                  Tamaño de pantalla: {{ phone.Tamaño }} pulgadas
                  <br />
                  Almacenamiento: {{ phone.Almacenamiento }} GB
                  <br />
                  RAM: {{ phone.ram }} GB
                </p>
              </fieldset>
            </div>
            <div class="col">
              <fieldset style="flex: 1">
                <p>{{ phone.descripcion }}</p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lt-md">
      <div class="q-pa-md row items-start">
        <q-card class="q-card col-12 col-sm-6 col-md-6">
          <q-card-section>
            <q-carousel
              swipeable
              animated
              v-model="slide"
              v-model:fullscreen="fullscreen"
              thumbnails
              infinite
            >
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

        <div>
          <p class="text-h6 text-weight-bold">
            {{ phone.titulo }}, estado {{ phone.estado }}
          </p>
          <p class="text-h6 text-weight-bold text-center">
            ${{ phone.precio }}
          </p>
          <div class="row">
            <spam class="text-h6">Vendedor: {{ phone.vendedor }}</spam>
          </div>
          <div class="row">
            <spam class="text-h6">Telefono: {{ phone.numero }}</spam>
          </div>
        </div>
        <div style="flex: 1">
          <fieldset>
            <p>
              Modelo: {{ phone.modelo }}
              <br />
              Precio: {{ phone.precio }}
              <br />
              Sistema operativo: {{ phone.os }}
              <br />
              Tamaño de pantalla: {{ phone.Tamaño }} pulgadas
              <br />
              Almacenamiento: {{ phone.Almacenamiento }} GB
              <br />
              RAM: {{ phone.ram }} GB
            </p>
          </fieldset>

          <fieldset>
            <p>
              {{ phone.descripcion }}
            </p>
          </fieldset>
        </div>
        <div
          class="fixed"
          style="
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
          "
        >
          <q-btn
            color="primary"
            label="Inicio"
            class="q-btn-floating q-btn-round"
            @click="Inicio()"
          >
          </q-btn>
          <q-btn
            color="primary"
            label="Comprar"
            class="q-btn-floating q-btn-round"
          >
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
  <router-view />
</template>
<script>
import { ref } from 'vue';
import { db } from 'src/boot/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default {
  methods: {
    Inicio() {
      this.$router.push({
        path: '/',
        component: () => import('pages/IndexPage.vue'),
      });
    },
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
  data() {
    return {
      phone: null,
      modelo: null,
    };
  },
  created() {
    this.modelo = this.$route.params.telefono;
    const anunciosCollection = collection(db, 'anuncios');
    const q = query(anunciosCollection, where('modelo', '==', this.modelo));

    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.phone = doc.data();
          console.log('Documento encontrado:', doc.data());
        });
      })
      .catch((error) => {
        console.error('Error al buscar en Firebase:', error);
      });
  },
};
</script>
