import axios from '../../axios'

import { SAVE_JOB } from '../../constants/JobConstants/addJobConstants'

// store bearer token in redux state, fetch it using useSelector(), look into jwt refresh tokens
export const addNewJob = data => dispatch => {
    const token = localStorage.getItem('user')
    axios.post("user/jobs", {
        job_title: data.jobTitle,
        company: data.company,
        description: data.jobDescription,
        salary: data.salary,
        location: data.location,
        date_applied: data.dateApplied,
        closing_date: data.closingDate,
        recruiter_name: data.recruiterName,
        recruiter_email: data.recruiterEmail,
        recruiter_phone: data.recruiterPhone,
        stage: data.stage,
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(saveNewJob(data.data))
    });
}

const saveNewJob = data => {
    return {
        type: SAVE_JOB,
        payload: data,
    };
};