import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import { StarterPricingComponent } from './componensts/starter-pricing/starter-pricing.component';
import { StarterHomeContextComponent } from './componensts/starter-home-context/starter-home-context.component';

const routes: Routes = [{ path: '', component: StarterComponent ,children:[
  {path:'',redirectTo:'/starter/home',pathMatch:'full'},
  {path:'pricing',component:StarterPricingComponent},
  {path:'home',component:StarterHomeContextComponent}

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
