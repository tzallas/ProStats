import React from "react";
import { TextField, Button } from "@material-ui/core";
import uuid from "uuid";

class Form extends React.Component {
    state = {
        groupName:"",
        members: [
            {name:"", email:"", id:uuid.v4()}
        ]
    }  

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state);
        //THIS IS THE DATA TO SEND 
    }

    handleInput = (event) => {
        const newGroup = {...this.state}
        const newElement = {...newGroup.members[event.target.id]}
        
        newElement[event.target.name] = event.target.value;
        newGroup.members[event.target.id] = newElement;

        this.setState({
            state : newGroup 
        })
    }
    addPerson(event){
        event.preventDefault()
        console.log("click");
        this.setState({
            members: [...this.state.members, {name:"", email:"", id:uuid.v4()}]
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>Group Name</div>
                    {/* <TextField 
                        id={uuid.v4()}
                        name={this.state.groupName}
                        placeholder="Enter Group"
                        onChange={(event, id) => this.handleInput(event, id)}/>    
                    <div>League Names</div> */}
                    {this.state.members.map((member) => {
                        return (
                            <div key={member.id}>
                                <TextField
                                    name={member.name}
                                    id={member.id}
                                    placeholder="Enter your name..."
                                    onChange={(event) => this.handleInput(event, member.id)} />
                                <TextField
                                    name={member.email}
                                    id={member.id}
                                    placeholder="Enter your email"
                                    onChange={(event) => this.handleInput(event, member.id)} 
                                    />
                            </div>
                        )
                    })}
                    <Button variant="contained" color="primary" onClick={(event=>this.handleSubmit(event))}>Submit</Button>
                    <br></br>
                    <Button variant="contained" color="default" onClick={(event)=>this.addPerson(event)}>Add..</Button>
                </form>
            </div>
        )
    }
}

export default Form