import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';


@Component({
  selector: 'app-popular-images',
  templateUrl: './popular-images.component.html',
  styleUrls: ['./popular-images.component.css']
})
export class PopularImagesComponent implements OnInit {
  popularImages: any[] = [];

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getPopular().subscribe((data) => {
      this.popularImages = data.collection.items;
    });
  }
}