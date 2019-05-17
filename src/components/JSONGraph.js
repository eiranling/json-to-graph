import React from 'react'
import {Graph} from 'react-d3-graph'
import '../css/common.css'
import '../css/graph.css'
import graph_config from './config/graph'


export default class JSONGraph extends React.Component {

    generateConnectedItems(from, connections) {
        let edges = [];
        for (let connection in connections) {
            if (connections.hasOwnProperty(connection)) {
                edges.push({source: from, target: connection});
            }
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
        return graph;
    }

    renderGraph() {
        let data = this.convertToGraph(this.props.graph_json);
        console.log(data);
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
