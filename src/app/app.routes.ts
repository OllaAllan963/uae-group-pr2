import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CompaniesComponent } from './pages/companies/companies.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about-us', component: AboutComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'companies/:slug', component: CompaniesComponent, },
    { path: '**', component: NotFoundComponent },
];
