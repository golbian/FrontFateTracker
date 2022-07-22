import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  public url = 'http://localhost:3000/api'
  constructor(public http:HttpClient) { 
  }

  create(character: Character): Observable<Character>{
    return this.http.post<Character>(`${this.url}/character`, character);
  }

  findAll(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.url}/character`);
  }

  findOne(id:string): Observable<Character>{
    return this.http.get<Character>(`${this.url}/character/${id}`);
  }

  update(id:string, character:Character): Observable<Character> {
    return this.http.put<Character>(`${this.url}/character/${id}`, character);
  }

  delete(id:string) {
    return this.http.delete(`${this.url}/character/${id}`);
  }
}
