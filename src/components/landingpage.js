import React, { Component } from "react";
import "./landingpage.css";
import { Grid, Cell } from "react-mdl";


class Landingpage extends Component {
    render() {
        return (
            <div className = "LandingStyle">
                <Grid className = "Background">
                    <Cell col={12}>
                        <img src="https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg" alt="avatar" className="avatar-img" />

                        <div className = "banner-text">
                            <h2>Web Developer</h2>
                            <hr />
                            <p>HTML | CSS | Bootstrap | JavaScript | NodeJS | React </p>

                            <div className = "social-links">

                            <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>

                            <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            
            </div>
        );
    };
};

export default Landingpage;