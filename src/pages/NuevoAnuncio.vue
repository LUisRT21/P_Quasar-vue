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
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-xs">
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
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { MainLayoutScript } from 'src/components/telefonos';

export default {
  setup() {
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

    return {
      group,
      options,
      opcionesGrupo1,
      marca,
      modelo,
      pantalla,
      sistema,
      rom,
      ram,
    };
  },
};
</script>
