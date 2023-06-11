import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import FormInput from "components/FormInput";
import CustomizedSwitch from "components/CustomizedSwitch";

export default function Search(){

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox py={1}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <MDBox mb={1.5}>
                        <FormInput 
                            id="search"
                            label="Busca una ID de empleado"
                            name="search"
                            icon="search"/>
                        </MDBox>
                    </Grid>
                    <Grid item xs>
                        <MDBox mb={1.5}>
                            <CustomizedSwitch/>
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
        </DashboardLayout>

    );

}