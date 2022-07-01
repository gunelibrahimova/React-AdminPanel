import { Button, FormHelperText, FormLabel, InputAdornment, MenuItem, OutlinedInput, Switch, TextField } from '@mui/material'
import React from 'react'

const CreateProduct = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12 my-2">
                            <TextField id="outlined-basic" fullWidth label="Name" variant="outlined" />
                        </div>
                        <div className="col-lg-4 my-4">
                            <FormHelperText id="outlined-weight-helper-text">Qiymet</FormHelperText>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                label="SKU"
                                endAdornment={<InputAdornment position="end">₼</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                        </div>
                        <div className="col-lg-4  my-4">
                            <FormHelperText id="outlined-weight-helper-text">Category</FormHelperText>

                            <TextField fullWidth
                                id="outlined-select-currency"
                                select
                                label="Select"
                            >
                                <MenuItem >
                                    Telefon
                                </MenuItem>
                            </TextField>
                        </div>
                        <div className="col-lg-4 my-5">
                            <TextField id="outlined-basic" fullWidth label="SKU" variant="outlined" />
                        </div>
                        <div className="col-lg-12">
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Summary"
                                multiline
                                rows={4}
                            />
                        </div>
                        <div className="col-lg-12 my-2">
                            <Button
                                fullWidth
                                variant="contained"
                                component="label"
                            >
                                Upload file
                                <input
                                    type="file"
                                    hidden
                                    multiple
                                />
                            </Button>
                            <div className="row">
                                <div className="col-lg-3 my-3">
                                    <div className="card">
                                        <img className='img-fluid' src="https://cdn.pixabay.com/photo/2022/03/12/07/37/peace-7063559_960_720.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 my-2">
                            <Button
                                variant="contained"
                                color="success"
                                component="label"
                            >
                                Create
                            </Button>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card mb-2">
                                <img className='img-fluid' src="https://cdn.pixabay.com/photo/2022/03/12/07/37/peace-7063559_960_720.png" alt="" />
                            </div>
                            <Button
                                fullWidth
                                variant="contained"
                                component="label"
                            >
                                Upload file
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </div>
                        <div className="col-lg-12">
                            <FormLabel component="legend">
                                Is Slider <Switch />
                            </FormLabel>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateProduct