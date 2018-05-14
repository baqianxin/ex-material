import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'heroes', component: MainDashboardComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
