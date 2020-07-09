<template>
    <div>
        <v-btn class="mb-3" color="primary" to="/admin/products/add">
            <v-icon>add</v-icon> Produk Baru
        </v-btn>
        <data-table
            title="Produk"
            :headers="headers"
            :items="fetchAllProducts"
            :search.sync="searchText">
            <template slot="field" slot-scope="props">
                <td class="text-md-left">{{ props.props.item.Name }}</td>
                <td class="text-md-left">{{ props.props.item.Category.Name }}</td>
                <td class="text-md-left">{{ props.props.item.SKU }}</td>
                <td class="text-md-left">{{ props.props.item.Stock }}</td>
                <td class="text-md-left">{{ props.props.item.Price }}</td>
                <td class="text-md-left">{{ props.props.item.PriceAfterDiscount }}</td>
                <td class="text-md-left">
                    <v-icon small>
                        {{ props.props.item.IsActive ? 'check_circle' : 'clear' }}
                    </v-icon>
                </td>
                <td>
                    <v-btn flat icon dark :color="props.props.item.IsActive ? 'info' : 'warning'" 
                        @click="activateProduct(props.props.item.Id, props.props.item.IsActive)">
                        <v-icon small dark>{{ !props.props.item.IsActive ? 'check_circle' : 'clear' }}</v-icon>
                    </v-btn>
                    <v-btn flat icon dark color="cyan" 
                        :to="{ name: 'products-edit', params: { productId: props.props.item.Id } }">
                        <v-icon small dark>edit</v-icon>
                    </v-btn>
                    <v-btn flat icon dark color="red" @click="destroyProduct(props.props.item.Id)">
                        <v-icon small dark>delete</v-icon>
                    </v-btn>
                </td>
            </template>
        </data-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            searchText: '',
            headers: [
                { text: 'Nama', value: 'Name' },
                { text: 'Kategori', value: 'Category.Name' },
                { text: 'SKU', value: 'SKU' },
                { text: 'Stok', value: 'Stock' },
                { text: 'Harga Jual', value: 'Price' },
                { text: 'Harga Diskon', value: 'PriceAfterDiscount' },
                { text: 'Produk Aktif', value: 'IsActive' },
                { text: '', value: 'action', sortable: false},
            ]
        }
    },
    computed: {
        ...mapGetters({
            fetchAllProducts: 'product/fetchAllProducts',
            fetchActivateProduct: 'product/fetchActivateProduct'
        }),
        activateProductRecord() {
            return this.fetchActivateProduct;
        }
    },
    methods: {
        ...mapActions({
            destroy: 'product/destroy', 
            getAllProducts: 'product/getAll',
            getProduct: 'product/getActivate',
            activate: 'product/activate'
        }),
        destroyProduct(productId) {
            if (confirm(`Remove data[${productId}] ?`)) {
                this.destroy(productId);
            }
        },
        activateProduct(productId, IsActive) {
            this.getProduct(productId)
                .then((data) => {
                    let newData = data;
                    newData.IsActive = !IsActive;
                    newData.ImageName = data.Image.Name;
                    newData.ImageLocation = data.Image.Location;
                    this.activate(newData);
                });
        }
    },
    created() {
        this.getAllProducts();
    },
    components:{
        DataTable: () => import('@/components/admin/DataTable.vue'),
    }
}
</script>
