import React from 'react';
import '../css/App.css';
import DataForm from "./DataForm";
import Graph from "./Graph";
import ErrorBar from "./ErrorBar";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            json_valid: true,
            json: {}
        }
    }

    onChange(value) {

    }

    render() {
        return (
            <div className="App">
                <ErrorBar show={!this.state.json_valid} message="The json provided is invalid"/>
                <DataForm onJsonChanged={this.onChange}/>
                <Graph graph_json={this.state.json} />
            </div>
        );
    }
}
