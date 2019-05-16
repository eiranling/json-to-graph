import React from 'react'
import Form from "react-bootstrap/Form";
import '../css/Form.css'

export default class DataForm extends React.Component {


    render() {
        return (
            <div className="left quarter full form shadowed standard">
                <link rel = "stylesheet"
                    href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin = "anonymous"/>
                <Form>
                    <Form.Group controlId="dataForm.JsonDataArea" >
                        <Form.Label>Enter JSON data here</Form.Label>
                        <Form.Control as="textarea" rows="30"/>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
