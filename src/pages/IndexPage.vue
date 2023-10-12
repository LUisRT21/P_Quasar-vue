<template>
  <q-page class="row items-center justify-evenly accent">
    <q-card class="q-card q-mb-md q-hoverable" v-if="$q.screen.width >= 930">
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

    <div class="q-pa-md row items-start q-gutter-md justify-center">
      <q-card class="q-card q-mb-md q-hoverable" v-if="$q.screen.width < 930">
        <q-card-section horizontal>
          <q-card-section>
            <div col text-left text-weight-bold class="text-subtitle-1 q-pt-lg">
              Ordenar por:
            </div>
          </q-card-section>
          <q-card-section>
            <q-select
              filled
              v-model="multiple"
              multiple
              :options="options"
              style="width: 100%"
            />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md row items-start q-gutter-md justify-center">
      <q-card
        v-for="(phone, index) in phones"
        :key="index"
        v-ripple
        class="q-card q-mb-xs col-12 col-sm-6 col-md-3 col-lg-2 my-box cursor-pointer q-hoverable"
        @click="VerDetalles(index)"
      >
        <span class="q-focus-helper"></span>
        <!-- Imagen de la tarjeta -->
        <q-card-section>
          <q-img :src="phone.imagen[0]" class="q-pa-md"> </q-img>
        </q-card-section>
        <!-- Contenido de la tarjeta -->
        <q-card-section class="card-content">
          <q-list class="caracteristicas-verticales">
            <q-list-item>
              <q-icon name="phone" />
              <q-label>{{ phone.modelo }}</q-label>
            </q-list-item>
          </q-list>
          <p class="text-h6 text-weight-bold">${{ phone.precio }}</p>
          <!-- Accion de la tarrjeta -->
          <q-card-section>
            <q-btn
              color="primary"
              label="Añadir al carrito"
              class="q-ma-xs"
            ></q-btn>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import telefonos from 'src/components/telefonos.ts';
import { ref } from 'vue';

export default {
  methods: {
    VerDetalles(indice) {
      // Navegar a la página de detalles con el modelo como parámetro
      this.$router.push(`/DetallesTelefono/${indice}`);
    },
  },
  setup() {
    const single = ref(null);
    const multiple = ref(null);
    const options = ['Precio', 'Fecha'];

    return {
      single,
      multiple,
      options,
      precio: '',
      hasta: '',
      phones: telefonos.phones,
    };
  },
};
</script>
