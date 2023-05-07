<script setup>
import {computed, ref } from 'vue';
import Application from './components/Application.vue'
import Navigation from './components/Navigation.vue';
import MainArea from './components/MainArea.vue';
import Auth from './components/Auth.vue';



</script>

<template>
  <v-card>
      <v-layout>
        <Auth />
        <Application />
        <Navigation />
        <MainArea />
      </v-layout>
    </v-card>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
