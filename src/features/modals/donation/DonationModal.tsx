import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton as MuiIconButton,
  styled,
  Typography
} from '@mui/material'
import { MdClose } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from 'hooks/store'
import { setIsDonationModalOpened } from 'store/slices/modalSlice'
import { KO_FI_URL } from 'consts'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: 'rgba(238,239,239,0.1)',
  '&:hover': {
    backgroundColor: 'rgba(238,239,239,0.4)'
  }
}))

export const DonationModal = () => {
  const { isDonationModalOpened } = useAppSelector((state) => state.modal)

  const dispatch = useAppDispatch()

  return (
    <Dialog
      open={isDonationModalOpened}
      onClose={() => dispatch(setIsDonationModalOpened(false))}
      sx={{
        '& > div > .MuiPaper-root': {
          padding: 2
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0
        }}
      >
        Support Dealy.gg
        <IconButton onClick={() => dispatch(setIsDonationModalOpened(false))}>
          <MdClose size={14} />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          minWidth: {
            xs: 300,
            sm: 350
          },
          my: 4,
          padding: 2,
          pb: 0
        }}
      >
        <Typography variant="subtitle1">
          Hi - I’m the one standing behind all the daily deals provided for you,
          to catch them on time and play your favourite games on Playstation,
          Xbox and Steam! If you find my updates useful, you can support me on a
          daily, monthly or yearly basis!\nAnyways, thank you for being here!
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          padding: 0
        }}
      >
        <Button href={KO_FI_URL}>Support Dealy.gg on Ko-fi</Button>
      </DialogActions>
    </Dialog>
  )
}
