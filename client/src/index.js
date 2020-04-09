import React from 'react';//import react modules to use ES6
import ReactDOM from "react-dom";//render to real DOM

import Counters from './components/counters';

//dist = distributable
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Counters />, document.getElementById('root'));