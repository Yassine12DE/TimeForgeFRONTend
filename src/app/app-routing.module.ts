import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { SettingsComponent } from './BackOffice/settings/settings.component';
import { GoalsComponent } from './FrontOffice/goals/goals.component';
import { HealthReminderComponent } from './FrontOffice/health-reminder/health-reminder.component';
import { TaskComponent } from './FrontOffice/task/task.component';

import { ListeComponent } from './BackOffice/tasks/liste/liste.component';
import { TaskemployeeComponent } from './FrontOffice/taskemployee/taskemployee.component';
import { ChatComponent } from './chat/chat.component';
import { RewardHistoryComponent } from './components/reward-history/reward-history.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { UserProductivityDetailsComponent } from './components/user-productivity-details/user-productivity-details.component';
import { TopRewardedUsersComponent } from './components/top-rewarded-users/top-rewarded-users.component';




const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  { 
    path:"",component:AllTemplateFrontComponent ,

      children: [

          {path:"", component:HomeFrontComponent},
          {path:"task", component:TaskemployeeComponent} ,
          {
            path:"chat/:userId",component:ChatComponent
          },
          {path:"reward-history/:id",component:RewardHistoryComponent},
          { path: 'user-productivity/:id', component: UserProductivityDetailsComponent },
          {path: "top-rewarded-users" , component:TopRewardedUsersComponent},
          
    ]
  },
  {
    path:"admin",component:AllTemplateBackComponent ,

    children: [

        {path:"stats", component:StatsComponent} ,
        {path:"tasks", component:ListeComponent} ,
        {path:"users",component:UserListComponent},
        {path: "settings" , component:SettingsComponent}
    ]
  },
  {
    path:"TasksList",component:TaskComponent
  },
  {
    path:"register",component:RegisterComponent
  },

  {
    path:"forgetpassword",component:ForgetPasswordComponent
  },

 
  {
    path:"goals",component:GoalsComponent
  },
  {
    path:"health",component:HealthReminderComponent
  },
  
 
  

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
