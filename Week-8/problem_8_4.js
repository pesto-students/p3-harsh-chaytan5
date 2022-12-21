// Find if a path exists in graph

// first we implement a Graph data structure

class MyGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vName) {
        if (this.adjacencyList[vName]) throw 'Vertex with the same name already present'
        this.adjacencyList[vName] = new Set();
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) throw `${v1} vertex not present`;
        if (!this.adjacencyList[v2]) throw `${v2} vertex not present`;

        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);
    }

    removeEdge(v1, v2) {
        if (!this.adjacencyList[v1]) throw `${v1} vertex not present`;
        if (!this.adjacencyList[v2]) throw `${v2} vertex not present`;

        this.adjacencyList[v1].delete(v2);
        this.adjacencyList[v2].delete(v1);
    }

    removeVertex(vName) {
        if (!this.adjacencyList[vName]) throw `${vName} not present`;

        let vSet = this.adjacencyList[vName];
        for (let vertex in vSet) {
            this.removeEdge(vertex, vName);
            // this.adjacencyList[vName].delete(vertex);
            // this.adjacencyList[vertex].delete(vName);
        }

        delete this.adjacencyList[vName];

    }

    log() {
        let list = this.adjacencyList;
        for (let v in list) {
            console.log(`${v} -> ${[[...list[v]]]}`);
        }
    }

}

// Time complexity : O(V+E) V: Vertices & E: Edges
// Space complexity : O(V)
// breadth first search
function findPath(graph, source, destination) {
    let list = graph.adjacencyList;
    let visited = new Set();
    let found = false;
    let queue = [source];

    while (queue.length) {
        let current = queue.shift(); // dequeue
        visited.add(current);

        if (current === destination) {
            found = true;
            break;
        }

        let neighbours = list[current];

        neighbours.forEach(neighbour => {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push(neighbour);
            }
        });
    }
    return found;
}

try {
    const g = new MyGraph();
    g.addVertex(10)
    g.addVertex(20)
    g.addVertex(30)
    g.addVertex(40)
    g.addVertex(50)
    g.addVertex(60)
    g.addVertex(70)

    g.addEdge(10, 20);
    g.addEdge(10, 30);
    g.addEdge(10, 40);
    g.addEdge(20, 50);
    g.addEdge(30, 60);
    g.addEdge(40, 70);
    g.addEdge(50, 60);
    g.addEdge(60, 70);

    // g.log()

    g.removeEdge(60, 70);
    g.removeEdge(40, 70);

    // g.log();

    console.log(findPath(g, 10, 70));
} catch (e) {
    console.warn(e);
}