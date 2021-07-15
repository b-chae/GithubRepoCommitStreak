import React from "react"
import PropTypes from "prop-types"

function Commit({commits}){
    return (
    
    <div className="commit">
        <div className="commit__data">
            {commits.map((commit,index)=>(<h3 key={index}>{commit}</h3>))}
        </div>
    </div>
    );
}

// Commit.propTypes ={
//     id: PropTypes.number.isRequired,
//     date: PropTypes.string.isRequired,
// }

export default Commit;