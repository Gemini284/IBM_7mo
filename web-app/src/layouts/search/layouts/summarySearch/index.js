import MDBox from "components/MDBox";
import { Grid, Typography } from "@mui/material";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SummaryResultCard from "examples/Cards/SummaryCards/SummaryResultCard";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

export default function SummarySearch(){

  return (
    <Grid container spacing={3} direction="row" >
      <Grid item xs={7}>
        <ComplexStatisticsCard
          icon={<GppGoodOutlinedIcon/>}
          title="Certificaciones Actuales"
          count={281}
          percentage={{
            color: "success",
            amount: "+55%",
            label: "de las certificaciones totales",
          }}
        />
      </Grid>
      <Grid item xs>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <SummaryResultCard
            icon={<CorporateFareOutlinedIcon/>}
            title="Departamento"
            value={"Finanzas"}
            />
          </Grid>
          <Grid item>
            <SummaryResultCard
            icon={<TravelExploreOutlinedIcon/>}
            title="Ubicación"
            value={"Guadalajara, JAL, Mexico"}
            />
          </Grid>
        </Grid>
        
      </Grid>
    </Grid>
  );
}