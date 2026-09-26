import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colecao, ColecaoCriarDto } from '../models/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {
  private apiUrl = 'http://localhost:8080/colecao';

  constructor(private http: HttpClient) {}

  listar(): Observable<Colecao[]> {
    return this.http.get<Colecao[]>(this.apiUrl);
  }

  criar(colecao: ColecaoCriarDto): Observable<Colecao> {
    return this.http.post<Colecao>(this.apiUrl, colecao);
  }

  // Novos métodos:
  atualizar(id: number, colecao: ColecaoCriarDto): Observable<Colecao> {
    return this.http.put<Colecao>(`${this.apiUrl}/${id}`, colecao);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
