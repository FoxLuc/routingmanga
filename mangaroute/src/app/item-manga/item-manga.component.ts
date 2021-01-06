import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common'
import { ApiService } from '../mangaapi.service';

@Component({
  selector: 'app-item-manga',
  templateUrl: './item-manga.component.html',
  styleUrls: ['./item-manga.component.css']
})
export class ItemMangaComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  manga : any;
  apiServiceObs: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let id = params.get('id');
    console.log(id);
    this.apiServiceObs = this.service.getItemManga(id);
    this.apiServiceObs.subscribe((data)=>this.manga = data);
  }

  back(): void
  {
    this.location.back();
  }
}
