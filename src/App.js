import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './home';
import tv from './Tv';
import movies from './Movies';
import sports from './Sports';
import news from './News';
import premium from './Premium';
import { FaSistrix } from 'react-icons/fa';


export default class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Router>
					<div className="container">
						<Navbar variant="light" expand="lg">
							<Navbar.Brand href="/">
								<img
									src="https://www.hotstar.com/assets/e4759bb703b71dae6bed5057c7105b32.svg"
									alt="hotstar"
								/>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link
										href="/tv"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										TV
									</Nav.Link>
									<Nav.Link
										href="/movies"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										Movies
									</Nav.Link>
									<Nav.Link
										href="/sports"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										Sports
									</Nav.Link>
									<Nav.Link
										href="/news"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										News
									</Nav.Link>
									<Nav.Link
										href="/premium"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										Premium
									</Nav.Link>
									{/* <Nav.Link href="/train">Train Booking</Nav.Link>
                  <Nav.Link href="/hotel">Hotel Booking</Nav.Link> */}
								</Nav>
								<Form inline>
									<div style={{width:"360px",borderBottom:"1px solid #c1c1c1"}}>
									<input
										type="text"
										placeholder="Search"
										// className="mr-sm-2"
										style={{border:"none",fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif',width:"95%",color:"#212121",fontSize:"16px",height:"32px",padding:"0px 28px 0px 0px",outline:"0"}}
									
									/><span style={{width:"5%"}}>
									<FaSistrix/></span>
									</div>
									
									
									
									<div >
									<img src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg" 
									alt="..."
									style={{marginLeft:"15px",width:"30px",height:"30px",display:"inline-block",borderRadius:"50%"}} />
									</div>
								</Form>
							</Navbar.Collapse>
						</Navbar>
					</div>
					<div>
						<Switch>
							<Route exact path="/" component={home}></Route>
							<Route path="/tv" component={tv}></Route>
							<Route path="/movies" component={movies}></Route>
							<Route path="/sports" component={sports}></Route>
							<Route path="/news" component={news}></Route>
							<Route path="/premium" component={premium}></Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
