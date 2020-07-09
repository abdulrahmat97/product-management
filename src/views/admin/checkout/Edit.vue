<template>
  <div>
    <form-data :title="'Checkout'" :checkout="checkout"></form-data>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    //
  }),

  components: {
    FormData: () => import("@/components/admin/FormCheckout.vue")
  },

  computed: {
    ...mapGetters("checkout", ["fetchOrder"]),
    checkout() {
      return this.fetchOrder.data;
    }
  },

  created() {
    this.get(this.$route.params.checkoutId);
  },
  methods: {
    ...mapActions("checkout", ["get"])
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
