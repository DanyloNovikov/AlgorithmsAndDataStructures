class Graph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	};

	addNode(node) {
	  this.adjacentList[node] = [];
		
		this.numberOfNodes++;
	};

	addEdge(node1, node2) {
		this.adjacentList[node1].push(node2);
		this.adjacentList[node2].push(node1);
	};
};

const graph = new Graph();

graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addEdge(3,1);
graph.addEdge(3,4);
graph.addEdge(4,2);
graph.addEdge(4,5);
graph.addEdge(1,2);
graph.addEdge(1,0);
graph.addEdge(0,2);
graph.addEdge(6,5);

console.log(graph.adjacentList);

// Answer:
// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6
// 6 --> 5
