
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessPageComponent } from './success-page/success-page.component';
import { CapcthaPageComponent } from './capctha-page/capctha-page.component';
  
const routes: Routes = [
  { path: '', component: CapcthaPageComponent },
  {path: 'SucessPage', component: SuccessPageComponent}
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }