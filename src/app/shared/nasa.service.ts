import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { ENDPOINTS } from './core/endpoints'; 

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private API_URL = 'https://images-assets.nasa.gov';
  private API_URL2 = 'https://images-api.nasa.gov';

  constructor(private http: HttpClient) {}

  getRecent(): Observable<any> {
    return this.http.get(`${this.API_URL}/recent.json`);
  }

  getPopular(): Observable<any> {
    return this.http.get(`${this.API_URL}/popular.json`);
  }

  search(query: string, mediaType: string = 'image,video,audio', page: number = 1, yearStart: number = 1935, yearEnd: number = 1980): Observable<any> {
    const url = `${this.API_URL2}/search?q=${query}&page=${page}&media_type=${mediaType}&year_start=${yearStart}&year_end=${yearEnd}`;
    return this.http.get(url);
  }
  
  getImageDetails(nasaId: string): Observable<any> {
    return this.http.get(`${this.API_URL2}/search?nasa_id=${nasaId}`);
  }
}