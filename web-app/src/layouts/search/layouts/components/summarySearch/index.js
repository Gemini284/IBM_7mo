import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SummaryResultCard from "examples/Cards/SummaryCards/SummaryResultCard";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

export default function SummarySearch(props){

  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs>
        <ComplexStatisticsCard
          icon={<GppGoodOutlinedIcon/>}
          title="Certificaciones Actuales"
          percentage={{
          }}
          count={props.count}
        />
      </Grid>
      <Grid item xs>
        <SummaryResultCard
          icon={<CorporateFareOutlinedIcon/>}
          title="Departamento"
          value={props.department}
        />
      </Grid>
      <Grid item xs>
        <SummaryResultCard
          icon={<TravelExploreOutlinedIcon/>}
          title="Ubicación"
          value={props.location}
        />
      </Grid>
    </Grid>
  );
}