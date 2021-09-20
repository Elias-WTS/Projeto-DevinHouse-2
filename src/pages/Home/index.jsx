import './index.css';
import { useEffect, useState } from "react";
import {useHistory} from  "react-router-dom"
import ContentWrapper from '../components/ContentWrapper';
import ForumIcon from '@material-ui/icons/Forum';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CircularProgress
} from '@material-ui/core';

import { FilterForm, MessageDetails} from '../../components';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMessages = async (filter='') => {
    setLoading(true);
    let url = `api/messages${filter}`;
    const response = await fetch(url);
    return await response.json();
  }

  const updateMessages = (msgs) => {
    setLoading(false);
    setMessages(msgs);
  }

  useEffect(()=>{
    ( async () => {
      const msgs = await getMessages()
      updateMessages(msgs);
    })();
  }, []);

  const handleFormSubmit = async ({channel, trigger, timer}) => {
    const msgs = await getMessages(`?channel=${channel}&trigger=${trigger}&timer=${timer}`);
    updateMessages(msgs);
  }

  const showMessage = (message) => { 
    setModalOpen(true)
    setSelectedMessage(message)
  }

  const NewMessageButton = () => {
    return(
      <Button
        startIcon={<AddCommentIcon />}
        variant='contained'
        className="buttonAdd"
        onClick={() => {
          history.push("/message/add")
        }}
      >
        Add
      </Button>
    )
  }

  return (
    <>
      <ContentWrapper
        header={{
          bgColor:'transparent',
          title: 'Message',
          leftIcon: ForumIcon,
          rightContent: NewMessageButton
        }}
      >
        <div className='homePageContent'>
          <FilterForm onSubmit={handleFormSubmit}/>

          {loading && <CircularProgress />}
          {!loading && 
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Channel</TableCell>
                    <TableCell>Trigger</TableCell>
                    <TableCell>Timer</TableCell>
                    <TableCell>Ação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    messages.map(
                      (message, idx) => (
                        <TableRow key={idx}
                          >
                          <TableCell>{message.channel}</TableCell>
                          <TableCell>{message.trigger}</TableCell>
                          <TableCell>{message.timer}</TableCell>
                          <TableCell><button className='ButtonVerificar' onClick={()=>{ showMessage(message)}}>Verificar</button></TableCell>
                        </TableRow>
                      )
                    )
                  }
                </TableBody>
              </Table>
            </TableContainer>
          }
        </div>
      </ContentWrapper>
      
      { modalOpen && <MessageDetails message={selectedMessage} onClose={()=>setModalOpen(false)}/>}
    </>
  )
}

export default Home;