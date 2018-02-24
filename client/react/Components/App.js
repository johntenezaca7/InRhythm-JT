import React, { Component } from 'react';
import { BrowserRouter, Route } from  'react-router-dom';

import Header from './Header';
import Display from './Display';

const css = require('./App.scss');


class App extends Component {
    render(){
        return(
            <div>   
                <BrowserRouter>
                    <div>
                        <Header />
                        <Display />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
