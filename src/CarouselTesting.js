import React, { Component } from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class CarouselTesting extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Carousel
						centered
						infinite
						arrows
						
						slidesPerPage={2}
						
						autoPlay={2000}
						animationSpeed={1000}
					>
						<div
							style={{
								backgroundColor: 'rgb(38, 25, 46)',
								height: '400px',
								width: '700px',
								marginRight: '15px',
								marginLeft: '15px',
								display: 'flex'
							}}
						>
							<div
								style={{
									position: 'absolute',
									margin: '30px',
									color: 'white',
									width: '245px'
								}}
							>
								<h4>San Francisco 2.0</h4>
								<p style={{ color: 'antiquewhite' }}>
									<span>Englis . </span>
									<span>Documentary . </span>
									<span>2015</span>
								</p>
								<p style={{ color: 'antiquewhite' }}>
									Acclaimed filmmaker Alexandra Pelosi takes a look at the
									future of San Francisco, where the tech boom is causing
									economic disruption in the counterculture capital of the U.S.
								</p>
							</div>
							<div
								style={{
									background:
										'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(38, 25, 46))',
									right: '224px',
									width: '200px',
									height: 'inherit',
									position: 'absolute'
								}}
							></div>
							<img
								className="d-block"
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4480/584480-h"
								alt="..."
								style={{
									borderRadius: '8px',
									height: '100%',
									width: '60%',
									marginLeft: '40%'
								}}
							/>
						</div>
						<div
							style={{
								backgroundColor: 'rgb(41, 21, 20)',
								height: '400px',
								width: '800px',
								marginRight: '15px',
								marginLeft: '15px',
								display: 'flex'
							}}
						>
							<div
								style={{
									position: 'absolute',
									margin: '30px',
									color: 'white',
									width: '245px'
								}}
							>
								<h3>Latest Bengali News</h3>
								<p style={{ color: 'antiquewhite' }}>
									<span>Bengali . </span>
									<span>News</span>
								</p>
								<p style={{ color: 'antiquewhite' }}>
									ABP Ananda is a Bengali news channel delivering live breaking
									news, headlines, debates and latest updates from the
									developing stories in West Bengal, India and across the globe.
									Watch all the latest live updates from ABP Ananda.
								</p>
							</div>
							<div
								style={{
									background:
										'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(41, 21, 20))',
									right: '224px',
									width: '200px',
									height: 'inherit',
									position: 'absolute'
								}}
							></div>
							<img
								className="d-block"
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/462/660462-h"
								alt="..."
								style={{
									borderRadius: '8px',
									height: '100%',
									width: '60%',
									marginLeft: '40%'
								}}
							/>
						</div>

						<div
							style={{
								backgroundColor: 'rgb(11,37,32)',
								height: '400px',
								width: '800px',
								marginRight: '15px',
								marginLeft: '15px',
								display: 'flex'
							}}
						>
							<div
								style={{
									position: 'absolute',
									margin: '30px',
									color: 'white',
									width: '245px'
								}}
							>
								<h3>Kanne Kalaimaane</h3>
								<p style={{ color: 'antiquewhite' }}>
									<span>Tamil . </span>
									<span>Drama . </span>
									<span>2019</span>
								</p>
								<p style={{ color: 'antiquewhite' }}>
									Love blossoms between a farmer and a bank manager that soon
									grows into marriage. All is fine until one day, they see their
									life falling apart.
								</p>
							</div>
							<div
								style={{
									background:
										'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(11,37,32))',
									right: '224px',
									width: '200px',
									height: 'inherit',
									position: 'absolute'
								}}
							></div>
							<img
								className="d-block"
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/6615/386615-h"
								alt="..."
								style={{
									borderRadius: '8px',
									height: '100%',
									width: '60%',
									marginLeft: '40%'
								}}
							/>
						</div>
						<div
							style={{
								backgroundColor: 'rgb(64,41,43)',
								height: '400px',
								width: '800px',
								marginRight: '15px',
								marginLeft: '15px',
								display: 'flex'
							}}
						>
							<div
								style={{
									position: 'absolute',
									margin: '30px',
									color: 'white',

									width: '245'
								}}
							>
								<h3>You've Got Mail</h3>
								<p style={{ color: 'antiquewhite' }}>
									<span>Englis . </span>
									<span>Romance . </span>
									<span>1998</span>
								</p>
								<p style={{ color: 'antiquewhite' }}>
									The owner of a bookstore chain meets the owner of a quaint
									little bookshop online and they fall in love with each other.
									However, they are unaware that they are actually business
									rivals.
								</p>
							</div>
							<div
								style={{
									background:
										'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(64, 41, 43))',
									right: '224px',
									width: '200px',
									height: 'inherit',
									position: 'absolute'
								}}
							></div>
							<img
								className="d-block"
								src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7333/357333-h"
								alt="..."
								style={{
									borderRadius: '8px',
									height: '100%',
									width: '60%',
									marginLeft: '40%'
								}}
							/>
						</div>
					</Carousel>
            </div>
        )
    }
}
