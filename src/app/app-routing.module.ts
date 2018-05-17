import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {HomeComponent} from './home/home.component';
import {GridComponent} from './grid/grid.component';
import {BottonSheetComponent} from "./botton-sheet/botton-sheet.component";

const routes: Routes = [
  {path: 'heroes', component: MainDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dialog', component: BottonSheetComponent},
  {path: 'tabs', component: GridComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
