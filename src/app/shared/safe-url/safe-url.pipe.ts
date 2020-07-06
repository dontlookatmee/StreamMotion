import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(url);
  }
}
