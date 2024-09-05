import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string = '';
  searchResults: any[] = [];
  isLoading = false;
  errorMessage: string | null = null;

  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {}

  // Método para ejecutar la búsqueda
  onSearch(): void {
    if (!this.query.trim()) {
      return; // Si no hay consulta, no buscar
    }
    this.isLoading = true;
    this.nasaService.search(this.query).subscribe(
      (response: any) => {
        this.searchResults = response.collection.items;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching search results', error);
        this.errorMessage = 'Something went wrong. Please try again later.';
        this.isLoading = false;
      }
    );
  }
}