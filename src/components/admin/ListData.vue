<template>
    <div>
        
        <v-card color="#f7f6e7">
        <v-card-title primary class="title">{{data.name}}</v-card-title>
        <v-card-text> 
            <v-layout row wrap>
                <v-flex xs12 sm3 md2>
                    <v-avatar
                    size="70px"
                    color="grey lighten-4"
                    >
                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                    </v-avatar>
                </v-flex>
                <v-flex xs12 sm6 md10>
                    <table>
                        <tr>
                            <td>Username</td>
                            <td>:</td>
                            <td>{{data.username}}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{{data.email}}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>:</td>
                            <td>{{data.gender}}</td>
                        </tr>
                    </table>
                </v-flex>
            </v-layout>
        </v-card-text>
        <v-card-actions>
            <v-btn
            color="primary"
            class="white--text"
            >
            <v-icon center dark>edit</v-icon>
            </v-btn>
            <v-btn
            color="error"
            class="white--text"
            >
            <v-icon center dark>delete</v-icon>
            </v-btn>
        </v-card-actions>
        </v-card>
        <br>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:['data']
}
</script>

<style>

</style>
