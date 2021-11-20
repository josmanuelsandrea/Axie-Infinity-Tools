import { Component } from 'react'

class HandleEnergyButton extends Component {
    render() {
        const { onClickFunction, iconClass } = this.props

        return (
            <button onClick={onClickFunction} className='handleEnergyButton'>
                <span className={iconClass}></span>
            </button>
        )
    }
}

export default HandleEnergyButton