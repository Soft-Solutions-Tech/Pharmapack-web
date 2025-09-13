// contact-data.js
export const contactData = {
  contactInfo: {
    email: "contact@company.com",
    phone: "+1 (555) 123-4567",
  },
  address: {
    fullAddress:
      "123 Business Avenue, Suite 450, New York, NY 10001, United States",
    formatted: [
      "123 Business Avenue",
      "Suite 450",
      "New York, NY 10001",
      "United States",
    ],
  },
  officeHours: [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  gettingHere: [
    "Subway: 4, 5, 6 trains to Union Square",
    "Parking: Available in building garage",
    "Public Transit: Multiple bus routes nearby",
  ],
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2628653523487!2d-73.9914506843531!3d40.73592794277592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1694123456789!5m2!1sen!2sus",
    directionsUrl:
      "https://maps.google.com/?q=123+Business+Avenue,+Suite+450,+New+York,+NY+10001",
  },
  inquiryTypes: [
    "General Question",
    "Become a Partner",
    "Support Request",
    "Business Inquiry",
  ],
};
