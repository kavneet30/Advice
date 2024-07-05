import React from "react";
import './App.css';
import axios from 'axios';
import x_icon from '../src/assets/x-logo.png'
import fb_icon from '../src/assets/fb-logo.png'

class App extends React.Component{
  state = { advice: ""};

  componentDidMount() {
    this.fetchAdvice();
    

  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
          const {advice} = response.data.slip;
          this.setState({advice});
        })
        .catch((error) =>{
          console.log(error);
        });
  }

  render(){
    const {advice} = this.state;
    return(
      <div className="main">
        <div className="card">
          <h1>{advice}</h1>
          <button className="btn" onClick={this.fetchAdvice}>Give Me Advice!</button>
          <h2>Share your Advice on:</h2>
          <a
            href={`https://twitter.com/intent/tweet?text=${advice}`}
            target="_blank"
            rel = "noopener noreferrer"
            className="x-logo"
          >
            <img src={x_icon} alt="" />
          </a> 
          <a
            href={`https://facebook.com/sharer/sharer.php?t=${advice}`}
            target="_blank"
            rel = "noopener noreferrer"

          >
            <img className="fb-img" src={fb_icon} alt="" />
          </a> 
        </div>
      <div className="box"></div>
      </div>
    );
  }
}
export default App;