<template>
  <div>
    <form-data title="Produk Baru" :product="product" :uploadAction="imageUpload" :action="saveData" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    product: {
      SKU: '',
      Name: '',
      Description: '',
      Stock: 0,
      Price: 0,
      PriceAfterDiscount: 0,
      Category: {
        Id: '',
        Name: ''
      },
      ImageLocation: '',
      ImageName: ''
    }
  }),
  components: {
    FormData: () => import("@/components/admin/FormProduct.vue")
  },
  methods: {
    ...mapActions('product', ['storeImage', 'store']),
    saveData(e) {
      e.preventDefault();
      this.store(this.product);
    },
    imageUpload(file) {
      return this.storeImage({
        Image: file,
        SKU: this.product.SKU
      })
      .then((data) => {
        this.product.ImageName = data.Name;
        this.product.ImageLocation = data.Url;

        return data;
      });
    }
  }
};
</script>

<style>
</style>
