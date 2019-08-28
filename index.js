const Express = require('express')
const Tree = require('./Tree')
const tree = new Tree()

const port = process.env.PORT || 3000

const seedValues = (amt = 100) => {
	for (let i = 0; i <= 10; i++) {
		tree.addValue(Math.round(Math.random() * amt))
	}
}

seedValues()

const app = Express()

app.use(Express.static('public'))

app.use('/tree/:value', (req, res) => {
	const { value } = req.params
	tree.reset()
	seedValues(value)
	res.send(tree)
})

app.use('/tree', (req, res) => {
	res.send(tree)
})

app.use('/traverse', (req, res) => {
	res.send(tree.traverse())
})

app.use('/reset', (req, res) => {
	tree.reset()
	seedValues()
	res.send('Tree Resetted')
})

app.listen(port, () => console.log(`http://localhost:${port}`))


// console.log(JSON.stringify(tree))
