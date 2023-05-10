<script setup>
   import { inject, ref, watch } from 'vue';

   const { idCurrentFolder, objectsFromFolder, sortObjectsBy } = inject('objects');
   const { changeVisibleTask } = inject('taskCard');

   const lastField = ref('');
   const revers = ref(false);
   const prevHead = ref(null);

   //reset arrow
   watch(idCurrentFolder, (count, prevCount) => {
      if (prevHead.value) prevHead.value.id = '';
   })

   const sortBy = (event, field) => {
      if (field === lastField.value) {
         revers.value = !revers.value;
      } else  revers.value = false;
      sortObjectsBy(field, revers.value)
      lastField.value = field;
      //show arrow
      if (prevHead.value) prevHead.value.id = '';
      event.target.id = revers.value? 'arrowDown' : 'arrowUpp';
      prevHead.value = event.target;
   }

</script>
<template>
     <v-table width="75vw" fixed-header  hover class="table"  height="90vh" >
       <thead>
         <tr>
            <th class="text-left" @click="(event) => sortBy(event,'object_id')">
               Номер
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'state')">
               Состояние
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'marker')">
               Маркер
            </th>
            <!-- <th class="text-left" @click="(event) => sortBy(event,'upper_name')">
               upper_name
            </th> -->
            <th class="text-left" @click="(event) => sortBy(event,'task_startdate')">
               Начало
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'task_enddate')" >
               Окончание
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'header_name')">
               Задача
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'center_name')">
               Авторы
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'bottom_name')">
               Ответственный
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'object_kind')">
               Вид
            </th>
            <th class="text-left" @click="(event) => sortBy(event,'taskstate')">
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
</template>
<style>
   #arrowUpp::after{
      content: '\2193';
   }
   #arrowDown::after{
      content:  '\2191';
   }
   .table {
      position: fixed;
      right: -10px;
      top: 30px;
      margin: 0 0 0 300px;
      padding: 30px 0 0 0 ;
      overflow-y: scroll;
   }
   th , td { 
      max-width: 7vw;
      min-width: 7vw;
   }
</style>
