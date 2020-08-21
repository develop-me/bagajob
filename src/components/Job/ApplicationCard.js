import React from 'react';

const ApplicationCard = ({ job }) => {

    const addNote = () => {
    }

    const deleteNote = () => {
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid black", padding: "2rem" }}>
            <h1 className="para_header">Application</h1>
            <p>CV:</p>
            <p>Cover letter:</p>
            <button>APPLIED</button>
            <button onClick={() => addNote()}>Add note</button>

            {/* {
                job.application.notes.map((note, i) => {
                    return (
                        <>
                            <textarea key={i} name="" id="" cols="30" rows="10">{note.noteData}</textarea>
                            <button key={i} onClick={() => deleteNote(note.id)}>Delete</button>
                        </>
                    )
                })
            } */}
        </div>



    );
};

export default ApplicationCard;