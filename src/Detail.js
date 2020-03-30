import React, { Component } from 'react'
import { FaPlay } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import Responsive from './SlickCarosel';


export default class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myImageData :""
		}
	 }
    componentWillMount() {
    	const myData1 = JSON.parse(localStorage.getItem("localobject"));

	
    this.setState({ myImageData: myData1 });
  }
    render() {
        return (
            <div className="container" style={{ backgroundColor: 'rgb(11,37,32)', height: '450px',marginBottom:"30px",paddingLeft:"0px",paddingRight:"0px",borderRadius:"10px" }}
							>
								<div
									style={{
										position: 'absolute',
										margin: '50px',
										color: 'white',
										maxWidth: '450px',
                                        zIndex:"1"
									}}
								>
									<h3>{this.state.myImageData.myTitle}</h3>
									<p style={{ color: 'antiquewhite' }}>
										<span>1 hr 43 min . </span>
										<span>English . </span>
										<span>Action . 15+ . </span>
										<span>2019</span>
									</p>
									<p style={{ color: 'antiquewhite' }}>
										{this.state.myImageData.myDescription}
									</p>
                                    <div style={{marginTop:"120px",display:"flex"}}>
                                    <span ><FaPlay style={{height:"20px",width:"20px"}}/></span>
                                    <h5 style={{marginLeft:"10px"}} >Watch Movie</h5>
                                    <div style={{marginLeft:"150px",alignItem:"center"}} >
                                    <span ><FaPlus style={{height:"25px",width:"25px"}}/></span>
                                     <h6>Watchlist</h6>
                                     </div>
                                     <div style={{marginLeft:"30px"}} >
                                    <span ><FaShareAlt style={{height:"25px",width:"25px"}}/></span>
                                     <h6>Share</h6>
                                     </div>
                                    </div>
                                    
								</div>
								<div
									style={{
										background:
											'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(11,37,32))',
										right: "674px",
										width: '200px',
										height: 'inherit',
										position: 'absolute'
									}}
								></div>
                                <div style={{height:"450px",maxWidth:"700px",marginLeft: '40%'}}>
								<img
									className="d-block"
									src={this.state.myImageData.myImage}
									alt="..."
									style={{
										borderRadius: '8px',
										height: '100%',
										width:"100%",
										
									}}
								/>
                                </div>
                                <div style={{marginTop:"50px",marginBottom:"200px"}}>
								<div style={{marginLeft:"50px"}}>
                                <h4>Trailers</h4>
                                <div style={{height:"200px",width:"300px",marginBottom:"30px"}}>
                                    <img src={this.state.myImageData.myImage} style={{borderRadius:"8px",height:"100%",width:"100%"}} />
                               </div>
							   </div>
                                
								<div>
									<h3 style={{marginLeft:"50px"}}>You May Also Like</h3>
									<Responsive fatchDataLink="https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-03-01&primary_release_date.lte=2020-03-25&api_key=88505975439ef9611fe0e1d1899a411d&language=en-US" style={{marginLeft:"0px"}} />
								</div>
								</div>
							</div>
        )
    }
}
