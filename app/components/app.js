import React from 'react';
import Popular from "./Popular"
import ReactRouter from "react-router-dom";
import Nav from './Nav';

const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

class App extends React.Component{
    render(){
        return (

            <Rounter>
                 <div className= "container">
                    <Route path="/popular" component={Popular} />
                </div>
            </Rounter>
           
        )
    }

}

module.exports=App;