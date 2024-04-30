import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() movie: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MovieModalComponent, {
      width: '950px',
      height: '800px',
    });
    dialogRef.componentInstance.data = this.movie;
  }
}
