import ContentWrapper from '../components/ContentWrapper';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { TextField, Button, FormControl, InputLabel,
    MenuItem, Select, makeStyles, Container} from '@material-ui/core';
import { useEffect, useState } from 'react';
import * as yup from 'yup';

const useStyles = makeStyles({
    addForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      justifyContent: 'space-between',
      width: '500px'
    }
  })

const NewMessage = () => {
const classes = useStyles();
const validationSchema = yup.object().shape({
channel: yup.string().required(),
trigger: yup.string().required(),
timer: yup.string().required().matches(/^[0-9]+:[0-5][0-9]$/,'formato HH:MM'),
message: yup.string().required()
});

const [formChannel, setFormChannel] = useState('');
const [formTrigger, setFormTrigger] = useState('');
const [formTimer, setFormTimer] = useState('');
const [formMessage, setFormMessage] = useState('');

const [channels, setChannels] = useState([]);
const [triggers, setTriggers] = useState([]);

useEffect(() => {
  ( async () => {
    const response = await fetch('/api/channels');
    const chs = await response.json();
    setChannels(chs);
  })();
}, []);

useEffect(()=>{
  ( async () => {
    const response = await fetch('/api/triggers');
    const trgs = await response.json();
    setTriggers(trgs);
  })();
}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const data= {
        channel: formChannel,
        trigger: formTrigger,
        timer: formTimer,
        message: formMessage
      }

    await validationSchema.validate(data)

    await fetch('/api/message', {
      method: 'POST',
      body:data
    })
    alert('mensagem cadastrada com sucesso');
    setFormChannel('');
    setFormTrigger('');
    setFormTimer('');
    setFormMessage('');
  }catch(e){
    if(e.name == 'ValidationError'){
        alert(e.message)
    }
  }
}
  return (
    <>
      <ContentWrapper
        header={{
          bgColor:'transparent',
          title: 'New Message',
          leftIcon: AddCommentIcon
        }}
      ><Container>
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
        <div>
            <Button type='submit' variant="contained" color='primary'>Cadastrar</Button>
        </div>
        </form>
        </Container>
      </ContentWrapper>
    </>
  )
}

export default NewMessage;