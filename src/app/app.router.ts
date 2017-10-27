import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {path: 'homepage', loadChildren: './modules/homepage#HomepageModule'},
    {path: 'am-nhac', loadChildren: './modules/homepage#HomepageModule'},
    {path: 'giai-tri', loadChildren: './modules/homepage#HomepageModule'},
    {path: 'kien-thuc', loadChildren: './modules/homepage#HomepageModule'},
    {path: 'tin-tuc', loadChildren: './modules/homepage#HomepageModule'},
    {path: 'cong-dong', loadChildren: './modules/homepage#HomepageModule'},
    {path: 'video', loadChildren: './modules/homepage#HomepageModule'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);