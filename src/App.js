import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import {Link} from "react-router-dom";
import './App.css';
import Main from './components/main';

function App() {
  return (
    <div>
       <div className="demo-big-content">
             <Layout fixedHeader>
                <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Umesh Shrestha</strong></span>}>
                    <Navigation className = "navfontcolor">
                        <Link to="/aboutme">about me</Link>
                        <Link to="/resume">resume</Link>
                        <Link to="/contact">contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/aboutme">about me</Link>
                        <Link to="/resume">resume</Link>
                        <Link to="/contact">contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                  <Main />
                </Content>
            </Layout>
        </div>
   
    </div>
  );
}

export default App;
