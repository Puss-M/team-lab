import React from 'react';
import Slider from 'react-slick';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Styles for the carousel overlay
const overlayStyle = {
  position: 'absolute' as const,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(0, 40, 60, 0.6), rgba(0, 40, 60, 0.8))', // Deep Teal overlay
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center' as const,
  color: 'white',
  padding: '0 2rem',
};

const slideContentStyle = {
  position: 'relative' as const,
  height: '600px', // Tall hero
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: 700,
  marginBottom: '1rem',
  textShadow: '0 2px 4px rgba(0,0,0,0.4)',
};

const subtitleStyle = {
  fontSize: '1.5rem',
  maxWidth: '800px',
  margin: '0 auto 2rem',
  opacity: 0.95,
  textShadow: '0 1px 2px rgba(0,0,0,0.4)',
};

export default function HeroCarousel() {
  const settings: any = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Cleaner look
    fade: true, // Smooth fade transition
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Swift Coding Club',
      subtitle: 'Igniting Ideas, Fostering Collaboration. 用 AI 重塑金融。',
      buttonText: '探索项目',
      buttonLink: '/projects/featured',
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: '加入我们',
      subtitle: '每周五晚 7 点，思维碰撞，共创未来。',
      buttonText: '查看活动',
      buttonLink: '/blog',
    },
    {
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'DeepSeek 深度解析',
      subtitle: '本周分享：DeepSeek-V3 架构拆解与本地部署实战。',
      buttonText: '阅读回顾',
      buttonLink: '/blog/deepseek-review',
    },
  ];

  return (
    <div className="hero-carousel-container" style={{overflow: 'hidden', marginBottom: '0'}}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={{...slideContentStyle, backgroundImage: `url(${slide.image})`}}>
              <div style={overlayStyle}>
                <Heading as="h1" style={titleStyle}>{slide.title}</Heading>
                <p style={subtitleStyle}>{slide.subtitle}</p>
                <div>
                  <Link
                    className="button button--secondary button--lg"
                    to={slide.buttonLink}
                    style={{
                      borderRadius: '0', 
                      padding: '0.8rem 2rem', 
                      fontSize: '1rem', 
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
