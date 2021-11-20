import { Component } from 'react'

const styles = {
    th: {
        padding: '1rem',
        border: '1px solid blue'
    },

    i: {
        marginLeft: '.5rem'
    }
}

export default class Th extends Component {
    render() {
        const { iconclass } = this.props

        return (
            <th style={styles.th}{...this.props}>
                {this.props.children}
                <i style={styles.i}className={iconclass}></i>
            </th>
        )
    }
}
