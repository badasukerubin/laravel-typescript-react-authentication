import { AxiosResponse } from "axios";
import http from "../http-common";
import { LoginData } from "./types/AuthData";
import { RegisterData } from "./types/AuthData";

class AuthService {
    constructor(public prefix = "") {
        this.prefix = "/api";
    }

    register(data: RegisterData): Promise<AxiosResponse<any>> {
        return http.post(`${this.prefix}/register`, data);
    }

    login(data: LoginData): Promise<AxiosResponse<any>> {
        return http.post(`${this.prefix}/login`, data);
    }

    getUser(): Promise<AxiosResponse<any>> {
        return http.get(`${this.prefix}/user`);
    }

    logout(): Promise<AxiosResponse<any>> {
        return http.post(`${this.prefix}/logout`);
    }
}

export default new AuthService();
