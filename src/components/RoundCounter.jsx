import { Component } from 'react'

class RoundCounter extends Component {
    render() {
        const { round } = this.props;

        return (
            <div className='RoundCounter'>
                <h1>Ronda <span className='number'>#{round}</span>
                {(round >= 10) ? <img src='img/bloodmoonicon.png' alt='axie infinity bloodmoon icon' className='bloodmoonicon'/> : null}</h1>
            </div>
        )
    }
}

export default RoundCounter