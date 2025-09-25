import emailjs from '@emailjs/browser';

// Debug EmailJS configuration
export const debugEmailJS = () => {
  console.log('=== EmailJS Debug Information ===');
  console.log('Service ID:', 'service_wae3rzs');
  console.log('Template ID:', 'template_o1r6i88');
  console.log('Public Key:', 'ZmV7pTaXw3-gYXzYpI-Ss');
  
  // Test EmailJS initialization
  try {
    emailjs.init('ZmV7pTaXw3-gYXzYpI-Ss');
    console.log('✅ EmailJS initialized successfully');
  } catch (error) {
    console.error('❌ EmailJS initialization failed:', error);
  }
  
  // Test email sending
  const testEmail = async () => {
    try {
      const result = await emailjs.send(
        'service_wae3rzs',
        'template_o1r6i88',
        {
          from_name: 'Test User',
          from_email: 'test@example.com',
          phone: '123-456-7890',
          form_type: 'CONTACT',
          to_email: 'matt@infinitespa.co',
          to_name: 'Matt',
          timestamp: new Date().toLocaleString()
        }
      );
      console.log('✅ Test email sent successfully:', result);
      return { success: true, result };
    } catch (error) {
      console.error('❌ Test email failed:', error);
      return { success: false, error };
    }
  };
  
  return testEmail();
};

// Call this function in your browser console to debug
(window as any).debugEmailJS = debugEmailJS;
(window as any).debugEmails = debugEmailJS; // Also available as debugEmails
