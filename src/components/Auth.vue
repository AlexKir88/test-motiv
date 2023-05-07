<script>
import { login } from '../utils/requestFunction';
export default {
    data: () => ({
        dialog: true,
        log: 'admin',
        pass: '123456',
        dialog2: false,
    }),
    methods: {
        checkLogin() {
            login(this.log, this.pass).then(res => {
                res ? this.dialog = !res : this.dialog2 = true
            });
        }
    }
}
</script>

<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" width="400px">
                <v-card>
                    <v-card-title>
                        Профиль
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <ErrorLogin />
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field label="логин*" required v-model="log" clearable></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="пароль*" type="password" required v-model="pass"
                                        clearable></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*обязательные поля</small>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="checkLogin">
                                Отправить
                            </v-btn>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialog2" width="auto">
                <v-card>
                    <v-card-title>
                        Не верно введен логин или пароль
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog2 = false">
                            Закрыть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>