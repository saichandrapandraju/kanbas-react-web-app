import React from "react";

interface PassingFunctionsProps {
    theFunction: () => void;
}

const PassingFunctions = ({ theFunction }: PassingFunctionsProps) => {
    return (
        <div>
            <h2>Passing Functions</h2>
            <button 
                onClick={theFunction} 
                className="btn btn-primary"
            >
                Invoke the Function
            </button>
            <hr/>
        </div>
    );
};

export default PassingFunctions;