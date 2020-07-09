<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-title>
                                <v-btn to="/account/register" color="info">Signup</v-btn>
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form @submit.prevent="handleSubmit">
                                <v-text-field prepend-icon="person" v-model="email" name="email" label="Email" type="text"></v-text-field>
                                <v-text-field prepend-icon="lock" v-model="password" name="password" label="Password" type="password"></v-text-field>
                                <v-btn type="submit" color="primary">Login</v-btn>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created() {
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit(e) {
            e.preventDefault();

            this.submitted = true;
            const { email, password } = this;

            if (email && password) {
                this.login({ email, password })
            }
        }
    }
}
</script>
