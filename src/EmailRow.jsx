import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './EmailRow.css'

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();
  return (
    <div onClick={() => history.push('/mail')} className='emailRow'>
        <div className="emailRow__options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
        </div>

        <h3 className="emailRow__title">
            {title}
        </h3>

        <div className="emailRow__message">
            <h4>
                {subject}{" "}
                <span className='emailRow__description'>
                    - {description}
                </span>
            </h4>
        </div>

        <p className="emailRow__time">
            {time}
        </p>
    </div>
  )
}

export default EmailRow