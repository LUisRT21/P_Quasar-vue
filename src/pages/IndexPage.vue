<template>
  <q-page class="row items-center justify-evenly accent">
    <q-card class="q-card q-mb-md q-hoverable">
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
      <q-card
        v-for="(phone, index) in phones"
        :key="index"
        v-ripple
        class="q-card q-mb-xs col-12 col-sm-6 col-md-3 col-lg-2 my-box cursor-pointer q-hoverable"
      >
        <span class="q-focus-helper"></span>
        <!-- Imagen de la tarjeta -->
        <q-card-section>
          <q-img :src="phone.imagen" class="q-pa-md">
            <q-list class="caracteristicas-verticales">
              <q-list-item>
                <q-icon name="money" />
                <q-label>${{ phone.precio }}</q-label>
              </q-list-item>
              <q-list-item>
                <q-icon name="phone" />
                <q-label>{{ phone.modelo }}</q-label>
              </q-list-item>
              <q-list-item>
                <q-icon name="tv" />
                <q-label>{{ phone.Tamaño }} Pulgadas</q-label>
              </q-list-item>
              <q-list-item>
                <q-icon name="server" />
                <q-label>{{ phone.Almacenamiento }} memoria interna</q-label>
              </q-list-item>
              <q-list-item>
                <q-icon name="memory" />
                <q-label>{{ phone.ram }} memoria ram</q-label>
              </q-list-item>
              <q-list-item>
                <q-icon name="code" />
                <q-label>{{ phone.os }}</q-label>
              </q-list-item>
            </q-list>
          </q-img>
        </q-card-section>
        <!-- Contenido de la tarjeta -->
        <q-card-section class="card-content">
          <p class="text-weight-bold">Precio: ${{ phone.precio }}</p>
          <p class="q-mb-sm">{{ phone.modelo }}</p>
          <router-link to="/DetallesTelefono">Ver más</router-link>
          <!-- Accion de la tarrjeta -->
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import telefonos from 'src/components/telefonos.ts';
export default {
  data() {
    return {
      precio: '',
      hasta: '',
      dialogOpen: false,
      selectedPhoneIndex: null,
      phones: telefonos.phones,
    };
  },
  methods: {
    openDialog(index) {
      this.selectedPhoneIndex = index;
      this.dialogOpen = true;
    },
  },
};
</script>
