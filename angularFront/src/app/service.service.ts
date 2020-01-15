import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Service } from "./models/service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  API_URI = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getServices() {
    return this.http.get(`${this.API_URI}/api/services`);
  }

  getService(id: string) {
    return this.http.get(`${this.API_URI}/api/findService/${id}`);
  }

  deleteService(id: string) {
    return this.http.delete(`${this.API_URI}/api/deleteService/${id}`);
  }

  saveService(service: Service) {
    return this.http.post(`${this.API_URI}/api/createService`, service);
  }
}
