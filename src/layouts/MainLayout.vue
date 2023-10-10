<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
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
          />
          <q-toolbar-title>Tienda CellPhone</q-toolbar-title>
          <q-space />
          <q-input
            dark
            dense
            standout
            rounded
            v-model="text"
            input-class="text-left"
            class="q-ml-md"
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

        <q-toolbar class="col-4 bg-secondary text-accent">
          <div class="q-pa-md q-gutter-sm">
            <q-btn color="primary" label="Inicio" />
            <q-btn color="primary" label="Estadísticas" />
          </div>
          <q-space />
          <q-btn
            flat
            round
            dense
            icon="ion-add-circle-outline"
            class="q-mr-sm"
            @click="AñadirAnuncio()"
          />
          <q-btn flat round dense icon="ion-cart">
            <q-badge color="primary" floating>4</q-badge>
          </q-btn>
        </q-toolbar>
      </q-toolbar>
    </q-header>

    <!-- Elementos en la opción para filtrar los telefonos -->
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      scrollable
    >
      <div class="q-pa-md q-gutter-lg">
        <q-toggle v-model="value" color="primary" label="Nuevo" />
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
            ></q-option-group></div
        ></q-card-section>
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
            ></q-option-group></div
        ></q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Pantalla</div>
          <div class="q-pa-lg">
            <q-option-group
              v-model="group2"
              :options="opcionesGrupo3"
              color="secondary"
              type="checkbox"
            ></q-option-group></div
        ></q-card-section>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-main>
      <router-view />
    </q-main>

    <q-footer> </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props) {
    const leftDrawerOpen = ref(false);
    const value = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const group1 = ref([]); //Grupo 1
    const group2 = ref([]); // Grupo 2
    const grupo3 = ref([]); //Grupo 3
    const opcionesGrupo1 = [
      {
        label: 'Samsung',
        value: 'op1',
      },
      {
        label: 'Huawei',
        value: 'op2',
      },
      {
        label: 'Nokia',
        value: 'op3',
      },
      {
        label: 'iPhone',
        value: 'op4',
      },
      {
        label: 'Xiaomi',
        value: 'op5',
      },
    ];

    const opcionesGrupo2 = [
      {
        label: 'Android',
        value: 'op6',
      },
      {
        label: 'iOS',
        value: 'op7',
      },
      {
        label: 'Windows',
        value: 'op8',
      },
    ];

    const opcionesGrupo3 = [
      {
        label: '6.0',
        value: 'op9',
      },
      {
        label: '5.5',
        value: 'op10',
      },
      {
        label: '5',
        value: 'op11',
      },
    ];

    return {
      leftDrawerOpen,
      value,
      toggleLeftDrawer,
      group1, // Incluye el primer grupo
      group2, // Incluye el segundo grupo
      grupo3, // Incluye el tercer grupo
      opcionesGrupo1, // Incluye las opciones del primer grupo
      opcionesGrupo2, // Incluye las opciones del segundo grupo
      opcionesGrupo3, // Incluye las opciones del tercer grupo
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
