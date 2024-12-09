import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "entre-em-contato", component: FormComponent }

];
