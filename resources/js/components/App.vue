<template>
    <div class="container">
        <app-header />
        <div class="mb-3 mt-3"></div>
        <div :v-if="hasMessage != false">
            <div></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Admin from "../js/Admin";

    import Header from './Layouts/Header';
    export default {
        data() {
            return {
                Admin: null,
                hasMessage: false
            };
        },

        components: {
            appHeader: Header
        },

        mounted() {
            Admin.auth().then(response => {
                this.Admin = response.data;
            });

            if(localStorage.getItem("auth")){
                if(this.$route.name == '' || this.$route.name == 'Login')
                this.$router.push({ name: "Dashboard" });
            }else{
                this.$router.push({ name: "Login" });
            }
        }
    }
</script>

<style>
</style>
