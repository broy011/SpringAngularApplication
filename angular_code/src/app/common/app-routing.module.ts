import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




import { DemoComponent } from '../components/demo/demo.component';
import { LoginComponent } from '../components/login/login.component';

const appRoutes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'demo', component: DemoComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
