const ContactForm = require("../components/ContactForm").default;
export default function ContactPage() {
  return (
    <>
      <main className="flex-1 flex flex-col justify-center pb-200  md:pb-[600]">
        <ContactForm />
      </main>
    </>
  );
}
