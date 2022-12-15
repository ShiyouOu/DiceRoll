import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicerollComponent } from './components/diceroll/diceroll.component';
import { DrawerComponent } from './components/diceroll/drawer.component';

@NgModule({
  declarations: [DicerollComponent, DrawerComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'quickroll', component: DicerollComponent },
      { path: 'drawer', component: DrawerComponent },
      { path: '**', redirectTo: 'quickroll' },
    ]),
    CommonModule,
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
