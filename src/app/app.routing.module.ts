import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicerollComponent } from './components/diceroll/diceroll.component';

@NgModule({
  declarations: [DicerollComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'quickroll', component: DicerollComponent },
      { path: '**', redirectTo: 'quickroll' },
    ]),
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
