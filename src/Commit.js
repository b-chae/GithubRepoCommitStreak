import React from "react"
import PropTypes from "prop-types"
import Week from './Week'
import History from './History'
import Streak from './Streak'

function Commit({commits}){

    const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0);
    const first_date = new Date(commits[commits.length-1]).getTime() + new Date(commits[commits.length-1]).getTimezoneOffset()*60*1000;
    const longest = Math.ceil((today.getTime() - first_date)/(1000*60*60*24))
    const commit_day = new Array(longest+1).fill(0);

    for(var i=0; i<commits.length; i++){
        var idx = Math.ceil((today.getTime() - new Date(commits[i]).getTime())/(1000*60*60*24))
        commit_day[idx]++;
    }

    return (
    
    <div className="commit">
        <Streak dates={commit_day} length={commits.length}/>
        <History dates={commit_day}/>
        <Week dates={commit_day}/>
    </div>
    );
}

Commit.propTypes ={
    commits : PropTypes.array.isRequired,
}

export default Commit;