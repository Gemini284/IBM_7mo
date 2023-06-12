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

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

export default function Search1(){

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox py={1}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                <Search
                    placeholder="Buscar un ID de empleado"
                    allowClear
                    enterButton="Buscar"
                    size="large"
                    onSearch={onSearch}
                    /> 
                

                </Grid>
                </Grid>     

            </MDBox>

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