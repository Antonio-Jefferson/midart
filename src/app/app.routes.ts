import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardLayoutComponent } from './components/layout/dashboard-layout/dashboard-layout.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { GroupsComponent } from './components/pages/groups/groups.component';
import { EventsComponent } from './components/pages/events/events.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';

export const routes: Routes = [
    {path: "",component: LoginComponent},
    {path: "register",component: RegisterComponent},

    {
        path: "dashboard",
        component: DashboardLayoutComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: "home", component: HomeComponent },
            { path: "profile", component: ProfileComponent },
            { path: "groups", component: GroupsComponent },
            { path: "events", component: EventsComponent },
            { path: "notifications", component: NotificationsComponent },
            { path: "favorites", component: FavoritesComponent },
        ]
    },
    {path: 'dashboard', redirectTo: 'dashboard/home', pathMatch: 'full' },
    {path: "**", component: NotFoundPageComponent},

];
