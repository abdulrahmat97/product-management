<template>
  <div>
    <form-data title="Kategori Baru" :category="category" :action="saveData" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    category: {
      Name: "",
    }
  }),
  components: {
    FormData: () => import("@/components/admin/FormCategory.vue")
  },
  methods: {
    ...mapActions('category', ['store']),
    /* eslint-disable */
    saveData(e) {
      this.store(this.category);
    }
  }
};
</script>

<style>
</style>
