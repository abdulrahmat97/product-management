<template>
    <div>
        <Navbar />
        <v-content>
            <v-container fluid fill-height>
                <v-layout row wrap>
                    <v-flex md12 lg12 xs12>
                        <v-alert outline dismissible 
                            :value="alert.message" 
                            :type="alert.type" 
                            :icon="alert.icon">{{ alert.message }}</v-alert>
                        <v-card>
                            <v-card-text>
                                <v-slide-x-transition mode='out-in'>
                                <router-view/>
                                </v-slide-x-transition>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Admin',
    components:{
        'Navbar': () => import('@/components/admin/Navbar.vue'),
    },
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear',
            getAccountDetail: 'account/accountDetail'
        })
    },
    created() {
        this.getAccountDetail();
    },
    watch: {
        /* eslint-disable */
        $route (to, from) {
            this.clearAlert();
        }
    }
}
</script>
