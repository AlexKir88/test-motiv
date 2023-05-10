<script setup>
  import { ref, provide } from 'vue';
  import { getGroupList, getObjectList, getTasksSystemInfo } from './utils/requestFunction';
  import Application from './components/Application.vue'
  import Navigation from './components/Navigation.vue';
  import MainArea from './components/MainArea.vue';
  import Auth from './components/Auth.vue';
  import CardTask from './components/CardTask.vue';
  
  //Athentification
  const access = ref(false);
  const user = ref('');
  const giveAccess = (userName) => {
    access.value = true;
    user.value = userName
  }
  provide('login', {
    access,
    user,
    giveAccess,
  });
  //folders level 1
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
  //objects from current folder
  const objectsFromFolder = ref([]);
  const idCurrentFolder = ref();
  const sortObjectsBy = (property, revers) => {
    let negative = revers ? -1 : 1;
    objectsFromFolder.value.sort((a, b) => {
      let collator = new Intl.Collator('ru', {
        numeric: true,
      })
      return negative * collator.compare(a[property], b[property]); 
    })
  }
  const loadObjects = (id) => {
    getObjectList(id)
        .then(res => {
          objectsFromFolder.value = res
        })
    idCurrentFolder.value = id;
  }
  provide('objects', {
    idCurrentFolder,
    objectsFromFolder,
    loadObjects,
    sortObjectsBy,
  });
  //Chosen object by button 'Open'
  const showTaskCard = ref(false);
  const taskInfo = ref({});
  const changeVisibleTask = (id) => {
    if (id) getTasksSystemInfo(id).then(res => {
      taskInfo.value = res;
      showTaskCard.value = true;
      return
    });
    showTaskCard.value = false;
  };
  provide('taskCard', {
    showTaskCard,
    taskInfo,
    changeVisibleTask,
  });

</script>
<template>
  <v-card>
    <v-layout width="100%">
        <Auth />
        <CardTask />
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
