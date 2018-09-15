import { ListComponent } from './list/list.component';
import { ServicesComponent } from './services/services.component';

export const Routes = [
    { path: 'services', component: ServicesComponent, icon: 'cloud', title: 'Services' },
    { path: 'files', component: ListComponent, icon: 'folder', title: 'File Manager' },
];
