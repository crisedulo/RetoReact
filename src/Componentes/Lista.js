import React, {Component} from 'react';
import ElementoLista from "./ElementoLista"

class Lista extends Component{
    render(){
        return (
            <div className="Lista">
                {Object.keys(this.props.items).map(item => (
                    <ElementoLista 
                        list={this.props.items[item]}
                        key={item}
                    />
                ))}
            </div>
            )
        }
    }
     
export default Lista