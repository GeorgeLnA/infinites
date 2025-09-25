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

    // Send to both recipients
    const recipients = [
      { email: 'matt@infinitespa.co', name: 'Matt' },
      { email: 'georgeemh@gmail.com', name: 'George' }
    ];

    const results = await Promise.allSettled(
      recipients.map(recipient => {
        const templateParams = {
          from_name: emailData.name,
          from_email: emailData.email,
          phone: emailData.phone || 'Not provided',
          company: emailData.company || 'Not provided',
          project_description: emailData.projectDescription || 'No message provided',
          form_type: emailData.formType.toUpperCase(),
          additional_data: emailData.additionalData ? JSON.stringify(emailData.additionalData, null, 2) : 'None',
          to_email: recipient.email,
          to_name: recipient.name,
          timestamp: timestamp,
        };

        return emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );
      })
    );

    // Check if at least one email was sent successfully
    const successfulSends = results.filter(result => result.status === 'fulfilled');
    const failedSends = results.filter(result => result.status === 'rejected');

    if (successfulSends.length > 0) {
      console.log('Email sent successfully to:', successfulSends.length, 'recipients');
      if (failedSends.length > 0) {
        console.warn('Some emails failed to send:', failedSends);
      }
      return { success: true };
    } else {
      console.error('All emails failed to send:', failedSends);
      return { 
        success: false, 
        error: 'Failed to send email to any recipients' 
      };
    }
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
