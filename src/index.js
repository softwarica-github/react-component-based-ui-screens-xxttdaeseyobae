// //var react = require('react') 
// //// common js 
// //module.exports = {} 
// // export.varname = 10; 




// //es6
// // exports default test
// // exports var a =10

// import React from 'react';
// import ReactDOM from 'react-dom';




// // console.log('asda')
// // conole.log('asdasdasd');



// // var test = (a,b)=>{
// // console.log('this is inside function')
// // }
// // test();

// // const renderer = () => {

// // document.getElementById('normal').innerHTML = 

// // `<p>this istest <input /></p> <p>${new Date().toLocaleTimeString()}<p>`;






// // ReactDOM.render(

// // //1st param what to render
// // // the element to be created is html element 
// // React.createElement(

// // 'div', // 1st actual html element to be created 
// // {id:'test'}, // 2nd  id ,class, properties, props 
// // 'This div is created using react', // 3rd 

// // React.createElement('input'),
// // React.createElement('p',null, new Date().toLocaleTimeString())

// //  ),





// // // 2nd where to render

// // document.getElementById('react')

// //  )



// // }

// // setInterval(renderer,1000)

// // console.logg('sfsdfsdf')

// // const lecture = 'of react jsx';
// // // jsx syntax // inject 
// // const element = <h1>This is testing{lecture}</h1>;

// // ReactDOM.render(element , document.getElementById('jsx'))


// // // componenet creation 

// // two types - function based , class based 

// // function based 
// // function so that it cna be resued 
// // function Button (props){ // props because to get hte property value dynamically
// // // props nai hunu parcha chaina

// // return <button type="submit" >{props.label}</button> // this is jsx 

// // }

// // // this also works, but cannot be reused 
// // // ReactDOM.render(<button type="submit" ></button> , document.getElementById('jsx'))

// // // Button function is called Button is actually component < />

// // // This is to save 
// // ReactDOM.render(<Button label="save"/> , document.getElementById('jsx'))

// // // This is to cancel 
// // ReactDOM.render(<Button label="cancel" /> , document.getElementById('jsxx'))

// // ReactDOM.render(<Button label="add" /> , document.getElementById('jsxx'))


// // function Button (){


// // // return  React.createElement(

// // // 'button',
// // // null,
// // // 'save'
// // //   )

// // }
// // button ui die , property 
// // import {Compnent} from React // js closure 
// // class Button extends React.Component { // props in base calss
// // // var props 

// // // console.log(this)
// // // console.log(props)
// // render(){


// // return <button>{ this.props.label}</button>

// // }
// // }



// //state

// // class H1 extends React.Component { // state props base calss
// //     constructor() {
// //         super() // parent class ko constructor initailize 

// //         this.state = {
// //             testVar: 10,
// //             testVarr: "this test",
// //             label: 'Save'
// //         }

// //     }

// // componentWillMount(){ // the is beofre component is rendered in the front

// // // this.setState({label:'Cancel'})

// // }

// // componentDidMount(){ // the is after component is rendered in the front

// // this.setState({label:'Cancel'})

// // }

// // // update 

// // shouldComponentUpdate(nextProps, nextState){ // where the compnent hsould be updated
// // // always returns either  true or false, default ture 
// // console.log(this.state);
// // console.log(nextState);

// // // return this.state.label !== nextState.label
// // return true;


// // // this.state.
// // }

// // componentWillUpdate(nextProps,nextState){ // just before compnent udpates
// // // this.setState({label:'nothing'})
// // console.log(nextState);

// // }

// // componentDidUpdate(prevProps,prevState){ // after componenet updates
// // console.log(prevState);


// // }

// // componenetWillUnmount(){

// // }







// //     render() {
// //         console.log(this.props)
// //         console.log(this.props.test)
// //         return <h1>{this.state.label}</h1>
// //     }

// // }

// // eventhandling 

// // class Button extends React.componenet {

// //     constructor() {

// //         super()
// //         // bnd this to the submit hadler
// //         // this.submitEventHandler = this.submitEventHandler.bind(this)
// //         this.state = {

// //         }
// //     }

// // // submitEventHandler(event){
// //  //
// // }
// // //class -properties plugin es6,7
// // // plugin-proposal-class-properties

