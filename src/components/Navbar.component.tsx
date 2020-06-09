import React, {useState} from "react";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/images/Cartoon_Network_1992_logo.svg";

export default function (props: any) {
    let [searchValue, setSearchValue] = useState(undefined);
    let myFormRef = React.createRef();
    const handleChange = () => {
        props.filterByName(myFormRef.current.value);
        console.log("yes Im coming", myFormRef.current.value)
    }

    return (
        <>
            <Navbar style={styles.NavbarContainer} bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {/*<Nav.Link href="#home">Home</Nav.Link>*/}

                    <Nav.Link className="App-link customNavTxtLink"
                              href="https://rickandmortyapi.com/"
                              target="_blank"
                              rel="noopener noreferrer">
                        Rick & Morty character catalog {20*props.page - 20} - {20*props.page} of {props.count} showing.
                    </Nav.Link>
                    <Nav.Link className="resetbtn" href="#features"
                              onClick={props.resetAll}
                    >Reset</Nav.Link>
                </Nav>
                <Form inline onSubmit={handleChange}>
                    <FormControl type="text" placeholder="Search by name" className="mr-sm-2" ref={myFormRef}/>
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <br/>
        </>
    )
}

const styles = {
   NavbarContainer: {
       width: "100%"
   }
};
