<script setup>
   import { computed, inject, ref } from 'vue';
   import CardTasc from './CardTasc.vue';

   const { objectsFromFolder, loadObjects, sortObjectsBy } = inject('objects');
   const { showTaskCard, taskInfo, changeVisibleTask } = inject('taskCard');

   const lastField = ref('');
   const revers = ref(false);

   const sortBy = ( field) => {
      if (field === lastField.value) {
         revers.value = !revers.value;
      } else  revers.value = false;
      sortObjectsBy(field, revers.value)
      lastField.value = field;
   }

</script>
<template>
     <v-table width="75vw"  fixed-header hover class="table"  height="650px" >
       <thead>
         <tr>
            <th class="text-left" @click="() => sortBy('object_id')">
               Номер
            </th>
            <th class="text-left" @click="() => sortBy('state')">
               Состояние
            </th>
            <th class="text-left" @click="() => sortBy('marker')">
               Маркер
            </th>
            <!-- <th class="text-left">
               upper_name
            </th> -->
            <th class="text-left" @click="() => sortBy('task_startdate')">
               Начало
            </th>
            <th class="text-left" @click="() => sortBy('task_enddate')" >
               Конец
            </th>
            <th class="text-left" @click="() => sortBy('header_name')">
               Задача
            </th>
            <th class="text-left" @click="() => sortBy('center_name')">
               Авторы
            </th>
            <th class="text-left" @click="() => sortBy('bottom_name')">
               Ответственный
            </th>
            <th class="text-left" @click="() => sortBy('object_kind')">
               Вид
            </th>
            <th class="text-left" @click="() => sortBy('taskstate')">
               Состояние задачи
            </th>
            <th class="text-left">
               Управление
            </th>
         </tr>
       </thead>
       <tbody>
         <tr
           v-for="item in objectsFromFolder"
           :key="item.object_id"
         >
            <td>{{ item.object_id }}</td>
            <td>{{ item.state }}</td>
            <td>{{ item.marker }}</td>
            <!-- <td>{{ item.upper_name }}</td> -->
            <td>{{ item.task_startdate }}</td>
            <td>{{ item.task_enddate }}</td>
            <td>{{ item.header_name }}</td>
            <td>{{ item.center_name }}</td>
            <td>{{ item.bottom_name }}</td>
            <td>{{ item.object_kind }}</td>
            <td>{{ item.taskstate }}</td>
            <td>
               <v-btn  @click="() => changeVisibleTask(item.object_id)">
                  Открыть
               </v-btn>
            </td>
         </tr>
       </tbody>
     </v-table>
     <CardTasc />
</template>

<style>
   .table {
      position: fixed;
      right: -10px;
      top: 30px;
      margin: 0 0 0 300px;
      padding: 30px 0 0 0 ;
      overflow-y: scroll;
   }
   th , td { 
      max-width: 105px;
      width: 30px;
   }
</style>
