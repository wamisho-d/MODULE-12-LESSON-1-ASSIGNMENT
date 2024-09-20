# Task 1: Message Storage and Retrieval:
class MessageNode {
    constructor(messageID, timestamp, content) {
        this.messageID = messageID;
        this.timestamp = timestamp;
        this.content = content;
        this.left = null;
        this.right = null;

    }
}

class MessageBST {
    constructor() {
        this.root = null;
    }

    // Insert a message into the tree
    insert(messageID, timestamp, content) {
        const newNode = new MessageNode(messageID, timestamp, content);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.tiemstamp < node.tiemstamp) {
            if (node.left === null) {
                node.left = newNode;

            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this._insertNode(node.right, newNode);
                }
                }
            }
            // Search for a message by ID
            search ByID(messageID) {
                return this._searchNodeByID(this.root, messageID);
            }

            _searchNodeByID(node, messageID) {
                if (node === null) {
                    return null;
                }
                if (messageID === node.messageID) {
                    return node;

                } else if (messageID < node.messageID) {
                    return this._searchNodeByID(node.left, messageID);

                } else {
                    return this._searchNodeByID(node.right, messageID);

                }
            }

            // Retrieve message in order (by timestamp)
            inOrderTraversal() {
                const messages = [];
                this._inorder(this.root, message);
                retrun message;
            }

            _inOrder(node, message) {
                if (node !== null) {
                    this._inOrder(node.left, messages);
                    message.push(node);
                    this._inOrder(node.right, messages);
                
                }
            
            }
        }

        // Example Usage
        const messageTree = new MessageBST();
        messageTree.insert(1, 1630255387, "Hello World");
        messageTree.insert(2, 1630255390, "How are you");
        messageTree.insert(3, 1630255400, "Goodbye");

        console.log(messageTree.inOrderTraversal()); // Sorted message by timestamp
        console.log(messageTree.searchByID(2)); // Serach for a specific message by ID
        






