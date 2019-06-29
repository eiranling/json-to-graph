import React from 'react'
import {Graph} from 'react-d3-graph'
import '../css/common.css'
import '../css/graph.css'
import graph_config from './config/graph'
import {isArray, isObject, matchesColorHex} from "../util/utility";


export default class JSONGraph extends React.Component {

    generateLinkWithOptions(source, target, options) {
        let link = {source: source, target: target};
        link.label = "label" in options ? options.label : "";

        if ("weight" in options) link.strokeWidth = options.weight;

        return link;
    }

    generateConnectionsFromObject(from, connections) {
        let edges = [];
        for (let connection in connections) {
            if (connections.hasOwnProperty(connection)) {
                let link = {source: from, target: connection};
                if (isObject(connections[connection])) {
                    link = this.generateLinkWithOptions(from, connection, connections[connection]);
                }
                edges.push(link);
            }
        }
        return edges
    }

    generateConnectionsFromArray(from, connections) {
        let edges = [];
        connections.forEach((item) => edges.push({source: from, target: item}));
        return edges;
    }

    generateConnectedItems(from, connections) {
        let edges = [];
        if (isArray(connections)) {
            edges = this.generateConnectionsFromArray(from, connections);
        }
        if (isObject(connections)) {
            edges = this.generateConnectionsFromObject(from, connections);
        }
        return edges
    }

    convertToGraph(items) {
        let graph = {nodes: [], links: []};
        console.log(items);
        for (let node in items) {
            if (items.hasOwnProperty(node) && isObject(items[node])) {
                if (items[node].hasOwnProperty("connections")) {
                    graph.links = [...graph.links, ...this.generateConnectedItems(node, items[node]["connections"])];
                    graph.links.forEach((item) => {
                        if (!graph.nodes.map((item) => item.id).includes(item.source)) {
                            graph.nodes.push({id: item.source});
                        }

                        if (!graph.nodes.map((item) => item.id).includes(item.target)) {
                            graph.nodes.push({id: item.target});
                        }
                    });
                }

                if (!graph.nodes.map((item) => item.id).includes(node)) {
                    graph.nodes.push({id: node});
                }

                if ("colour" in items[node]) {
                    let targetNode = graph.nodes.filter((item) => item.id === node);
                    if (targetNode.length) targetNode[0].color = items[node]["colour"];
                }
            }
        }
        graph.links = graph.links.filter((value, index, self) => {
            return self.slice(index).filter((item) => value.source === item.target && item.source === value.target).length < 1;
        });
        return graph;
    }

    renderGraph() {
        let data = this.convertToGraph(this.props.graph_json);
        if (data.nodes.length) {
            return <Graph id="mainGraph" ref="mainGraph" data={data} config={graph_config}/>
        }
        return <p>No data available</p>
    }

    render() {
        return (
            <div className="fill-width fill-height standard horizontal-container right three-quarter">
                {this.renderGraph()}

            </div>
        )
    }
}
