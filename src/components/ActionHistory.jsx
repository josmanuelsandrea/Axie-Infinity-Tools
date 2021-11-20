import { Component } from 'react'
import Th from './Th'
import Actions from './Actions'

const styles = {
    table: {
        borderCollapse: 'collapse',
        width:'100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
}

class ActionHistory extends Component {
    render() {

        const { actionHistory } = this.props

        return (
            <div className='actionHistory' style={styles.div}>
                <table style={styles.table}>
                    <tbody>
                        <tr>
                            <Th iconclass='fas fa-stopwatch'>Ronda</Th>
                            <Th iconclass='fas fa-bolt'>Energia</Th>
                            <Th iconclass='fas fa-plus'>Gana</Th>
                            <Th iconclass='fas fa-minus'>Gasta</Th>
                            <Th iconclass='fas fa-ban'>Robas/Destruyes</Th>
                        </tr>
                        
                        <Actions actionHistory={ actionHistory }/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ActionHistory;