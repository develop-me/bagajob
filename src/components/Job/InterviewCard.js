import React from 'react';
import Interview from './Interview'

const InterviewCard = ({ job }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Interviews</h1>
            <button>Add interview</button>

            {job.interviews.map((interview, i) => {
                return (
                    <Interview key={i} interview={interview} />
                )
            })}
        </div >
    );
};

export default InterviewCard;