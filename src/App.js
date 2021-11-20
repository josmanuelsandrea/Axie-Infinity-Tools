import { Component } from 'react'
import './styles/App.css'


/*
  !Important: 'ESS' stand for 'Earn, Spend & Stole properties from this.state'
*/

//? Importing Components 

import Navbar from './components/Navbar'
import Calculator from './components/Calculator'

//? Some styles for the main div */

const styles = {
  mainDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 0, .7)',
    minHeight: '100vh'
  }
}

//? App Component 

class App extends Component {
  state = {
    round: 1,
    areEnergyControlsVisible: false,
    energy: 3,

    earnNumber: 0,
    spendNumber: 0,
    stoleNumber: 0,

    actionHistory: []
  }

  defaultStates = { ...this.state }

  /* 
   ? If 'areEnergyControlsVisible' variable is === true, then it shows the Controls

   ? If the checkbox is checked, it turns to true
  */
  showControls = (e)=>{
    (e.target.checked) 
    ? this.setState({areEnergyControlsVisible: true})
    : this.setState({areEnergyControlsVisible: false})
  }

  //? Increase and decrease energy functions for the Controls
  increaseEnergy = ()=>{
    if(this.state.energy === 10){
      alert('En Axie no es posible tener más de 10 de energía');
    }else{
      this.setState({ energy: this.state.energy + 1 })
    }
  }

  decreaseEnergy = ()=>{
    if(this.state.energy === 2){
      alert('En Axie no es posible tener menos de 2 de energía')
    }else{
      this.setState({ energy: this.state.energy - 1 })
    }
  }

  //? Function that handles the 'this.ESS' properties
  handleEarnSpendStole = (button, operation)=>{
    if (operation === 'increase'){
      this.setState({ [button]: this.state[button] +1 })
    }

    if (operation === 'decrease'){
      if (this.state[button] === 0){
        alert('No es posible establecer éste valor a un valor menor a 0');
      }else{
        this.setState({ [button]: this.state[button] -1 })
      }
    }
  }

  //? This function adds and subtracts the necessary numbers to perform the energy calculation
  endTurn = ()=>{
    const object = {round: this.state.round, 
      energy: this.state.energy, 
      earn: this.state.earnNumber, 
      spend: this.state.spendNumber, 
      stole: this.state.stoleNumber}

    this.setState({ 
      actionHistory: this.state.actionHistory.concat(object),

      energy: (this.state.energy + this.state.earnNumber) - (this.state.spendNumber + this.state.stoleNumber) + 2,
      round: this.state.round + 1,
      earnNumber: 0,
      spendNumber: 0,
      stoleNumber: 0,
     })
  }

  //? This set 'this.state' properties to default
  resetApp = ()=>{
    this.setState({ ...this.defaultStates })
  }


  //? This limits the energy to 10
  componentDidUpdate(){
    if (this.state.energy > 10){
      this.setState({ energy: 10})
    }

    if (this.state.energy < 2){
      this.setState({ energy: 2})
    }
  }

  render(){ 

    return(
      <div style={styles.mainDiv}>
        {/* <Navbar /> */}
        <Calculator 
          round={this.state.round}
          energy={this.state.energy}
          areEnergyControlsVisible={this.state.areEnergyControlsVisible}
          showControls={this.showControls}
          increaseEnergy={this.increaseEnergy}
          decreaseEnergy={this.decreaseEnergy}

          //* 'ESS' stand for 'Earn, Spend, Stole'
          ESSnumbers={
            (({earnNumber, spendNumber, stoleNumber}) => ({earnNumber, spendNumber, stoleNumber}))(this.state)
          } // ? This will return a copy of an object with the selected properties

          handleEarnSpendStole={this.handleEarnSpendStole}

          endTurnFunction={this.endTurn}
          resetApp={this.resetApp}

          actionHistory={this.state.actionHistory}
        />
      </div>
    )
  }
}

export default App;