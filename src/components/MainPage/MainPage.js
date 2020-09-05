import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import JobPreview from './JobPreview'
import JobForms from '../JobForms/JobForms'
import { getJobs } from '../../data/Jobs/actions'

const MainPage = () => {
    const [showModal, setOpen] = useState(false)
    const { jobs, user: { id: user_id } } = useSelector(state => state)
    const dispatch = useDispatch()

    // opens job form modal
    const openModal = () => {
        setOpen(true)
    }

    // closes jobs form modal
    const closeModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(getJobs(user_id));
    }, []);

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
                <JobForms />
            </Modal>
        </>
    )
}

export default MainPage