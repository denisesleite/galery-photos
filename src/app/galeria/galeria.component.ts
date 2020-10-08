import { Component, Input } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent{

  @Input() title: string = '';
  @Input() photos: string[] = [];
  actualPhoto: number = 0;

  firstPhoto(){
    this.actualPhoto = 0;
  }

  nextPhoto(){
    this.actualPhoto++;
  }

  backPhoto(){
    this.actualPhoto--;
  }

  lastPhotoVerify(): boolean{
    return this.actualPhoto == this.photos.length -1;
  }

  lastPhoto(){
    return this.actualPhoto = this.photos.length -1
  }
}
