import Config from "../Config";
import axios from "axios";

let Call =  axios.create(
                {
                    baseURL: Config.API_URL(),
                    headers: {
                        "Content-type": "application/json",
                        "Content-Type": "multipart/form-data",
                        "Authorization": 'Bearer ' + localStorage.getItem("token")
                    }
                }
            );

Call.defaults.withCredentials = true;

export default Call;
