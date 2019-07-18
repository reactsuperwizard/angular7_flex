import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule,
    MatTooltipModule, MatProgressBarModule, MatSlideToggleModule, MatDialogModule, MatMenuModule, MatSliderModule,
    MatTabsModule, MatCheckboxModule, MatRadioModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
    MatSortModule, MatPaginatorModule, MatSnackBarModule,MatGridListModule,MatButtonToggleModule
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FlexLayoutModule,
        // Material Modules
        MatGridListModule,
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSliderModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        CdkTableModule, 
        MatSnackBarModule,
        MatSortModule,
        MatPaginatorModule,
        // Chart module
        MatButtonToggleModule
    ],
    exports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FlexLayoutModule,
        // Material Modules
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSliderModule,
        MatSliderModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        CdkTableModule,        
        MatSortModule,
        // Chart module
        MatGridListModule,
        MatButtonToggleModule,
        MatPaginatorModule
    ],
    declarations: [],
    providers: [
    ],
    entryComponents: []
})

export class MaterialModule { }
