function Queue() {
	this._tail = 0;
	this._head = 0;
	this._queue = [];
}

Queue.prototype.size = function() {
	return this._tail - this._head;
};

Queue.prototype.enqueue = function(data) {
	this._queue[this._tail] = data;
	this._tail++;
};

Queue.prototype.dequeue = function() {
	var toReturn = this._queue[this._head];
	this._head < this._tail ? this._head++ : this._head;
	return toReturn
};