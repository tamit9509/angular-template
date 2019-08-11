import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
    )
  ]
})
export class UsersModule {
  constructor() {
    console.log('dfghjkl');
  }
}
