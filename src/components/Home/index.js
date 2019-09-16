import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

export default () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <div className='container mt-5'>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 col-sm-6 col-md-5 mb-2 text-center'>
          <span className="header">Search Flight</span>
        </div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-12 col-sm-6 col-md-5 p-5 pt-3 pb-3 faint-background'>
          <div className='row'>
            <TextField
              id='standard-number'
              label='Destination'
              className='w-100'
              InputLabelProps={{
                shrink: true
              }}
              margin='normal'
            />
          </div>
          <div className='row'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='yyyy/MM/dd'
                margin='normal'
                id='date-picker-inline'
                label='Select departure date'
                value={selectedDate}
                onChange={handleDateChange}
                className='w-100'
                InputLabelProps={{
                  shrink: true
                }}
                KeyboardButtonProps={{
                  'aria-label': 'change date'
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className='row mt-3'>
            <Button
              color='secondary'
              size='large'
              variant='contained'
              className='font-weight-bold w-100'
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
