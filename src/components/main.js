import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";


const Main = () => (
    <Switch>
        <Route exact path = "/" component = {Landingpage} />
        <Route path = "/AboutMe" component = {AboutMe} />
        <Route path = "/Contact" component = {Contact} />
        <Route path = "/Resume" component = {Resume} />
    </Switch>
);

export default Main;