<script setup>
   import { computed, inject, ref } from 'vue';

   const { objectsFromFolder, loadObjects } = inject('objects');

   const itemsPerPage = ref(5);
   const headers = ref([
      { title: 'Номер', align: 'end', key: 'object_id' },
      { title: 'Состояние', align: 'end', key: 'state' },
      { title: 'Маркер', align: 'end', key: 'marker' },
      { title: 'Начало', align: 'end', key: 'task_startdate' },
      { title: 'Окончание', align: 'end', key: 'task_enddate' },
   ]);



</script>

<template>
   <v-data-table  :headers="headers" :items="objectsFromFolder" item-value="name"
      class="elevation-1"></v-data-table>
</template>

<style>
   .table {
      position: fixed;
      right: -10px;
      top: 30px;
      margin: 0 0 0 300px;
      padding: 30px 0 0 0 ;
   }
</style>
