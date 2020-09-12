<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Companies</div>
                <div class="card-body">
                    <table class="table table-bordered table-hover table-condensed">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Logo</th>
                                <th>Added By</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                                <tr v-for="(CompanyData, index) in Companies">
                                    <td>{{CompanyData.name}}</td>
                                    <td>{{CompanyData.email}}</td>
                                    <td>{{CompanyData.website}}</td>
                                    <td>
                                        <img class="img-thumbnail" style="max-width: 10rem" :src="ImagePath + CompanyData.logo" alt="">
                                    </td>
                                    <td>{{CompanyData.added_by_admin.name}}</td>
                                    <td>
                                       <router-link
                                            class="btn btn-primary"
                                            :to="{ name: 'CompanyEdit', params: { id: CompanyData.id  }}"
                                        >
                                        Edit
                                        </router-link>
                                        <button class="btn btn-danger" @click="RemoveC(CompanyData.id, index)">Remove</button>
                                    </td>
                                </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Config from "../../Config";
    import Company from "../../js/Company";
    export default {
        data() {
            return {
                Companies: null,
                ImagePath: Config.APP_URL() + "/storage/Company/",
            };
        },

        beforeCreate() {
            Company.getCompanies().then((response) => {
                this.Companies = response.data;
            });
        },

        methods: {
            RemoveC(id, index) {
                Company.RemoveCompany(id);
                this.Companies.splice(index, 1);
            }
        }
    }
</script>

