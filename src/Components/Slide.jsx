import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css"
export default class AutoPlay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slidesToShow: 3
		};
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateSlidesToShow);
		this.updateSlidesToShow();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateSlidesToShow);
	}

	updateSlidesToShow = () => {
		let slidesToShow = 1;
		if (window.innerWidth >= 768) {
			slidesToShow = 3;
		}
		this.setState({ slidesToShow });
	}

	render() {
		const { slidesToShow } = this.state;
		const settings = {
			infinite: true,
			slidesToShow: 3,
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
						slidesToShow: 1,
						centerPadding: "0",
						dots: false
					}
				}
			]
		};
		return (
			<>

				<div
					className="slider-container"
					style={{
						width: "91%",
						height: "600px",
						margin: "auto",
						// boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
						marginTop: "40px"

					}}
				>
					<Slider {...settings}>
						<div >

							<img
								src="/oNZbzXAFWGroup 1683.webp"
								alt=""
								className="Slide-img-div"

							/>

						</div>
						<div className="">
							<img
								src="/5wdTzpgWdGroup 1681.webp"
								alt=""
								className="Slide-img-div"

							/>
						</div>
						<div className="">
							<img
								src="/Eus_KKPcVGroup 1682.webp"
								alt=""
								className="Slide-img-div"
							/>
						</div>
						<div className="">
							<img
								src="/EWm50M74DGroup 2177.webp"
								alt=""
								className="Slide-img-div"
							/>
						</div>
						<div className="">
							<img
								src="/W-Jkso7k3Group 1689.webp"
								alt=""
								className="Slide-img-div"
							/>
						</div>
						<div className="">
							<img
								src="/W-Jkso7k3Group 1689.webp"
								alt=""
								className="Slide-img-div"
							/>
						</div>

					</Slider>
				</div >
			</>
		);
	}
}


