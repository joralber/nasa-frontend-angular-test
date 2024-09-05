import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  imageDetail: any;

  constructor(private route: ActivatedRoute, private nasaService: NasaService) {}

  ngOnInit(): void {
    const nasaId = this.route.snapshot.paramMap.get('id');
    this.nasaService.getImageDetails(nasaId!).subscribe((data) => {
      this.imageDetail = data.collection.items[0];
    });
  }
}