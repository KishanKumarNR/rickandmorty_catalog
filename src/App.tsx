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
import {DropdownButton, Dropdown, Pagination} from "react-bootstrap";
import Background from "./assets/images/double-bubble-dark.png"
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: "#343a40 !important",
            height: "20px !important"
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
  let [page, setPage] = useState(1);
  let [paginator, setPaginator] = useState({});
  let [modalActive, setModalActive] = useState(false);
  let [modalCharacter, setModalCharacter] = useState({});

  useEffect(() => {
      Api.getAllCharacters()
          .then(setupShowcase)
          .catch(errorShowcase)
  }, [])

    const filterByName = (searchValue: any) => {
        // logger.debug(`submitted with query: ${this.state.searchValue}`);
        Api.getCharactersByName(searchValue)
            .then(setupShowcase)
            .catch(errorShowcase);
    }

    const resetAll = () => {
        Api.getAllCharacters()
            .then(setupShowcase)
            .catch(errorShowcase)
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
            .then(setupShowcase)
            .catch(errorShowcase)
    }

    const setupShowcase = (response: any) => {
        const {info, results} = response;
        let page = 0;
        if (info && info.next) {
            page = info && Number(info.next.split("=")[1]);
            page = page-1;
        } else if (info && info.prev) {
            page = info && Number(info.prev.split("=")[1]);
            page = page+1;
        }
        setCount(info.count);
        setCharacters(results);
        setNotFound(false);
        setPaginator({...info});
        setPage(page)
    }

    const errorShowcase = (error: any) => {
        setCount(0);
        setCharacters([]);
        setNotFound(true);
        setPaginator({});
        setPage(0)
        console.log(error);
    }

    const setActiveCharacter = (id: number) => {
        Api.getCharacterById(id).then(data => {
            console.log(data);
            setModalCharacter(data)
            setModalActive(true);
        });
    }

    const unsetActiveCharacter = () => {
        setModalCharacter({});
        setModalActive(false);
    }

    const handleSelect = (evt) => {
        // what am I suppose to write in there to get the value?
        console.log(evt)
        var newArrayCharacters = newArrayCharacters = characters.slice();;
        switch(evt) {
            case("ascending"):
                newArrayCharacters.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
                break;
            case("descending"):
                newArrayCharacters.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
                break;
        }
        setCharacters(newArrayCharacters);
    }

    const handlePaginator = (event: any) => {
        console.log("paginating", event.target.text);
        switch(event.target.text) {
            case("›Next"):
                paginator.next && Api.getCharactersByPage(paginator.next).then(setupShowcase).catch(errorShowcase)
                break;
            case("‹Previous"):
                paginator.prev && Api.getCharactersByPage(paginator.prev).then(setupShowcase).catch(errorShowcase)
                break;
        }
    }


    return (
    <div className="App" style = {{ backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }}>
        {/*<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />*/}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      {/*<header className="App-header">*/}
      {/*    */}
      {/*</header>*/}
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>

                <Navbar page={page} count={count} filterByName={filterByName} resetAll={resetAll}/>

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
              <div className="d-block ml-auto filterCardIdBtn">
                  <DropdownButton id="dropdown-basic-button" title="Filter by Id" onSelect={handleSelect}>
                      <Dropdown.Item eventKey='ascending'>Ascending</Dropdown.Item>
                      <Dropdown.Item eventKey='descending'>Descending</Dropdown.Item>
                  </DropdownButton>
              </div>
              <Showcase setActiveCharacter={setActiveCharacter} characters={characters}></Showcase>
          <Pagination onClick={handlePaginator}>
              {/*<Pagination.First />*/}
              <Pagination.Prev />
              <Pagination.Item>{page}</Pagination.Item>
              <Pagination.Next />
              {/*<Pagination.Last />*/}
          </Pagination>
          </main>
        {modalActive ? (
            <div className="Modal" onClick={e => unsetActiveCharacter()}>
                {/*<div className="Pickle-container">*/}
                {/*    <figure>*/}
                {/*        <img src={pickle} alt="pickle-rick" />*/}
                {/*    </figure>*/}
                {/*</div>*/}

                <div className="Card-detail">
                    <div className="Card-image">
                        <figure>
                            <img src={modalCharacter.image} alt={modalCharacter.name} />
                        </figure>
                    </div>
                    <div className="Card-detail-description">
                        <div className="Card-name">
                            <h3>{modalCharacter.name}</h3>
                            <div className="Characteristic">
                                <p>Status</p>
                                <p className="Characteristic-value">
                                    {modalCharacter.status}
                                </p>
                            </div>
                            <div className="Characteristic">
                                <p>Specie</p>
                                <p className="Characteristic-value">
                                    {modalCharacter.species}
                                </p>
                            </div>
                            <div className="Characteristic">
                                <p>Gender</p>
                                <p className="Characteristic-value">
                                    {modalCharacter.gender}
                                </p>
                            </div>
                            <div className="Characteristic">
                                <p>Origin</p>
                                <p className="Characteristic-value">
                                    {modalCharacter.origin.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null}
    </div>
  );
}

export default App;
