import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


const myLink = "http://image.tmdb.org/t/p/w500/"
export default class Responsive extends Component {
  constructor(props) {
		super(props);
		this.state = {
      myData: [],
	  myImage:"",
	  myTitle:"",
	  myDescription:"",
      dataLink:props.fatchDataLink
	
		};
	}

	componentDidMount() {
		fetch(
			this.state.dataLink
		)
	
									  	.then((response) => response.json())
      .then((data) => this.setState({myData:data.results.map((item)=>item)}))
	
	 
  }
  onClickHandle = (event) =>{
	  const {
      myImage,
      myTitle,
      myDescription
    } = this.state;
	let testObject1 = {
      myImage: event.target.src,
      myTitle: event.target.name,
	  myDescription:event.target.id
     
 
    };
	  localStorage.setItem("localobject", JSON.stringify(testObject1));
	 
	  
  }
  
	render() {
		return (
			<div >
				<Carousel
					slidesPerPage={4}
					arrows
					infinite
          			animationSpeed={1000}    
				>
				 
          {
          this.state.myData.map((items,index)=>(
			  (items.poster_path == null) ? (<div style={{width:"250px",height:"250px"}}><Link to="/detail"><img
            key={index}
						src="http://image.tmdb.org/t/p/w500//wVV9X4MHAXZAtAADyLAlr5xEosc.jpg"
						name ={items.title}
						id ={items.overview}
						onClick = {this.onClickHandle}
						
						
            style={{width:"100%",height:"100%",borderRadius:"10px"}}
					/></Link></div>):(<div style={{width:"250px",height:"250px"}}><Link to="/detail"><img
            key={index}
						src={myLink + items.poster_path}
						name ={items.title}
						id ={items.overview}
						onClick = {this.onClickHandle}
            style={{width:"100%",height:"100%",borderRadius:"10px"}}
					/></Link></div>)
		  ))
        }
				</Carousel>
			</div>
		);
	}
}
