import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageRender',
})
export class ImageRenderPipe implements PipeTransform {
  transform(image: string): string {
    const endIndex = image.indexOf('{width}x{height}.jpg');
    if (endIndex !== -1) {
      return `${image.substr(0, endIndex)}1280x720.jpg`;
    }
    return image;
  }
}
