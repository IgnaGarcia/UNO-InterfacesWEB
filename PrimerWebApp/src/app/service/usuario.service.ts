import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url= "https://reqres.in/api/";
    }

    getUsuarios(): Observable<any>{
        return this._http.get(this.url+"users");
    }

}