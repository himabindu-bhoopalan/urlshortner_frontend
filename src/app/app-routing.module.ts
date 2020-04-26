import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewurlComponent } from './viewurl/viewurl.component';


const routes: Routes = [
  {
    path:'view',
    component:ViewurlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
