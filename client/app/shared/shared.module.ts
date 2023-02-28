import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastComponent } from './dialogs/toast/toast.component';
import { LoadingComponent } from './loading/loading.component';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { DialogsComponent } from './dialogs/dialogs.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    // Shared Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Shared Components
    LoadingComponent,
    DialogsComponent
  ],
  declarations: [
    ToastComponent,
    LoadingComponent,
    ConfirmComponent,
    DialogsComponent
  ],
  providers: [
    ToastComponent
  ]
})
export class SharedModule { }
