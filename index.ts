import { from } from 'rxjs';
import { map } from 'rxjs/operators';

//emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
const source = from([
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ryan', age: 50 },
]);
//grab each persons name, could also use pluck for this scenario
const example = source.pipe(
  map(({ name, age }) => {
    name;
    return name + ' : ' + age + 5;
  })
);
//output: "Joe","Frank","Ryan"
const subscribe = example.subscribe((val) => console.log(val));
