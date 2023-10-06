<template>
  <q-page>
    <q-card>
      <q-card-section>
        <p class="text-h6">Modelo: {{ telefono.modelo }}</p>
      </q-card-section>
    </q-card>
  </q-page>
  <router-view />
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      telefono: (state) => state.telefono,
    }),
  },
};
</script>
