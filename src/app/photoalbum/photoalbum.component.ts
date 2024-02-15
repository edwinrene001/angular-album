import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photoservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.scss']
})
export class PhotoalbumComponent implements OnInit {
  photos:any = [];
  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
  
      this.photoService.getPhotos(id).subscribe((data: any) => {
        this.photos = data;
      });
    });
  }

}
