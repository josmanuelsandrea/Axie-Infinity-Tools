import { Component } from 'react'

const color = (color) => ({
    color: color,
})


class Control extends Component {
    render() {
        const { text, textColor, value, functionality, propertieValue, sign } = this.props

        return (
            <div className='Control'>
                <p style={color(textColor)}>{(value === 0) ? <span>{value}</span> : <span>{sign}{value}</span>}</p>
                <button className='ControlText' onClick={()=>functionality(propertieValue, 'increase')}>{text}</button>
                <button className='ControlMinus' onClick={()=>functionality(propertieValue, 'decrease')}>-1</button>
            </div>
        )
    }
}

export default Control