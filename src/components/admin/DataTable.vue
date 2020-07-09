<template>
    <v-card>
        <v-card-title>
            {{ title }}
            <v-spacer/>
            <v-text-field v-model="mutableSearch" append-icon="search" label="Pencarian" single-line hide-details />
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="mutableSearch">
            <template slot="items" slot-scope="props">
                <slot name="field" :props="props"></slot>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Pencarian data "{{ mutableSearch }}" tidak ditemukan.
            </v-alert>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    data(){
        return{
            mutableSearch:this.search
        }
    },
    props:{
        'title':{
            default:''
        },
        'headers':{
            default:[]
        },
        'items':{
            default:[]
        },
        'search':{
            default:''
        }
    },
}
</script>

<style>

</style>
