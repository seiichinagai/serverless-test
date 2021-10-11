import React, { Component } from 'react';
import Form from './Form.js';
import Response from './Response.js';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Leave your message here:</h1>
                <Form />
                <Response ref={
                    Response => {
                        window.Response = Response
                    }
                }/>
            </div>
        );
    }
}

export default App;