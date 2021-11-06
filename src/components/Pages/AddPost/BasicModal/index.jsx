import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import "./BasicModal.css";

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
          <div className="box-images">
            {" "}
            <PermMediaOutlinedIcon className="images" />
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 20 }}>
            Перетащите сюда фото или видео
            <Button
              variant="contained"
              style={{ width: "220px", fontSize: 13 }}
            >
              Выбрать с компьютера
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};