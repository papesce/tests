//http://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/

class Node  {
    contructor(value) {
        this.value = value
    }
    next(node) { this.next = node}
    randomNext(node) {this.randomNext = node}
}

let numbers = [...Array(5).keys()];
//console.log(numbers);
let nodes = numbers.map( (number) => new Node(number));
//let node1 = new Node(1);
//console.log(nodes);
nodes.forEach( (node, index) => node.next(nodes[index-1]) );
nodes[0].randomNext(node[3]);

//1 clone the nodes
node = firstnodelink;
//insert new nodes after existing nodes
while (node) {
    let next = node.next
    let newnode = new Node(node.value);
    newnode.next = node.next
    node.next = newnode;
    node = node.next()
}
//traverse list setting random node
node = firstnodelink;
while (node) {
    let nodecopy = node.next
    let randomcopy = node.random.next 
    nodecopy.random = randomcopy
    node = nodecopy.next
}
//restore lists
node = firstnodelink;
while (node) {
    let nodecopy = node.next
    node.next = nodecopy.next
    if (nodecopy.next) {
        nodecopy.next = nodecopy.next.next
    }
    node = node.next
}



// option1:  dictionary of (value : newnode) 
//

