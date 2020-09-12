import Call from "./Call";
import CSRF from "./CSRF";

export default {

  async createCompany(form){
    await CSRF.CSRF();
    return Call.post("/company/create", form);
  },
  async updateCompany(form,id){
    await CSRF.CSRF();
    return Call.post("/company/edit/"+id, form);
  },
  getCompanies() {
    return Call.get("/company");
  },
  getCompany(id) {
    return Call.get("/company/edit/"+id);
  },
  RemoveCompany(id) {
    return Call.get("/company/delete/"+id);
  }
};
