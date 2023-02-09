import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const DialogRemoveProduct = ({ product, onYes, onNo, show }) => {
  const [open, setOpen] = useState(show);

  const handleClose = () => {
    setOpen(false);
    onNo();
  };

  return (
    <ConfirmDialog
      show={open || show}
      onClose={handleClose}
      onConfirm={onYes}
      title="Remove product"
    >
      Do you want to remove "{product.title}" from your cart?
    </ConfirmDialog>
  );
};

export default DialogRemoveProduct;
