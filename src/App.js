import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
        {id:"a1", feature : "Feature", number : 1 },
        {id:"a2", feature : "Update", number : 2 },
        {id:"a3", feature : "BugFix", number : 3 },
    ],
      otherState : 'Some other value'
  }



  nameChangedHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p=>{
          return p.id === id;
      });



      const person = {
          ...this.state.persons[personIndex]};

      console.log(event.target.name);
      person.feature = event.target.value ;


      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons : persons});


  }

    toggleFeatureHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons : !doesShow});
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons:persons});

    }

  render() {

    const style = {

      backgroundColor: 'white',
        font : 'inherent',
        border : '1px solid blue',
        padding: '8px',
        cursor : 'pointer'
    };


    let persons = null;

    if(this.state.showPersons){

      persons = (
          <div>

              {this.state.persons.map((person,index) => {

                return <Person
                 click={() => this.deletePersonHandler(index)}
                 feature={person.feature}
                 number={person.number}
                 key={person.id}
                 changed={(event)=>this.nameChangedHandler(event, person.id)}/>

              })}

          </div>
      );
    }


    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>Hurray!! This looks great!!!</p>
        <button
            style={style}
            onClick={this.toggleFeatureHandler}>Switch Feature
        </button>
            {persons}


      </div>
   );

      //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'));
  }
}

export default App;
