# Binary Tree

## This is my Implementation on how the binary tree works.

It has tree traversals and binary search

## How does this work? 🤔
So we currently have 4 endpoints for this
1. /tree
```shell
https://skjghisole-tree.herokuapp.com/tree
```
Which returns a generated tree with a maximum of 10 nodes from 0 - 100 as default

2. /tree/{value}
```shell
https://skjghisole-tree.herokuapp.com/tree/{value}
```
Is the same as the above but instead of 100 as default, it generates tree with a maximum of 10 nodes from 0 - value

3. /traverse
```shell
https://skjghisole-tree.herokuapp.com/traverse
```
This returns the traversed(sorted) values of the tree

and lastly...

4. /reset
```shell
https://skjghisole-tree.herokuapp.com/reset
```
This just resets the tree

## Visit here to test it out
https://skjghisole-tree.herokuapp.com/
