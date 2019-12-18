import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import { CreateFormComponent } from './create-form/create-form.component';
import {en_US, NgZorroAntdModule, NZ_I18N, NzFormModule} from 'ng-zorro-antd';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import {FormsModule} from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    CreateFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzFormModule,
    NgZorroAntdModule,
    FormsModule,
    NzDatePickerModule,
    NzTimePickerModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
