import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./Slide.css"

export default class MultipleItems extends Component {

	constructor(props) {
		super(props);
		this.state = {
			slidesToShow: 3,
			data: []
		};
	}


	componentDidMount() {
		// Fetch data from the API
		axios.get('https://honeysys-server.onrender.com/products')
			.then(response => {
				// Update the state with the API response
				this.setState({ data: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	}
	
   componentWillUnmount() {
		window.removeEventListener("resize", this.updateSlidesToShow);
	}

	updateSlidesToShow = () => {
		let slidesToShow = 1;
		if (window.innerWidth >= 768) {
			slidesToShow = 6;
		}
		this.setState({ slidesToShow });
	};

	render() {
		const { data } = this.state
		console.log("data", data)
		const { slidesToShow } = this.state;
		const settings = {
			infinite: true,
			slidesToShow: slidesToShow,
			slidesToScroll: 1,
			autoplay: true,
			speed: 200,
			autoplaySpeed: 2000,
			cssEase: "linear",
			dots: false,
			centerMode: true,
			centerPadding: "60px",
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						centerPadding: "10px",
						dots: false,
					},
				},
			],
		};
		return (

			<Slider Slider {...settings}>
				{data?.map((el)=>{return(
					<div >
					<img
					className="slider2-img-div"
						src={el.image_url}
						alt="Product Image"
					
					/>
					<h3>{el.title}</h3>
					<p>{el.price}</p>
					<button>Add to Cart</button>
				</div>
				)})}
				



			</Slider>

		);
	}
}