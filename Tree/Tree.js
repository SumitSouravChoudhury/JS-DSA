class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
  }

  preorder(root) {
    if (root === null) {
      return;
    }

    process.stdout.write(root.data + " ");
    this.preorder(root.left);
    this.preorder(root.right);
  }

  inorder(root) {
    if (root === null) {
      return;
    }

    this.inorder(root.left);
    process.stdout.write(root.data + " ");
    this.inorder(root.right);
  }

  postorder(root) {
    if (root === null) {
      return;
    }

    this.postorder(root.left);
    this.postorder(root.right);
    process.stdout.write(root.data + " ");
  }

  levelorder(root) {
    if (root === null) {
      return;
    }

    let queue = [root];

    while (queue.length > 0) {
      let current = queue.shift();
      process.stdout.write(current.data + " ");

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  numOfNodes(root) {
    if (root === null) {
      return 0;
    }

    return 1 + this.numOfNodes(root.left) + this.numOfNodes(root.right);
  }

  numOfLeaves(root) {
    if (root === null) {
      return 0;
    }

    if (root.left === null && root.right === null) {
      return 1;
    }

    return this.numOfLeaves(root.left) + this.numOfLeaves(root.right);
  }

  height(root) {
    if (root === null) {
      return 0;
    }

    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }

  largestValue(root) {
    if (root === null) {
      return -1;
    }

    return Math.max(
      root.data,
      Math.max(this.largestValue(root.left), this.largestValue(root.right))
    );
  }

  removeLeafNodes(root) {
    if (root === null) {
      return null;
    }

    if (root.left === null && root.right === null) {
      return null;
    }

    root.left = this.removeLeafNodes(root.left);
    root.right = this.removeLeafNodes(root.right);

    return root;
  }

  mirror(root) {
    if (root === null) {
      return null;
    }

    this.mirror(root.left);
    this.mirror(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
  }
}

const tree = new BinaryTree(1);

tree.root.left = new BinaryTreeNode(2);
tree.root.right = new BinaryTreeNode(3);
tree.root.left.left = new BinaryTreeNode(4);
tree.root.left.right = new BinaryTreeNode(5);
tree.root.right.left = new BinaryTreeNode(6);
tree.root.right.right = new BinaryTreeNode(7);

console.log("Pre-order");
tree.preorder(tree.root);
console.log();
console.log("In-order");
tree.inorder(tree.root);
console.log();
console.log("Post-order");
tree.postorder(tree.root);
console.log();
console.log("Level-order");
tree.levelorder(tree.root);
console.log();

console.log(tree.numOfNodes(tree.root));
console.log(tree.numOfLeaves(tree.root));
console.log(tree.height(tree.root));
console.log(tree.largestValue(tree.root));
console.log("Removed leaf nodes");

const newTree = tree.removeLeafNodes(tree.root);
tree.preorder(newTree);
console.log();
console.log("mirror tree");
const mirrorTree = tree.mirror(tree.root);
tree.preorder(mirrorTree);
