import React from 'react';
import '../css/App.css';
import DataForm from "./DataForm";
import JSONGraph from "./JSONGraph";
import yaml from "js-yaml"
import ErrorBar from "./ErrorBar";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            json_valid: true,
            json: {},
            message: "The JSON is invalid",
            language: "JSON"
        }
    }

    onChange = (value) => {
        if (this.state.language === "JSON") {
            this.parseJson(value)
        } else if (this.state.language === "YAML") {
            this.parseYaml(value)
        }
    };

    parseYaml(string) {
        try {
            let jsonString = yaml.safeLoad(string, {json: true});
            console.log('yamlconversion = '+jsonString);
            this.setState({json: jsonString, json_valid: true});
        } catch (error) {
            this.setState({json_valid: false, message:error.message});
        }
    }

    parseJson(string) {
        console.log('json:' + string);
        try {
            this.setState({json: JSON.parse(string), json_valid: true});
        } catch (error) {
            this.setState({json_valid: false, message:error.message});
        }
    }

    changeLanguage = (event) => {
        this.setState({language: event.target.value})
    };

    render() {
        return (
            <div className="App">
                <ErrorBar show={!this.state.json_valid} message={this.state.message}/>
                <div className="App standard full">
                    <DataForm onDataChange={this.onChange} onLanguageChange={this.changeLanguage}/>
                    <JSONGraph graph_json={this.state.json} />
                </div>
            </div>
        );
    }
}
