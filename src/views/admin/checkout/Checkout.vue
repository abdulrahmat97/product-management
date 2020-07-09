<template>
    <div>
        <!-- <v-btn color="primary" to="/admin/categories/add">
            <v-icon>add</v-icon>
            Add New Category
        </v-btn> -->
        <!-- <br/><br/> -->
        <div>
        <data-table :headers='headers' :items='fetchAllOrders' :search.sync='cari'>
            <template slot="field" slot-scope="props">
                <td class="text-md-left">{{ convertDate(props.props.item.CheckoutDate) }}</td>
                <td class="text-md-left">{{ props.props.item.Customer.Name}}</td>
                <td class="text-md-left">{{ props.props.item.Customer.Address}},
                    {{ props.props.item.Customer.District}},
                    {{ props.props.item.Customer.City}},
                    {{ props.props.item.Customer.Province}}
                </td>
                <td class="text-md-left">{{ props.props.item.Customer.PhoneNumber}}</td>
                <td class="text-md-left">{{ props.props.item.Total }}</td>

                <td class="text-md-left">
                    <v-chip label color="info" text-color="white">
                        <v-avatar>
                            <v-icon v-if="props.props.item.Status.IsPaid">account_balance_wallet</v-icon>
                            <v-icon v-else>timer</v-icon>
                        </v-avatar>
                        <span v-if="props.props.item.Status.IsPaid">Sudah dibayar</span>
                        <span v-else >Belum dibayar</span>
                    </v-chip>
                    <v-chip label v-if="props.props.item.Status.IsPaid">{{ convertDate(props.props.item.Status.PaidAt) }}</v-chip>
                </td>
                <td class="text-md-left">
                    <v-chip label color="primary" text-color="white">
                        <v-avatar>
                            <v-icon v-if="props.props.item.Status.IsFinished">check_circle</v-icon>
                            <v-icon v-else>cancel</v-icon>
                        </v-avatar>
                         <span v-if="props.props.item.Status.IsFinished">Order Selesai</span>
                        <span v-else >Menunggu</span>
                    </v-chip>
                    <v-chip label v-if="props.props.item.Status.IsFinished">{{ convertDate(props.props.item.Status.FinishedAt) }}</v-chip>
                </td>
                <td>
                     <v-tooltip left>
                        <v-btn fab dark small color="cyan" slot="activator"
                        :to="`/admin/checkouts/${props.props.item.Id}/edit`">
                            <v-icon small dark>edit</v-icon>
                        </v-btn>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip right>
                        <v-btn fab dark small color="red" slot="activator">
                            <v-icon small dark>delete</v-icon>
                        </v-btn>
                        <span>Delete</span>
                    </v-tooltip>
                </td>
            </template>
        </data-table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            cari: '',
            headers: [
                { text: 'Tanggal Belanja', value: 'CheckoutDate' },
                { text: 'Nama Pelanggan', value: 'Customer.Name' },
                { text: 'Alamat', value: 'Customer.Address' },
                { text: 'Kontak', value: 'Customer.PhoneNumber' },
                { text: 'Total Belanja', value: 'Total' },
                { text: 'Pembayaran', value: 'Status.IsPaid' },
                { text: 'Status', value: 'Status.IsFinished' },
                { text: 'Action',value:'action',sortable: false},
            ],
        }
    },
    components:{
        DataTable : () => import('@/components/admin/DataTable.vue'),
    },
    computed:{
        ...mapGetters('checkout',['fetchAllOrders'])
    },
    created(){
        this.getAll()
    },
    methods:{
         ...mapActions('checkout', ['getAll']),
         convertDate(milis){
             const newDate = new Date(milis);
             return newDate.toLocaleDateString('id-ID')
         },
    }
}
</script>

<style>

</style>
