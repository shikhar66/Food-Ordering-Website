import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
     
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <h1 className="text-4xl font-bold text-green-600 mb-4">About Us Page</h1>

      <UserContext.Consumer>
        {({ user }) => (
          <h4 className="font-bold text-2xl p-4 bg-green-100 rounded-lg shadow-sm">
            Shikhar Dixit-shikhardixit20@gmail.com
          </h4>
        )}
      </UserContext.Consumer>

      <div className="text-gray-700 leading-relaxed mt-6 space-y-4">
        <p>
          Welcome! I'm Shikhar, a passionate software developer with a keen interest in frontend development. Inspired by innovative technology, I am excited to bring my skills and enthusiasm to your projects.
        </p>
        <p>
          With a solid background in C++ and extensive experience solving over 100 coding challenges, I have a strong grasp of Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOPs). My proficiency extends to modern frontend technologies, particularly ReactJS and JavaScript, where I specialize in creating user-centric experiences that make a lasting impact.
        </p>
        <p>
          My commitment to excellence and continuous learning ensures that I stay at the forefront of the latest industry trends. I am dedicated to contributing effectively to your team and driving the success of our collaborative endeavors.
        </p>
      </div>

      <Profile />
    </div>
    );
  }
}

export default About;