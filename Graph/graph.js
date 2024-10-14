class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertix(vertix) {

        if (!this.adjacencyList[vertix]) {
            this.adjacencyList[vertix] = [];
            return true;
        }

        return false;
    }

    addEdge(vertex1, vertex2) {


        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }

        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
            return true;
        }

        return false;
    }

    removeVertix(vertex1) {

        if (!this.adjacencyList[vertex1]) {

            return undefined;
        }

        for (let n of this.adjacencyList[vertex1]) {
            this.adjacencyList[n] = this.adjacencyList[n].filter(v => v !== vertex1);
        }

        delete this.adjacencyList[vertex1];
        return true
    }
}

const g = new Graph();
console.log(g);


// add vertix to graph

g.addVertix('A');
g.addVertix('B');
g.addVertix('C');
g.addVertix('D');
g.addVertix('E');

console.log(g);

// add edge to graph

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'E');

console.log(g);

// remove edges

g.removeEdge('A', 'B');
g.removeEdge('B', 'D');

console.log(g);

// remove vertices

g.removeVertix('D');
g.removeVertix('E');

console.log(g);