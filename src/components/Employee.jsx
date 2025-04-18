import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
const Employee = () => {
  return (
<div className="form-container">   
             <Box className="box"  sx={{
          width: 500,
          maxWidth: '100%',
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          padding: '20px', 
        }}>
                <Typography variant="h5">Employee Form</Typography>
                <TextField
                    fullWidth
                    label="Name"
                    id="name"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Designation"
                    id="designation"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Location"
                    id="location"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Salary"
                    id="salary"
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained"  color="success" sx={{ marginTop: 2 }}>
Save                </Button>
            </Box>    </div>
  )
}

export default Employee
