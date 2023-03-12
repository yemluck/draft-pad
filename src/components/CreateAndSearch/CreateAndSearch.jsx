import React from 'react';
import './CreateAndSearch.css';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
// MUI
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';

function CreateAndSearch() {

  const Navigate = useNavigate();

  const onCreate = () => {
    Navigate('create');
  }

  const onSearch = () => {
    console.log('in on Search');
  }

  return (
    <div className='createAndSearch'>
      <Stack direction="row" spacing={5}>
        <Button onClick={onCreate} variant="outlined" startIcon={<CreateIcon />}>
          CREATE
        </Button>
        <Button onClick={onSearch} variant="contained" endIcon={<SearchIcon />}>
          SEARCH
        </Button>
      </Stack>
    </div>
  )
}

export default CreateAndSearch;