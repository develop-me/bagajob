import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { Modal } from 'react-responsive-modal'
import JobPreview from './JobPreview'
import JobForm from '../JobForms/JobForm'

const MainPage = () => {
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    // brings in jobs global state property
    const jobs = useSelector(state => state.jobs)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a>Sort by</a>
                {/* <Link to="/addjob">Add new application</Link> */}
                <button onClick={openModal}>Add new application</button>

            </div>
            <h1>My Applications</h1>
            <div>
                {jobs.map((job, index) => (
                    job.active ?
                        <JobPreview job={job} key={index}></JobPreview>
                        :
                        null
                ))}
            </div>
            <Modal open={open} onClose={closeModal} center>
                {/* <JobForm /> */}
                <p>hellooo</p>
            </Modal>
        </>
    );
};

export default MainPage;