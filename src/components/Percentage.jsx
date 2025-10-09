import React from "react";

function Percentage({selected, percentage}){
    return(
        <>
        {selected}

                    <div className="pie__percent">
                        {percentage} %
                    </div>
        </>
    )
}

export default Percentage;