import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, Pagination } from "swiper"
import 'swiper/css';
import "swiper/css/pagination";
import data from './data';
import {
  Section,
  Wrapper,
  Bold,
  SectionTitle,
  SliderContainer,
  Card,
  BackgroundImage,
  InnerCard,
  Title,
  DescParagraph,
  Line,
  Button,
  RevealButton,
  ContainerForRevealButton,
  Arrow
} from "./styles"

SwiperCore.use([Navigation, Thumbs, Pagination]);

const Courses: React.FC<{}> = () => {
  const [active, setActive] = useState<number | null>();

  const toggle = (i: number) => {
    if (active === i) {
      setActive(null)
    } else {
      setActive(i)
    }
  }

  useEffect(() => {
    // console.log(active);
  }, [active])

  return (
    <Section>
      <Wrapper>
        <SectionTitle><Bold>courses</Bold>we offer</SectionTitle>
        <Swiper
          slidesPerGroup={1}
          slidesPerView={3}
          modules={[Pagination, Navigation]}
          pagination={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}>
          {data.map((course, i) => {
            return <SwiperSlide key={course.tag}>
              <Card active={active} i={i} img={course.img} >
                <ContainerForRevealButton active={active} i={i}>
                  <BackgroundImage src={course.img} active={active} i={i} />
                  <InnerCard active={active} i={i}>
                    <Title active={active} i={i}>{course.title}</Title>
                    <Line active={active} i={i}></Line>
                    {course.description.map((desc, index) => {
                      return <DescParagraph active={active} i={i} key={desc}>{desc}</DescParagraph>
                    })}
                    <Button>View Course</Button>
                  </InnerCard>
                  <RevealButton onClick={() => toggle(i)} active={active} i={i}>–</RevealButton>
                </ContainerForRevealButton>
              </Card>
            </SwiperSlide>
          })}
        </Swiper>
        <Arrow className="swiper-button-prev" />
        <Arrow className="swiper-button-next" />
      </Wrapper>
    </Section>
  );
}

export default Courses;
