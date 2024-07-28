import { NumberCollection } from './NumberCollection';

export class Sorter {
  constructor(public collection: NumberCollection) {}

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = i + 1; j < this.collection.length; j++) {
        if (this.collection.compare(i, j)) {
          this.collection.swap(i, j);
        }
      }
    }
  }
}
