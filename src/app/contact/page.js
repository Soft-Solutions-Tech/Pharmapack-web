const ContactForm = require('../components/ContactForm').default;
import { Header } from '../components/header';
import { Footer } from '../components/footer';
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col justify-center pb-200  md:pb-[450]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}