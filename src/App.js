import React, { Component } from 'react';
import Form from './Form.js';
import Response from './Response.js';

class App extends Component {
    render() {
        return (
            <div>
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