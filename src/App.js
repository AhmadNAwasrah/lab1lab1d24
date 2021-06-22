import Header from "./Header";
import Form from "./FormHonerd";
import Main from "./Main";

import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

 class App extends Component { 
    constructor(props){
        super(props);
        this.state={
          hornedData :HornedBeast,
          show:false,
          modalData:{},
        }
    }
    handelShow=(data)=>{
      this.setState({
        show:true,
        modalData:data,
      })
    }
    handelClose=(data)=>{
      this.setState({
        show:false,
      })
    }
    render() {
        return (
            <div>
                <Header/>
               <Main/>
             <  Form/>
            </div>
        )
    }
}

export default App
