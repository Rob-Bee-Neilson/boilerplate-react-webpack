import React from 'react'

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
                
                <Button variant="contained" color="primary" onClick={this.handleClick}>
                    {this.state.toggle ? 'hide geek deets' : 'Show geek deets'}
                </Button>
                
                {this.state.toggle && <Geekdeets />}

            </div>
        );
    }


}