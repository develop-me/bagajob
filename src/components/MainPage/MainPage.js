import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from 'react-modal'
import JobPreview from './JobPreview'
import JobForm from '../JobForms/JobForm'

const MainPage = () => {
    const [showModal, setOpen] = useState(false)
    const jobs = useSelector(state => state.job.jobs)

    // opens job form modal
    const openModal = () => {
        setOpen(true)
    }

    // closes jobs form modal
    const closeModal = () => {
        setOpen(false)
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a>Sort by</a>
                <button onClick={openModal}>Add new application</button>

            </div>
            <h1>My Applications</h1>
            <div>
                {jobs.map((job, index) => (
                    job.active && <JobPreview job={job} key={index} />
                ))}
            </div>
            <Modal
                isOpen={showModal}
                onClose={closeModal}
                onRequestClose={closeModal}
            >
                <JobForm />
            </Modal>
        </>
    );
};

export default MainPage;