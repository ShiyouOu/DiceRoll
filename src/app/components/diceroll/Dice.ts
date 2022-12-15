export class Dice {
  amount: number = 1;
  result: number = 0;
  id: string;
  sides: number;
  rolls: Array<number> = [];

  constructor(id, sides) {
    this.id = id;
    this.sides = sides;
  }

  roll() {
    this.result = 0;
    this.rolls = [];
    for (let num = 0; num < this.amount; num++) {
      let randomNum = Math.floor(Math.random() * this.sides) + 1;
      this.result += randomNum;
      this.rolls.push(randomNum);
    }
  }

  addDice() {
    this.amount++;
  }

  subtractDice() {
    if (this.amount > 0) {
      this.amount--;
    }
  }
}
