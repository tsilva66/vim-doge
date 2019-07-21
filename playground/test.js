// =============================================================================
//
// Vanilla
//
// =============================================================================

/**
 * TODO
 *
 * @function
 * @param {[TODO:type]} window [TODO:description]
 * @param {[TODO:type]} document [TODO:description]
 * @param {[TODO:type]} $ [TODO:description]
 */
((window, document, $) => {

  /**
   * TODO
   *
   * @param {string} $p1 [TODO:description]
   */
  function myFunc($p1: string = 'value') {}

})(window, document, jQuery);

/**
 * TODO
 *
 * @function Person#greet
 * @param {string} p1 [TODO:description]
 * @param {Immutable.List} p2 [TODO:description]
 * @return {string[]} [TODO:description]
 */
Person.prototype.greet = function (p1: string = 'default', p2: Immutable.List = Immutable.List()): string[] {
  //
};

/**
 * TODO
 *
 * @function Person#greet
 */
Person.prototype.greet = function () {}

/**
 * TODO
 *
 * @function perfectSquares
 */
perfectSquares = function*() {
  var num;
  num = 0;
  while (true) {
    num += 1;
    yield num * num;
  }
};

/**
 * TODO
 *
 * @async
 * @function perfectSquares
 */
perfectSquares = async function*() {
  var num;
  num = 0;
  while (true) {
    num += 1;
    yield num * num;
  }
};

/**
 * TODO
 *
 * @async
 * @function myFunc
 * @param {[TODO:type]} $p1 [TODO:description]
 * @param {[TODO:type]} p2 [TODO:description]
 * @param {[TODO:type]} p3 [TODO:description]
 * @param {[TODO:type]} p4 [TODO:description]
 */
var myFunc = async function*($p1 = 'value', p2 = [], p3, p4) {}

/**
 * TODO
 *
 * @async
 * @function myFunc
 * @param {[TODO:type]} $p1 [TODO:description]
 * @param {[TODO:type]} p2 [TODO:description]
 * @param {[TODO:type]} p3 [TODO:description]
 * @param {[TODO:type]} p4 [TODO:description]
 */
var myFunc = async ($p1 = 'value', p2 = [], p3, p4) => {}

/**
 * TODO
 *
 * @param {string} $p1 [TODO:description]
 * @param {Foo|Bar|Baz} p2 [TODO:description]
 * @return {Foo|Bar} [TODO:description]
 */
function myFunc($p1: string, p2: Foo | Bar | Baz): (Foo | Bar) {}

/**
 * TODO
 *
 * @function Person#greet
 */
Person.prototype.greet = () => {}

/**
 * TODO
 *
 * @function myFunc
 * @param {[TODO:type]} $p1 [TODO:description]
 * @param {[TODO:type]} p2 [TODO:description]
 * @param {[TODO:type]} p3 [TODO:description]
 * @param {[TODO:type]} p4 [TODO:description]
 */
var myFunc = function($p1 = 'value', p2 = [], p3, p4) {}

/**
 * TODO
 *
 * @function myFunc
 * @param {string} $p1 [TODO:description]
 * @param {string[]} p2 [TODO:description]
 * @param {number} p3 [TODO:description]
 * @param {float} p4 [TODO:description]
 * @return {string[]} [TODO:description]
 */
var myFunc = function($p1: string = 'value', p2: string[] = [], p3: number, p4: float): string[]  {}

/**
 * TODO
 *
 * @param {[TODO:type]} p1 [TODO:description]
 */
function myFunc(p1) {
  var a = 2;
}

var myObj = {
  myFunc: function() {
    /**
     * TODO
     *
     * @param {string} p1 [TODO:description]
     * @param {Immutable.List} p2 [TODO:description]
     */
    function(p1: string = 'default', p2: Immutable.List = Immutable.List()) {
      var a = 2;
    };

    /* This function should be ignored by DoGe because of the 'return' prefix */
    return function() {
      //
    }
  },
};

// =============================================================================
//
// Node & ES6
//
// =============================================================================

/**
 * TODO
 *
 * @function user
 * @param {[TODO:type]} p1 [TODO:description]
 */
const user = (p1 = 'default') => (subp1, subp2 = 'default') => 5;

/**
 * TODO
 *
 * @function
 * @return {number[]} [TODO:description]
 */
(): number[] => { };

/**
 * TODO
 *
 * @function user
 * @param {string} p1 [TODO:description]
 * @param {int} p2 [TODO:description]
 * @param {[TODO:type]} p3 [TODO:description]
 * @param {Immutable.List} p4 [TODO:description]
 * @param {string[]} p5 [TODO:description]
 * @param {float} p6 [TODO:description]
 * @return {number[]} [TODO:description]
 */
