'use client';

const { useState } = require('react');

export default function ContactForm() {
  const [formState, setFormState] = useState({
    message: '',
    error: false,
    success: false,
    fieldValues: { name: '', mobile: '', message: '' },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      setFormState({
        message: result.message,
        error: result.error,
        success: result.success,
        fieldValues: result.fieldValues,
      });
    } catch (error) {
      setFormState({
        message: 'Network error. Please try again.',
        error: true,
        success: false,
        fieldValues: {
          name: formData.get('name'),
          mobile: formData.get('mobile'),
          message: formData.get('message'),
        },
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            value={formState.fieldValues.name}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                fieldValues: { ...prev.fieldValues, name: e.target.value },
              }))
            }
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            value={formState.fieldValues.mobile}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                fieldValues: { ...prev.fieldValues, mobile: e.target.value },
              }))
            }
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formState.fieldValues.message}
            onChange={(e) =>
              setFormState((prev) => ({
                ...prev,
                fieldValues: { ...prev.fieldValues, message: e.target.value },
              }))
            }
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>

        {formState.message && (
          <p className={formState.error ? 'text-red-500' : 'text-green-500'}>
            {formState.message}
          </p>
        )}
      </form>
    </div>
  );
}