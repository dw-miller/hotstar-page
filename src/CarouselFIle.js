import React, { Component } from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';

export default class CarouselFIle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgHeight: '100%',
			imgWidth: '100%'
		};
	}
	handleMouseEnter = () => {
		console.log('vvv');
		
	};

	render() {
		return (
			<Carousel indicators={false}>
				<Carousel.Item>
					<Row>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h"
								alt="..."
								style={{
									height: this.state.imgHeight,
									width: this.state.imgWidth,
									borderRadius: '8px'
								}}
							
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col >
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6266/526266-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row style={{ width: '100%' }}>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6266/526266-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row style={{ width: '100%' }}>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6266/526266-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
						<Col>
							<img
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h"
								alt="..."
								style={{ height: '100%', width: '100%', borderRadius: '8px' }}
							/>
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		);
	}
}
