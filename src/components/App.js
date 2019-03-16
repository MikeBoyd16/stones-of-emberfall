import React, { Component } from 'react';
import {GameWorldContext} from '../context/GameWorldContext';

// Data
import locations from '../data/location.json';

// Components
import TitleMenu from './TitleMenu';
import CharacterCreation from './CharacterCreation';
import Navigation from './Navigation';
import CharacterStatus from './CharacterStatus';
import ActivityFeed from './ActivityFeed';
import ActionBar from './ActionBar';

// Styles
import '../appStyles.css';

class App extends Component {
  /* 
   * SCREEN 
   */
  changeScreen = (screen) => {
    this.setState({ screen });
  }
  updateScreen = () => {
    if(this.state.screen === "TitleMenu") {
      return(<TitleMenu />);
    } else if(this.state.screen === "CharacterCreation") {
      return(<CharacterCreation />);
    } else if(this.state.screen === "Activity") {
      return(
        <>
            <Navigation />
            <ActivityFeed/>
            <ActionBar />
        </>
      );
    }
  }

  /*
   * CHARACTER CREATION
   */
  setPlayerName = (playerName) => {
    this.setState({ playerName: playerName });
  }
  setAttributeSelection = (buttonType, value) => {
    if(buttonType === "playerClass") {
      this.setState({ playerClass: value });
    } else if (buttonType === "playerProficiency") {
      this.setState({ playerProficiency: value });
    } else {
      console.log("Error: Unable to set player attribute during character creation.");
    }
  }

  /*
   * LOCATION
   */
  changeLocation = location => {
    this.setState({ location });
  }

  /*
   * ACTIVITY
   */
  updateMessage = (message) => {
    this.setState({ message });
  }
  manageDisplay = (location, actionMessage) => {
    this.changeLocation(location);
    this.updateMessage(actionMessage);
  }

  state = {
    // Screen
    screen: "TitleMenu",
    changeScreen: this.changeScreen,
    updateScreen: this.updateScreen,

    // Character Creation
    playerName: "",
    playerClass: "",
    playerProficiency: "",
    setPlayerName: this.setPlayerName,
    setAttributeSelection: this.setAttributeSelection,

    // Location
    gameWorldLocations: locations,
    location: locations["Branch1"],
    changeLocation: this.changeLocation,

    // Activity
    activityFeed: [locations["Branch1"]["message"]],
    message: locations["Branch1"]["message"],
    updateMessage: this.updateMessage,
    manageDisplay: this.manageDisplay,
  };
  
  render() {
    return (
      <GameWorldContext.Provider value={this.state}>
        <div id="components">
				  {this.updateScreen()}
        </div>
      </GameWorldContext.Provider>
    );
  }
}

export default App;
