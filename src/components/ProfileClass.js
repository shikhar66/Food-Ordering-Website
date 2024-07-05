import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
            }
        }
    }
    componentDidMount() {
        this.timer=setInterval(() => {console.log("Namaste react Op")},1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
          //
        }
        if (this.state.count2 !== prevState.count2) {
          // code
        }
        console.log("Component Did Update");
      }
      componentWillUnmount() {
        clearInterval(this.timer);
        //console.log("ComponentWillUnmount");
      }

        render(){
            return (
                <div>
                <h1> Profile Class Component </h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
              </div>
            )
        }
    }

export default Profile;