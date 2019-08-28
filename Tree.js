const Node = require('./Node')

function Tree() {
	this.root = null
}

Tree.prototype.addValue = function(val) {
	const newNode = new Node(val)
	if (this.root == null) {
		this.root = newNode
	} else {
		this.root.addNode(newNode)
	}
}

Tree.prototype.traverse = function() {
	return this.root.visit()
}

Tree.prototype.search = function(val) {
	if (this.root !== null) {
		this.root.search(val)
	}
}

Tree.prototype.reset = function() {
	this.root = null
}

module.exports = Tree