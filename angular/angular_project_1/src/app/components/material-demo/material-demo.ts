import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UploadVideos } from '../upload-videos/upload-videos';

@Component({
  selector: 'app-material-demo',
  imports: [MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './material-demo.html',
  styleUrl: './material-demo.css',
})
export class MaterialDemo {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(UploadVideos);
  }
}
