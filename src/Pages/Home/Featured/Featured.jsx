import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-black pt-8 my-20">
            <SectionTitle subheading={"check it out"}
                heading={"Featured item"}>

            </SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-300 bg-opacity-50 text-black py-20 px-36">
                <div >
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus rem itaque officiis debitis perferendis incidunt accusamus, deserunt veniam modi, illum deleniti nulla excepturi exercitationem quia tenetur necessitatibus cum ab.</p>
                    <button className="btn btn-outline btn-success border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;