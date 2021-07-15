import React from "react";
import axios from "axios";
import Commit from './Commit';

class App extends React.Component{

  state = {
    isLoading: true,
    commits: []
  };
  
  render(){
    const { isLoading, commits } = this.state;
    
    return (
      <section className="container">
      {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
      ) : (
        <div className="commits">
          <h2>Hi</h2>
          <Commit
            commits={commits}
          />
        </div>)}
      </section>
    );
  }

  getcommits = async() => {

    let page = 1;
    let mycommits = [];
    let prelength = 0;
    do{
      prelength = mycommits.length;
      const commits = await axios.get(
        "https://api.github.com/repos/b-chae/AlgorithmStudy/commits?page="+page
      );
      
      commits.data.forEach((element, index) => {
        mycommits.push(element.commit.committer.date);
      });
      page = page + 1;
    }while(prelength !== mycommits.length);
    console.log(mycommits)

    this.setState({commits:mycommits, isLoading:false});
  };

  componentDidMount(){
    this.getcommits()
  }
  /* setState 를 부를 때마다 새롭게 render를 하는 것이다. */
}

export default App;