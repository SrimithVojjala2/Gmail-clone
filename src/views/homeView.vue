<template>
    <div>
        <router-link to="/login">
            login
        </router-link>
        <router-link to="signup">
            sign Up
        </router-link>
    </div>

    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>