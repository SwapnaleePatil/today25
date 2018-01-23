
import React from 'react';
import ReactDom from 'react-dom';
import './index.css' ;

class HelloWorld extends React.Component
{

    myName=()=>{

        console.log(document.getElementById("txt").value);
        ReactDom.render(<h1>{document.getElementById("txt").value}</h1>,document.getElementById(`gg`));

    };
    render(){
        return(
            <div>
                <section>
                    <input type="text" id="txt" />
                </section>
                <section>
                    <input type="button" id="btn" onClick={this.myName} value="Submit"/>

                </section>
                <section id="gg">

                </section>
            </div>
        )
    }
}

ReactDom.render(<HelloWorld/>,document.getElementById("root"));