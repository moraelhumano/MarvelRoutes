import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "../core/guards/auth.guard";

import { ProgramListComponent } from "../core/programs/program-list/program-list.component";
import { DummyTrackComponent } from "../core/tracks/dummy-track/dummy-track.component";
import { LoginComponent } from "../core/auth/login/login.component";
import { Session0101Component } from "../sessions/session-0101/session-0101.component";
import { Session0201Component } from "../sessions/session-0201/session-0201.component";
import { Session0301Component } from "../sessions/session-0301/session-0301.component";

const routes: Routes = [
    { path: '', component: ProgramListComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'dummy-track', component: DummyTrackComponent, canActivate: [AuthGuard] },
    { path: 'session/0101', component: Session0101Component, canActivate: [AuthGuard] },
    { path: 'session/0201', component: Session0201Component ,canActivate: [AuthGuard] },
    { path: 'session/0301', component: Session0301Component, canActivate: [AuthGuard] },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
