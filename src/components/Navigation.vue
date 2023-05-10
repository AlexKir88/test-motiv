
<script setup>
    import Folder from './Folder.vue';
    import { inject } from 'vue';

    const { folders } = inject('folders');
    
</script>
<template>
     <v-navigation-drawer  permanent  width="24%"  >
        <Folder  v-if="folders.length"  :mgLeft=0 :objFolder="folder" v-for="folder in folders" :key="folder.id"/>
        <v-spacer v-else>Загрузка...</v-spacer>
    </v-navigation-drawer>
</template>

