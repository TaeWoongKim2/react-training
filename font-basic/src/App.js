import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './App.css';

import 'fontsource-roboto';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'fontsource-roboto',
      'Roboto',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Typography variant="h2" gutterBottom>
              Welcome to React
          </Typography>
          <Button variant="contained" color="secondary">Ready To Go</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
