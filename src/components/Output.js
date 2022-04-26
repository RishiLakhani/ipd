import { Typography } from '@mui/material'
import React from 'react'

function Output(props) {
  const { out } = props
  return (
    <div>
      {out?
        <Typography textAlign='center' >We feel that you might be addicted to {out.map((x) => x)}</Typography>
        :
        <Typography textAlign='center' >We don't think you are addicted to any of the apps</Typography>
      }
    </div>
  )
}

export default Output