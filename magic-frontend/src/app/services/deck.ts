import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deck, DeckCriarDto } from '../models/deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private apiUrl = 'http://localhost:8080/deck'; // Endpoint do seu DeckController

  constructor(private http: HttpClient) {}

  listar(): Observable<Deck[]> {
    return this.http.get<Deck[]>(this.apiUrl);
  }

  criar(deck: DeckCriarDto): Observable<Deck> {
    return this.http.post<Deck>(this.apiUrl, deck);
  }
  
  atualizar(id: number, deck: DeckCriarDto): Observable<Deck> {
    return this.http.put<Deck>(`${this.apiUrl}/${id}`, deck);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
