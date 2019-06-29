import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//rutas personalizadas
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewExaComponent } from './view-exa/view-exa.component';
import { MedicComponent } from './medic/medic.component';
import { NewmedicComponent } from './newmedic/newmedic.component';
import { UserComponent } from './user/user.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { OldReservationsComponent } from './oldreservations/oldreservations.component';
import { NewUserComponent } from './newuser/newuser.component';
import { PatientsComponent } from './patients/patients.component';
import { NewPacientComponent } from './newpacient/newpacient.component';
import { AddExaComponent } from './add-exa/add-exa.component';
import { EditmedicComponent } from './editmedic/editmedic.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'view-exa', component: ViewExaComponent},
  {path: 'medic', component: MedicComponent},
  {path: 'newmedic', component: NewmedicComponent},
  {path: 'user', component: UserComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newuser', component: NewUserComponent},
  {path: 'oldreservations', component: OldReservationsComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'newpacient',component:NewPacientComponent},
  {path: 'add-exa',component:AddExaComponent},
  {path: 'editpacient',component:EditUserComponent},
  {path: 'editmedic',component:EditmedicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
