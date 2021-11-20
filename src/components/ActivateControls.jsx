import { Component } from 'react'

class ActivateControls extends Component {
    render() {
        const { showControls } = this.props

        return (
            <div className='ActivateControls'>
                <input 
                    type='checkbox' 
                    className='ActivateControlCheckbox'
                    onClick={showControls}
                />
                <label>
                    Activar suma y resta de energia
                </label>
            </div>
        )
    }
}


export default ActivateControls