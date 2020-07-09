<template>
  <div>
    <form-data title="Ubah Kategori" :category="category" :action="saveData" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('category', ['fetchCategory']),
    category() {
      return this.fetchCategory.data;
    }
  },
  components: {
    FormData: () => import("@/components/admin/FormCategory.vue")
  },
  methods: {
    ...mapActions('category', ['update', 'get']),
    /* eslint-disable */
    saveData(e) {
      this.update(this.category);
    }
  },
  created() {
    this.get(this.$route.params.categoryId);
  }
};
</script>

<style>
</style>
