import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { TablesComponent } from './BackOffice/tables/tables.component';
import { SettingsComponent } from './BackOffice/settings/settings.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NgChartsModule } from 'ng2-charts';

import { GoalsComponent } from './FrontOffice/goals/goals.component';
import { HealthReminderComponent } from './FrontOffice/health-reminder/health-reminder.component';
import { HealthReminderService } from './FrontOffice/service/health-reminder.service';
import { TaskComponent } from './FrontOffice/task/task.component';
import { ListeComponent } from './BackOffice/tasks/liste/liste.component';
import { TokenInterceptor } from './Interceptor/token-interceptor';
import { TaskemployeeComponent } from './FrontOffice/taskemployee/taskemployee.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RewardHistoryComponent } from './components/reward-history/reward-history.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FilterPipe } from './filter.pipe';
import { UserProductivityDetailsComponent } from './components/user-productivity-details/user-productivity-details.component';
import { TopRewardedUsersComponent } from './components/top-rewarded-users/top-rewarded-users.component';
import { UserProfileComponent } from './FrontOffice/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateFrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    StatsComponent,
    TablesComponent,
    SettingsComponent,
    GoalsComponent,
    HealthReminderComponent,
    TaskComponent,
    ListeComponent,
    TaskemployeeComponent,
    ChatComponent,
    RewardHistoryComponent,
    UserListComponent,
    FilterPipe,
    UserProductivityDetailsComponent,
    TopRewardedUsersComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    ButtonModule,
    NgChartsModule
  ],
  providers: [
    HealthReminderService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }