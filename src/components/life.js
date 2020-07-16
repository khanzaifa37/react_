import React,{PureComponent} from 'react';

class Life extends PureComponent{
    //1 : Get Deafult props

    //2: Set Deafult State
    state={
        title: 'Life Cycles'
    }

    //3: Before render
    // UNSAFE_componentWillMount()
    // {
    //     console.log("Component wil mount");
    // }
    // static getDerivedStateFromProps(props, state)
    // {
    //     console.log("Component will mount alternative");
    //     return null;
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log("ShouldComponentUpdate");
    //     // console.log(this.state.title);
    //     // console.log(nextState.title);
    //     if(this.state.title===nextState.title)
    //     {
    //         return false;
    //     }
    //     return true;
    // }
   //4 Render
    render()
    {    
        console.log("Render");
        return(
            <div>
                <h3>{this.state.title}</h3>
                    <div onClick={()=>this.setState({title:"New Title"})}>Click here to change title</div>           
                    </div>
        )
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Component Did update");
    // }
    // componentWillUnmount() {
    //     console.log("Component Unmounted");
    // }
    
    // //5 Post Render
    // componentDidMount()
    // {
    //     console.log("Component mounted");
    //     document.querySelector('h3').style.color='red';
    // }
}

export default Life;