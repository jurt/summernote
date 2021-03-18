import {Directive, ElementRef, NgZone} from '@angular/core';
import {NgxSummernoteDirective} from 'ngx-summernote';
import {HttpClient} from '@angular/common/http';

@Directive({
  selector: '[appSummernote]'
})
export class SummernoteDirective extends NgxSummernoteDirective {

  constructor(el: ElementRef, zone: NgZone, http: HttpClient) {
    super(el, zone, http);
  }

  // @ts-ignore
  set summernoteModel(content) {
    // @ts-ignore
    this.createEditor();
    // @ts-ignore
    this.updateEditor(content);
  }

}
