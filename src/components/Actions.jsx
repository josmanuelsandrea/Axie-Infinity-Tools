import { Component } from 'react'

const styles = {
    td: {
        padding: '.5rem',
        border: '1px solid cyan'
    }
}

class Actions extends Component {
    render() {
        const { actionHistory } = this.props

        return (
            //? {round: 1, energy: 3, earn: 2, spend: 2, spend: 0}
            actionHistory.map((action) => {
                return(
                    <tr key={action.round}>
                        <td style={styles.td}>
                            {action.round}
                            <i className="fas fa-stopwatch"></i>
                        </td>

                        <td style={styles.td}>
                            {action.energy}
                            <i className="fas fa-bolt"></i>
                        </td>

                        <td style={styles.td}>
                            {action.earn}
                            <i className="fas fa-plus"></i>
                        </td>

                        <td style={styles.td}>
                            {action.spend}
                            <i className="fas fa-minus"></i>
                        </td>

                        <td style={styles.td}>
                            {action.stole}
                            <i className="fas fa-ban"></i>
                        </td>
                    </tr>
                )
            })
        )
    }
}


export default Actions;