<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link to='/' class="navbar-brand">LaraVue</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <router-link
                            v-if="!isAuthed"
                            class="nav-item"
                            tag="li"
                            :to="{ name: 'Login' }"
                        >
                        <a class="nav-link">Login</a>
                        </router-link>
                        <router-link
                            v-if="isAuthed"
                            class="nav-item"
                            tag="li"
                            :to="{ name: 'CompanyHome' }"
                        >
                        <a class="nav-link">All Companies</a>
                        </router-link>
                        <router-link
                            v-if="isAuthed"
                            class="nav-item"
                            tag="li"
                            :to="{ name: 'CompanyAdd' }"
                        >
                        <a class="nav-link">Add Company</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </nav>
</template>
<script>
import Admin from "../../js/Admin";

export default {
  data() {
    return {
      isAuthed: false
    };
  },

  mounted() {
    this.$root.$on("login", () => {
      this.isAuthed = true;
    });

    this.isAuthed = !!localStorage.getItem("auth");
  },

  methods: {
    logout() {
      Admin.logout().then(() => {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        window.location.reload();
      });
    }
  }
};
</script>
