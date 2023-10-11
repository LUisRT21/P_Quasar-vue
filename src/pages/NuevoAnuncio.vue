<template>
  <q-layout view="hHh lpR fFf" class="bg-accent">
    <q-header elevated>
      <q-toolbar dark class="bg-primary text-white">
        <div class="col text-center text-weight-bold">
          <q-toolbar-title>NUEVO ANUNCIO</q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div
        class="col-12 col-sm-6 col-md-12 col-lg-6"
        v-if="$q.screen.width < 768"
      >
        <q-card>
          <q-card-section>
            <div class="q-pa-xs q-ma-xs">
              <q-carousel
                swipeable
                animated
                v-model="slide"
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
            </div>
          </q-card-section>
        </q-card>
        <div class="q-pa-md">
          <q-btn color="primary" icon="ion-add-circle" label="Agregar foto" />
        </div>
      </div>

      <div class="q-pa-md row items-start q-gutter-md justify-evenly">
        <q-card class="my-card col-12 col-sm-6 col-md-10 col-lg-5">
          <q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-md">
                Estado:
              </div>
              <q-card-section>
                <q-option-group
                  v-model="group"
                  :options="options"
                  color="secondary"
                  inline
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Marca:
              </div>
              <q-card-section>
                <q-input
                  v-model="marca"
                  standout="bg-primary text-white"
                  class="q-pl-md"
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Modelo:
              </div>
              <q-card-section>
                <q-input
                  v-model="modelo"
                  standout="bg-primary text-white"
                  class="q-pl-sm"
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Pantalla:
              </div>
              <q-card-section>
                <q-input
                  v-model="pantalla"
                  type="number"
                  standout="bg-primary text-white"
                />
              </q-card-section>
              <div
                col
                text-left
                text-weight-bold
                class="text-subtitle1 q-pt-lg"
              >
                Pulgadas
              </div>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Sistema:
              </div>
              <q-card-section>
                <q-select
                  v-model="sistema"
                  standout="bg-primary text-white"
                  :options="opcionesGrupo1"
                  class="q-pl-xs"
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Rom
              </div>
              <q-card-section>
                <q-input
                  v-model="rom"
                  type="number"
                  standout="bg-primary text-white"
                  class="q-pl-xl"
                  suffix="GB"
                />
              </q-card-section>
              <div
                col
                text-left
                text-weight-bold
                class="text-subtitle1 q-pt-lg"
              >
                Almacenamiento interno
              </div>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Ram
              </div>
              <q-card-section>
                <q-input
                  v-model="aom"
                  type="number"
                  standout="bg-primary text-white"
                  class="q-pl-xl"
                  suffix="GB"
                />
              </q-card-section>
            </q-card-section>
          </q-card-section>
        </q-card>

        <!-- Puedes hacer esta sección una función y después solo la invoco?-->
        <div col text-left text-weight-bold class="entradas text-h6">
          Título breve del anuncio
          <q-input outlined bg-color="white primary" v-model="titulo" />
          Vendedor:
          <q-input outlined bg-color="white primary" v-model="vendedor" />
          Teléfono:
          <q-input outlined bg-color="white primary" v-model="telefono" />
          DESCRIPCIÓN
          <q-input
            v-model="textareaModel"
            filled
            bg-color="white"
            type="textarea"
            color="primary"
            :shadow-text="textareaShadowText"
            @keydown="processTextareaFill"
            @focus="processTextareaFill"
          />
          Precio:
          <q-input
            v-model="precio"
            type="number"
            outlined
            bg-color="white primary"
            prefix="$"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" icon="cancel" label="Cancelar" />
            <q-btn color="primary" icon="ion-save" label="Guardar" />
          </div>
        </div>

        <q-card
          class="my-card col-12 col-md-12 col-lg-6"
          flat
          bordered
          v-if="$q.screen.width >= 768"
        >
          <q-card-section horizontal>
            <q-card-section>
              <q-card-section
                class="q-col-xs-12 q-col-sm-6 q-col-md-12 q-col-lg-6 q-mt-xl"
              >
                <q-card-section>
                  <q-btn
                    push
                    round
                    color="primary"
                    icon="add"
                    class="col-xs-2 col-sm-2 col-md-1 col-lg-1"
                  />
                </q-card-section>
                <q-card-section>
                  <q-btn
                    push
                    round
                    color="primary"
                    icon="remove"
                    class="col-xs-2 col-sm-2 col-md-1 col-lg-1"
                  />
                </q-card-section>
              </q-card-section>
            </q-card-section>
            <q-card-section>
              <div class="q-pa-md">
                <q-markup-table
                  :separator="separator"
                  flat
                  bordered
                  class="q-col-md-4 q-col-lg-6"
                >
                  <thead>
                    <tr>
                      <q-item>
                        <q-item-section>
                          <th class="text-left">N</th>
                        </q-item-section>
                        <q-item-section>
                          <th class="text-right">Tamaño</th>
                        </q-item-section>
                        <q-item-section>
                          <th class="text-right">Tipo</th>
                        </q-item-section>
                      </q-item>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <q-item clickable v-ripple>
                        <q-item-section>
                          <td class="text-left">1</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">159</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">6</td>
                        </q-item-section>
                      </q-item>
                    </tr>
                    <tr>
                      <q-item clickable v-ripple>
                        <q-item-section>
                          <td class="text-left">2</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">237</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">9</td>
                        </q-item-section>
                      </q-item>
                    </tr>
                    <tr>
                      <q-item clickable v-ripple>
                        <q-item-section>
                          <td class="text-left">3</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">262</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">16</td>
                        </q-item-section>
                      </q-item>
                    </tr>
                    <tr>
                      <q-item clickable v-ripple>
                        <q-item-section>
                          <td class="text-left">4</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">305</td>
                        </q-item-section>
                        <q-item-section>
                          <td class="text-right">3.7</td>
                        </q-item-section>
                      </q-item>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
            </q-card-section>
            <div class="col-5 q-my-lg q-mr-md q-mt-xl">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { MainLayoutScript } from 'src/components/telefonos';

