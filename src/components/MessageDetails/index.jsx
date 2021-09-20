import { Grid, Typography, makeStyles, DialogContentText } from "@material-ui/core";
import { Modal } from "../";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: 600,
  },
  rowLabel: {
    minWidth: '100px'
  },
}));

const MessageDetails = ({message, onClose}) => {
  const classes = useStyles()
  return (
    <Modal
      onClose={onClose}
      title='Detalhes da Mensagem'
    >
      <Grid container>
        <Grid item container>
          <Grid item className={classes.rowLabel}>
            <Typography variant='button' component='span'>Canal</Typography>
          </Grid>
          <Grid item>
            {message.channel}
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item className={classes.rowLabel}>
          <Typography variant='button' component='span'>Gatilho</Typography>
          </Grid>
          <Grid item>
            {message.trigger}
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item className={classes.rowLabel}>
            <Typography variant='button' component='span'>Timer</Typography>
          </Grid>
          <Grid item>
            {message.timer}
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item className={classes.rowLabel}>
            <Typography variant='button' component='span'>Mensagem</Typography>
          </Grid>
          <DialogContentText>
            {message.message}
          </DialogContentText>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default MessageDetails;