import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function SummaryResultCard({ color, title, value, icon }) {
  return (
    <Card sx={{height: 1/1}}>
      <MDBox display="flex" justifyContent="space-between" pt={1} px={2}>
        <MDBox textAlign="left">
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={1} px={2} display="flex" justifyContent="space-between" pb={2}>
        <MDBox alignItems="center">
          <MDTypography variant="h4">
              {value}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
SummaryResultCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
SummaryResultCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default SummaryResultCard;
