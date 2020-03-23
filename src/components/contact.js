import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./contact.css"


class Contact extends Component {
    render() {
        return (
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col = {6}>
                        <img src="https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg" alt="umesh" />
                        <h3>Umesh Shrestha</h3>
                    </Cell>
                    <Cell col = {6}>
                        <h5>Phone: XXX-XXX-XXXX</h5>
                        <h5>E-mail: umesh.state@gmail.com</h5>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default Contact;