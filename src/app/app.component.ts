import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
      this.dice[foundDie].result = 0;
      for (let num = 0; num < this.dice[foundDie].amount; num++) {
        this.dice[foundDie].result +=
          Math.floor(Math.random() * this.dice[foundDie].sides) + 1;
      }
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

class Dice {
  amount: number = 1;
  result: number = 0;
  id: string;
  sides: number;

  constructor(id, sides) {
    this.id = id;
    this.sides = sides;
  }
}
