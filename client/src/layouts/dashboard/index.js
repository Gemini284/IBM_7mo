import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";

function Dashboard() {

  const [topCertifications, setTopCertifications] = useState([]);
  const [topEmployees, setTopEmployees] = useState([]);
  const [frequecyCerts, setFrequencyCerts] = useState([]);
  const [totalCertifications, setTotalCertifications] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState([]);
  const [meanCertifications, setMeanCertifications] = useState([]);
  const [meanResult, setMeanResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch top certifications
        const certRes = await fetch(`/api/certification/top`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!certRes.ok) {
          const error = await certRes.json();
          throw new Error(error.msg);
        }
        const certData = await certRes.json();
        setTopCertifications(certData);

        // Fetch top employees
        const empRes = await fetch(`/api/employee/top`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!empRes.ok) {
          const error = await empRes.json();
          throw new Error(error.msg);
        }
        const empData = await empRes.json();
        setTopEmployees(empData);

        //Fetch certification frequency
        const freqRes = await fetch(`/api/certification/pie`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!freqRes.ok) {
          const error = await freqRes.json();
          throw new Error(error.msg);
        }
        const freqData = await freqRes.json();
        setFrequencyCerts(freqData);

      } catch (error) {
        console.log(error.message);
      }

      // Fetch total certificaciones
      const certTotal = await fetch(`/api/certification/count`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!certTotal.ok) {
        const error = await certTotal.json();
        throw new Error(error.msg);
      }
      const certTotalData = await certTotal.json();
      setTotalCertifications(certTotalData);

      // Fetch total empleados
      const empTotal = await fetch(`/api/employee/count`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!empTotal.ok) {
        const error = await empTotal.json();
        throw new Error(error.msg);
      }
      const empTotalData = await empTotal.json();
      setTotalEmployees(empTotalData);

      // Fetch promedio de certificaciones
      const meanData = await fetch(`/api/employee/mean`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!meanData.ok) {
        const error = await meanData.json();
        throw new Error(error.msg);
      }
      const meanRes = await meanData.json();
      setMeanCertifications(meanRes);
      
      //Promedio de certificaciones por empleado
      const meanTotal = await fetch(`/api/employee/mean/total`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!meanTotal.ok) {
        const error = await meanTotal.json();
        throw new Error(error.msg);
      }
      const meanTotalRes = await meanTotal.json();
      setMeanResult(meanTotalRes[0].meanCertifications.toFixed(0).toString());
    };

    fetchData();
  }, []);

  const createCertificationsArray = (data) => {
    const certifications = {
      labels: [],
      datasets: {
        label: "Empleados",
        data: []
      }
    };
  
    data.forEach((element) => {
      let shortenedLabel = element._id.slice(0, 10);
      
      if (element._id.length > 10) {
        shortenedLabel += "...";
      }
  
      certifications.labels.push(shortenedLabel);
      certifications.datasets.data.push(element.count);
    });
  
    return certifications;
  };

  const createEmployeesArray = (data) => {
    const employees = {
      labels: [],
      datasets: {
        label: "Certificaciones",
        data: []
      }
    };

    data.forEach((element) => {
      employees.labels.push(element.uid);
      employees.datasets.data.push(element.count);
    });

    return employees;
  };

  const createFrequencyArray = (data) => {
    const frequency = {
      labels: [],
      datasets: {
        label: "Total",
        data: [],
        backgroundColors: ["primary", "warning", "dark", "info"]
      }
    };

    data.forEach((element) => {
      frequency.labels.push(element.name);
      frequency.datasets.data.push(element.count);
    });

    return frequency;
  };

  const createMeanArray = (data) => {
    const mean = {
      labels: [],
      datasets: {
        label: "Empleados",
        data: [],
      }
    };

    data.forEach((element) => {
      mean.labels.push(element.numberOfCertifications);
      mean.datasets.data.push(element.count);
    });

    return mean;
  };

  const certifications = createCertificationsArray(topCertifications);
  const employees = createEmployeesArray(topEmployees);
  const frequency = createFrequencyArray(frequecyCerts);
  const mean = createMeanArray(meanCertifications);

  return (
    <DashboardLayout>
      <MDBox py={3}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="shield"
                title="Certificaciones Totales"
                count={totalCertifications}
                percentage={{
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="person"
                title="Total de Empleados"
                count={totalEmployees}
                percentage={{
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="primary"
                  title="Top 5 Empleados"
                  description="Los empleados con mayor número de certificaciones"
                  date="Recién actualizado"
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
                  date="Recién actualizado"
                  chart={certifications}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Certificaciones vs Empleados"
                  description="La frecuencia de empleados según el número de certificaciones."
                  date={`Promedio: ${meanResult} certificaciones por empleado`}
                  chart={mean}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      <MDBox py={3}>
      <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultDoughnutChart
                  color="success"
                  title="Frecuencia de Certificaciones"
                  description={
                    <>
                      Todas las certificaciones obtenidas por <strong>+50</strong> empleados.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={frequency}
                />
              </MDBox>
            </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
