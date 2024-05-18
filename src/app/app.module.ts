import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterLink } from '@angular/router';
import { OverwiewComponent } from './components/pages/overwiew/overwiew.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';
import { MessagingComponent } from './components/pages/messaging/messaging.component';
import { LeaderboardComponent } from './components/pages/leaderboard/leaderboard.component';
import { CourseDetailComponent } from './components/pages/course-detail/course-detail.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './components/confirm-password/confirm-password.component';
import { ReceiveEmailCodeComponent } from './components/receive-email-code/receive-email-code.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoursePartComponent } from './components/ui/course-part/course-part.component';
import { NavbarTitleComponent } from './components/ui/navbar-title/navbar-title.component';
import { ActivityComponent } from './components/ui/activity/activity.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { CouponComponent } from './components/admin/coupon/coupon.component';
import { CourseComponent } from './components/admin/course/course.component';
import { LessonComponent } from './components/admin/lesson/lesson.component';
import { MessageComponent } from './components/admin/message/message.component';
import { QuestionComponent } from './components/admin/question/question.component';
import { UserComponent } from './components/admin/user/user.component';
import { UserActivityComponent } from './components/admin/user-activity/user-activity.component';
import { VideoComponent } from './components/admin/video/video.component';
import { QuizCRUDComponent } from './components/admin/quiz-crud/quiz-crud.component';
import { AdminAsideComponent } from './components/admin/admin-aside/admin-aside.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CreateComponent } from './components/admin/category/components/create/create.component';
import { UpdateComponent } from './components/admin/category/components/update/update.component';
import { DeleteComponent } from './components/admin/category/components/delete/delete.component';
import { GetAllComponent } from './components/admin/category/components/get-all/get-all.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    OverwiewComponent,
    CoursesComponent,
    ScheduleComponent,
    MessagingComponent,
    LeaderboardComponent,
    CourseDetailComponent,
    ProfileComponent,
    QuizComponent,
    NavbarComponent,
    AsideComponent,
    ForgotPasswordComponent,
    ConfirmPasswordComponent,
    ReceiveEmailCodeComponent,
    CoursePartComponent,
    NavbarTitleComponent,
    ActivityComponent,
    CategoryComponent,
    CouponComponent,
    CourseComponent,
    LessonComponent,
    MessageComponent,
    QuestionComponent,
    UserComponent,
    UserActivityComponent,
    VideoComponent,
    QuizCRUDComponent,
    AdminAsideComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    GetAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
