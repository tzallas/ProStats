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
    updateForm = (event) =>{
        event.preventDefault();
        const newGroup =  event.target.value;
       
        this.setState({
            groupName: newGroup
        });
    }

    handleInput = (event, name) => {
        const newGroup = this.state.members.map((item => {
            if (item.id = event.target.id) {
                return {
                    ...item,
                    [name]: event.target.value
                }
            } else {
              return item;
            }
        }))
    
        this.setState({
            members : newGroup 
        })
    }
    // handleInput = (event, name) => {

    //     this.setState(prevState => ({
    //         members : prevState.members.map((item) => {
    //           if (item.id = event.target.id) {
    //               return {
    //                   ...item,
    //                   [name]: event.target.value
    //               }
    //           } else {
    //             return item;
    //           }
    //        }) 
    //    }))
    // }

    

    addPerson(event){
        event.preventDefault()
        this.setState({
            members: [...this.state.members, {name:"", email:"", id:uuid.v4()}]
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>Group Name</div>
                    <TextField 
                        id={uuid.v4()}
                        placeholder="Enter Group"
                        onChange={(event, id) => this.updateForm(event, id)}/>    
                    <div>League Names</div>
                    {this.state.members.map((member) => {
                        return (
                            <div key={member.id}>
                                <TextField
                                    
                                    id={member.id}
                                    placeholder="Enter your name..."
                                    onChange={(event) => this.handleInput(event, "name")} />
                                <TextField
                                  
                                    id={member.id}
                                    placeholder="Enter your email"
                                    onChange={(event) => this.handleInput(event, "email")} 
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