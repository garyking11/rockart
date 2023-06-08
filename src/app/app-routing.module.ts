import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
