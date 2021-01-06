import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchItemManga(query: string){
    const url = `https://api.jikan.moe/v3/search/manga?q=${query}`;
    let obs = this.http.get(url);
    console.log(obs);
    return obs;
  }

  getItemManga(id: string){
    const url = `https://api.jikan.moe/v3/manga/${id}`;
    console.log(this.http.get(url));
    return this.http.get(url);
  }
}
