import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_wae3rzs'; // Your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_o1r6i88'; // Your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'ZmV7pTaXw3-gYXzYpI-Ss'; // Your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectDescription?: string;
  formType: 'contact' | 'dealer' | 'booking';
  additionalData?: Record<string, any>;
}

export const sendEmail = async (emailData: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const templateParams = {
      from_name: emailData.name,
      from_email: emailData.email,
      phone: emailData.phone || 'Not provided',
      company: emailData.company || 'Not provided',
      project_description: emailData.projectDescription || 'No message provided',
      form_type: emailData.formType.toUpperCase(),
      additional_data: emailData.additionalData ? JSON.stringify(emailData.additionalData, null, 2) : 'None',
      to_email: 'mattboney@infinitemodularspa.com', // Your business email
      to_name: 'Matt Boney',
      timestamp: timestamp,
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
};

// Helper function to format email data based on form type
export const formatEmailData = (formData: any, formType: EmailData['formType']): EmailData => {
  switch (formType) {
    case 'contact':
      return {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectDescription: formData.projectDescription,
        formType: 'contact',
      };
    case 'dealer':
      return {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        formType: 'dealer',
        additionalData: {
          zipCode: formData.zipCode,
          country: formData.country,
          onlineOnly: formData.onlineOnly,
        },
      };
    case 'booking':
      return {
        name: formData.name || 'Booking Inquiry',
        email: formData.email || 'booking@infinitespa.co',
        formType: 'booking',
        additionalData: formData,
      };
    default:
      return {
        name: formData.name || 'Unknown',
        email: formData.email || 'unknown@example.com',
        formType: 'contact',
      };
  }
};
