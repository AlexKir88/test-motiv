
<script setup>
    import Folder from './Folder.vue';
    import { getGroupList } from '../utils/requestFunction';
    import { ref, inject, onMounted } from 'vue';
    
    

    const { access, user, giveAccess } = inject('login');
    const { folders, loadFolders } = inject('folders');
    
</script>
<template>
    
     <v-navigation-drawer class="w-25" >
        <Folder  v-if="folders.length"  :mgLeft=0 :objFolder="folder" v-for="folder in folders" :key="folder.id"/>
        <v-spacer v-else>Загрузка...</v-spacer>
    </v-navigation-drawer>
</template>
<style>
    

</style>

