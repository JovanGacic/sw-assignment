import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Highlighter from "react-highlight-words";

const useStyles = makeStyles({
  table: {
    minWidth: 850
  },
});

const DetailComponent = (props) => {

  const { open, element, handleClose, searchString } = props;
  const classes = useStyles();

  return (
    <Dialog maxWidth="xl" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{element.name !== undefined ? element.name : element.title}</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {Object.keys(element).map((key, index) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {key}
                  </TableCell>
                  <TableCell align="right">
                    <Highlighter
                      highlightClassName="highlightclass"
                      searchWords={[searchString]}
                      autoEscape={true}
                      textToHighlight={element[key].toString()}>

                    </Highlighter>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Back
                </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DetailComponent;