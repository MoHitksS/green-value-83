// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import styled from "styled-components";
import jeansvideos from '../Resources/videos/jeans.mp4'

const Homepage = () => {
    const Woman = [
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1922/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159'
        },
        {
            video:jeansvideos
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1922/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1922/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1922/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159'
        },
        {
            img: 'https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-38-3//w/1922/IMAGE-landscape-default-fill-3826ba34-9fad-4264-9ecd-6d2bc9295d9c-default_0.jpg?ts=1663773455159'
        }
    ]
    return (
        <Container>
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {Woman?.map((ele) => (
                    <div className="swiper-slide">
                        {ele.img ? <img src={ele.img} alt={ele.img} /> : <video><source src={ele.video} type="video/mp4"/></video>}

                    </div>
                ))}

            </Swiper>
        </Container>
    );
}

const Container = styled.div`
.mySwiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide>img{
    width:100%;
    height:100vh;
    object-fit:cover;
  }

`



export default Homepage
