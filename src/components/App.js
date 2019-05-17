import React from 'react';
import '../css/App.css';
import DataForm from "./DataForm";
import JSONGraph from "./JSONGraph";
import ErrorBar from "./ErrorBar";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            json_valid: true,
            json: {}
        }
    }

    onChange = (event) => {
        try {
            this.setState({json: JSON.parse(event.target.value), json_valid: true});
        } catch (error) {
            this.setState({json_valid: false});
        }
    };

    render() {
        return (
            <div className="App">
                <ErrorBar show={!this.state.json_valid} message="The json provided is invalid"/>
                <div className="App standard full">
                    <DataForm onJsonChange={this.onChange}/>
                    <JSONGraph graph_json={this.state.json} />
                </div>
            </div>
        );
    }
}
