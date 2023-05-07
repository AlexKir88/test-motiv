
<script>
    import Folder from './Folder.vue';
    import { getGroupList } from '../utils/requestFunction';
    export default {
        data: () => ({
            folders: [],
        }),
        methods: {
        loadDatas() {
            getGroupList(0).then(res => {
                this.folders = res; 
            });
        }
    }
    }
    
</script>
<template>
    
     <v-navigation-drawer  >
        <v-btn color="blue-darken-1" variant="text" @click="loadDatas">
            загрузить 
        </v-btn>
        <v-list  > 
            <v-list-item width="200"  v-for="folder in folders" append-icon="mdi-folder-outline">
                <v-list-item-content>
                    {{ folder.id }}
                        <!-- <Folder dataFolder="folder" :key="folder.id"/>  -->
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

