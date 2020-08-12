import React, {Component} from 'react';
import Modal from './Components/Modal/Modal'
import Backdrop from './Components/Backdrop/Backdrop'
import Table from './Components/Table/Table';
class App extends Component{
  state={
    showModal: false,
  }
  showModalHandler = ()=>{
    this.setState({showModal:!this.state.showModal})
  }
  render(){

  return (
    <div className="App">
      { this.state.showModal ?
        <Modal 
        show={this.state.showModal}
        clicked={this.showModalHandler}/> : null}

      { this.state.showModal ?
        <Backdrop 
        clicked={this.showModalHandler}/> : null}

        <Table clicked={this.showModalHandler}/>
    </div>
  );
}
}
export default App;
