import { Component } from 'react'

class Energy extends Component {
    render() {
        const { energy } = this.props

        return (
            <div className='energyDiv'>
                <img 
                    className='energyImg'
                    src="img/energy1.svg" 
                    alt="Axie Energy Icon"
                />
                <p className='energyTwoPoints'>:</p>
                <p className='energyNumber'>{energy}</p>
            </div>
        )
    }
}


export default Energy;