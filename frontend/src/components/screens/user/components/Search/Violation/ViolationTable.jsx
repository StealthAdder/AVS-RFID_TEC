import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography, Button } from '@material-ui/core';
const ViolationTable = ({
  MOCK_DATA,
  vDetailFor,
  vDetailState,
  setVioTable,
}) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const violations = MOCK_DATA.searchResult.violation;
  const userData = MOCK_DATA.searchResult;
  // console.log(violations);
  // console.log(userData);

  const classes = useStyles();
  return (
    <Container>
      <Typography variant='h4'>Violations</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Ticket ID</TableCell>
              <TableCell>Regd. Owner</TableCell>
              <TableCell>RF_TAG</TableCell>
              {/* <TableCell>Vehicle Details</TableCell> */}
              <TableCell>Violation Type</TableCell>
              <TableCell>Location/ZipCode</TableCell>
              <TableCell>EventTime</TableCell>
              <TableCell>Fine Amt.</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {violations
              .slice(0)
              .reverse()
              .map((violation) => (
                <TableRow key={violation._id}>
                  <TableCell component='th' scope='row'>
                    <Button
                      onClick={() => {
                        vDetailFor({ violation, userData });
                        setVioTable(false);
                        vDetailState(true);
                      }}
                    >
                      {violation._id}
                    </Button>
                  </TableCell>
                  <TableCell align='right'>{userData.regdOwner}</TableCell>
                  <TableCell align='right'>{userData.rf_tag}</TableCell>
                  {/* <TableCell align='right'>{`${userData.manufacturer} ${userData.vehicleModel}`}</TableCell> */}
                  <TableCell align='right'>{violation.violationType}</TableCell>
                  <TableCell align='right'>{`${violation.location} ${violation.zipcode}`}</TableCell>
                  <TableCell align='right'>{violation.eventTime}</TableCell>
                  <TableCell align='right'>{violation.fineAmount}</TableCell>
                  <TableCell align='right'>{violation.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViolationTable;
