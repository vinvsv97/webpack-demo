'use strict';

import {printer} from './printer';
import {looper} from './looper';
import {sorter} from './sorter';
let users = [
  {
    name: "Joel",
    age: 27,
  },
  {
    name: "Evan",
    age: 21,
  },
  {
    name: "Mike",
    age: 26,
  },
  {
    name: "Dave",
    age: 41,
  },
  {
    name: "Jessica",
    age: 19,
  },
  {
    name: "Bobby",
    age: 12,
  },
  {
    name: "Louis",
    age: 22,
  },
];

looper(() => {
  printer(() => {
    return sorter(users);
  })
}, 10);
