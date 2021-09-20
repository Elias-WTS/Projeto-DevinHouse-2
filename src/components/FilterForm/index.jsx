import { Button, FormControl, InputLabel,
  makeStyles,
  MenuItem, Select, TextField} from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  searchForm: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    marginBottom: '20px'
  }
})
  
const FilterForm = ({onSubmit}) => {
  const classes = useStyles();
  const [formChannel, setFormChannel] = useState('');
  const [formTrigger, setFormTrigger] = useState('');
  const [formTimer, setFormTimer] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      channel: formChannel,
      trigger: formTrigger,
      timer: formTimer,
    })
  }

  return (
    <form className={classes.searchForm} onSubmit={handleSubmit}>
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
      <Button className="buttonFilter" type='submit' variant="contained">Filter</Button>
    
    </form>
  )
}

export default FilterForm;