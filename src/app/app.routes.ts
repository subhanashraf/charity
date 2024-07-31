import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LatestCausesComponent } from './latest-causes/latest-causes.component';
import { SocialEventsComponent } from './social-events/social-events.component';

export const routes: Routes = [
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'latest-causes',
        component:LatestCausesComponent
    },
    {
        path:'social-events',
        component:SocialEventsComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path: '', // Empty path for default route
        redirectTo: 'home', // Redirect to the 'home' path
        pathMatch: 'full' // Match the entire path
    }
];
