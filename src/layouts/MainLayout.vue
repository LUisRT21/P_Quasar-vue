<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-btn flat icon="home" to="/" />
        <q-toolbar-title>Tienda CellPhone</q-toolbar-title>
      </q-toolbar>
    </q-header>
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
