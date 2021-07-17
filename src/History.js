import React from "react"

function History({dates}){

    const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0);
    var lastweek = [0];
    const weekofday = today.getDay();
    const thisweekdate = new Date(today.getTime()- weekofday*24*60*60*1000);
    const length = Object.keys(dates).length;

    for(var i=0; i<=weekofday && i<length; i++){
        lastweek[0] += dates[i];
    }

    for(var x=1; x<3; x++){
        if(i>=length) break;
        lastweek.push(0);
        for(i=weekofday+1+7*(x-1); i<weekofday+1+7*x && i<length; i++){
            lastweek[x] += dates[i];
        }
    }

    return(
        <section>
        <div className="compare week">
            <h3>This week [{thisweekdate.toDateString()} - Today] : {lastweek[0]}</h3>
            {lastweek.length > 1 ? <h3>Last week [{new Date(thisweekdate.getTime() - 7*24*60*60*1000).toDateString()}- {new Date(thisweekdate.getTime() - 1*24*60*60*1000).toDateString()}] : {lastweek[1]}</h3> : null}
            {lastweek.length > 2 ? <h3>2 weeks ago [{new Date(thisweekdate.getTime() - 14*24*60*60*1000).toDateString()}- {new Date(thisweekdate.getTime() - 8*24*60*60*1000).toDateString()}]: {lastweek[2]}</h3> : null}
        </div>
        </section>
    );

}

export default History;