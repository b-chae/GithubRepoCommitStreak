import React from "react"

function Week({dates}){

    let last_week = [];
    const last_week_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekofday = new Date().getDay();
    for(var i=0; i<=weekofday && i<Object.keys(dates).length; i++){
        last_week.push(dates[i])
    }

    return(
        <section>
        <h3 className="border_round">My recent commits 📝</h3>
        <div className="history">
            {last_week.map((commit, index)=>(
                <div key={index} className="box">
                    <h3>{commit}</h3>
                </div>
            ))}
        </div>
        <div className="history">
            {last_week_day.map((day, index)=>(
                <div key={index} className="box">
                <h3>{last_week_day[6-index]}</h3>
            </div>
            ))}
        </div>
        </section>
    );

}

export default Week;