<template>
    <div>Logging out...</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    created() {
        this.logout();
        location.reload(true);
    },
    methods: {
        ...mapActions('account', ['logout'])
    }
}
</script>
