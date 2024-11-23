import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagecleaner',
  standalone: true
})
export class ImagePipe implements PipeTransform {

  transform(url:string|undefined): string {
     
     return !url?"":url;
  }

}
