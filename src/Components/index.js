import React from "react";
import Form from "./form";
import { Grid } from "@material-ui/core";

const Group = () => {
    return(
        <Grid container>
            <Grid item sm style={{padding: 200}}>
                Logo
            </Grid>
            <Grid item sm style={{padding: 200}}>
                <Form />
            </Grid>
        </Grid>
    )
}

export default Group;