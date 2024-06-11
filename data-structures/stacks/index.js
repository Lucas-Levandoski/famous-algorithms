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

  remove() {
    if(this.length === 0) return null;

    const res = this.#elements.at(-1);
    this.#elements.pop();

    this.length --;

    return res;
  }

  top() {
    if(this.length === 0) return null;

    return this.#elements.at(-1);
  }

  [util.inspect.custom](depth, options) {
    return this.#elements.reverse().join('->');
  }

  toString() {
    return this.#elements.reverse().join('->');
  }
}