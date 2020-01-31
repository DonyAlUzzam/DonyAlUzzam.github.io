import React, { PureComponent } from "react";


const Skill = React.lazy(() => import("./skill/Skill"));
const Project = React.lazy(() => import("./project/Project"));

class Timeline extends PureComponent {
  state = {
    page: "skill"
  };

  pgRender = Page => (
    <div class="mytimeline" id="myproject">
      {this.btnRender()}
      <Page />
    </div>
  );

  onRouteChange = page => {
    this.setState({
      page
    });
  };

  btnRender = () => (
    <div class="w3-bar tmnav" style={{paddingLeft: "18em"}}>
      <button
        class="w3-bar-item w3-button"
        onClick={() => this.onRouteChange("skill")}
      >
        Library and Tools
      </button>
      <button
        class="w3-bar-item w3-button"
        onClick={() => this.onRouteChange("project")}
        
      >
        Project
      </button>
     
    </div>
  );

  render() {
    const { page } = this.state;
    if (page === "skill") {
      return this.pgRender(Skill);
    } else if (page === "project") {
      return this.pgRender(Project);
    } 
  }
}

export default Timeline;
