import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Torta } from '../models/tortas'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TortasService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTortas(): Observable<Torta[]>{
    return this.http.get<Torta[]>(`${this.API_URI}/tortas`);
  }

  // getPersonExport(): Observable<EmpleadoPlantillaExcel[]> {
  //   return this.http.get<EmpleadoPlantillaExcel[]>(`${this.url}export`);
  // }

  getTorta(id_tortas: number): Observable<Torta>{
    return this.http.get<Torta>(`${this.API_URI}/tortas/${id_tortas}`);
  }

  deleteTorta(id_tortas: number): Observable<any>{
    return this.http.delete(`${this.API_URI}/tortas/${id_tortas}`);
  }

  saveTorta(torta: Torta): Observable<Torta>{
    return this.http.post<Torta>(`${this.API_URI}/tortas`, torta);
  }

  updateTorta(id_tortas: number, updateTorta: Torta): Observable<Torta> {
    return this.http.put<Torta>(`${this.API_URI}/tortas/${id_tortas}`, updateTorta);
  }

  

}
