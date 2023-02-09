import { Button, Modal, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  maxHeight: "95%",
  overflowY: "auto",
  p: 4,
};

const Root = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    width: "80%",
  },
  [theme.breakpoints.up('md')]: {
    width: "50%",
  },
}));

const ConfirmDialog = ({
  show,
  onClose,
  title,
  confirmActionLabel = "Yes",
  cancelActionLabel = "No",
  onConfirm = null,
  renderConfirmButton = null,
  children,
}) => {
  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Root sx={style}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{children}</Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          {renderConfirmButton ? (
            renderConfirmButton()
          ) : (
            <Button onClick={onConfirm} variant="contained">
              {confirmActionLabel}
            </Button>
          )}
          <Button onClick={onClose}>{cancelActionLabel}</Button>
        </Box>
      </Root>
    </Modal>
  );
};

export default ConfirmDialog;
