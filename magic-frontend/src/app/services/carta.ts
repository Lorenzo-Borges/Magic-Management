import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta, CartaCriarDto } from '../models/carta';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  private apiUrl = 'http://localhost:8080/carta';

  constructor(private http: HttpClient) {}

  listar(): Observable<Carta[]> {
    return this.http.get<Carta[]>(this.apiUrl);
  }

  criar(carta: CartaCriarDto): Observable<Carta> {
    return this.http.post<Carta>(this.apiUrl, carta);
  }

  atualizar(id: number, carta: CartaCriarDto): Observable<Carta> {
    return this.http.put<Carta>(`${this.apiUrl}/${id}`, carta);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
