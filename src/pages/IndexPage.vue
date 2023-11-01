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
        v-for="(phone, index) in phonesPaginados"
        :key="index"
        v-ripple
        class="q-card q-mb-xs col-12 col-sm-6 col-md-3 col-lg-2 my-box cursor-pointer q-hoverable"
        @click="VerDetalles(phone.modelo)"
      >
        <span class="q-focus-helper"></span>
        <!-- Imagen de la tarjeta -->
        <q-card-section>
          <q-img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            class="q-pa-md"
            style="height: 200px; padding: 10px; overflow: hidden"
          >
          </q-img>
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
    <q-pagination
      v-model="PaginaActual"
      :min="1"
      :max="totalPaginas"
      @input="cambiarPagina"
      class="paginado"
    />
  </q-page>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import { ref, computed } from 'vue';
import telefonos from 'src/components/telefonos.ts';
import { db } from 'src/boot/firebase';
import { collection } from 'firebase/firestore';
import { useCollection } from 'vuefire';
export default {
  methods: {
    VerDetalles(indice) {
      this.$router.push(`/DetallesTelefono/${indice}`);
    },
    cambiarPagina(pagina) {
      console.log('Página actual:', pagina);
      this.PaginaActual = pagina;
    },
  },
  setup() {
    const single = ref(null);
    const multiple = ref(null);
    const options = ['Precio', 'Fecha'];
    const itemsPorPagina = 6; // Cambia esto al número deseado de elementos por página
    const PaginaActual = ref(1);

    const anuncios = useCollection(collection(db, 'anuncios'));

    const totalPaginas = computed(() => {
      return Math.ceil(anuncios.value.length / itemsPorPagina);
    });

    const phonesPaginados = computed(() => {
      const startIndex = (PaginaActual.value - 1) * itemsPorPagina;
      const endIndex = startIndex + itemsPorPagina;
      return anuncios.value.slice(startIndex, endIndex);
    });

    return {
      single,
      multiple,
      options,
      precio: '',
      hasta: '',
      phones: telefonos.phones,
      PaginaActual,
      totalPaginas,
      phonesPaginados,
      anuncios,
    };
  },
};
</script>
<style>
.paginado {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #ffbdff;
  border-radius: 10%;
}
</style>
