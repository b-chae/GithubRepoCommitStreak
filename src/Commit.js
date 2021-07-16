import React from "react"
import PropTypes from "prop-types"

function Commit({commits}){

    let dates = {};
    const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0);
    const first_date = new Date(commits[commits.length-1]);
    const earliest = first_date.getTime() + first_date.getTimezoneOffset()*60*1000;
    var longest = Math.ceil((today.getTime() - earliest)/(1000*60*60*24))

    for(var i=0; i<=longest; i++){
        dates[i] = 0;
    }

    for(i=0; i<commits.length; i++){
        const now = new Date(commits[i])
        var idx = Math.ceil((today.getTime() - now.getTime())/(1000*60*60*24))
        dates[idx]++;
    }

    console.log(new Date(new Date(commits[0]).getTime()))
    console.log(Math.ceil((new Date(commits[0]).getTime() - today.getTime())/(1000*60*60*24)))
    console.log(dates)

    var flag = false;
    var streak = 0;
    var current_streak = 0;
    var longgest_streak = 0;

    for(i=0; i<commits.length; i++){
        if(dates[i] > 0) streak++;
        else{
            if(!flag){
                current_streak = streak;
                flag = true;
                longgest_streak = streak;
            }
            else{
                if(longgest_streak < streak) longgest_streak = streak;
            }
            streak = 0;
        }
    }

    return (
    
    <div className="commit">
        <div className="current_streak">
            <h2>My current streak : {current_streak}</h2>
        </div>
        <div className="longgest_streak">
            <h2>My longgest streak : {longgest_streak}</h2>
        </div>
        <h3>My recent commits</h3>
        <div className="commit__data">
            {Object.entries(dates).map((item, index)=>{
                return (<h3 key={index}>{item[1]}</h3>);
            })}
        </div>
    </div>
    );
}

Commit.propTypes ={
    commits : PropTypes.array.isRequired,
}

export default Commit;