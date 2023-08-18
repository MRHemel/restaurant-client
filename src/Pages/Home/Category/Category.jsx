import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "./Category.css";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
    return (
        <section>
            <SectionTitle subheading={"From 11am to 10pm"}
                heading={"Order Online"}>

            </SectionTitle>
            <div className="mt-10 mb-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="flex flex-col"> <img src={slide1} alt="" />
                        <h3 className="text-3xl text-white text-center -mt-20">Salads</h3></SwiperSlide>
                    <SwiperSlide className="flex flex-col"> <img src={slide2} alt="" />
                        <h3 className="text-3xl text-white text-center -mt-20">Pizza</h3></SwiperSlide>
                    <SwiperSlide className="flex flex-col"> <img src={slide3} alt="" />
                        <h3 className="text-3xl text-white text-center -mt-20">Soup</h3></SwiperSlide>
                    <SwiperSlide className="flex flex-col"> <img src={slide4} alt="" />
                        <h3 className="text-3xl text-white text-center -mt-20">Desert</h3></SwiperSlide>
                    <SwiperSlide className="flex flex-col"> <img src={slide5} alt="" />
                        <h3 className="text-3xl text-white text-center -mt-20">Salads</h3></SwiperSlide>

                </Swiper>

            </div>
        </section>
    );
};

export default Category;