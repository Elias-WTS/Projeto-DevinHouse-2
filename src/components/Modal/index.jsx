import { Dialog, DialogContent, DialogTitle, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

const Modal = ({onClose, children, title}) => {
  const classes=useStyles();
  return <>
    <Dialog
      open={true}
      onClose={onClose}
      className={classes.modal}
    > 
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  </>
}

export default Modal;