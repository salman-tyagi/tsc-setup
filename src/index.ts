import { NumberCollection } from './NumberCollection';
import { Sorter } from './Sorter';

const numberCollection = new NumberCollection([4, 3, -8, 7]);
const sort = new Sorter(numberCollection);

sort.sort();
console.log(numberCollection.data, `length: ${numberCollection.length}`);
