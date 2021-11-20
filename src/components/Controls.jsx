import { Component } from 'react'
import HandleEnergyButton from './HandleEnergyButton'

class Controls extends Component {
    render() {
        const { increaseEnergy, decreaseEnergy } = this.props;

        return (
            <div className='handleEnergy'>
                <HandleEnergyButton
                    onClickFunction={increaseEnergy}
                    iconClass='fas fa-plus'
                    operation='increase'
                />
                <HandleEnergyButton
                    onClickFunction={decreaseEnergy}
                    iconClass='fas fa-minus'
                    operation='decrease'
                />
            </div>
        )
    }
}

export default Controls;