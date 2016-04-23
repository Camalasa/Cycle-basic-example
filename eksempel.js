import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';
import Rx from 'rx';

function main() {
  return {
    DOM: Rx.Observable.interval(100)
    .map(i => CycleDOM.h1('Update: ' + i + ' seconds elapsed'))
  };
}

const drivers = {
  DOM: CycleDOM.makeDOMDriver('#app')
};

Cycle.run(main, drivers);
