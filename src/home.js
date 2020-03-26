import React, { Component } from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import './control.css';
import CarouselFIle from './CarouselFIle'

export default class home extends Component {
	render() {
		return (
			<div>
				<div className="carosels">
					<Carousel
						indicators={false}
						style={{ width: '100%', height: '100%' }}
					>
						<Carousel.Item>
							<div >
								<div style={{ display: 'flex',backgroundColor: "rgb(54, 24, 22)" }}>
									<p>
										Watch the rivalry of the Pandavas and Kauravas culminate in
										the Kurukshetra war, driven by the razor-sharp strategies of
										Krishna, the master puppeteer.
									</p>
								</div>
                                <div style={{background:"linear-gradient(to left, rgba(0, 0, 0, 0), rgb(33, 40, 17))",right:"599px",width:"200px",height:"inherit"}}></div>

								<img
									src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h"
                                    alt="..."
                                    
								/>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h"
								alt="..."
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6266/526266-h"
								alt="..."
							/>
						</Carousel.Item>
					</Carousel>
				</div>
                
				<div className="container carosels" style={{marginTop:"50px"}}>
                <h3>Watchlist</h3>
					<CarouselFIle />
				</div>
				<div className="container carosels" style={{marginTop:"50px"}}>
                <h3>Top Picks For You</h3>
					<CarouselFIle />
				</div>
				
			</div>
		);
	}
}
