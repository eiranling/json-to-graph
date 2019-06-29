import React from 'react'
import Form from "react-bootstrap/Form";
import { UnControlled as CodeMirror } from 'react-codemirror2'
import Prism from 'prismjs';
import '../css/Form.css'
import '../css/common.css'
import Col from "react-bootstrap/Col";
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css';
import 'codemirror/mode/yaml/yaml'
import 'codemirror/mode/javascript/javascript'


export default class DataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: {json: true, name: "javascript"},
            value: ""
        };

        this.changeLang = this.changeLang.bind(this)
    }

    changeLang(event) {
        if (event.target.value === "JSON") {
            this.setState({language: {json: true, name: "javascript"}});
        } else if (event.target.value === "YAML") {
            this.setState({language: 'yaml'});
        }
        this.props.onLanguageChange(event)
    }

    changeValue(string) {
        this.props.onDataChange(string);
    }

    render() {
        return (
            <div className="left quarter full form shadowed standard vertical-container">
                <link rel = "stylesheet"
                    href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin = "anonymous"/>
                    <div className="fill-width vertical-container">
                        <Form>
                            <Form.Group controlId="dataForm.JsonDataArea" >
                                <Form.Row>
                                    <Col>
                                        <Form.Label>Enter data here</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control as="select" onChange={this.changeLang}>
                                            <option>JSON</option>
                                            <option>YAML</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                        <div className="vertical-container primary_container">
                        <CodeMirror className="fill-width CodeMirror form full"
                                    value={this.state.value}
                                    editorDidMount={editor => { editor.setSize(null, "100%") }}
                                    options={{
                                        mode: this.state.language,
                                        lineNumbers: true,
                                        autofocus: true
                                    }}
                                    onChange={(editor, data, value) => {this.changeValue(value)}}
                        />
                        </div>
                    </div>

            </div>
        )
    }
}
