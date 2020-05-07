import React from 'react'
import {connect} from 'react-redux'
import {battleCount} from '../redux/Actions'

class CountBattles extends React.Component{
    componentDidMount(){
        this.props.battleCount()
    }
    render(){
        return(
            <div className="notification is-link is-large">Total Battles: {this.props.count}</div>
        )
    }
}

const mapStateToProps=(state)=>{
   return {count:state.count} 
}

export default connect(mapStateToProps,{battleCount})(CountBattles);