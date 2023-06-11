import * as React from 'react';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function CustomizedSwitch() {

  return (
    
    <>
        <Switch
        icon={
            <span
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: '#2925DE',
            }}
            >
            <GppGoodOutlinedIcon
                style={{ fontSize: 16, color: '#fff' }}
            />
            </span>
        }
        checkedIcon={
            <span
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: '#2925DE',
            }}
            >
            <PersonOutlineIcon
                style={{ fontSize: 16, color: '#fff' }}
            />
            </span>
        }
        />
    </>
  );
};
