class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value > node.value) {
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    } else {
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    }
  }

  inOrder(node) {
    let result = [];

    function findChildren(node) {
      if (node === null) return;

      if (node.left) {
        findChildren(node.left, result);
      }

      result.push(node.value);

      if (node.right) {
        findChildren(node.right, result);
      }
    }

    findChildren(node);

    return result;
  }

  isSameTree(tree1, tree2) {
    const order1 = this.inOrder(tree1);
    const order2 = this.inOrder(tree2);

    console.log({ order1, order2 });

    if (order1.length !== order2.length) return false;

    for (let i = 0; i < order1.length; i++) {
      if (order1[i] !== order2[i]) return false;
    }

    return true;
  }

  countNodes() {
    let result = 0;

    function findChildren(node) {
      if (node === null) return;

      if (node.left) {
        findChildren(node.left, result);
      }

      result++;

      if (node.right) {
        findChildren(node.right, result);
      }
    }

    findChildren(this.root);

    return result;
  }

  searchBottomLeftValue() {
    if (this.root === null) return null;

    let resultArr = [];
    let queue = [this.root];

    while (queue.length > 0) {
      let levelArray = [];

      for (let i = 0; i < queue.length; i++) {
        let currentNode = queue.shift();
        levelArray.push(currentNode.value);

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      resultArr.push(levelArray);
      console.log(resultArr);
    }
    return resultArr[resultArr.length - 1][0];
  }
}

const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(3);
bst.insert(4);
bst.insert(2);
bst.insert(5);

// console.log(bst);

// console.log(bst.inOrder(bst.root));

// console.log(bst.isSameTree(bst.root, bst.root));

// console.log(bst.countNodes(bst.root));

// console.log(bst.searchBottomLeftValue(bst.root));
