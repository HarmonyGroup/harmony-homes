import React from 'react';
import Hero from '@/components/website/Hero';
import AboutUs1 from '@/components/website/about-us-1';
import AboutUs2 from '@/components/website/about-us-2';
import Banner1 from '@/components/website/Banner1';
import Testimonials from '@/components/website/Testimonials';
import Extras from '@/components/website/Extras';
import Extras2 from '@/components/website/Extras2';

const Page = () => {
  return (
    <>
      <Hero />
      <AboutUs1 />
      <AboutUs2 />
      {/* <Extras2 /> */}
      <Banner1 />
      <Extras />
      <Testimonials />
    </>
  )
}

export default Page