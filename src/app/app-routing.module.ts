import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseExempleComponent } from './promise-exemple/promise-exemple.component';

const routes: Routes = [
  { path: '', component : PromiseExempleComponent },
  { path: 'exemple', component : PromiseExempleComponent },
  { path: '**', component : PromiseExempleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
