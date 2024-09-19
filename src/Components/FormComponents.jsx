import { Grid2 ,withStyles} from '@mui/material';
import React, { Component } from 'react'
import { Styles } from './Common/Style';
import PropTypes from 'prop-types';
// import { withStyles } from '@mui/styles';

 class FormComponents extends Component {
    render() {
        return (
            <>
                <Grid2 container>
                    <Grid2 item xs={12} sm={7}></Grid2>
                </Grid2>
            </>
        )
    }
}


FormComponents.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(Styles)(FormComponents);

