import { useEffect, useState, useCallback } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import FormInput from "components/FormInput";
import CustomizedSwitch from "components/CustomizedSwitch";
import Typography from '@mui/material/Typography';
import TableSearch from "./layouts/tableSearch.js";
import SummarySearch from "./layouts/summarySearch/index.js";
import { AudioOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

export default function Search(){
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const search = param.get('type');
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState({
        uid: false,
        name: false,
        fetchError: false,
        fetchErrorMsg: "",
    })

    useEffect(() => {
        const handleSearchSubmit = async () => {
    
            try {
              const query = encodeURIComponent(search);
              const res = await fetch(`/api/employee/search?type=${query}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              })
        
              if(!res.ok) {
                const error = await res.json()
                return setErrors({
                  ...errors,
                  fetchError: true,
                  fetchErrorMsg: error.msg,
                })
              } 
              
              setData(await res.json());
        
            } catch(error){
              console.log(error.message)
            }
        }
        handleSearchSubmit();

    }, [search]);

    return (
        <DashboardLayout>
            <MDBox py={1}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <MDBox mb={1.5}>
                    <Typography component="h1" variant="h8">
                        Resultados de Búsqueda
                    </Typography>
                    </MDBox>
                </Grid>
                </Grid>
            </MDBox>
            <MDBox py={1}>
                <Grid container spacing={3} justifyContent="space-around" alignItems="flex-start" direction="column">
                    <Grid item xs>
                        <MDBox mb={3}>
                            <Typography component="h2" variant="h6">
                                Resumen
                            </Typography>
                        </MDBox>
                    </Grid>
                    <Grid item xs> 
                        <SummarySearch/>
                    </Grid>
                    <Grid item xs>
                        <MDBox>
                            <Typography component="h2" variant="h6">
                                Lista
                            </Typography>
                        </MDBox>
                    </Grid>
                    <Grid item>
                        <TableSearch/>
                    </Grid>
                </Grid>
            </MDBox>
        </DashboardLayout>
    );
}