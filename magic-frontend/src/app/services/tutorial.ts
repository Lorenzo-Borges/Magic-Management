import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial, TutorialCriarDto } from '../models/tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private apiUrl = 'http://localhost:8080/tutorial'; // Endpoint do seu TutorialController

  constructor(private http: HttpClient) {}

  listar(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.apiUrl);
  }

  criar(tutorial: TutorialCriarDto): Observable<Tutorial> {
    return this.http.post<Tutorial>(this.apiUrl, tutorial);
  }

  atualizar(id: number, tutorial: TutorialCriarDto): Observable<Tutorial> {
    return this.http.put<Tutorial>(`${this.apiUrl}/${id}`, tutorial);
  }

  apagar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