// // submitEventHandler = (event) =>{

// // // event.preventDefault();

// // }

// //     render() {
// //         return <button>Save</button>
// //     }
// // }




// // ReactDOM.render(<Button onClick={this.submitEventHandler}   />, document.getElementById('jsx'))



// //Forms


// class LoginForm extends React.Component {
//     constructor() {

//         super()

//         this.state = {
//             username: '',
//             validationMessage: ''
//         }

//         // this.handleChange = this.handleChange.bind(this)
//     }

//     // handleChange(){

//     // }

//     handleChange = (e) => {
//         console.log(this.state.username)
//         console.log(e.target.value); // acutal value from the input box, input box is the event's target 
//         this.setState({ username: e.target.value })

//         if (e.target.value.length < 10) {
//             this.setState({ validationMessage: 'Username must be greater than 10' })

//         } else {
//             this.setState({ validationMessage: 'This si okay' })

//         }


//     }

//     handleSubmit = (e) => {
//         //this.state.suername 
//         e.preventDefault();

//     }

//     render() {

//         return (

//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                 Username:
//                 <input name="username" value={this.state.username} onChange={this.handleChange}   />
//                 </label>
//                 <p>{this.state.validationMessage}</p>
//                 < input type="submit" value="submit" />
//             </form>

//         )

//     }




// }

// ReactDOM.render( < LoginForm / > , document.getElementById('login'))



// class Select extends React.Component {

//     constructor() {

//         super()
//         this.state = {
//             selectedValue: 'jquery'
//         }
//     }

// changeHandler = (event) =>{
//     console.log(event.target.value)
//     this.setState({selectedValue:event.target.value})
// }
// submitHandler = (event) =>{
// event.preventDefault()
// }

//     render() {
//         return (
//             <form onSubmit={this.submitHandler}>
//             <label>
//             Plesae select your preferred frontend technology:
//                 <select value={this.state.selectedValue} onChange={this.changeHandler} >
//                     <option value="react">react</option>
//                     <option value="angular">angular</option>
//                     <option value="vue">vue</option>
//                     <option value="jquery">jquery</option>


//                 </select>
//             </label>    
//            </form>     

//         )

//     }

// }

// ReactDOM.render(<Select />, document.getElementById('select'))



import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Link, // ahref equiv
    Route // to catch the cliked route

} from 'react-router-dom'
import {

    Nav, Container,Row,Col,Card

} from 'react-bootstrap'
import Login from './components/Login/Login' // folder then filename
import Regsitration from './components/Registration/Registration'


class Index extends React.Component {

    constructor() {

        super()
    }



    Footer = () => {
     return (
                <Row>
                  <Col sm={4}>
                  About Hotel
                  Location:
                  Phone:

                  </Col>
                  <Col sm={4}>
                  Copyright
                </Col>
                  <Col sm={4}>
                  Map
                </Col>
        </Row>
            )

}
    render() {
        return (
          <Container>
  <Row style={{marginBottom:'30px'}}>
    <Col sm={8}>
    <Card >
  <Card.Body>
    <Card.Title>Hello</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">My assignmnet</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Learn More </Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </Col>
    <Col sm={4}>
        <h2>Welcome </h2>
    </Col>
  </Row> 
            <div> {/* for wrapping jsx components or use Fragment <> </> */}
                
                <Router>
                <Row style={{marginBottom:'40px'}}>
                <div>

          <Nav  variant="pills" >
                <Nav.Item>
                  <Nav.Link as={Link} to="/" active={true} >Home</Nav.Link> {/*as to use custom component */}
                </Nav.Item>
                  <Nav.Item>
                  <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </Nav.Item>
          </Nav>
                </div>
                </Row>

                <Switch>

         {/*      <Route path="/">
                  < Home/>
                </Route>*/}

                  <Route exact path="/login">
                  < Login/>
                  </Route>

                  <Route exact path="/registration">
                  < Regsitration/>
                  </Route>

              




    {/*              <Route component={} />*/}

       {/*            OR

                  <Route exact path="/login" component={Login} />*/}




                </Switch>

                </Router>


                </div>
                  < this.Footer/>
                </Container>

        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'))





