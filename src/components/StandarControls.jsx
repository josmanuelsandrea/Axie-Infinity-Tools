import { Component } from 'react'
import Control from './Control'

class StandarControls extends Component {
    render() {
        const { ESSnumbers, handleEarnSpendStole} = this.props

        return (
            <div className='StandarControls'>
                <Control 
                    text='Gana' 
                    textColor='#2CFE0A' 
                    value={ESSnumbers.earnNumber} 
                    functionality={handleEarnSpendStole}
                    propertieValue='earnNumber'
                    sign='+'
                />
                <Control 
                    text='Gasta' 
                    textColor='#FE0A0A'
                    value={ESSnumbers.spendNumber} 
                    functionality={handleEarnSpendStole}
                    propertieValue='spendNumber'
                    sign='-'
                />
                <Control 
                    text='Robas' 
                    textColor='#C30AFE' 
                    value={ESSnumbers.stoleNumber} 
                    functionality={handleEarnSpendStole}
                    propertieValue='stoleNumber'
                    sign='+'
                />
            </div>
        )
    }
}

export default StandarControls