const ContactForm = require('../components/ContactForm').default;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}