import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeServices {
    private urlApi = "http://5951afda138d63001132bbf7.mockapi.io/api/employees/";

    constructor(private _http: Http) {
    }
    getList(): Observable<any[]> {
        return this._http.get(this.urlApi).map(response => response.json());
    }
    getSingle(id: number): Observable<any> {
        return this._http.get(this.urlApi + id).map(response => response.json());
    }
    add(data: any): Observable<any> {
        return this._http.post(this.urlApi, data).map(response => response.json());
    }
    update(id: number, data: any): Observable<any> {
        return this._http.put(this.urlApi + id, data).map(response => response.json());
    }
    delete(id: number): Observable<any> {
        return this._http.delete(this.urlApi + id).map(response => response.json());
    }
} 