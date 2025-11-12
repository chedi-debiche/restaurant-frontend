import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActions } from "../header-actions/header-actions";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, HeaderActions],
  template: `
    <mat-toolbar class="w-full bg-white sticky top-0 z-50 header-shadow">
      <div class="max-w-[1200px] mx-auto w-full flex items-center justify-between">
        <span class="text-lg font-medium">Restaurant Website</span>
        <app-header-actions />
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .header-shadow {
      background-color: #fff;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1); /* 🌫️ fine ligne grise en bas */
    }
  `],
})
export class Header {}
