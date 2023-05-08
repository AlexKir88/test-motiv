<script setup>
  import {computed, ref, provide } from 'vue';
  import { getGroupList, getObjectList } from './utils/requestFunction';
  import Application from './components/Application.vue'
  import Navigation from './components/Navigation.vue';
  import MainArea from './components/MainArea.vue';
  import Auth from './components/Auth.vue';

  const idFolder = ref(0);
  const changeFolder = (newId) => idFolder.value = newId;
  provide('currentFolder', {
    idFolder,
    changeFolder,
  });

  const access = ref(false);
  const user = ref('nemo');

  const giveAccess = (userName) => {
    access.value = true;
    user.value = userName
  }
    
  provide('login', {
    access,
    user,
    giveAccess,
  });

  const folders = ref([])
  const loadFolders = () => {
    getGroupList(0).then(res => {
      folders.value = res;
    });
  };

  provide('folders', {
    folders,
    loadFolders,
  });

  const objectsFromFolder = ref([])
  const loadObjects = (id) => {
  getObjectList(id)
      .then(res => {
        objectsFromFolder.value = res
      })
  }
  provide('objects', {
    objectsFromFolder,
    loadObjects,
  });

  



</script>

<template>
  <v-card>
      <v-layout width="100%">
        <Auth />
        <Application />
        <Navigation />
        <MainArea />
      </v-layout>
    </v-card>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