const user = (p1: string = 'default', p2: int = 5, p3, p4: Immutable.List = [], p5: string[] = [], p6: float = 0.5): number[] => { };

const myObj = {
  myFunc: () => {
    return () => {
      //
    },
  },

  /**
   * TODO
   *
   * @param {string} p1 [TODO:description]
   * @param {int} p2 [TODO:description]
   * @return {string} [TODO:description]
   */
  myFunc(p1: string, p2: int = 5): string {
    //
  }
};


// =============================================================================
//
// Flow js (can be used e.g. in React projects)
//
// =============================================================================

const bar: number = 2;
let foo: number = 1;
let isOneOf: number | boolean | string = foo;

/**
 * TODO
 *
 * @param {any} one [TODO:description]
 * @param {any} two [TODO:description]
 * @return {number} [TODO:description]
 */
function add(one: any, two: any = 'default'): number {}

// =============================================================================
//
// Typescript (iirc, if we fix flowjs, we also fix typescript and vice-versa.)
//
// =============================================================================
const bar: number = 2;
let foo: number = 1;
let sn: string | null = "bar";
let Easing = "ease-in" | "ease-out" | "ease-in-out" = "ease-in";

/**
 * TODO
 *
 * @function
 * @param {array} p1 [TODO:description]
 */
(p1: array = []) => (p2: string) => { console.log(5); }

/**
 * TODO
 *
 * @param {History} history [TODO:description]
 * @param {object} initialState [TODO:description]
 * @return {Store<AppState>} [TODO:description]
 */
export function configureStore(history: History, initialState: object): Store<AppState> {}

/**
 * TODO
 *
 * @param {History} history [TODO:description]
 * @param {object} initialState [TODO:description]
 * @return {Store<AppState>} [TODO:description]
 */
function configureStore(history: History, initialState: object): Store<AppState> {}

/**
 * TODO
 *
 * @function configureStore
 * @param {History} history [TODO:description]
 * @param {object} initialState [TODO:description]
 * @return {Store<AppState>} [TODO:description]
 */
const configureStore = (history: History, initialState: object): Store<AppState> => {}

/**
 * TODO
 *
 * @return {1|2|3|4|5|6} [TODO:description]
 */
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {}

/**
 * TODO
 *
 * @return {1|2|3|4|5|6} [TODO:description]
 */
function rollDice(): (1 | 2 | 3 | 4 | 5 | 6) {}

/**
 * TODO
 *
 * @param {T} o [TODO:description]
 * @param {K[]} names [TODO:description]
 * @return {T[K][]} [TODO:description]
 */
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {}

/**
 * TODO
 *
 * @param {Fish|Bird} pet [TODO:description]
 * @param {[User]} users [TODO:description]
 * @return {[User, Fish]} [TODO:description]
 */
function isFish(pet: Fish | Bird, users: [User]): [User, Fish] {}

/**
 * TODO
 *
 * @param {any} x [TODO:description]
 * @return {x is number} [TODO:description]
 */
function isNumber(x: any): x is number {}

/**
 * TODO
 *
 * @function
 * @param {int} p1 [TODO:description]
 */
(p1: int = 5) => { console.log(5); }

/**
 * TODO
 *
 * @function
 * @param {array} p1 [TODO:description]
 * @return {Sequence[T]} [TODO:description]
 */
(p1: array = []): Sequence[T] => { console.log(5); }

/**
 * TODO
 *
 * @function
 * @param {array} p1 [TODO:description]
 * @return {Sequence[undefined, Sequnence[T], None, 5]} [TODO:description]
 */
(p1: array = []): Sequence[undefined, Sequnence[T], None, 5] => { console.log(5); }

/**
 * TODO
 *
 * @function user1
 * @param {array} p1 [TODO:description]
 * @return {Sequence[undefined, Sequnence[T], None, 5]} [TODO:description]
 */
const user1 = (p1: array = []): Sequence[undefined, Sequnence[T], None, 5] => { console.log(5); }

/**
 * TODO
 *
 * @function user2
 * @param {array} p1 [TODO:description]
 * @return {Sequence[undefined, Sequnence[T], None, 5]} [TODO:description]
 */
let user2 = (p1: array = []): Sequence[undefined, Sequnence[T], None, 5] => { console.log(5); }

/**
 * TODO
 *
 * @function user3
 * @param {array} p1 [TODO:description]
 * @return {Sequence[undefined, Sequnence[T], None, 5]} [TODO:description]
 */
var user3 = (p1: array = []): Sequence[undefined, Sequnence[T], None, 5] => { console.log(5); }

