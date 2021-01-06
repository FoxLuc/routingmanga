import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../mangaapi.service';

@Component({
  selector: 'app-search-manga',
  templateUrl: './search-manga.component.html',
  styleUrls: ['./search-manga.component.css']
})
export class SearchMangaComponent implements OnInit {

  query: string;
  obs: Observable<Object>;
  results: any;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  submit(query: HTMLInputElement): void {
    if(!query.value){
      return;
    }
    this.query = query.value;
    this.obs = this.api.searchItemManga(this.query);
    this.obs.subscribe((data) => {this.results = data; console.log(this.results)});
  }

  renderResults(res: any): void {
    this.results = null;
    this.results = res;
  }

}
