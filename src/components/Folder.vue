<script setup>
    import { getGroupList } from '../utils/requestFunction';
    import { ref, inject } from 'vue'
    defineProps({
        objFolder: Object,
        mgLeft: Number,
    })
    const folders = ref([]);
    const showChild = ref(false);

    const { loadObjects } = inject('objects');
    
    const getChild = (id) => {
        if(!folders.value.length){
            getGroupList(id).then(res => {
                folders.value = res;
            });
        }
        showChild.value = !showChild.value;
        loadObjects(id);
    }
    const colorFolder = (objFolder) => {
        if (objFolder.self_news){
            return 'red'
        };
        if (objFolder.self_updates) {
            return 'yellow'
        };
        return 'blue'
    };

</script>
<template>
    <v-card 
        width="100%"
        class="card" 
        height="20px" 
        v-bind:style='{paddingLeft: mgLeft + "vw"}' 
        @click="()=>getChild(objFolder.id)">
        <v-icon  v-if="!showChild" :color=" objFolder.has_children > 0 ? 'black': 'white'" icon="mdi-menu-right" ></v-icon>
        <v-icon  v-else :color="objFolder.has_children > 0 ? 'black' : 'white'" icon="mdi-menu-down" ></v-icon>
        <v-icon icon="mdi-folder" :color="colorFolder(objFolder)"></v-icon>
        {{objFolder.name + '    ' + "(" + (objFolder.self_totals || 0) + '/'+ (objFolder.self_news || 0) + '/' + (objFolder.self_updates || 0)+")" }}
    </v-card>
    <Folder v-if="showChild"  :mgLeft="mgLeft + 2" :objFolder="folder" v-for="folder in folders" :key="folder.id"/>
    <v-spacer v-else></v-spacer>
</template>
<style>
    .card {
        font-size: 0.8rem;
        text-align: start;
    }
</style>
