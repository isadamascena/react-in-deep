import React, { Component } from 'react';

class Life extends Component {
    //1 get default props 

    //2 set default state

    state = {
        title: 'Life cycles'
    }

    //3 before render 
    componentWillMount(){
        console.log('3 before render');
    }
    //4 render jsx
    render(){
        console.log('RENDER');
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={()=> this.setState({title: 'something new'})}>
                CHANGE TITLE
                </div>
            </div>
        );
    }

    //5 after render
    componentDidMount(){
        console.log('5 after render');
        document.querySelector('h3').style.color = 'red';
    }

    componentWillUpdate() {
        console.log('before update');
    }

    componentDidUpdate() {
        console.log('after update');
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextState.title !== this.state.title){
            return true;
        }
        return false;
    }

    componentWillReceiveProps(){
        console.log('before receive props');
    }

    componentWillUnmount(){
        console.log('UNMOUNT');
    }
}
export default Life;