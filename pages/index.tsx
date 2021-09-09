import React, { Component } from 'react';
import Home from "components/home";
import Projects from 'components/projects';
import Header from 'components/header';
import Experience from 'components/experience';
import Education from 'components/education';

class Content extends Component {
  componentDidMount() {  
    document.documentElement.style.scrollBehavior ="smooth" //Here gray-by is the bg color which I have set
  }


  render() {
    return (
    
      <Home> 
        <Header title="Projects" />
        <Projects />
        <Header title="Experience" />
        <Experience />
        <Header title="Education" />
        <Education />
      </Home>
    
  )
    }
}
export default Content;