class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class circularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    length() {
        return this.length;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.head.next = newNode;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.length++;
    }

    getRandomNode() {
        const randomNumber = Math.floor(Math.random() * this.length);
        let nodeValue = this.head;
        for (let i = 0; i < randomNumber; i++) {
            nodeValue = nodeValue.next;
        }
        return nodeValue.value;
    }

    includes(keyword) {
        let current = this.head;
        let found = false;
        do {
            if (current.value == keyword) {
                found = true;
                break;
            }
            current = current.next;
        } while (current !== this.head);
        return found;
    }

    print() {
        let current = this.head;
        do {
            current != undefined ? console.log(current) : null
            current = current.next;
        } while (current !== this.head)
    }
}
