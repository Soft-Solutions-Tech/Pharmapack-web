const ContactForm = require('../components/ContactForm').default;
import { Header } from '../components/header';
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col justify-center pb-280  md:pb-[560]">
        <ContactForm />
      </main>
      
    </>
  );
}