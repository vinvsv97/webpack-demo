'use strict';

function sorter(users) {
  return _.sortBy(users, ['age', 'name']);
}