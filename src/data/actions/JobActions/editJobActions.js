import axios from '../../axios'

import {
    ADD_NEW_APPLICATION_NOTE,
    UPDATE_APPLICATION_NOTE,
    DELETE_APPLICATION_NOTE,
    ADD_NEW_INTERVIEW,
    UPDATE_INTERVIEW,
    DELETE_INTERVIEW,
    UPDATE_JOB_DETAILS
} from '../../constants/JobConstants/editJobConstants'

// get user's bearer token from local storage
const token = localStorage.getItem('user')

// updates the details for a specific job's details card
export const updateJobDetails = job => dispatch => {
    const { id } = job
    axios.put(`user/job/${id}`, {
        title: job.jobTitle,
        company: job.company,
        description: job.jobDescription,
        salary: job.salary,
        location: job.location,
        date_applied: job.dateApplied,
        closing_date: job.closingDate,
        recruiter_name: job.recruiterName,
        recruiter_email: job.recruiterEmail,
        recruiter_phone: job.recruiterPhone,
        cover_letter: job.coverLetter,
        cv: job.cv
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerJobDetails(data.data))
    });
}

const reducerJobDetails = data => {
    return {
        type: UPDATE_JOB_DETAILS,
        payload: data,
    };
};

// adds new application card note for specific job
export const addNewAppNote = () => dispatch => {
    axios.post(`user/job/app_notes`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerAddNewAppNote(data.data))
    });
}

const reducerAddNewAppNote = data => {
    return {
        type: ADD_NEW_APPLICATION_NOTE,
        payload: data
    };
};

// updates a single note for a specific job's application card
export const updateAppNote = note => dispatch => {
    const { id } = note
    axios.patch(`user/job/app_notes/${id}`, {
        note_date: note.note_date,
        note_data: note.note_data
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerUpdateAppNote(data.data))
    });
}

const reducerUpdateAppNote = data => {
    return {
        type: UPDATE_APPLICATION_NOTE,
        payload: data,
    };
};

// deletes a single note from a specific job's application card
export const deleteAppNote = id => dispatch => {
    axios.patch(`user/job/app_notes/${id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(reducerDeleteAppNote(id))
    });
}

const reducerDeleteAppNote = id => {
    return {
        type: DELETE_APPLICATION_NOTE,
        payload: id
    };
};

// adds new interview for specific job
export const addNewInterview = () => dispatch => {
    axios.post(`user/job/interview`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerAddNewInterview(data.data))
    });
}

const reducerAddNewInterview = data => {
    return {
        type: ADD_NEW_INTERVIEW,
        payload: data
    };
};

// updates a specific job interview's details
export const updateInterview = interview => dispatch => {
    const { id } = interview
    axios.patch(`user/job/interview/${id}`, {
        interview_date: interview.interviewDate,
        format: interview.format,
        interviewer: interview.interviewer,
        notes: interview.notes
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerUpdateInterview(data.data))
    });
}

const reducerUpdateInterview = data => {
    return {
        type: UPDATE_INTERVIEW,
        payload: data
    };
};

// deletes a single interview from a specific job's interview card
export const deleteInterview = id => dispatch => {
    axios.patch(`user/job/interview/${id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(reducerDeleteInterview(id))
    });
}

const reducerDeleteInterview = id => {
    return {
        type: DELETE_INTERVIEW,
        payload: id
    };
};