import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import JobPreview from './JobPreview'
import JobForms from '../JobForms/JobForms'
import { getJobs } from '../../data/Jobs/actions'

const MainPage = () => {
    const [showModal, setOpen] = useState(false)
    // we are destructuring the user's access token (bearer token) and their id from global state, so when this component loads they can be used in the get request for the user's jobs
    const { jobs, user: { access_token, user: { id: user_id } } } = useSelector(state => state)
    const dispatch = useDispatch()

    // opens job form modal
    const openModal = () => {
        setOpen(true)
    }

    // closes jobs form modal
    const closeModal = () => {
        setOpen(false)
    }

    // when component mounts, send an object with the user's access token and id to the action
    useEffect(() => { // (ie componentdidmount)
        const data = {
            access_token,
            user_id
        }

        // will have to dispatch 3 actions here, one to get jobs, one to get interviews and one to get application notes
        dispatch(getJobs(data));
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