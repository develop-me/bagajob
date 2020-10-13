import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccount } from '../../data/Account/actions'
import edit from '../../assets/images/edit.svg'

const AccountDetail = ({ accountDetailName, value }) => {
    const [editing, setEditing] = useState(false)
    const [accountInputValue, setAccountInputValue] = useState(value)
    const { user_id, name } = useSelector(state => state)
    const { access_token } = useSelector(state => state)
    const dispatch = useDispatch()

    // dispatches action that updates user's account details
    const handleUpdateAccount = () => {
        dispatch(updateAccount({
            user_id,
            name,
            access_token,
            account_data: {
                [accountDetailName]: accountInputValue
            }
        }))

        setEditing(false)
    }

    return (
        <div className="account-detail-card">
            {editing ?
                <input
                    id={accountDetailName}
                    value={accountInputValue}
                    onChange={e => setAccountInputValue(e.target.value)}
                />
                :
                <p>{accountInputValue}</p>
            }
            {editing ?
                <button onClick={handleUpdateAccount}>Save</button>
                :
                <button className="primarybtn edit-acc-btn" onClick={() => setEditing(true)}><img style={{ marginRight: "5px"}} className="edit-icon filter-white" src={edit} alt="edit account detail"></img>EDIT</button>
            }
        </div>
    )
}

export default AccountDetail