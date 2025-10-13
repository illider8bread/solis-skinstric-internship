import React from "react";

function Percentage({selected, percentage}){
    return(
        <>
        {selected}

                    <div className="pie__percent">
                        {(percentage * 100).toFixed(2)} %
                    </div>
        </>
    )
}

export default Percentage;