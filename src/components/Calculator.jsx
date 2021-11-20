import { Component } from 'react'

/* ! Importing components */

import RoundCounter from './RoundCounter'
import Energy from './Energy'
import Controls from './Controls'
import ActivateControls from './ActivateControls';
import StandarControls from './StandarControls';
import FinishControls from './FinishControls';
import ActionHistory from './ActionHistory';

class Calculator extends Component {
    render() {
        const { 
            round,
            energy,
            areEnergyControlsVisible,
            showControls,
            increaseEnergy,
            decreaseEnergy,
            ESSnumbers,
            handleEarnSpendStole,
            endTurnFunction,
            resetApp,
            actionHistory
        } = this.props;

        return (
            <div className='Calculator'>
                <RoundCounter round={round}/>
                <Energy energy={energy}/>
                {areEnergyControlsVisible 
                ? <Controls increaseEnergy={increaseEnergy} decreaseEnergy={decreaseEnergy} />
                : null}
                <ActivateControls showControls={showControls}/>
                <StandarControls ESSnumbers={ESSnumbers} handleEarnSpendStole={handleEarnSpendStole}/>
                <FinishControls endTurnFunction={endTurnFunction} resetApp={resetApp}/>
                <ActionHistory  actionHistory={actionHistory}/>
            </div>
        )
    }
}

export default Calculator