import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../shared/models/dog.model';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(
    private http: HttpClient
  ) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('/api/dogs');
  }

  countDogs(): Observable<number> {
    return this.http.get<number>('/api/dogs/count');
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>('/api/dog', dog);
  }

  getDog(id: string): Observable<Dog> {
    return this.http.get<Dog>(`/api/dog/${id}`);
  }

  updateDog(id: string, dog: Dog): Observable<any> {
    return this.http.put<any>(`/api/dog/${id}`, dog);
  }

  deleteDog(id: string): Observable<any> {
    return this.http.delete<any>(`/api/dog/${id}`);
  }
}
