<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form method="POST" action="">
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" v-model="form.email" class="form-control" name="email" value="" required autocomplete="email" autofocus>
                                <span class="text-danger" v-if="errors.email">
                                    {{ errors.email[0] }}
                                </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" v-model="form.password" type="password" class="form-control" name="password" required autocomplete="current-password">
                                <span class="text-danger" v-if="errors.password">
                                    {{ errors.password[0] }}
                                </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="button" @click.prevent="login" class="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Admin from "../js/Admin";
    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                errors: []
            };
        },

        methods: {
            login() {
                Admin.login(this.form)
                .then((response) => {
                    this.$root.$emit("login", true);
                    localStorage.setItem("auth", true);
                    localStorage.setItem("token", response.data);
                    window.location.reload();
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                });
            }
        }
    }
</script>
