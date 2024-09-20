class Conversation {
    constructor(id, name, lastMessageTimestamp) {
        this.id = id;
        this.name = name;
        this.lastMessageTimestamp = lastMessageTimestamp;
        this.messages = [];
    }

    // Add a new message and update the last activity tiemstamp
    addMessage(message) {
        this.message.push(message);
        this.lastMessageTimestamp = message.timestamp;

    }
}

class ConversationStore {
    constructor() {
        this.convesrations = {}; // Hash table for quick conversation Lookup
        this.conversationList = []; // Array sorted by lastMessageTimestamp

    }

    // Add a new conversation
    addConversation(conversation) {
        this.conversations[conversation.id] = conversation;
        this.conversationList.push(conversation);
        this.sortConversations();

    }

    // Add a message to a conversation and update sorting
    addMessageToConversation(conversationId, message) {
        const conversation = this.conversations[conversationId];
        if (conversation) {
            conversation.addMessage(message);
            this.sortConversations();

        }
    }

    // Sort conversations by last message timestamp (decending)
    sortConversations() {
        this.conversationList.sort((a,b) => b. lastMessageTimestamp - a.lastMessageTimestamp);

    }

    // Retrieve all sorted ConversationStors
    getAllConversations() {
        return this.conversationList;

    }
}

// Usage example
const convoStore = new ConversationStore();
const convo1 = new Conversation(1, 'Family', 1633000000000);
const convo2 = new Conversation(2, 'Friends', 1633050000000);

convoStore.addConversation(convo1);
convoStore.addConversation(convo2);
convoStore.addMessageToConversation(1, new Message(3, 'Hi Family', 1633100000000));
console.log(convoStore.getAllConversations());    






