import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor(public data: number[]) {
    super( )
  }

  get length(): number {
    return this.data.length;
  }
  compare(leftInex: number, rightIndex: number): boolean {
    return this.data[leftInex] > this.data[rightIndex];
  }

  swap(leftInex: number, rightIndex: number): void {
    const leftHand = this.data[leftInex];
    this.data[leftInex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
