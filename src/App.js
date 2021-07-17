import React from "react";
import axios from "axios";
import Commit from "./Commit";

class App extends React.Component{

  state = {
    isLoading: true,
    isCommitLoading: true,
    userId: "",
    repoName: "",
    commits: []
  };

  handleChangeUserId = (e) => {
    this.setState({
      userId: e.target.value
    })
  }

  handleChangeRepoName = (e) => {
    this.setState({
      repoName: e.target.value
    })
  }
  
  render(){
    const { isLoading, isCommitLoading, commits } = this.state;
    
    return (
      <section className="container">
      {isLoading ? (
          <div className="up50">
            <form>
              <h3 className="title">Welcome 🎉</h3>
              <h3 className="question">😎 Write your github ID or Org name</h3>
              <input id="user_id" value={this.state.userId} onChange={this.handleChangeUserId}/>
              <h3 className="question">and your repository name here ✍️</h3>
              <input id="repo_name" value={this.state.repoName} onChange={this.handleChangeRepoName}/>
              <br></br>
              <button onClick={this.getcommits}>Submit 👍🏻</button>
            </form>
          </div>
      ) : (
        <div className="commits">
          {isCommitLoading ? (
          <div className="up50">
            <span>Loading...</span>
          </div>
      ) : (
        <div className="commits">
          <Commit
            commits={commits}
          />
        </div>)}
        </div>)}
      </section>
    );
  }

  getcommits = async() => {
    this.setState({isLoading:false});
    
    let page = 1;
    let mycommits = [];
    let prelength = 0;
    do{
      prelength = mycommits.length;
      const commits = await axios.get(
        "https://api.github.com/repos/" + this.state.userId + "/" + this.state.repoName + "/commits?page="+page
      );
      
      commits.data.forEach((element, index) => {
        mycommits.push(element.commit.committer.date);
      });
      page = page + 1;
    }while(prelength !== mycommits.length);

    this.setState({commits:mycommits, isCommitLoading:false});
  };

  componentDidMount(){
    //this.getcommits()
  }
  /* setState 를 부를 때마다 새롭게 render를 하는 것이다. */
}

export default App;