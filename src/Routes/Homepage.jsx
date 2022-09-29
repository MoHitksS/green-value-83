/* eslint-disable no-eval */
// import "swiper/css";
// import "swiper/css/pagination"
import styled from "styled-components";
import jeansvideos from '../Resources/videos/jeans.mp4';
import menvideos from '../Resources/videos/menVid.mp4';
import kidsVideo from '../Resources/videos/kids.mp4';
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Mousewheel, Pagination } from 'swiper';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import Navbar from "../Components/Navbar";
// SwiperCore.use([Mousewheel, Pagination]);

const Homepage = () => {
    const Women = [
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1922/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159'
        },
        {
            video: jeansvideos
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-y2k-collection/subhome-xmedia-38//w/1922/IMAGE-landscape-fill-8ffe5012-f7c5-486e-a66a-9c017f1c4ddc-default_0.jpg?ts=1663790133732'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/1922/IMAGE-landscape-fill-c68605f6-1f94-4830-8f4a-0f3bf22017e2-default_0.jpg?ts=1663579002306'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-collection/subhome-xmedia-39//w/1922/IMAGE-landscape-fill-8a1ce69a-a1f6-4b5c-b04a-c3ea44664c19-default_0.jpg?ts=1663794685596'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/1922/IMAGE-landscape-fill-f5302ebb-2ddc-4218-81c2-eb0464c2d73f-default_0.jpg?ts=1663576361647'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-38//w/1922/IMAGE-landscape-default-fill-5c2d5cc1-7805-42c8-9238-635ec71551d3-default_0.jpg?ts=1663770211821'
        }
    ];
    const Men = [
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-origins/subhome-xmedia-34//w/1294/IMAGE-landscape-1-fill-23c9012f-bdc9-45c1-af3c-8f7c07f86626-default_0.jpg?ts=1664366171420'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-39//w/1922/IMAGE-landscape-fill-fbb20929-1e45-4d24-8139-c6351a17419b-default_0.jpg?ts=1664208804884'
        },
        {
            video: menvideos
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-man-thezexperience/subhome-xmedia-37//w/1034/IMAGE-landscape-60a9e632-924a-42ab-b7a3-9a87060d9999-default_0.jpg?ts=1663172982729'
        }
    ];
    const Kids = [
        {
            video: kidsVideo,
            cat:'kids'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-boy/subhome-xmedia-38-2//w/1922/IMAGE-landscape-fill-aa8667a5-4747-421a-8c66-2dba3d7b3afc-default_0.jpg?ts=1663870203073'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-best-sellers/subhome-xmedia-38//w/1922/IMAGE-landscape-fill-c68605f6-1f94-4830-8f4a-0f3bf22017e2-default_0.jpg?ts=1663579002306'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babygirl/subhome-xmedia-38//w/1922/IMAGE-landscape-fill-79e6baba-0718-4cda-bbb5-ff3f6fe0be62-default_0.jpg?ts=1663870712229'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-babyboy/subhome-xmedia-38//w/1922/IMAGE-landscape-fill-f9ab1b72-c48b-47fe-84c3-006e8f6141cb-default_0.jpg?ts=1663871170295'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-mini/subhome-xmedia-37//w/1922/IMAGE-landscape-fill-bd3917b7-471f-4f23-97a8-a6b6aa0d9c84-default_0.jpg?ts=1663325838920'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-kids-join-life/subhome-xmedia-38//w/1922/IMAGE-landscape-fill-4e354fe1-c38f-4d4b-8e9c-d58f5718aefa-default_0.jpg?ts=1663763505030'
        }
    ];
    const [activeIndex,setactiveIndex] = useState(0);
    const [indexNo, setIndex] = useState(0);
    const category = ['Women', 'Men', 'Kids'];
    return (
        <Container>
            <Navbar style={{display:"none"}} activeIndex={activeIndex}/>
            {/* <Swiper
                direction={'vertical'}
                slidesPerView={1}
                mousewheel={true}
                pagination={{
                    "clickable": true,
                }}
                className="mySwiper"
                onScroll={(e)=>setactiveIndex(e.activeIndex)}
            >
                {eval(category[indexNo])?.map((ele, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                        {ele.img ?
                            <img src={ele.img} alt={ele.img} />
                            :
                            <video autoPlay loop muted controls={ele.cat === 'kids'?false:true} >
                                <source src={ele.video} type="video/mp4" />
                            </video>}
                    </SwiperSlide>
                ))};
                <div className="nextPrevButtons">
                    {indexNo > 0 ?
                        <button onClick={() => setIndex(prev => prev - 1)}>
                            <ArrowBackIosIcon fontSize='small' />
                            <span>{category[indexNo - 1]}</span>
                        </button>
                        :
                        <span></span>
                    }
                    {indexNo !== category.length - 1 &&
                        <button onClick={() => setIndex(prev => prev + 1)}>
                            <span>{category[indexNo + 1]}</span>
                            <ArrowForwardIosIcon fontSize='small' />
                        </button>
                    }
                </div>
            </Swiper> */}
            
        </Container >
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position:absolute;
    cursor:pointer;
    .mySwiper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide{
        width:100%;
        height:100vh;
        
    }
    .swiper-slide>img{
        width:100%;
        height:100vh;
        object-fit:fill;
        
    }
    .swiper-slide>video{
        width:100%;
        height:100vh;
        object-fit:cover;
    }

    .swiper-pagination-bullet-active {
        background-color: #000 !important;
    }

    .swiper-pagination {
        margin-top: 250px !important;

    }

    .nextPrevButtons{
        width:100%;
        position:absolute;
        display:flex;
        align-items:center;
        justify-content:space-between;
        z-index:5;
        top:45vh;
    }

    .nextPrevButtons>button{
       background-color:transparent;
       border:none;
       display:flex;
       align-items:center;
       font-weight:200;
       color:white;
    }

    .nextPrevButtons>button svg{
        font-size:30px;
        fill:white;
     }
`

export default Homepage
