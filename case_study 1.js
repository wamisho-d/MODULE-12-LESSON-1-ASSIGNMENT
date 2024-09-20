// Task 1: Message Storage and Retrieval:
class message {
    constructor(id, text, timestamp) {
        this.id = id;
        this.text = text;
        this.timestamp = timestamp
    }
}

// MessageStore class for efficient message storage and retrieval
class MessageStore {
    constructor() {
        this.message = {}; // Hash table for quick lookup
        this.messageList = []; // Sorted array by timestamp for message ordering
    }

    // Insert a new message and keep the list sorted by timestamp
    addMessage(message) {
        this.message[message.id] = message;
        this.messageList.push(message);
        this.messageList.sort((a,b) => a.timestamp - b.timestamp); // Sort by timestamp
    }

    // Retrieve message by ID
    getMessageById(id) {
        return this.messages[id];
    }

    // Retrieve all messages sorted by timestamp
    getAllMessages() {
        return this.messageList;
    }

    // Delete a message by ID
    deleteMessage() {
        return this.messageList;
    }

    // Delete a message by ID
    deleteMessage(id) {
        delete this.messages[id];
        this.messageList = this.messageList.filter(message => message.id !== id);

    }
}

// Useage example 
const store = new MessageStore();
store.addMessage(new Message(1, 'Hello World', 1432000000000));
store.addMessage(new Message(2, 'How are you doing', 1432030000000));
console.log(store.getAllMessages());
console.log(store.getMessageById(1));








      

