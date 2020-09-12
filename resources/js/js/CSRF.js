import Call from "./Call";
import Cookie from "js-cookie";

export default {
  CSRF() {
    let token = Cookie.get("XSRF-TOKEN");

    if (token) {
      return new Promise(resolve => {
        resolve(token);
      });
    }

    return Call.get("/csrf-cookie");
  }
};
