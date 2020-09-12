<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    <div class="alert alert-info">You are looged in!</div>
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


    }
</script>
