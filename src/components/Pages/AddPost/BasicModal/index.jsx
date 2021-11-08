import  React,{useState} from "react";
// import storage from "../../../../firebaseConfig";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import "./BasicModal.css";
import {Post} from "../Postt";
import {Input} from "@mui/material";



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

export const BasicModal = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [image, setImg] = useState(null)

 //  const loadImage = (e) => {
 //    console.log(e.target.files[0])
 // if(e.target.files[0])
 //   setImg(e.target.files[0])
 //
 //  }
 //  const uploadImg = () => {
 //  const uploadTask = storage.ref(`images/${image?.name}`).put(image)
 //    uploadTask.on(
 //        "state.changed",
 //        snapshot => {},
 //        error => {
 //          console.log(error)
 //        },
 //        () => {
 //          storage
 //              .ref("images")
 //              .child(image?.name)
 //              .getDownloadURL()
 //              .then(url => {
 //                console.log(url)
 //              })
 //        }
 //    )
 //  }
 //  console.log(image, 'img')
  return (
    <div >
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
          {/*<div className="box-images">*/}
          {/*  {" "}*/}
          {/*  <PermMediaOutlinedIcon className="images" />*/}
          {/*</div>*/}
            <Post/>
            <Input  placeholder={'Напишите описание '}/>
            <Button>ADD POST</Button>
        </Box>
      </Modal>
    </div>
  );
};
