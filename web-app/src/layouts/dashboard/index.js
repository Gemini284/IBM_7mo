/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useEffect, useState, useCallback } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
//import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const reportDataExample = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] },
  }
  const { sales, tasks } = reportsLineChartData;
  const [certifications, setCErtifications ] = useState({
    labels: [],
    datasets: {
      label: "",
      data: []
    }
  })

  const [employees, setEmployees] = useState({
    labels: [],
    datasets: {
      label: "",
      data: []
    }
  })
    
  const [errors, setErrors] = useState({
    fetchError: false,
    fetchErrorMsg: "",
  })
  const [certValues, setCertValues] = useState({
      _id: "",
      count:""
  });
  const [empValues, setEmpValues] = useState({
    uid: "",
    organization: "",
    work_location: "",
    count: "",
  });

  const [topCertifications, setTopCertifications] = useState([]);
  const [topEmployees, setTopEmployees] = useState([]);

  useEffect(() => {
    const topCertFetch = async() => {
      try {
        const res = await fetch(`/api/certification/top`, {
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
        
        setTopCertifications(await res.json());

      } catch(error){
        console.log(error.message)
      }
    }

    const handleCertTop = async (event) => {
      certifications.datasets.label = "Count"
      
      event.map((element) => {
        certifications.labels.push(element._id)
        certifications.datasets.data.push(element.count)
      })
    }

    topCertFetch();
    handleCertTop(topCertifications);
  }, [certifications])

  useEffect(() => {
    const topEmpFetch = async () => {
      try {
        const res = await fetch(`/api/employee/top`, {
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
        
        setTopEmployees(await res.json());
  
      } catch(error){
        console.log(error.message)
      }
    }

    const handleEmpTop = async (event) => {
      employees.datasets.label = "Certifications"
      
      event.map((element) => {
        employees.labels.push(element.uid)
        employees.datasets.data.push(element.count)
      })
    }
    topEmpFetch();
    handleEmpTop(topEmployees);
  }, [employees])

  return (
    <DashboardLayout>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Bookings"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Top 5 Empleados"
                  description="Los empleados con mayor número de certificaciones"
                  date="campaign sent 2 days ago"
                  chart={employees}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Top 5 Certificaciones"
                  description="Las certificaciones más frecuentes entre los empleados"
                  date="campaign sent 2 days ago"
                  chart={certifications}
                />
              </MDBox>
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>

            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
