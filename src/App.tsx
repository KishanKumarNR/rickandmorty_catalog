import React, {useState, useEffect} from 'react';
import Showcase from "./components/Showcase.component"

import './App.css';
import Navbar from "./components/Navbar.component";
// @ts-ignore
import Api from "./services/Api.service"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "#343a40 !important",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
            marginLeft: "24px"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);
function App() {
    const classes = useStyles();
  let [count, setCount] = useState(0);
  let [characters, setCharacters] = useState([]);
  let [notFound, setNotFound] = useState(false);

  useEffect(() => {
      Api.getAllCharacters()
          .then((response: any) => {
                const {info, results} = response;
                setCount(info.count);
                setCharacters(results);
              setNotFound(false);
          })
          .catch((error: any) => {
              setCount(0);
              setCharacters([]);
              setNotFound(true);
                console.log(error);
          })
  }, [])

    const filterByName = (searchValue: any) => {
        // logger.debug(`submitted with query: ${this.state.searchValue}`);
        Api.getCharactersByName(searchValue)
            .then(({ info, results }) => {
                setNotFound(false);
                if (results && results.length) {
                    setCharacters(results);
                } else {
                    setCharacters([]);
                }
                setCount(info.count)
            })
            .catch(() => {
                setCount(0);
                setCharacters([]);
                setNotFound(true)
            });
    }

    const resetAll = () => {
        Api.getAllCharacters()
            .then((response: any) => {
                const {info, results} = response;
                setCount(info.count);
                setCharacters(results);
                setNotFound(false);
            })
            .catch((error: any) => {
                setCount(0);
                setCharacters([]);
                setNotFound(true);
                console.log(error);
            })
        setGender('');
        setSpecie('');
    }

    const [gender, setGender] = React.useState('');
    const [specie, setSpecie] = React.useState('');

    const handleGenderInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
    };

    const handleSpeciesInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpecie((event.target as HTMLInputElement).value);
    };


    useEffect(() => {
        applyFilters();
    }, [specie, gender]);

    const applyFilters = () => {
        Api.filterCharacters(gender, specie)
            .then((response: any) => {
                const {info, results} = response;
                setCount(info.count);
                setCharacters(results);
                setNotFound(false);
            })
            .catch((error: any) => {
                setCount(0);
                setCharacters([]);
                setNotFound(true);
                console.log(error);
            })
    }


    return (
    <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      {/*<header className="App-header">*/}
      {/*    */}
      {/*</header>*/}
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>

                <Navbar count={count} filterByName={filterByName} resetAll={resetAll}/>

        </AppBar>

          <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                  paper: classes.drawerPaper,
              }}
          >
              <Toolbar />
              <div className={classes.drawerContainer}>
                  <List>
                      <ListItemText primary={"Filters"} />
                  </List>
                  <Divider />
                  <List>
                      <FormControl component="fieldset">
                          <FormLabel component="legend">Species</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" value={specie} onChange={handleSpeciesInput}>
                              <FormControlLabel value="Human" control={<Radio />} label="Human" />
                              <FormControlLabel value="Humanoid" control={<Radio />} label="Humanoid" />
                          </RadioGroup>
                      </FormControl>
                  </List>
                  <Divider>
                  </Divider>
                  <List>
                      <FormControl component="fieldset">
                          <FormLabel component="legend">Gender</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleGenderInput}>
                              <FormControlLabel value="female" control={<Radio />} label="Female" />
                              <FormControlLabel value="male" control={<Radio />} label="Male" />
                              <FormControlLabel value="unknown" control={<Radio />} label="unknown" />
                          </RadioGroup>
                      </FormControl>
                  </List>
              </div>
          </Drawer>
          <main className={classes.content+ ' ' +"App-container"}>
              <Toolbar />
              <Showcase characters={characters}></Showcase>
          </main>

    </div>
  );
}

export default App;
