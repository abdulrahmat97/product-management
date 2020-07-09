<template>
    <div>
        <v-btn class="mb-3" color="primary" to="/admin/categories/add">
            <v-icon>add</v-icon> Kategori Baru
        </v-btn>
        <data-table 
            title="Kategori Produk"
            :headers="headers" 
            :items="fetchAllCategories" 
            :search.sync="searchText">
            <template slot="field" slot-scope="props">
                <td class="text-md-left">{{ props.props.item.Name }}</td>
                <td>
                    <v-btn flat icon dark color="cyan" 
                        :to="{ name: 'categories-edit', params: { categoryId: props.props.item.Id } }">
                        <v-icon small dark>edit</v-icon>
                    </v-btn>
                    <v-btn flat icon dark color="red" @click="destroyCategory(props.props.item.Id)">
                        <v-icon small dark>delete</v-icon>
                    </v-btn>
                </td>
            </template>
        </data-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return{
            searchText: '',
            headers: [
                { text: 'Kategori', value: 'Name' },
                { text: '', value: 'action', sortable: false},
            ]
        }
    },
    computed: {
        ...mapGetters('category', ['fetchAllCategories'])
    },
    methods: {
        ...mapActions('category', ['destroy', 'getAll']),
        destroyCategory(categoryId) {
            if(confirm(`Remove data[${categoryId}] ?`)) {
                this.destroy(categoryId);
            }
        }
    },
    created() {
        this.getAll();
    },
    components: {
        DataTable: () => import('@/components/admin/DataTable.vue'),
    }
}
</script>

<style>

</style>
