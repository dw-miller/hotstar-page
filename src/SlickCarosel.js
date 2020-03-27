import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



const myLink = "http://image.tmdb.org/t/p/w500/"
export default class Responsive extends Component {
  constructor(props) {
		super(props);
		this.state = {
      myData: [],
      dataLink:props.fatchDataLink
		};
	}
	componentDidMount() {
		fetch(
			this.state.dataLink
		)
			.then((response) => response.json())
      .then((data) => this.setState({myData:data.results.map((item)=>item.poster_path)}))
     
  }
  
	render() {
  
		return (
			<div >
				<Carousel
					slidesPerPage={4}
					arrows
					infinite
					autoPlay={2000}
          animationSpeed={1000}
          
          
				>
          {
          this.state.myData.map((items,index)=>(
            <img
            key={index}
						src={myLink + items}
            style={{width:"95%",height:"70%",borderRadius:"10px"}}
					/>
          ))
        }
				</Carousel>
			</div>
		);
	}
}
