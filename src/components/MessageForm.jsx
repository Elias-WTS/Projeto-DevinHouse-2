import { useEffect, useState } from 'react';
import { TextField, Button, FormControl, InputLabel,
  MenuItem, Select, DialogActions, makeStyles} from '@material-ui/core';
import { Modal } from '.';

const useStyles = makeStyles({
  addForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',
    width: '500px'
  }
})

const MessageForm = ({ onClose }) => {
  const classes = useStyles();
  const [formChannel, setFormChannel] = useState('');
  const [formTrigger, setFormTrigger] = useState('');
  const [formTimer, setFormTimer] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const [channels, setChannels] = useState([]);
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    ( async () => {
      const response = await fetch('api/channels');
      const chs = await response.json();
      setChannels(chs);
    })();
  }, []);

  useEffect(()=>{
    ( async () => {
      const response = await fetch('api/triggers');
      const trgs = await response.json();
      setTriggers(trgs);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await fetch('api/message', {
        method: 'POST',
        body:{
          channel: formChannel,
          trigger: formTrigger,
          timer: formTimer,
          message: formMessage
        }
      })
      onClose();
    }catch(e){

    }
  }

  return (
    <Modal
      onClose={onClose}
      title='Nova Mensagem'
    >
        <form className={classes.addForm} onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="channel_select">Canal</InputLabel>
            <Select
              label="Canal"
              value={formChannel}
              onChange={(e)=>setFormChannel(e.target.value)}
              inputProps={{
                name: 'channel',
                id: 'channel_select',
              }}
            >
              <MenuItem aria-label='None' value="" />
              {
                channels.map((channel, idx) => (
                  <MenuItem key={idx} value={channel.name}>
                    {channel.name}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="trigger_select">Gatilho</InputLabel>
            <Select
              label="Gatilho"
              value={formTrigger}
              onChange={(e)=>setFormTrigger(e.target.value)}
              inputProps={{
                name: 'trigger',
                id: 'trigger_select',
              }}
            >
              <MenuItem aria-label='None' value="" />
              {
                triggers.map((trigger, idx) => (
                  <MenuItem key={idx} value={trigger.name}>
                    {trigger.name}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <TextField 
              variant='outlined'
              id='timer_input'
              name="timer"
              label="Timer"
              value={formTimer}
              onChange={(e)=>setFormTimer(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <TextField 
              multiline
              variant='outlined'
              id='message_input'
              name="message"
              label="Mensagem"
              rows={5}
              value={formMessage}
              onChange={(e)=>setFormMessage(e.target.value)}
            />
          </FormControl>
          <DialogActions>
            <Button type='submit' variant="contained" color='primary'>Cadastrar</Button>
          </DialogActions>
        </form>
    </Modal>
  )
}
export default MessageForm;