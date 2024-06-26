import './App.css'
import TextAndFileInput from './componenets/Input Feilds/TextAndFileInput'
import AntSwitchWithDayNight from './componenets/Buttons/AntSwitchWithDayNight'
import CopyClipBoardButton from './componenets/Buttons/CopyClipBoardButton'
import AntSwitchDarkMode from './componenets/Buttons/AntSwitchDarkMode'
import CardWithTailwind from './componenets/Cards/CardWithTailwind'
import LoginV3 from './componenets/Forms/LoginV3'
import SignUpV3 from './componenets/Forms/SignUpV3'
import ForgotPasswordV3 from './componenets/Forms/ForgotPasswordV3 '
import { Grid } from '@mui/material'
import IronMan from './componenets/Loaders/IronMan'
function App() {
  return (
    <Grid container gap={'10px'}>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <AntSwitchWithDayNight />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Grid>
      <Grid item xs={12}>
        <CardWithTailwind />
      </Grid>
      <Grid item xs={12}>
        <CardWithTailwind />
      </Grid>
      <Grid item xs={12}>
        <CardWithTailwind />
      </Grid>
      <Grid item xs={12}>
        <TextAndFileInput />
      </Grid>
    </Grid>
  )
}

export default App
