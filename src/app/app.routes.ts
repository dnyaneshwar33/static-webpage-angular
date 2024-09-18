import { Routes } from '@angular/router';
import { AttDirectiveComponent } from './components/att-directive/att-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { IfelseComponent } from './components/control/ifelse/ifelse.component';
import { PipesComponent } from './components/control/pipes/pipes.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { GetapiComponent } from './components/getapi/getapi.component';
import { PostapiComponent } from './components/postapi/postapi.component';
import { NgtemplateComponent } from './components/templates/ngtemplate/ngtemplate.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
       path:'',
       redirectTo:'login',
       pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent

    },
    {
        path:'',
        component:LayoutComponent,
        children:[{
            path: 'att-directive',
            component: AttDirectiveComponent
        },
    
        {
            path: 'databinding',
            component: DataBindingComponent
        },
        {
            path: 'directive',
            component: DirectiveComponent
        },
        {
            path: 'ifelse',
            component: IfelseComponent
        }, {
            path: 'pipe',
            component: PipesComponent
        },
        {
            path: 'template',
            component: TemplateformComponent
    
        },
        {
            path: 'reactive',
            component: ReactiveformComponent
        },
        {
            path: 'getapi',
            component: GetapiComponent
        }
        , {
            path: 'postapi',
            component: PostapiComponent
        },
        {
            path: 'ngtemplate',
            component: NgtemplateComponent
        }]

    },
    
];
