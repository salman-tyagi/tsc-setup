class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): number[] {
    let temp: number;

    for (let i = 0; i < this.collection.length; i++) {
      for (let j = i + 1; j < this.collection.length; j++) {
        if (this.collection[i] > this.collection[j]) {
          temp = this.collection[i];
          this.collection[i] = this.collection[j];
          this.collection[j] = temp;
        }
      }
    }

    return this.collection;
  }
}

const sort = new Sorter([4, 3, -8, 11]);
console.log(sort.sort());
