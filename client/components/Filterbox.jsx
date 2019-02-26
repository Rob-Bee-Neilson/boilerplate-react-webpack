import React from 'react'

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
            //console.log(obj)
        }


    //onsubmit function
        onSubmit(e) {
            e.preventDefault()
            const kword = this.state
            console.log('onsubmitting ', kword)
            this.props.filterBlogs(kword)
        }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    {/* Enter keyword: */}
                    <input onChange={this.updateDetails} type="text" name="keyword" placeholder="enter keyword"/>
                </label>
                    <input type="submit" value="Submit" />
            </form>
        )
    }

}