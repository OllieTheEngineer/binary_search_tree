class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    // check to see if there is a root
    if(!this.root) {
      // if empty set new node as the root
      this.root = newNode;
      return this;
    }
    // if root isn't empty function will start at the root
    let currNode = this.root;
    while(true){
      // check to see if val is less than current Node
      if(val < currNode.val){
        if(!currNode.left){
          // if curr node is less than curr val and there is no left child,
          //  curr node moves to the left child
          currNode.left = newNode;
          return this;
        }
        // set the curr node to the left child to compare
        currNode = currNode.left;
      } else if (val > currNode.val) {
        // if the val is greater then the curr node
        if(!currNode.right){
          // if there isn't a right child node
          // set new node to right child
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      } else {
        // return null if node already exists
        return null;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if(this.root === null) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
      if(val < currNode.val){
        if(currNode.left === null){
          currNode.left = newNode;
          return this;
        }
        return this.insertRecursively(currNode.left, val);
      } else if (val > currNode.val) {
        if(!currNode.right){
          currNode.right = newNode;
          return this;
        }
        return this.insertRecursively(currNode.right, val);
      } else {
        return null;
      }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    
    if(val === currNode.val) return currNode;
    while(currNode){
      if(val < currNode.val) {
        currNode = currNode.left;
      } else if (val > currNode.val){
        currNode = currNode.right;
      } else {
        return currNode;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root === null) return undefined;

    let currNode = this.root;
      if(val < currNode.val) {
        return this.findRecursively(val, currNode.left);
      } else if (val > currNode.val){
        return this.findRecursively(val, currNode.right);
      } 
        return currNode;  
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let newArr = [];
    const traverse = (n) => {
      newArr.push(n.val);
      if(n.left) traverse(n.left);
      if(n.right) traverse(n.right)
    }
    traverse(this.root);
    return newArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let newArr = [];

    const traverse = (n) => {
      if(n.left) traverse(n.left);
      newArr.push(n.val);
      if(n.right) traverse(n.right);
    }
    traverse(this.root);
    return newArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let newArr = [];
    const traverse = (n) => {
      if(n.left) traverse(n.left);
      if(n.right) traverse(n.right)
      newArr.push(n.val);
    }
    traverse(this.root);
    return newArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let newArr = [];
    let queue = [];
    let currNode = this.root;
    queue.push(currNode);
    while(queue.length) {
      currNode = queue.shift();
      newArr.push(currNode.val);
      if(currNode.left) queue.push(currNode.left);
      if(currNode.right) queue.push(currNode.right);
    }
    return newArr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, currNode = this.root) {
    if(currNode === null) {
      return undefined;
    }


  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
