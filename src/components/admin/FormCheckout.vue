<template>
  <div>
    <v-card flat>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <v-layout row>
          <v-flex md4 style="padding-right:5px">
            <v-card min-height="325px" >
                <v-toolbar color="#0288D1" flat dark>
                  <v-toolbar-title>
              <div class="title">Status Belanja</div>
                  </v-toolbar-title>
                </v-toolbar>
              <v-card-text>
                <dl class="row">
                  <dt class="col-sm-4">Tanggal Belanja</dt>
                  <dd class="col-sm-8">{{ convertDate(checkout.CheckoutDate) }}</dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-4">Pembayaran</dt>
                  <dd class="col-sm-8" v-if="checkout.Status.IsPaid">Sudah dibayar</dd>
                  <dd class="col-sm-8" v-else>Belum dibayar</dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-4">Status</dt>
                  <dd class="col-sm-8" v-if="checkout.Status.IsFinished">Order Selesai</dd>
                  <dd class="col-sm-8" v-else>Menunggu</dd>
                </dl>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 style="padding-right:5px">
            <v-card min-height="325px" >
              <v-toolbar color="#0097A7" flat dark>
                  <v-toolbar-title>
                <div class="title">Data Pelanggan</div>
                  </v-toolbar-title>
                </v-toolbar>
              <v-card-text>
                <dl class="row">
                  <dt class="col-sm-4">Nama</dt>
                  <dd class="col-sm-8">{{ checkout.Customer.Name}}</dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-4">Alamat</dt>
                  <dd class="col-sm-8">
                    {{ checkout.Customer.Address }},
                    {{ checkout.Customer.District }},
                    {{ checkout.Customer.City }},
                    {{ checkout.Customer.Province }},
                  </dd>
                </dl>
                <dl class="row">
                  <dt class="col-sm-4">Kontak</dt>
                  <dd class="col-sm-8">{{ checkout.Customer.PhoneNumber}}</dd>
                </dl>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 style="padding-right:5px">
            <v-card min-height="325px" >
              <v-toolbar color="#00796B" flat dark>
                  <v-toolbar-title>
                <div class="title">Bank Akun</div>                
                  </v-toolbar-title>
                </v-toolbar>
              <v-card-text>
                <dl class="row">
              <dt class="col-sm-4">Nama Bank</dt>
              <dd class="col-sm-8">{{ checkout.BankAccount.BankName}}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-4">Nama Account</dt>
              <dd class="col-sm-8">{{ checkout.BankAccount.AccountName }}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-4">Nomor Rekening</dt>
              <dd class="col-sm-8">{{ checkout.BankAccount.AccountNumber}}</dd>
            </dl>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <br>
        <br><br>
        <item-table :products="checkout.ProductItem"></item-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    //
  }),

  props: ["title", "checkout"],

  components: {
    ItemTable: () => import("@/components/admin/ItemTable.vue")
  },
  methods: {
    convertDate(milis) {
      const newDate = new Date(milis);
      return newDate.toLocaleDateString("id-ID");
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}
dt {
  font-weight: 700;
}
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>
