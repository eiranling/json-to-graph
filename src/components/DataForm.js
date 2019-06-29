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


export default class DataForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: Prism.languages.json,
            value: ""
        };

        this.changeLang = this.changeLang.bind(this)
    }

    changeLang(event) {
        this.setState({language: Prism.languages.json});
        this.props.onLanguageChange(event)
    }

    changeValue(string) {
        this.setState({value: string});
        this.props.onDataChange(string);
    }

    render() {
        return (
            <div className="left quarter full form shadowed standard">
                <link rel = "stylesheet"
                    href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin = "anonymous"/>
                    <div className="fill-width">
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
                    </div>
            </div>
        )
    }
}
