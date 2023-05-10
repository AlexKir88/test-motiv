<script setup>
   import { inject } from 'vue';
   const {  user } = inject('login');
</script>
<template>
   <v-app-bar :title="user">
   </v-app-bar>
</template>