import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { CustomEventBindingComponent } from './custom-event-binding/custom-event-binding.component';
import { CustomPropertyBindingComponent } from './custom-property-binding/custom-property-binding.component';
import { RoutingComponent } from './routing/routing.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'databinding', component: DataBindingComponent},
  {path: 'stringinterpolation', component: StringInterpolationComponent},
  {path: 'propertybinding', component: PropertyBindingComponent},
  {path: 'eventbinding', component: EventBindingComponent},
  {path: 'twowaydatabinding', component: TwoWayDataBindingComponent},
  {path: 'custompropertybinding', component: CustomPropertyBindingComponent},
  {path: 'customeventbinding', component: CustomPropertyBindingComponent},
  {path: 'route', component: RoutingComponent},
  {path: 'routing/:params', component: RouteParamsComponent},
  {path: 'directives', component: DirectivesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    CustomEventBindingComponent,
    CustomPropertyBindingComponent,
    RoutingComponent,
    RouteParamsComponent,
    DirectivesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
