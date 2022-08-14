import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';
import { BloglistComponent } from './Components/bloglist/bloglist.component';
import { ChildComponent } from './Components/child/child.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ParentComponent } from './Components/parent/parent.component';
import { WriteBlogComponent } from './Components/write-blog/write-blog.component';
import { AuthGuard } from './utils/auth/auth.guard';


const routes: Routes = [

  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'bloglist',
        pathMatch: 'full',
        
      },
      {
        path: 'bloglist',
        component: BloglistComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'write-blog',
        component: WriteBlogComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit-blog/:id',
        component: WriteBlogComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'blogdetails/:id',
        component: BlogDetailsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'parent',
        component: ParentComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'child',
        component: ChildComponent,
        canActivate: [AuthGuard]
      },

      
    ]}
    
      
    

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
