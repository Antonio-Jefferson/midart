import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { GroupsComponent } from './pages/groups/groups.component';
import { EventsComponent } from './pages/events/events.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

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
