import { AxiosResponse } from "axios";
import http from "../http-common";

class SanctumService {
    csrfProtection(): Promise<AxiosResponse<any>> {
        return http.get("/user");
    }
}

export default new SanctumService();
