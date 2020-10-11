import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'
import JobPreview from './JobPreview'
import JobForms from '../JobForms/JobForms'
import { getJobs } from '../../data/Jobs/actions'
import Nav from '../Nav'

const MainPage = () => {
    const [showModal, setOpen] = useState(false)
    // we are destructuring the user's access token (bearer token) and their id from global state, so when this component loads they can be used in the get request for the user's jobs
    const { jobs, user: { access_token }, user_id } = useSelector(state => state)
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
        dispatch(getJobs(data));
    }, []);

    return (
        <>
        <Nav />
            <div className="mainpage-header-container">
                <div>
                <button className="tertiarybtn sort-btn">Sort by &#9662;</button>
                <button className="primarybtn addapp-btn" onClick={openModal}>+ Add application</button>
                </div>
                <h1 className="mainpage-header-text">My Applications</h1>
            </div>

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