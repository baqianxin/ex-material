import 'hammerjs';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ElModule} from 'element-angular';
import {LayoutModule} from '@angular/cdk/layout';
import {MainTableComponent} from './main-table/main-table.component';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {AppComponent} from './app.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {GridComponent} from './grid/grid.component';
import {
  BottonSheetComponent,
  BottomSheetOverviewExampleSheet,
  DialogOverviewExampleDialog
} from './botton-sheet/botton-sheet.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form.component';

@NgModule({
  entryComponents: [BottonSheetComponent, BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog],
  declarations: [
    AppComponent,
    MainNavComponent,
    MainTableComponent,
    MainDashboardComponent,
    HomeComponent,
    GridComponent,
    BottonSheetComponent,
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog,
    ButtonComponent,
    FormComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ElModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
