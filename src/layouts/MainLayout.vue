<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="ion-md-menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Tienda CellPhone</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <div class="q-pa-md q-gutter-lg">
        <q-toggle v-model="value" color="green" label="Nuevo" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-main>
      <router-view />
    </q-main>

    <q-footer>
      <q-toolbar>
        <q-btn flat icon="info" to="/about" />
        <q-btn flat icon="contact" to="/contact" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props) {
    const leftDrawerOpen = ref(false);
    const value = ref(true);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      value,
      toggleLeftDrawer,
    };
  },
};
</script>
