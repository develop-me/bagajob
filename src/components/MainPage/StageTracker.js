import React from 'react';

const StageTracker = ({ active }) => {
    let currentStage = active ? "status-active" : ""
    return (
        <div class={"status-circle " + currentStage}></div>
    );
};

export default StageTracker;