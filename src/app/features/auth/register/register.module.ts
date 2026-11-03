
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule
  ]
})
export class RegisterPageModule {}
