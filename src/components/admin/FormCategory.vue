<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ title }}</span>
    </v-card-title>
    <v-form @submit.prevent="action">
      <v-card-text>
        <v-text-field
          outline
          label="Kategori Produk"
          v-model="category.Name"
          name="kategori"
          v-validate="'required'"
          :error-messages="errors.collect('kategori')"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" type="submit">Simpan</v-btn>
        <v-btn color="warning" to="/admin/categories">Batal</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: ["title", "category", "action"]
};
</script>
