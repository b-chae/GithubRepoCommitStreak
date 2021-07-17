import React from "react"

function Streak({dates, length}){

    const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0);
    var flag = false;
    var streak = 1;
    var current_streak = 1;
    var longgest_streak = 1;
    var longgest_day;

    for(var i=1; i<length; i++){
        if(dates[i] > 0) streak++;
        else{
            if(!flag){
                current_streak = streak;
                flag = true;
                longgest_streak = streak;
                longgest_day = today.getTime() - (streak-1)*24*60*60*1000;
            }
            else{
                if(longgest_streak < streak){
                    longgest_streak = streak;
                    longgest_day = today.getTime() - (streak-1)*24*60*60*1000;
                }
            }
            streak = 0;
        }
    }

    longgest_day = new Date(longgest_day)
    var longgest_day_end = new Date(longgest_day.getTime() + (longgest_streak-1)*24*60*60*1000);
    if(longgest_day_end === today && dates[0] === 0){
        longgest_day_end = new Date(longgest_day_end.getTime() - 24*60*60*1000);
        longgest_streak--;
    }

    return(
        <section>
        <div className="current_streak">
            {dates[0] > 0 ? 
                <h2>My current streak : {current_streak} ✅</h2> : 
                <h2>My current streak : {current_streak-1} 🥺</h2>}
        </div>
        <div>
            {dates[0] > 0 ? 
                <h3 className="border_round">You're done with {current_streak} streak ❗️</h3> : 
                <h3 className="border_round">Let's keep up with {current_streak} streak 🔥</h3>}
        </div>
        <div className="longgest_streak">
            <h2>My longgest streak : {longgest_streak}</h2>
            <h3 className="date_detail">{longgest_day.toDateString()} - {longgest_day_end.toDateString()}</h3>
        </div>
        </section>
    );

}

export default Streak;