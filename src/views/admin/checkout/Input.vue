<template>
  <div>
    <form-data :title="'Add Category'" :category="category" :action="saveData"></form-data>
  </div>
</template>

<script>
export default {
  data: () => ({
    category: {
      name: "",
    }
  }),

  components: {
    FormData: () => import("@/components/admin/FormCategory.vue")
  },

  methods: {
    saveData() {
      //
    }
  }
};
</script>

<style>
</style>
