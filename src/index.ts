import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([3, 2, -5, 4]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('apple');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(5);
linkedList.add(-2);
linkedList.add(0);

linkedList.sort();
linkedList.print();
