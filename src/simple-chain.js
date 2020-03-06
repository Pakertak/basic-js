const chainMaker = {
  array : [],
  getLength() {
    return this.array;
  },
  addLink(value) {
   this.array.push(value);
   return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.array.length - 1 || position < 1) {
			this.array = [];
			throw new Error();
		}
		this.array.splice(position - 1, 1);
		return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const result = this.array.reduce((str, item, i) => {
			(i == this.array.length - 1)? str += `( ${item} )`: str += `( ${item} )~~`;
			return str;
		},'');
		this.array = [];
		return result;
  }
};

module.exports = chainMaker;
