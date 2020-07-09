<template>
  <div>
    <SettingForm :settings="fetchUserDetail" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SettingForm from '@/components/admin/FormSettings'

export default {
  computed: {
    ...mapGetters('account', ['fetchUserDetail'])
  },
  components: {
    SettingForm
  }
};
</script>

<style>
</style>
