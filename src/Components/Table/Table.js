import React, {Component} from 'react';
import Styles from '../Table/Table.module.css'
class Table extends Component{
  state={
      isfirstDataHovered: false,
      issecondDataHovered: false,
      isthirdDataHovered: false,
      isfourthDataHovered: false,
      isfifthDataHovered: false,
      showData: false
  }
  showDataHandler = ()=>{
    this.setState(prevState => ({showData: !prevState.showData}));
  }
  toggleFirstDataHover= ()=> {
    this.setState(prevState => ({isfirstDataHovered: !prevState.isfirstDataHovered}));
  }
  toggleSecondDataHover= ()=> {
    this.setState(prevState => ({issecondDataHovered: !prevState.issecondDataHovered}));
  }
  toggleThirdDataHover= ()=> {
    this.setState(prevState => ({isthirdDataHovered: !prevState.isthirdDataHovered}));
  }
  toggleFourthDataHover= ()=> {
    this.setState(prevState => ({isfourthDataHovered: !prevState.isfourthDataHovered}));
  }
  toggleFifthDataHover= ()=> {
    this.setState(prevState => ({isfifthDataHovered: !prevState.isfifthDataHovered}));
  }
  render(){
    return(
      <div>
         <div className={Styles.PageDetails}>
           <div>
            <h1>Table</h1>
           </div>
           <div className={Styles.TableNav} onClick={this.props.clicked}>
             <div></div>
             <div></div>
             <div></div>
           </div>
         </div>
         <div className={Styles.Table}>
           <table>
             <tr>
               <th>S/N</th>
               <th>Name</th>
               <th>Description</th>
               <th>Date</th>
               <th>Action</th>
             </tr>
             <tr >
    <td  onMouseEnter={this.toggleFirstDataHover} onMouseLeave={this.toggleFirstDataHover}><span>Lorem ipsum dolor sit amet, consectetuer adipiscing</span> <span style={{
      visibility: this.state.isfirstDataHovered || this.state.showData ? 'visible' : null
    }}>elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</span>
    </td>
    <td onMouseEnter={this.toggleSecondDataHover} onMouseLeave={this.toggleSecondDataHover}>
    <span>Lorem ipsum dolor sit amet, consectetuer adipiscing</span> <span  style={{
      visibility: this.state.issecondDataHovered || this.state.showData ? 'visible' : null
    }}>elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</span>
      </td>
               <td onMouseEnter={this.toggleThirdDataHover} onMouseLeave={this.toggleThirdDataHover}>
               <span>Lorem ipsum dolor sit amet, consectetuer adipiscing</span> <span style={{
      visibility: this.state.isthirdDataHovered  || this.state.showData ? 'visible' : null
    }}>elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</span>
               </td>
               <td onMouseEnter={this.toggleFourthDataHover} onMouseLeave={this.toggleFourthDataHover}>
               <span>Lorem ipsum dolor sit amet, consectetuer adipiscing</span> <span style={{
      visibility: this.state.isfourthDataHovered || this.state.showData ? 'visible' : null
    }}>elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</span>
               </td>
               <td onMouseEnter={this.toggleFifthDataHover} onMouseLeave={this.toggleFifthDataHover}>
               <span>Lorem ipsum dolor sit amet, consectetuer adipiscing</span> <span style={{
      visibility: this.state.isfifthDataHovered || this.state.showData ? 'visible' : null
    }}>elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</span>
               </td>
             </tr>
           </table>
           <button onClick={this.showDataHandler}>Show Everything</button>
         </div>
      </div>
    )
  }
}
export default Table;