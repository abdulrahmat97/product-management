<template>
  <div>
    <v-data-table :headers="headers" :items="products">
      <!-- class="elevation-1" -->
      <template v-slot:items="props">
        <td>{{ props.item.Name }}</td>
        <td>{{ props.item.Category.Name }}</td>
        <td>{{ props.item.Quantity }}</td>
        <td>{{ props.item.SubTotal|formatNumber }}</td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Nama Produk",
        align: "left",
        value: "product_id"
      },
      { text: "Kategori", value: "quantity" },
      { text: "Jumlah", value: "sub_total" },
      { text: "Total", value: "sub_total" }
    ]
  }),
  props: ["products"],
  filters:{
    formatNumber : (num) => {
      console.log(typeof num);
      return num.toLocaleString('id-ID').toString()
    }
  }
};
</script>