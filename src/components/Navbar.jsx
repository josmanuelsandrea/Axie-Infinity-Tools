import { Component } from 'react'
import NavElement from './NavElement'

//Creating the component

class Navbar extends Component {

    render(){
        return(
            <nav className='nav'>
                <ul className='navUl'>
                    <NavElement className='navElement'>
                        Calculadora
                    </NavElement>

                    <NavElement className='navElement'>
                        Producción Diaria
                    </NavElement>

                    <NavElement className='navElement'>
                        Producción General
                    </NavElement>
                </ul>
            </nav>
        )
    }
}

export default Navbar