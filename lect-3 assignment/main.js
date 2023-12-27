import React from "react";
import  ReactDOM  from "react-dom/client";
import Atul_passport from "./Atul_passport.jpg";

//CODING ASSIGNMENT

//1.h1,h2,h3 inside div with class 'title' by react.createelement
const header = React.createElement("div",{className:"title"},[
    React.createElement("h1",{key:0},"I'm heading one"),
    React.createElement("h2",{key:1},"I'm heading two"),
    React.createElement("h3",{key:2},"I'm heading three")
]);
console.log(header);
//where to use these key and why we use it?


//2.make same as abouve using JSX.
const jsxheader = (<div className="title">
    <h1 id="babe">I'm jsx heading one</h1>
    <h2>I'm jsx heading two</h2>
    <h3>I'm jsx heading three</h3>
</div>)

console.log(jsxheader);
//This is easy as compare to core react.
//using jsx is helpfull for developers.
//NOTE:inside JSX we can write proper JS within {curly braces}.

//3.create a functional component using jsx as above.

const Header = ()=>{
    return (
        <div className="title">
            <h1 id="hello">I'm h1 functional component</h1>
            <h2>I'm h2 functional component</h2>
            <h3>I'm h3 functional component</h3>
        </div>
    )
}
console.log(Header);
//why we use functional component if we can use the direct react element jsxheader???
//beacuse we can pass props with functional component for dynamic data..for lifecycle method..for hoooks..
//while in jsx element..that is static.


const Para = ()=>{
    return <h1>Explicitely opening and closing component.</h1>
}


//4.component composition: Adding one component to another.
const AnotherCompo = ()=> (<div id="mainCompo">
    <h1>I'm componet composition: containg another component inside me.</h1>
    {/* {Header()} */}
    {/* {<Header/>} */}
    <h2>Hello I'm jsx</h2>
    {/* {<Header></Header>} */}
    {/* {Header} */}
    <Header/>
    {/* <Header></Header> */}
</div>)
//functional component return only one JSX tag..so if you want multiple component..put all of them inside div tag.
//This syntax is simple one without return and curly braces. just for a reminder. cool developer bhi to dikhna hai..
//these are 3 ways above for component composition.

//NOTE: You can also write JSX inside curly braces..<Header/> is same as {<Header/>}...
//Keep this in mind..
//So just write JS in it..avoid JSX.
//<Heading/> This tag sag peg are just JSX babe.




//Another project : Header component with logo,search bar and user-icon.

const ImageBro = ()=>{
    return <div>
        <img src={Atul_passport} alt="atul" height={50}></img>
    </div>
}

const ProjectHeader = ()=>{
    return (
          <header className="head">
            <div id="image">
                <img src={Atul_passport} height={50}></img>
            </div>

            <div id="searchbar">
            <input id="input" type="text" placeholder="Search"></input>
            </div>

            <div id="icon">
            <span id="usericon">&#128100;</span>  
            </div>
          </header> 
        );
    };
console.log(Atul_passport);


// const plant = ReactDOM.createRoot(document.getElementById("plant"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProjectHeader/>);
// plant.render(jsxheader);   This is also correct.
