import Call from "./Call";
import CSRF from "./CSRF";

export default {

  async login(form) {
    await CSRF.CSRF();
    return Call.post("/login", form);
  },

  async logout() {
    await CSRF.CSRF();
    return Call.post("/logout");
  },

  auth() {
    return Call.get("/admin");
  },
  logout() {
    return true;
  }
};
