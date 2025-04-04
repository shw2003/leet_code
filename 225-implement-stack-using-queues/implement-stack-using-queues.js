
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let size = this.queue.length;
    this.queue.push(x);

    while(size > 0) {
        this.queue.push(this.queue.shift());
        size--;
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.length === 0 ? -1 : this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     return this.queue.length === 0 ? -1 : this.queue[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
       return this.queue.length === 0;
 
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */