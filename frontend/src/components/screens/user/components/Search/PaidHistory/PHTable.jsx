import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Typography, Button, makeStyles } from '@material-ui/core';
const PHTable = ({ MOCK_DATA, vPHDetailFor, vPHDetailStatus }) => {
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
      minWidth: 650,
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
              <TableCell align='left'>Receipt ID</TableCell>
              <TableCell align='center'>Ticket ID</TableCell>
              <TableCell align='center'>RF_TAG</TableCell>
              <TableCell align='center'>Violation Type</TableCell>
              <TableCell align='center'>Fine Amt.</TableCell>
              <TableCell align='center'>STATUS</TableCell>
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
                        vPHDetailFor({ paid, userData });
                        vPHDetailStatus(true);
                      }}
                    >
                      {paid.receiptId}
                    </Button>
                  </TableCell>
                  <TableCell align='center'>
                    XXXX{paid._id.substr(paid._id.length - 5)}
                  </TableCell>
                  <TableCell align='center'>{userData.rf_tag}</TableCell>
                  <TableCell align='center'>{paid.violationType}</TableCell>
                  <TableCell align='center'>{paid.fineAmount}</TableCell>
                  <TableCell align='center'>{paid.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PHTable;
