import React from 'react'

import blogs from '../../server/public/blogs';


import Blogbox from './Blogbox';
import Filterbox from './Filterbox';
import Catpic from './Catpic';



class App extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        keyword: 'default'
      }

    //this.Blogbox = this.Blogbox.bind(this)
    this.updateState = this.updateState.bind(this);
    this.sortBlogs = this.sortBlogs.bind(this);
    this.showBlogs = this.showBlogs.bind(this)

  }


  sortBlogs() {
  
    let arr= blogs.reverse();
    return arr
    
  }

  //update the state from filterbox
  updateState(props) {

    // let update = props;
    // let dflt = {keyword: 'default'};
    // (update.keyword == blogs.object.keyword) ? this.setState({keyword: update.keyword}) : this.setState(dflt)
    this.setState({keyword: props.keyword})
        
  }

  //new state renders this
  showBlogs() {

    return(
      
      this.sortBlogs().filter(chosenBlogs => chosenBlogs.keyword === this.state.keyword).map(blog => {
        return  <Blogbox key={blog.title}
        keyword={blog.keyword}
        title={blog.title}
        date={blog.date}
        content={blog.content}
        image={blog.image}
        />;
      })

    )

  }

  //new function to display holder image or blogs (after keyword submit) here
  render() {
    return (
      <div className='container'>
        <h1>Rob's Blog v1.0</h1>
        <p>wazzup<br></br></p>
        <Filterbox updateState={this.updateState}/>

        {this.state.keyword === 'default' && <Catpic />}
        {this.state.keyword !== 'default' && this.showBlogs()}
        
      </div>
    )
  }
}

export default App