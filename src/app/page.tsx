
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactForm />
    </>
  );
}

