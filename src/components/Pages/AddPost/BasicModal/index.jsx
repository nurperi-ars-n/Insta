import React, { useState } from "react";
// import storage from "../../../../firebaseConfig";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./BasicModal.css";
import { Post } from "../Postt";
import { Input } from "@mui/material";

import firebase from "firebase/app";
import "firebase/storage";
// import {Post} from "./Postt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 7,
  borderRadius: "3%",
  borderColor: "white",
};

function initializeFirebase(){    
  var config = {
     apiKey: "myApiKey",
     authDomain: "myAuthDomain",
     databaseURL: "myDatabaseUrl",
     storageBucket: "myStorageBocket",
     messagingSenderId: "idhere"   
    };   
    //initialize firebase  
    firebase.initializeApp(config);  
 }

const storage = firebase.storage();




export const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = useState(null);
  const [url , setUrl] = useState("")
  const [progress , setProgress] = useState(0)


  const handleOnchange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100 
        );
        setProgress(progress)
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url1 => {
            console.log(url1);
            setUrl(url1)
          });
      }
    );
  };

  console.log("image: ", image);
  console.log(url);

  return (
    <div>
      <progress value={progress} max="100"/>
      <Button onClick={handleOpen}>Add Post</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Создание публикации
          </Typography>

          <input type="file" onChange={handleOnchange} />
          {/* <Post  onChange = {handleOnchange}/> */}
          <Input placeholder={"Напишите описание "} />
          <Button onClick={handleUpload}>SAVE POST</Button>
        </Box>
      </Modal>
      <br/>
      {url}
      <br/>
      <img src={url} alt="firebase-image"/>
    </div>
  );
};
