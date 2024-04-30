import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.scss'
})
export class MovieFilterComponent {
  @Input() movies: any;
  fullResults: any;
  @Output() filteredMovies: EventEmitter<any> = new EventEmitter<any>();
  data: any;

  ngOnInit() {
    this.fullResults = this.movies;
  }

  applyFilter(event: any) {
    this.filterMovies(event.target.value);
    this.filteredMovies.emit(this.data);
  }

  filterMovies(search: string) {
    if (!search) {
      this.data = this.fullResults;
      return;
    }

    search = search.toLowerCase();
    this.data = this.movies.filter((movie: { title: string; year: { toString: () => string | string[]; }; genre: any[]; }) =>
      movie.title.toLowerCase().includes(search) ||
      movie.year.toString().includes(search) ||
      movie.genre.some(genre => genre.toLowerCase().includes(search))
    );
  }
}
