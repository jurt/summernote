import {AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NgxSummernoteDirective} from 'ngx-summernote';
import {SummernoteDirective} from './summernote.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SummernoteDirective]
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private cd: ChangeDetectorRef) {
  }

  body1 = null;
  body2 = null;
  body3 = '<p>wrapper directive</p>';


  // @ViewChild(NgxSummernoteDirective) editor: NgxSummernoteDirective; (2)
  @ViewChildren(NgxSummernoteDirective) editors: QueryList<NgxSummernoteDirective>;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.editor.writeValue('<p>write value</p>'); (2)
    this.editors.get(1).writeValue('<p>write value</p>');

    // (1) this assignment should happen when data is arrived AND editor is init
    // console.log(this.editors.get(1)._$element);  <-- _$element private prop
    // holds reference to native DOM element of editor (where null ref exception happened originally)
    this.body1 = '<p>late init</p>';
    // (1) this is need to avoid ExpressionChangedAfterItHasBeenCheckedError
    this.cd.detectChanges();
  }

  // (2)
  modelChange($event: any): void {
    this.body2 = $event;
  }

}

// 1. delay setting model while editor not init
// 2. not use two way binding, but use summernote's writeValue/onModelChange
// (reference to directive will be needed via @ViewChild(NgxSummernoteDirective) )
// 3. wrapper directive (overriding set model as suggested at https://github.com/lula/ngx-summernote/issues/80)
