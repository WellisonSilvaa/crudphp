import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: string;
  nome: string;
  cidade: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost/api/app.php';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url + "/?id=" + id);
  }
}
