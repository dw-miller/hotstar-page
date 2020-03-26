import React, { Component } from 'react'
import { Carousel, Card, Button,Row } from 'react-bootstrap';
import './control.css'

export default class Tv extends Component {
    render() {
        return (
        
			<div>
			<div className="carosels">
				<Carousel indicators={false} style={{ width: "100%",height:"100%"}}>
					<Carousel.Item>
                        <div style={{display:"flex"}}>
                            <div>
                                <p>Watch the rivalry of the Pandavas and Kauravas culminate in the Kurukshetra war, driven by the razor-sharp strategies of Krishna, the master puppeteer.</p>
                            </div>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h" alt="..."/>
						</div>
					</Carousel.Item>
					<Carousel.Item>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h" alt="..." />
					</Carousel.Item>
					<Carousel.Item>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6266/526266-h" alt="..." />
					</Carousel.Item>
				</Carousel>
                
			
			</div>
           <div className="carosels">
                <Carousel indicators={false}>
                <Carousel.Item>
					<Row>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6266/526266-h" alt="..." />
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h" alt="..."/>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h" alt="..." />
						</Row>
					</Carousel.Item>
					<Carousel.Item>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h" alt="..." />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7337/267337-h" alt="..."/>
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4740/444740-h" alt="..." />
					</Carousel.Item>
					<Carousel.Item>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6266/526266-h" alt="..." />
					</Carousel.Item>
				</Carousel>
                </div>
                </div>
        )
    }
}
