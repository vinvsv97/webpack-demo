'use strict';

import * as _ from 'lodash';

export function sorter(users) {
  return _.sortBy(users, ['age', 'name']);
}