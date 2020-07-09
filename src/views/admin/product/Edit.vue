<template>
  <div>
    <form-data title="Edit Produk" :product="product" :uploadAction="imageUpload" :action="saveData" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('product', ['fetchProduct']),
    product() {
      return this.fetchProduct;
    }
  },
  components: {
    FormData: () => import("@/components/admin/FormProduct.vue")
  },
  methods: {
    ...mapActions('product', ['storeImage', 'destroyImage', 'update', 'get']),
    saveData(e) {
      e.preventDefault();
      if (typeof this.product.ImageName === 'undefined') {
        this.product.ImageName = this.product.Image.Name;
        this.product.ImageLocation = this.product.Image.Location;
      }

      this.update(this.product);
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
  },
  created() {
    this.get(this.$route.params.productId);
  }
};
</script>

<style>
</style>
