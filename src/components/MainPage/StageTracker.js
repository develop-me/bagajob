import React from 'react';

const StageTracker = ({ active }) => {
    let currentStage = active ? "green" : "none"
    return (
        <div
            style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                border: "2px solid black",
                backgroundColor: currentStage
            }} >

        </div >
    );
};

export default StageTracker;