export default {
  setup() {
    const slide = ref(1);
    const group = ref();
    const options = [
      {
        label: 'Nuevo',
        value: 'op1',
      },
      {
        label: 'Usado',
        value: 'op2',
      },
    ];

    const { opcionesGrupo1 } = MainLayoutScript();
    const marca = ref('');
    const modelo = ref('');
    const pantalla = ref('');
    const sistema = ref('');
    const rom = ref('');
    const ram = ref('');
    const separator = ref('None');

    // Variables para cada campo de entrada
    const titulo = ref('');
    const vendedor = ref('');
    const telefono = ref('');
    const precio = ref('');

    const textareaFillCancelled = ref(false);
    const textareaModel = ref('');
    const textareaShadowText = ref('');

    const processTextareaFill = (e) => {
      if (e === void 0) {
        return;
      }

      if (e.keyCode === 27) {
        if (textareaFillCancelled.value !== true) {
          textareaFillCancelled.value = true;
        }
      } else if (e.keyCode === 9) {
        if (
          textareaFillCancelled.value !== true &&
          textareaShadowText.value.length > 0
        ) {
          stopAndPrevent(e);
          textareaModel.value =
            (typeof textareaModel.value === 'string'
              ? textareaModel.value
              : '') + textareaShadowText.value;
        }
      } else if (textareaFillCancelled.value === true) {
        textareaFillCancelled.value = false;
      }
    };

    return {
      slide,
      group,
      options,
      opcionesGrupo1,
      marca,
      modelo,
      pantalla,
      sistema,
      rom,
      ram,
      separator,
      titulo,
      vendedor,
      telefono,
      precio,
      textareaFillCancelled,
      textareaModel,
      textareaShadowText,
      processTextareaFill,
    };
  },
};
</script>
