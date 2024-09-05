import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';


@Component({
  selector: 'app-recent-images',
  templateUrl: './recent-images.component.html',
  styleUrls: ['./recent-images.component.css']
})
export class RecentImagesComponent implements OnInit {

  recentImages: any[] = [];

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getRecent().subscribe((data) => {
      this.recentImages = data.collection.items;
    });
  }
}