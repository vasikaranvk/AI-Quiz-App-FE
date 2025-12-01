import { Routes } from '@angular/router';
import { QuizMasterComponent } from './quiz-master/quiz-master.component';
import { ParticipantComponent } from './participant/participant.component';

export const routes: Routes = [
  { path: '', component: QuizMasterComponent },
  { path: 'join/:sessionId', component: ParticipantComponent },
  { path: '**', redirectTo: '' }
];
