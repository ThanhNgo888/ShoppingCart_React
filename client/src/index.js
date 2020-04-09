import React from 'react';//import react modules to use ES6
import ReactDOM from "react-dom";//render to real DOM

import Counter from './components/counter';

//dist = distributable
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Counter />, document.getElementById('root'));