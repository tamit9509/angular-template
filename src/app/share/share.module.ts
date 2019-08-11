import { BreadcrumbComponent } from './navbar/breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  entryComponents: [SidebarComponent],
  exports: [
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent,
    RouterModule
  ]
})
export class ShareModule { }
