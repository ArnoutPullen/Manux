import { ListComponent } from './list/list.component';

export const Routes = [
    { path: 'services', component: ListComponent, icon: 'cloud', title: 'Services' },
    { path: 'files', component: ListComponent, icon: 'folder', title: 'File Manager' },
];
