<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="headline">{{ title }}</span>
      </v-card-title>
      <v-form @submit="action">
        <v-card-text>
          <v-layout row>
            <v-flex class="mr-3">
              <v-text-field
                outline
                label="SKU"
                v-model="product.SKU"
                name="sku"
                v-validate="'required'"
                :error-messages="errors.collect('sku')"
              />
              <v-text-field
                outline
                label="Nama Produk"
                v-model="product.Name"
                name="nmProduct"
                v-validate="'required'"
                :error-messages="errors.collect('nmProduct')"
              />
              <v-textarea
                outline
                label="Deskripsi Produk"
                v-model="product.Description"
                name="decsProduk"
                v-validate="'required'"
                :error-messages="errors.collect('decsProduk')"
              ></v-textarea>
              <v-autocomplete
                outline
                label="Kategori Produk"
                item-text="Name"
                item-value="Id"
                :items="fetchAllCategories()"
                return-object
                v-model="product.Category"
              />
              <v-text-field
                outline
                label="Stok"
                v-model="product.Stock"
                type="number"
                name="stok"
                v-validate="'required|numeric'"
                :error-messages="errors.collect('stok')"
              />
              <v-text-field outline label="Harga Jual" v-model="product.Price" type="number"/>
              <v-text-field
                outline
                label="Harga Diskon"
                v-model="product.PriceAfterDiscount"
                type="number"
                name="hrgDiskon"
                v-validate="'required|numeric'"
                :error-messages="errors.collect('hrgDiskon')"
              />
            </v-flex>
            <v-flex class="ml-3">
              <UploadButton
                class="mb-4"
                :disabled="!product.SKU"
                name="Image"
                :fileChangedCallback="onImagePicked"
                :loading="true"
                outline
                title="Pilih Gambar Produk"
              >
                <template slot="icon-left">
                  <v-icon left>add</v-icon>
                </template>
              </UploadButton>

              <v-card>
                <v-img v-if="uploadedImage" :src="showImageUpload">
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular
                      size="70"
                      v-if="onLoadingImage"
                      :indeterminate="onLoadingImage"
                      color="green"
                    />
                  </v-layout>
                </v-img>

                <v-img v-if="viewImage" :src="viewImage" @load="imageLoaded">
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular
                      size="70"
                      v-if="!imageLoadedState"
                      :indeterminate="!imageLoadedState"
                      color="green"
                    />
                  </v-layout>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="product.ImageName == ''" color="success" type="submit">Simpan</v-btn>
          <v-btn color="warning" to="/admin/products">Batal</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UploadButton from "vuetify-upload-button";

export default {
  components: {
    UploadButton
  },
  computed: {
    showProgress() {
      return this.product.ImageName == "" && this.uploadedImage;
    },
    showImageUpload() {
      if (this.uploadedImage == false) {
        return "";
      } else {
        return this.uploadedImage;
      }
    },
    viewImage() {
      if (this.product.Id) {
        if (this.uploadedImage == false && this.product.Image) {
          return this.product.Image.Location;
        }
      }

      return false;
    }
  },
  data() {
    return {
      ...mapGetters({
        fetchAllCategories: "category/fetchAllCategories"
      }),
      uploadedImage: false,
      imageFile: false,
      onLoadingImage: false,
      imageLoadedState: false
    };
  },
  methods: {
    ...mapActions({
      getAllCategories: "category/getAll"
    }),
    onImagePicked(file) {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener("load", () => {
        let thisState = this;
        this.onLoadingImage = true;
        this.uploadedImage = fr.result;
        this.imageFile = file;
        this.uploadAction(file).then(isUploaded => {
          if (isUploaded.Name) {
            thisState.onLoadingImage = false;
          }
        });
      });
    },
    imageLoaded() {
      this.imageLoadedState = true;
    }
  },
  created() {
    this.getAllCategories();
  },
  props: ["title", "product", "action", "uploadAction"]
};
</script>

<style>
</style>
