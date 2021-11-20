import { Component } from 'react'

class NavElement extends Component {
    render(){
        return(
            <li {...this.props}></li>
        )
    }
}

export default NavElement