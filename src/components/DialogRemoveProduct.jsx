import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

const DialogRemoveProduct = ({ 
    product, 
    onYes, 
    onNo, 
    show 
}) => {
  const [open, setOpen] = useState(show);

  const handleClose = () => {
    setOpen(false);
    onNo();
  };

  return (
      <Dialog
        open={open || show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Remove product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to remove "{product.title}" from your cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={onYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default DialogRemoveProduct;
