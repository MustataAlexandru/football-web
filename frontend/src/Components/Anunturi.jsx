import React , {useState , useEffect} from 'react'
import Foter from './Footer'
import { Button , Modal, Textarea} from 'flowbite-react'
import './announces.css';
import { UserProvider, useUser } from '../ContextProvider/UserProvider';
import { Alert } from 'flowbite-react';
import { Card } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";

export default function Anunturi() {
  const [alert , setAlert] = useState('hidden');
  const [isAnnouncesModalOpen, setIsAnnouncesModalOpen] = useState(false);
  const [announces , setAnnounces] = useState([]);
  const [title , setTitle] = useState('');
  const [content , setContent] = useState('');
  const {isLoggedIn} = useUser();
  const {user} = useUser();
  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (title !== '' && content !== '') {
      console.log(user.username , title , content);
      fetch('http://localhost:3001/announces/new', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({
          title: title.trim() ,
          created_by: user.username.trim(),
          content: content.trim()
    }) }
      )
        .then(response => {
          response.json()
          console.log(response)        
        })
        .then(()=>{
         setIsAnnouncesModalOpen(false);
         setTitle('');
         setContent('');
         setAlert('visible');
         setTimeout(() => setAlert('hidden'), 4000);
      }).catch (error => {
        console.error(error);
      });
      
      }
      
    }
    console.log(title , content);
  
    const fetchAnnounces = () => {
      fetch("http://localhost:3001/announces")
        .then((res) => res.json())
        .then((prev) => setAnnounces(prev.map(
          item => ({...item, created_at: item.created_at.toLocaleString()})
        )))
        .catch((err) => console.error("Error loading announces:", err));
    };
    

    useEffect(() => {fetchAnnounces()}, [alert]);
    console.log(announces);
    console.log(user);
  return (
    <div className='container'>
      {  user?.role === 1 && (<Button type="submit" className='width20' onClick={() => setIsAnnouncesModalOpen(true)}>Add announcement</Button>)}
      
      <Alert className={`mg mt-2 width50 ${alert}`} color="info">
      <span className="font-medium mg text-center">Succesfully added!</span>
    </Alert>
    <div className='announces_container'>
      {announces.map(announce => ( <Card href="#" className="max-w-lg" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {announce.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {announce.content}
      </p>
      <p style={{color: 'gray'}}>by {announce.created_by}</p>
      <p style={{color: 'gray'}}> {announce.created_at} </p>
    </Card>))}
    </div>
      {isAnnouncesModalOpen && (
          <Modal
            show={isAnnouncesModalOpen}
            onClose={() => setIsAnnouncesModalOpen(false)}
            size="md"
          >
            <Modal.Header > Add New Announcement</Modal.Header>
            <Modal.Body>
              <form onSubmit={handleAddAnnouncement} className="flex flex-col gap-3">
              
                <FloatingLabel
                  type="text"     
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  variant="outlined" label="Title"
                  required
                />
                
                <Textarea
                  rows={10}
                  type="text"
                  className="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content"
                  required
                />
                <Button type="submit">Submit</Button>
                <Button color="gray" onClick={() => setIsAnnouncesModalOpen(false)}>
                  Close
                </Button>
              </form>
            </Modal.Body>
          </Modal>
        )}
      </div>
  )}
