import { Component } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { HeaderActions } from "../header-actions/header-actions";
@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions],
  template: `
  <mat-toolbar class="w-full elevated">
   <div class="max-w-[1200px] mx-auto w-full flex items-center justify-between"> <span>
    Restaurant Website
   </span>
   <app-header-actions/>
    </div>
  </mat-toolbar>
  `,
  styles: ``,
})
export class Header {

}
