import React from 'react'

import Box from '@material-ui/core/Box';

export default class Filterbox extends React.Component {
    constructor(props) {
        super(props)

            this.state = {
                keyword: 'default'
            }
        
        this.onSubmit = this.onSubmit.bind(this)
        this.updateDetails = this.updateDetails.bind(this)
        
    }

    //update details function
    updateDetails(e) {
        const key = e.target.name
        const value = e.target.value
        const obj = {[key]: value}
        this.setState(obj)
        // console.log(obj)
    }


    //onsubmit function
    onSubmit(e) {
        e.preventDefault()
        const kword = this.state
        console.log('onsubmitting ', kword)
        this.props.updateState(kword)
    }

    render() {
        return(
            <Box display="flex" flexWrap="wrap" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                
                <form onSubmit={this.onSubmit}>

                    <label>
                        <input onChange={this.updateDetails} type="text" name="keyword" placeholder="enter keyword"/>
                    </label>
                        <input type="submit" value="Submit" />

                </form>
                
            </Box>
        )
    }

}