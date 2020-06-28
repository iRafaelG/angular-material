import { Component } from '@angular/core';

// import services
import { PhotosService } from "./services/photos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material';

  albumsId = [1, 2, 3];

  constructor(private photosService: PhotosService) {}

}
