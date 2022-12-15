import { Component, OnInit } from '@angular/core';
import { Dice } from './Dice';

@Component({
  selector: 'my-app',
  templateUrl: './diceroll.component.html',
})
export class DicerollComponent implements OnInit {
  dice: Array<Dice> = [];

  private getDiceById(diceId): number {
    for (let i = 0; i < this.dice.length; i++) {
      if (this.dice[i].id == diceId) {
        return i;
      }
    }
    return -1;
  }

  rollDice(diceId) {
    let foundDie: number = this.getDiceById(diceId);

    if (foundDie != -1) {
      this.dice[foundDie].roll();
    }
  }

  addDice(diceId) {
    let foundDie: number = this.getDiceById(diceId);

    if (foundDie != -1) {
      this.dice[foundDie].addDice();
    }
  }

  subtractDice(diceId) {
    let foundDie: number = this.getDiceById(diceId);

    if (foundDie != -1) {
      this.dice[foundDie].subtractDice();
    }
  }

  ngOnInit() {
    this.dice.push(new Dice('d4', 4));
    this.dice.push(new Dice('d6', 6));
    this.dice.push(new Dice('d8', 8));
    this.dice.push(new Dice('d12', 12));
    this.dice.push(new Dice('d20', 20));
  }
}
