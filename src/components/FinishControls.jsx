import { Component } from 'react'

class FinishControls extends Component {
    render() {
        const { endTurnFunction, resetApp } = this.props

        return (
            <div className='FinishControls'>
                <button className='EndTurn' onClick={endTurnFunction}>Finalizar turno</button>
                <button className='ResetButton' onClick={resetApp}>Reiniciar</button>
            </div>
        )
    }
}


export default FinishControls