import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule
  ]
})
export class SecurityModule { }
