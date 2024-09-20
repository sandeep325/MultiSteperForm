import { Box, Grid2 ,Paper} from '@mui/material';
import React, { Component } from 'react'
import { Styles } from './Common/Style';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

 class FormComponents extends Component {
    render() {
    const {classes} = this.props;
        return (
            <>
                <Grid2 container className={classes.formcontainer}>
                    <Grid2 item xs={12} sm={7}>
                        <form>
                            <Box p={2} mb={2} component={Paper}>
                                    steper work here 
                            </Box>

                            <Box p={2} mb={2} component={Paper}>
                                  form work here
                            </Box>
                        </form>
                    </Grid2>
                </Grid2>
            </>
        )
    }
}


FormComponents.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(Styles)(FormComponents);

