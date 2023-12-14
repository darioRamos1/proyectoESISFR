import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetaCreditoService {

  private myAppUrl ='https://localhost:7041/api/Tarjeta/';
  private myApiUrl='api/tarjeta/';
  constructor(private http: HttpClient) { }
  
  getListTarjetas(): Observable <any>{
    return this.http.get(`${this.myAppUrl}ConsultarTarjetas` );
  }
  
  deleteTarjeta(id: number):Observable <any>{
    return this.http.delete(`${this.myAppUrl}EliminarTarjeta/${id}` )
  }
  
  saveTarjeta(tarjeta: any):Observable <any> {
    return this.http.post(`${this.myAppUrl}crearTarjeta/`, tarjeta)
  }
  
  updateTarjeta(id: number , tarjeta : any):Observable <any>{
    return this.http.put(`${this.myAppUrl}ActualizarTarjeta/${id}` , tarjeta);
  
  }
}
