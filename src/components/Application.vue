<script setup>
   import { inject } from 'vue';
   const { access, user, giveAccess } = inject('login');
</script>

<template>
   <v-app-bar :title="user">
   </v-app-bar>

</template>