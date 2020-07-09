<template>
  <v-card>
    <v-card-title>
      <span class="headline">Pengaturan Akun</span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-layout row>
          <v-flex class="mr-3">
            <h3 class="heading mb-2">Pengguna</h3>
            <v-text-field
              outline
              label="Nama"
              :readonly="!IsSave"
              v-model="settings.Name"
              name="nama"
              v-validate="'required'"
              :error-messages="errors.collect('nama')"
            />
            <v-text-field
              outline
              label="Nama Toko"
              :readonly="!IsSave"
              v-model="settings.StoreName"
              name="namaToko"
              v-validate="'required'"
              :error-messages="errors.collect('namaToko')"
            />
            <v-textarea
              outline
              label="Alamat"
              :readonly="!IsSave"
              v-model="settings.Address"
              name="alamat"
              v-validate="'required'"
              :error-messages="errors.collect('alamat')"
            ></v-textarea>
            <v-text-field
              outline
              label="Kecamatan"
              :readonly="!IsSave"
              v-model="settings.District"
              name="kecamatan"
              v-validate="'required'"
              :error-messages="errors.collect('kecamatan')"
            />
            <v-text-field
              outline
              label="Kota"
              :readonly="!IsSave"
              v-model="settings.City"
              name="kota"
              v-validate="'required'"
              :error-messages="errors.collect('kota')"
            />
          </v-flex>
          <v-flex class="ml-3">
            <h3 class="heading mb-2">Akun Bank</h3>
            <v-text-field
              outline
              label="Nama Bank"
              :readonly="!IsSave"
              v-model="BankAccount.BankName"
              name="nmBank"
              v-validate="'required'"
              :error-messages="errors.collect('nmBank')"
            />
            <v-text-field
              outline
              label="Nama Pemilik"
              :readonly="!IsSave"
              v-model="BankAccount.AccountName"
              name="nmPemilik"
              v-validate="'required'"
              :error-messages="errors.collect('nmPemilik')"
            />
            <v-text-field
              outline
              label="Nomor Rekening"
              :readonly="!IsSave"
              v-model="BankAccount.AccountNumber"
              name="norek"
              v-validate="'required|numeric'"
              :error-messages="errors.collect('norek')"
            />
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <h3 class="heading mb-2">Token Keys</h3>
            <v-text-field label="API Token" outline readonly v-model="settings.Id"/>
            <v-text-field label="Store API Token" outline readonly v-model="settings.StoreKeys"/>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" :disabled="IsSave" @click="edit">Edit</v-btn>
      <v-btn color="primary" :disabled="!IsSave" @click="saveData">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
// import { ApiRequest, authHeader, handleResponse } from '@/helpers/services'

export default {
  computed: {
    BankAccount() {
      if (typeof this.settings.BankAccount !== "undefined") {
        return this.settings.BankAccount;
      } else {
        return {
          BankName: "",
          AccountName: "",
          AccountNumber: ""
        };
      }
    }
  },
  data() {
    return {
      IsSave: false
    };
  },
  props: ["settings"],
  methods: {
    ...mapActions("account", ["updateProfile"]),
    edit() {
      this.IsSave = true;
    },
    saveData() {
      this.IsSave = false;
      this.updateProfile(this.settings);
    }
  }
};
</script>

<style>
</style>
