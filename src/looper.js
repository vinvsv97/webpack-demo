'use strict';

export function looper(func, times) {
  for(let i = 0; i < times; i++) {
    func();
  }
}
