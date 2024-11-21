import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AdditionalFComponent } from './additional-f/additional-f.component';
import { AccSettingsComponent } from './acc-settings/acc-settings.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashBoard', component: DashboardComponent},
    {path: 'taskManager', component: TaskManagerComponent},
    {path: 'additionalFeature', component: AdditionalFComponent},
    {path: 'accSettings', component: AccSettingsComponent}
];
