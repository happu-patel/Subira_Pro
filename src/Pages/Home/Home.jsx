import React, { useRef, useEffect } from 'react';
import Features from '../../components/Features/Features';
import Faq from '../../components/Faq/Faq';
import Pricing from '../../components/Pricing/Pricing';
import Services from '../../components/Services/Services';

const Home = ({ scrollToPricing, scrollToFeature, scrollToServices, scrollToFaq }) => {
  const pricingRef = useRef(null);
  const featureRef = useRef(null);
  const serviceRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    if (scrollToPricing) {
      pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToPricing]);

  useEffect(() => {
    if (scrollToFeature) {
      featureRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToFeature]);

  useEffect(() => {
    if (scrollToServices) {
      serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  })

  useEffect(() => {
    if (scrollToFaq) {
      faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  })

  return (
    <>
      <div ref={featureRef}>
        <Features />
      </div>
      <div ref={serviceRef}>
        <Services />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
    </>
  );
};

export default Home;
