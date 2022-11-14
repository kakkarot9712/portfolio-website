import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
