import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cliente',
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pagina/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'modalcliente',
    loadChildren: () => import('./pagina/modalcliente/modalcliente.module').then( m => m.ModalclientePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
