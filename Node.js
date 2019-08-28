// const Node = (val) => {
// 	this.value = val
// 	this.left = null
// 	this.right = null
// }

function Node(val) {
	this.value = val
	this.left = null
	this.right = null
}

Node.prototype.addNode = function (n) {
	if (this.value > n.value) {
		if (this.left == null) {
			this.left = n
		} else {
			this.left.addNode(n)
		}
	} else if (this.value < n.value) {
		if (this.right == null) {
			this.right = n
		} else {
			this.right.addNode(n)
		}
	}
}

Node.prototype.visit = function(arr = []) {
	if (this.left !== null) {
		this.left.visit(arr)
	}
	arr.push(this.value)
	if (this.right !== null) {
		this.right.visit(arr)
	}
	return arr
}

Node.prototype.search = function(val) {
	if (this.value > val && this.left !== null) {
		this.left.search(val)
	} else if (this.value < val && this.right !== null) {
		this.right.search(val)
	} else if (this.value === val){
		console.log(`Found: ${val}`)
	} else {
		console.log(`Couldn't find ${val}`)
	}
}

module.exports = Node