import React from 'react';

const StageTracker = ({ selected, handleClick, label }) => {
    let currentStage = selected ? "status-active" : ""
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div onClick={handleClick} className={"status-circle " + currentStage}></div>
                <small>{label}</small>
            </div>
        </>
    );
};

export default StageTracker;