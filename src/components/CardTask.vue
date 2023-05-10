<script setup>
    import { inject } from 'vue';

    const { showTaskCard, taskInfo, changeVisibleTask } = inject('taskCard');
</script>
<template>
    <v-row justify="center">
        <v-dialog v-model="showTaskCard" fullscreen :scrim="true" transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="grey">
                    <v-spacer></v-spacer>
                        <v-btn  icon dark @click="() => changeVisibleTask()">
                             <v-icon>mdi-close</v-icon>
                        </v-btn>
                </v-toolbar>
                <v-list lines="two" subheader>
                    <v-list-item title="Название задачи"
                        :subtitle="taskInfo?.taskname"></v-list-item>
                    <v-list-item title="Описание"
                        :subtitle="taskInfo?.description"></v-list-item>
                    <v-list-item title="Начало"
                        :subtitle="taskInfo?.startdate"></v-list-item>
                    <v-list-item title="Окончание"
                        :subtitle="taskInfo?.enddate">
                        </v-list-item>
                    <v-list-item>
                        <v-btn variant="text" @click="() => changeVisibleTask()" >
                            Закрыть
                        </v-btn>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list lines="two" subheader>
                </v-list>
                
            </v-card>
        </v-dialog>
    </v-row>
</template>
<style>
    .dialog-bottom-transition-enter-active,
    .dialog-bottom-transition-leave-active {
        transition: transform .2s ease-in-out;
    }
</style>

