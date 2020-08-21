import React from 'react';

const StageTracker = ({ active }) => {
    let currentStage = active ? "status_active" : ""
    return (
        <div class={"status_circle " + currentStage}></div>
    );
};

export default StageTracker;