/**
 * TODO
 *
 * @function $_123user3
 * @param {array} p1 [TODO:description]
 * @return {x is number} [TODO:description]
 */
const $_123user3 = (p1: array = []): x is number => { console.log(5); }

/**
 * TODO
 *
 * @function rollDice
 * @param {array} p1 [TODO:description]
 * @return {1|2|3|4|5|6} [TODO:description]
 */
const rollDice = (p1: array = []): 1 | 2 | 3 | 4 | 5 | 6 => { console.log(5); }

/**
 * TODO
 *
 * @function rollDice
 * @return {1|2|3|4|5|6} [TODO:description]
 */
const rollDice = (): 1 | 2 | 3 | 4 | 5 | 6 => { console.log(5); }

/**
 * TODO
 *
 * @function myFunc
 * @param {[TODO:type]} children [TODO:description]
 * @return {PropTypes.Element|null} [TODO:description]
 */
const myFunc = ({ children }): (PropTypes.Element | null) => (
  <div>...</div>
);

/**
 * TODO
 *
 * @function myFunc
 * @param {[TODO:type]} children [TODO:description]
 */
const myFunc = ({ children }) => {
  <div>...</div>
};

/**
 * TODO
 *
 * @function rollDice
 * @param {array} p1 [TODO:description]
 * @return {1|2|3|4|5|6} [TODO:description]
 */
const rollDice = (p1: array = []): (1 | 2 | 3 | 4 | 5 | 6) => { console.log(5); }

/**
 * TODO
 *
 * @function rollDice
 * @return {1|2|3|4|5|6} [TODO:description]
 */
const rollDice = () : (1 | 2 | 3 | 4 | 5 | 6) => { console.log(5); }

/**
 * TODO
 *
 * @function add
 * @param {number} b [TODO:description]
 * @return {number|Fish} [TODO:description]
 */
const add = (b: number): number | Fish => { console.log(5); }

/**
 * TODO
 *
 * @implements Padder
 */
class SpaceRepeatingPadder implements Padder {
  /**
   * TODO
   *
   * @param {number} numSpaces [TODO:description]
   */
  constructor(private numSpaces: number) { }

  /**
   * TODO
   *
   * @return {string} [TODO:description]
   */
  getPaddingString(): string {
    return Array(this.numSpaces + 1).join(" ");
  }
}

/**
 * TODO
 *
 */
class Adder {
  /**
   * TODO
   *
   * @function constructor
   * @param {number} a [TODO:description]
   */
  constructor = (public a: number) => {}

  /**
   * TODO
   *
   * @function add
   * @param {number} b [TODO:description]
   * @return {number} [TODO:description]
   */
  add = (b: number): number => {
    return this.a + b;
  }
}

/**
 * TODO
 *
 */
class Child {}

/**
 * TODO
 *
 */
export class Child {}

/**
 * TODO
 *
 * @extends Parent
 */
class Child extends Parent {}

/**
 * TODO
 *
 * @extends Parent
 */
export class Child extends Parent {}

/**
 * TODO
 *
 * @implements CustomInterfaceName
 */
class Child implements CustomInterfaceName {}

/**
 * TODO
 *
 * @implements CustomInterfaceName
 */
export class Child implements CustomInterfaceName {}

/**
 * TODO
 *
 * @extends Parent
 * @implements CustomInterfaceName
 */
class Child extends Parent implements CustomInterfaceName {}

/**
 * TODO
 *
 * @extends Parent
 * @implements CustomInterfaceName
 */
export class Child extends Parent implements CustomInterfaceName {}

/**
 * TODO
 *
 * @function myFunc
 * @param {string} $p1 [TODO:description]
 * @param {string[]} p2 [TODO:description]
 * @param {number} p3 [TODO:description]
 * @param {float} p4 [TODO:description]
 * @return {string[]} [TODO:description]
 */
const myFunc = ($p1: string = 'value', p2: string[] = [], p3: number, p4: float): string[]  {}

/**
 * TODO
 *
 * @extends Parent
 */
class Child extends Parent {
  /**
   * TODO
   *
   * @param {number} b [TODO:description]
   */
  myMethod(public b: number) {
    return this.add(b);
  }

  /**
   * TODO
   *
   * @function myMethod
   * @param {number} b [TODO:description]
   */
  myMethod = (b: number) => {
    return this.add(b);
  }

  /**
   * TODO
   *
   * @param {number} b [TODO:description]
   * @return {number} [TODO:description]
   */
  myMethod({ b: number }): number {
    return this.add(b);
  }

  /**
   * TODO
   *
   * @function myMethod
   * @param {number} b [TODO:description]
   */
  mMethod = ({ b: number }) => {
    return this.add(b);
  }
}
