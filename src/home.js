import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';
import './control.css';
import Responsive from './SlickCarosel';


export default class home extends Component {
	render() {
		return (
			<div>
				<div>
					<Carousel indicators={false}>
						<Carousel.Item>
							<div
								style={{
									backgroundColor: 'rgb(29, 46, 74)',
									height: '400px',
									display: 'flex'
								}}
							>
								<div
									style={{
										position: 'absolute',
										margin: '50px',
										color: 'white',
										width: '300px'
									}}
								>
									<h3>Devon Ke Dev... Mahadev</h3>
									<p style={{ color: 'antiquewhite' }}>
										<span>Life Ok . </span>
										<span>Hindi . </span>
										<span>Mythology</span>
									</p>
									<p style={{ color: 'antiquewhite' }}>
										He is the Supreme Being, the epitome of benevolence and the destroyer of evil. 
										This mesmerizing story of the Lord and his avatars, traces his journey from being 
										an ascetic to a family man after he marries Parvati - a union that shaped the universe!
									</p>
								</div>
								<div
									style={{
										background:
											'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(29, 46, 74))',
										right: '694px',
										width: '200px',
										height: 'inherit',
										position: 'absolute'
									}}
								></div>
								<img
									className="d-block"
									src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/5500/195500-h"
									alt="..."
									style={{
										borderRadius: '8px',
										height: '100%',
										width: '60%',
										marginLeft: '40%'
									}}
								/>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div
								style={{ backgroundColor: 'rgb(41, 21, 20)', height: '400px' }}
							>
								<div
									style={{
										position: 'absolute',
										margin: '50px',
										color: 'white',
										width: '300px'
									}}
								>
									<h3>Latest Bengali News</h3>
									<p style={{ color: 'antiquewhite' }}>
										<span>Bengali . </span>
										<span>News</span>
									</p>
									<p style={{ color: 'antiquewhite' }}>
										ABP Ananda is a Bengali news channel delivering live
										breaking news, headlines, debates and latest updates from
										the developing stories in West Bengal, India and across the
										globe. Watch all the latest live updates from ABP Ananda.
									</p>
								</div>
								<div
									style={{
										background:
											'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(41, 21, 20))',
										right: '694px',
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
						</Carousel.Item>
						<Carousel.Item>
							<div
								style={{ backgroundColor: 'rgb(11,37,32)', height: '400px' }}
							>
								<div
									style={{
										position: 'absolute',
										margin: '50px',
										color: 'white',
										width: '300px'
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
										grows into marriage. All is fine until one day, they see
										their life falling apart.
									</p>
								</div>
								<div
									style={{
										background:
											'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(11,37,32))',
										right: '694px',
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
						</Carousel.Item>
						<Carousel.Item>
							<div
								style={{
									backgroundColor: 'rgb(64,41,43)',
									height: '400px',
									display: 'flex'
								}}
							>
								<div
									style={{
										position: 'absolute',
										margin: '50px',
										color: 'white',
										width: '300px'
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
										little bookshop online and they fall in love with each
										other. However, they are unaware that they are actually
										business rivals.
									</p>
								</div>
								<div
									style={{
										background:
											'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(64, 41, 43))',
										right: '694px',
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
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="container carosels" style={{ marginTop: '50px' }}>
					<h3 style={{ marginLeft: '50px' }}>New on Hotstar</h3>
					<Responsive fatchDataLink="https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-03-01&primary_release_date.lte=2020-03-25&api_key=88505975439ef9611fe0e1d1899a411d&language=en-US" />
				</div>
				<div className="container carosels" style={{ marginTop: '50px' }}>
					<h3 style={{ marginLeft: '50px' }}>Popular Movies</h3>
					<Responsive fatchDataLink="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=88505975439ef9611fe0e1d1899a411d&language=en-US" />
				</div>
				<div className="container carosels" style={{ marginTop: '50px' }}>
					<h3 style={{ marginLeft: '50px' }}>Highest Rated Movies</h3>
					<Responsive fatchDataLink="https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=88505975439ef9611fe0e1d1899a411d&language=en-US" />
				</div>

				<div className="container carosels" style={{ marginTop: '50px' }}>
					<h3 style={{ marginLeft: '50px' }}>Best Movie</h3>
					<Responsive fatchDataLink="https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=88505975439ef9611fe0e1d1899a411d&language=en-US" />
				</div>
				<div className="container carosels" style={{ marginTop: '50px' }}>
					<h3 style={{ marginLeft: '50px' }}>Best Drama</h3>
					<Responsive fatchDataLink="https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2020&api_key=88505975439ef9611fe0e1d1899a411d&language=en-US" />
				</div>
				<div
					className="container carosels"
					style={{ marginTop: '50px', marginBottom: '200px' }}
				>
					<h3 style={{ marginLeft: '50px' }}>Best comedies</h3>
					<Responsive fatchDataLink="https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=88505975439ef9611fe0e1d1899a411d&language=en-US" />
				</div>
			</div>
		);
	}
}
