import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error/error-404/error-404.component";
import { IndexComponent } from "./component/index/index.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: IndexComponent
        //path: '', redirectTo: '', pathMatch: 'full' //quando passar url em branco, irá redirecionar para a rota de cursos
      },
      {
        path: '**', component: Error404Component //quando acessar url que não existe
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule{

}
