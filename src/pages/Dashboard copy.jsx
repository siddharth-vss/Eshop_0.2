import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchDashboard } from '../../store/actions/dashboardActions';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import { LineChart } from '../../components/LineChart';
import { PieChart } from '../../components/PieChart';
import { BarChart } from '../../components/BarChart';
import { Table } from '../../components/Table';
import { useStyles } from './styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.12)',
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const dashboard = useSelector((state) => state.dashboard);
  const { loading, error, orders, customers, products, sales } = dashboard;

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h2" gutterBottom>
            Orders
          </Typography>
          <LineChart data={orders} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h2" gutterBottom>
            Customers
          </Typography>
          <PieChart data={customers} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h2" gutterBottom>
            Products
          </Typography>
          <BarChart data={products} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h2" gutterBottom>
            Sales
          </Typography>
          <Table data={sales} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;