import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGooglePlay } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';

const style = {
	backgroundColor: '#eee',
	// borderTop: "1px solid #E7E7E7",

	padding: '20px',
	position: 'fixed',
	left: '0',
	bottom: '0',
	maxHeight: '150px',
    maxWidth: '100%',
    minWidth:"100%",
    minHeight:"150px"
};
export default class Footer extends Component {
	render() {
		return (
			<div style={style}>
				<Row>
					<Col md={6} style={{ paddingLeft: '50px',color:"#777" }}>
						<ul
							style={{ display: 'flex', listStyle: 'none', paddingLeft: '0px' }}
						>
							<li style={{ marginRight: '20px' }}>About Hotstar</li>
							<li style={{ marginRight: '20px' }}>Terms of Use</li>
							<li style={{ marginRight: '20px' }}>Privacy Policy (New)</li>
							<li style={{ marginRight: '20px' }}>FAQ</li>
							<li style={{ marginRight: '20px' }}>Feedback</li>
							<li style={{ marginRight: '20px' }}>Careers</li>
						</ul>
						<p>
							© 2020 STAR. All Rights Reserved. HBO, Home Box Office and all
							related channel and programming logos are service marks of, and
							all related programming visuals and elements are the property of,
							Home Box Office, Inc. All rights reserved.
						</p>
					</Col>
					<Col md={6}>
						<div style={{ display: 'flex' }}>
							<div style={{marginRight:"50px"}}>
								
								<p>
									<b>Connect with us</b>
								</p>
								<span style={{ marginRight: '25px' }}>
									<FaFacebookSquare style={{height:"50px",width:"50px"}} />
								</span>
								<span>
									<FaTwitterSquare style={{height:"50px",width:"50px"}}/>
								</span>
							</div>
							<div >
								<p><b>Hotstar App</b></p>
                                <div style={{display:"flex"}}>
                                <div style={{marginRight:"25px",display:"flex",background:"#777",borderRadius:"5px",color:"white",width:"150px",height:"50px",boxSizing:"border-box"}}>
                                <div>
                                <img src="https://img.icons8.com/color/48/000000/google-play.png" style={{height:"35px",width:"35px",marginTop:"10px"}}/>
                                </div>
                                <div>
                                <span style={{fontSize:"10px"}}>GET IN ON</span><br/>
                                <span><b>Google Play</b></span>
                                </div>
								</div>
                                <div style={{marginRight:"25px",display:"flex",background:"#777",borderRadius:"5px",color:"white",width:"150px",height:"50px",boxSizing:"border-box"}}>
                                <div>
                                <FaApple style={{height:"35px",width:"35px",marginTop:"10px"}}/>
                                </div>
                                <div>
                                <span style={{fontSize:"10px"}}>Download on the</span><br/>
                                <span><b>App Store</b></span>
                                </div>
								</div>
                                </div>
                                
								
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
