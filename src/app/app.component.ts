import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PopcornFlix';
  movies: any;
  response: any;
  amount: number = 20;

  constructor(private service: ApiService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getAllMovies();
  }

  onFilter(event: any) {
    this.movies = event;

    if (event.length == 0) {
      this._snackBar.open('Filme não encontrado. Verifique se sua pesquisa está sendo feita em inglês!', 'Fechar', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000,
      });
    }
  }

  getAllMovies() {
    this.service.getMovieNames().subscribe({
      next: (res: any) => {
        this.response = res;
        this.movies = this.response.slice(0, 10);
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  showMore() {
    this.movies = this.response.slice(0, this.amount);
    this.amount +=10;
  }
}
