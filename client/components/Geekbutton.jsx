import React from 'react'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Geekdeets from './Geekdeets'

export default class Geekbutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggle: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
            }, () => {
            if (this.state.toggle === true) {
                return <Geekdeets />
            }
        });

    }

    render() {
        return (
            <div className='geek-button'>
                
                <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                        {this.state.toggle ? 'hide geek deets' : 'Show geek deets'}
                    </Button>
                </Box>
                
                {this.state.toggle && <Geekdeets />}

            </div>
        );
    }


}