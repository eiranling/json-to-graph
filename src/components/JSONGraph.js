import React from 'react'
import {Graph} from 'react-d3-graph'
import '../css/common.css'
import '../css/graph.css'
import graph_config from './config/graph'
import {isArray, isObject} from "../util/utility";


export default class JSONGraph extends React.Component {

    generateLinkWithOptions(source, target, options) {
        let link = {source: source, target: target};
        link.label = "label" in options ? options.label : "";

        if ("weight" in options) {
            console.log("detected weight");
            link.strokeWidth = options.weight;
        }

        console.log(link);

        return link;
    }

    generateConnectionsFromObject(from, connections) {
        let edges = [];
        for (let connection in connections) {
            if (connections.hasOwnProperty(connection)) {
                let link = {source: from, target: connection};
                console.log(connections[connection]);
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
        for (let node in items) {
            if (items.hasOwnProperty(node)) {

                graph.links = [...graph.links, ...this.generateConnectedItems(node, items[node])];
                graph.links.forEach((item) => {
                    if (!graph.nodes.map((item) => item.id).includes(item.source))  {
                        graph.nodes.push({id: item.source})
                    }
                    if (!graph.nodes.map((item) => item.id).includes(item.target))  {
                        graph.nodes.push({id: item.target})
                    }
                });
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
            <div className="fill-width fill-height standard">
                {this.renderGraph()}

            </div>
        )
    }
}
