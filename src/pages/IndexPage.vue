<template>
  <q-page class="row items-center justify-evenly accent">
    <div class="gt-sm">
      <q-card class="q-card q-mb-md q-hoverable" v-if="$q.screen.width >= 930">
        <q-card-section>
          <q-card-section>
            <q-form>
              <q-card-section horizontal>
                <q-card-section>
                  <q-input
                    prefix="$"
                    label="Precio:"
                    v-model="precio"
                    outlined
                  />
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
              <div
                col
                text-left
                text-weight-bold
                class="text-subtitle-1 q-pt-lg"
              >
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

      <div class="contenedor">
        <q-card
          v-for="(phone, index) in phonesPaginados"
          :key="index"
          v-ripple
          class="card my-box cursor-pointer q-hoverable"
          @click="VerDetalles(phone.modelo)"
        >
          <span class="q-focus-helper"></span>
          <!-- Imagen de la tarjeta -->
          <q-card-section>
            <q-img
              v-if="phoneImages[index]"
              :src="phoneImages[index]"
              class="q-pa-md"
              style="height: 200px; padding: 10px; overflow: hidden"
            />
          </q-card-section>
          <!-- Contenido de la tarjeta -->
          <q-card-section class="card-content">
            <q-list>
              <q-list-item>
                <q-icon name="phone" />
                <q-label>{{ phone.marca }} {{ phone.modelo }}</q-label>
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
    </div>
    <div class="lt-md">
      <q-card class="q-card q-mb-md q-hoverable" v-if="$q.screen.width >= 930">
        <q-card-section>
          <q-card-section>
            <q-form>
              <q-card-section horizontal>
                <q-card-section>
                  <q-input
                    prefix="$"
                    label="Precio:"
                    v-model="precio"
                    outlined
                  />
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
              <div
                col
                text-left
                text-weight-bold
                class="text-subtitle-1 q-pt-lg"
              >
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
      <div class="contenedor-chi">
        <q-card
          v-for="(phone, index) in phonesPaginados"
          :key="index"
          v-ripple
          class="card-chi my-box cursor-pointer q-hoverable"
          @click="VerDetalles(phone.modelo)"
        >
          <span class="q-focus-helper"></span>
          <!-- Imagen de la tarjeta -->
          <q-card-section>
            <q-img
              v-if="phoneImages[index]"
              :src="phoneImages[index]"
              class="q-pa-md"
              style="height: 200px; padding: 10px; overflow: hidden"
            />
          </q-card-section>
          <!-- Contenido de la tarjeta -->
          <q-card-section class="card-content">
            <q-list>
              <q-list-item>
                <q-icon name="phone" />
                <q-label>{{ phone.marca }} {{ phone.modelo }}</q-label>
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
import { ref, computed, watch, onMounted } from 'vue';
import { db, storage } from 'src/boot/firebase';
import { collection } from 'firebase/firestore';
import { useCollection } from 'vuefire';
import { ref as refStorage, getDownloadURL, listAll } from 'firebase/storage';

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
    const itemsPerPage = 6;
    const PaginaActual = ref(1);
    const anuncios = useCollection(collection(db, 'anuncios'));
    const totalPaginas = computed(() => {
      return Math.ceil(anuncios.value.length / itemsPerPage);
    });
    const phonesPaginados = computed(() => {
      const startIndex = (PaginaActual.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return anuncios.value.slice(startIndex, endIndex);
    });
    const phoneIds = computed(() => {
      return phonesPaginados.value.map((phone) => phone.id);
    });

    const phoneImages = ref([]);

    const obtenerPrimeraImagen = async (phoneId) => {
      if (phoneId) {
        const imageCarpetaRef = refStorage(storage, `anuncios/${phoneId}`);
        try {
          const imagenes = await listAll(imageCarpetaRef);
          if (imagenes.items.length > 0) {
            const firstImageRef = imagenes.items[0];
            const firstImageUrl = await getDownloadURL(firstImageRef);
            return firstImageUrl;
          } else {
            console.error('No se encontraron imágenes en la carpeta.');
            return null;
          }
        } catch (error) {
          console.error('Error al obtener la URL de la imagen:', error);
          return null;
        }
      } else {
        console.error('No se pudo obtener el ID del teléfono.');
        return null;
      }
    };

    const loadImages = async () => {
      const imagePromises = phoneIds.value.map((phoneId) =>
        obtenerPrimeraImagen(phoneId)
      );
      phoneImages.value = await Promise.all(imagePromises);
    };

    onMounted(loadImages);

    watch(phonesPaginados, () => {
      loadImages();
    });

    return {
      single,
      multiple,
      options,
      precio: '',
      hasta: '',
      PaginaActual,
      totalPaginas,
      phonesPaginados,
      anuncios,
      phoneImages,
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
