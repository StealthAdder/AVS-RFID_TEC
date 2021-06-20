import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography, Button, makeStyles } from '@material-ui/core';
const PHTable = ({ MOCK_DATA }) => {
  const violations = MOCK_DATA.searchResult.violation;
  const userData = MOCK_DATA.searchResult;
  // PAID PUSHER
  var PAIDS = violations.reduce((PAIDS, violation) => {
    if (violation.status === 'PAID') {
      // console.log(violation._id);
      PAIDS.push(violation);
    }
    return PAIDS;
  }, []);

  // console.log(PAIDS);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();
  return (
    <Container>
      <Typography variant='h4'>Paid History</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ReceiptId</TableCell>
              <TableCell>RF_TAG</TableCell>
              <TableCell>Violation Type</TableCell>
              <TableCell>Fine Amt.</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PAIDS.slice(0)
              .reverse()
              .map((paid) => (
                <TableRow key={paid._id}>
                  <TableCell component='th' scope='row'>
                    <Button
                      onClick={() => {
                        console.log('receipt clicked');
                      }}
                    >
                      {paid.receiptId}
                    </Button>
                  </TableCell>
                  <TableCell align='right'>{userData.rf_tag}</TableCell>
                  {/* <TableCell align='right'>{${userData.manufacturer} ${userData.vehicleModel}}</TableCell> */}
                  <TableCell align='right'>{paid.violationType}</TableCell>
                  <TableCell align='right'>{paid.fineAmount}</TableCell>
                  <TableCell align='right'>{paid.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PHTable;
