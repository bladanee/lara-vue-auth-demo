<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Add Comapny</div>

                <div class="card-body">
                    <form method="POST" enctype="multipart/form-data">

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" v-model="form.name" name="name" value="" required autocomplete="name" autofocus>
                                <span class="text-danger" v-if="errors.name">
                                    {{ errors.name[0] }}
                                </span>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" v-model="form.email" name="email" value="" autocomplete="email">
                                <span class="text-danger" v-if="errors.email">
                                    {{ errors.email[0] }}
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="website" class="col-md-4 col-form-label text-md-right">Website</label>
                            <div class="col-md-6">
                                <input id="website" type="text" class="form-control" v-model="form.website" name="website" value="" autocomplete="website" autofocus>
                                <span class="text-danger" v-if="errors.website">
                                    {{ errors.website[0] }}
                                </span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="logo" class="col-md-4 col-form-label text-md-right">Logo</label>
                            <div class="col-md-6">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="logo" ref="logo" name="logo" v-on:change="logo()">
                                    <label class="custom-file-label" for="logo">Choose file</label>
                                </div>
                                <span class="text-danger" v-if="errors.logo">
                                    {{ errors.logo[0] }}
                                </span>
                            </div>
                        </div>
                        <div class="form-group row mb-1">
                            <div class="col-md-6 offset-md-4">
                                <button type="button" @click.prevent="createC" class="btn btn-success">
                                    Add
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
    import Company from "../../js/Company";
    export default {
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    website: "",
                    logo: "",
                },
                errors: []
            };
        },

        methods: {
            createC() {
                let formData = new FormData();
                formData.append('name', this.form.name);
                formData.append('email', this.form.email);
                formData.append('website', this.form.website);
                formData.append('logo', this.form.logo);
                Company.createCompany(formData)
                .then((response) => {
                    this.$router.push({ name: "CompanyHome" });
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                });
            },
            logo(){
                this.form.logo = this.$refs.logo.files[0];
            }
        }
    }
</script>

