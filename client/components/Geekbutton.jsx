import React from 'react'

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
                console.log('state is true')
                return <Geekdeets />
            } else {console.log('state is false')}
        });

    }

    render() {
        return (
            <div className='geek-button'>
                <button onClick={this.handleClick}>
                {this.state.toggle ? 'hide geek deets' : 'Show geek deets'}
                </button>

                {this.state.toggle && <Geekdeets />}
            </div>
        );
    }


}

  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
//   );