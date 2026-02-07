import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './componensts/starter-header/starter-header.component';
import { StarterFooterComponent } from './componensts/starter-footer/starter-footer.component';
import { StarterMainSliderComponent } from './componensts/starter-home-context/inner-items/starter-main-slider/starter-main-slider.component';
import { StarterMainServicesComponent } from './componensts/starter-home-context/inner-items/starter-main-services/starter-main-services.component';
import { StarterPricingComponent } from './componensts/starter-pricing/starter-pricing.component';
import { StarterHomeContextComponent } from './componensts/starter-home-context/starter-home-context.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterMainSliderComponent,
    StarterMainServicesComponent,
    StarterPricingComponent,
    StarterHomeContextComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
