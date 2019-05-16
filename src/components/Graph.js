import React from 'react'
import {default as VisGraph} from 'react-graph-vis'


export default class Graph extends React.Component {

    generateConnectedItems(connections) {
        let edges = [];
        for (let connection in connections) {
            if (connections.hasOwnProperty(connection)) {
                edges.push({ from: connection, to:connections[connection] });
            }
        }
        return edges
    }

    convertToGraph(items) {
        let graph = {nodes: [], edges: []};
        for (let node in items) {
            if (items.hasOwnProperty(node)) {
                graph.edges.concat(this.generateConnectedItems(items[node]));
                graph.nodes.push({id: node, label: node})
            }
        }
    }

    render() {
        return (
           <VisGraph graph={this.convertToGraph(this.props.graph_json)} />
        )
    }
}
