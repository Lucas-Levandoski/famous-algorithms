import util from 'util';

export class Stack {
  #elements = [];
  length = 0;

  constructor(elements) {
    this.#elements.push(...elements.reverse());
    this.length = elements.length;
  }

  add(element) {
    this.#elements.push(...element);
    this.length ++;
  }

  pop() {
    if(this.length === 0) return null;

    const res = this.#elements.at(-1);
    this.#elements.pop();

    this.length --;

    return res;
  }

  get top() {
    if(this.length === 0) return null;

    return this.#elements.at(-1);
  }

  set top(element) {
    if(this.length === 0) return null;

    this.#elements[this.length - 1] = element;
  }

  [util.inspect.custom](depth, options) {
    return this.#elements.reverse().join('->');
  }

  toString() {
    return this.#elements.reverse().join('->');
  }
}