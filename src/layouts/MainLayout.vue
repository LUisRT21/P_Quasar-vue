<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar
          class="col-8"
          :class="$q.dark.isActive ? 'primary text-accent' : 'secondary'"
        >
          <q-btn
            dense
            flat
            round
            icon="ion-md-menu"
            @click="toggleLeftDrawer"
            v-if="$q.screen.width >= 900"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              square
              color="primary"
              icon="filter_alt"
              @click="toggleLeftDrawer"
              v-if="$q.screen.width < 900"
            />
          </div>
          <q-toolbar-title v-if="$q.screen.width >= 800"
            >Tienda CellPhone</q-toolbar-title
          >
          <q-space />
          <q-input
            dark
            dense
            standout
            rounded
            v-model="text"
            input-class="text-left"
            class="q-ml-md"
            style="width: 50%"
          >
            <template v-slot:prepend>
              <q-icon v-if="text === ''" name="search" />
              <q-icon
                v-else
                name="ion-search"
                class="cursor-pointer"
                @click="text = ''"
              />
            </template>
          </q-input>
        </q-toolbar>

        <q-toolbar class="col-4">
          <div class="q-pa-md q-gutter-sm" v-if="$q.screen.width >= 900">
            <q-btn
              class="glossy"
              push
              color="primary"
              @click="handleButtonClick"
            >
              <span v-if="$q.screen.width >= 1070">Inicio</span>
              <q-icon v-else name="home" />
            </q-btn>
            <q-btn
              class="glossy"
              push
              color="primary"
              @click="handleButtonClick"
            >
              <span v-if="$q.screen.width >= 1070">Estadísticas</span>
              <q-icon v-else name="insert_chart_outlined" />
            </q-btn>
          </div>
          <q-space />
          <q-btn
            flat
            round
            dense
            icon="ion-add-circle-outline"
            class="q-mr-sm"
            @click="AñadirAnuncio()"
            v-if="$q.screen.width >= 900"
          />
          <q-btn flat round dense icon="ion-cart" v-if="$q.screen.width >= 900">
            <q-badge color="primary" floating>4</q-badge>
          </q-btn>
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              square
              color="primary"
              icon="ion-md-menu"
              @click="toggleRightDrawer"
              v-if="$q.screen.width < 900"
            />
          </div>
        </q-toolbar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <scroll-area class="fit">
        <div class="q-pa-md q-gutter-lg">
          <q-toggle
            v-model="value"
            color="primary"
            label="Nuevo"
            @input="handleOptionSelected('Nuevo', value)"
          />
        </div>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Marca</div>
            <div class="q-pa-lg">
              <q-option-group
                v-model="group1"
                :options="opcionesGrupo1"
                color="secondary"
                type="checkbox"
                @input="handleOptionSelected('Marca', group1)"
              ></q-option-group>
            </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Sistema</div>
            <div class="q-pa-lg">
              <q-option-group
                v-model="group2"
                :options="opcionesGrupo2"
                color="primary"
                type="checkbox"
                @input="handleOptionSelected('Sistema', group2)"
              ></q-option-group>
            </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Pantalla</div>
            <div class="q-pa-lg">
              <q-option-group
                v-model="grupo3"
                :options="opcionesGrupo3"
                color="secondary"
                type="checkbox"
                @input="handleOptionSelected('Pantalla', grupo3)"
              ></q-option-group>
            </div>
          </q-card-section>
        </q-card>
      </scroll-area>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-list dense padding class="rounded-borders">
        <q-item clickable v-ripple>
          <q-item-section style="font-size: 20px" @click="AñadirAnuncio()">
            Nuevo Anuncio
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section style="font-size: 20px"> Carrito </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section style="font-size: 20px">
            Estadísticas
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { MainLayoutScript } from 'src/components/telefonos.ts';

export default {
  setup() {
    const value = ref(false);
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const group1 = ref([]); // Grupo 1
    const group2 = ref([]); // Grupo 2
    const grupo3 = ref([]); // Grupo 3
    const { opcionesGrupo1, opcionesGrupo2, opcionesGrupo3 } =
      MainLayoutScript();

    return {
      value,
      group1, // Incluye el primer grupo
      group2, // Incluye el segundo grupo
      grupo3, // Incluye el tercer grupo
      opcionesGrupo1, // Incluye las opciones del primer grupo
      opcionesGrupo2, // Incluye las opciones del segundo grupo
      opcionesGrupo3, // Incluye las opciones del tercer grupo
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  methods: {
    AñadirAnuncio() {
      this.$router.push({
        path: 'NuevoAnuncio',
        component: () => import('pages/NuevoAnuncio.vue'),
      });
    },
  },
};
</script>
