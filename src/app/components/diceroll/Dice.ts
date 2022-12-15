export class Dice {
  amount: number = 1;
  result: number = 0;
  id: string;
  sides: number;

  constructor(id, sides) {
    this.id = id;
    this.sides = sides;
  }

  roll() {
    this.result = 0;
    for (let num = 0; num < this.amount; num++) {
      this.result += Math.floor(Math.random() * this.sides) + 1;
    }
  }
}
