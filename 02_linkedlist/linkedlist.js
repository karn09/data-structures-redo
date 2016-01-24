function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(data) {
	this.value = data;
	this.next = null;
	this.previous = null;
}

LinkedList.prototype.removeHead = function() {
	if (!this.head) {
		return;
	}

	var toReturn = this.head.value;
	this.head = this.head.next;
	if (this.head) {
		this.head.previous = null
	} else {
		this.tail = null;
	}
	return toReturn;
};

LinkedList.prototype.addToHead = function(data) {
	var node = new Node(data);
	if (!this.head) {
		this.head = node;
		this.tail = this.head;
	} else {
		node.next = this.head;
		this.head.previous = node;
		this.head = node;
	}
};

LinkedList.prototype.addToTail = function(data) {
	var node = new Node(data);
	if (!this.tail) {
		this.tail = node;
		this.head = this.tail;
	} else {
		node.previous = this.tail;
		this.tail.next = node;
		this.tail = node;
	}
};

LinkedList.prototype.removeTail = function() {
	if (!this.tail) {
		return;
	}
	var toReturn = this.tail.value;
	this.tail = this.tail.previous;
	if (this.tail) {
		this.tail.next = null;
	} else {
		this.head = null;
	}
	return toReturn;
};

LinkedList.prototype.search = function(data) {
	// body...
	var current = this.head;
	while (current) {
		if (typeof data === 'function') {
			if (data(current.value)) {
				return current.value;
			}
		} else if (current.value === data) {
			return current.value
		} else {
			for (var key in current.value) {
				if (current.value[key] === data) {
					return current.value;
				}
			}
		}
		current = current.next;
	}

	return null;
};