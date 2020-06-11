// Importacion de librerias
import React from 'react'
import ReactDom from 'react-dom'

//Creacion de componente (Funciones de flecha)
/* 
const App = () => {
    retun <div>    
    </div>
}

function App(){
    return <div></div>
} */

class App extends React.Component{
    constructor(){
        super()

    }

    render(){
        return (
            <div>
                <h1>Hola</h1>
                <h2>mundo</h2>
            </div>
        )
    }
}

//renderizado

ReactDom.render(
    <App/>,
    document.querySelector('#root') 
    )
