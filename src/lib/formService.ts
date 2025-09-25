import { supabase, FormSubmission } from './supabase';
import { sendEmail, formatEmailData, EmailData } from './emailjs';

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
}

export const submitForm = async (
  formData: any,
  formType: 'contact' | 'dealer' | 'booking' | 'hero'
): Promise<FormSubmissionResult> => {
  try {
    // First, save to Supabase
    const supabaseResult = await saveToSupabase(formData, formType);
    
    if (!supabaseResult.success) {
      return {
        success: false,
        message: 'Failed to save form data',
        error: supabaseResult.error
      };
    }

    // Then, send email notification
    const emailData = formatEmailData(formData, formType);
    const emailResult = await sendEmail(emailData);

    if (!emailResult.success) {
      // Even if email fails, we still consider the form submission successful
      // since the data was saved to Supabase
      console.warn('Form saved to database but email notification failed:', emailResult.error);
    }

    return {
      success: true,
      message: 'Form submitted successfully! We\'ll get back to you soon.'
    };

  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

const saveToSupabase = async (
  formData: any,
  formType: 'contact' | 'dealer' | 'booking' | 'hero'
): Promise<FormSubmissionResult> => {
  try {
    let submission: FormSubmission;

    switch (formType) {
      case 'contact':
        submission = {
          form_type: 'contact',
          name: formData.name?.trim() || '',
          email: formData.email?.trim() || '',
          phone: formData.phone?.trim() || '',
          project_description: formData.projectDescription?.trim() || ''
        };
        break;
      
      case 'dealer':
        submission = {
          form_type: 'dealer',
          name: `${formData.firstName?.trim() || ''} ${formData.lastName?.trim() || ''}`.trim(),
          email: formData.email?.trim() || '',
          phone: formData.phone?.trim() || '',
          project_description: `Company: ${formData.company?.trim() || ''}, Zip: ${formData.zipCode?.trim() || ''}, Country: ${formData.country?.trim() || ''}, Online Only: ${formData.onlineOnly?.trim() || ''}`
        };
        break;
      
      case 'booking':
        submission = {
          form_type: 'booking',
          name: formData.name?.trim() || 'Booking Inquiry',
          email: formData.email?.trim() || 'booking@infinitespa.co',
          phone: formData.phone?.trim() || '',
          project_description: formData.message?.trim() || 'Booking consultation request'
        };
        break;
      
      case 'hero':
        submission = {
          form_type: 'hero',
          name: formData.name?.trim() || '',
          email: formData.email?.trim() || '',
          phone: formData.phone?.trim() || '',
          project_description: `Location: ${formData.location?.trim() || 'Not specified'}`
        };
        break;
      
      default:
        throw new Error('Invalid form type');
    }

    const { data, error } = await supabase
      .from('form_submissions')
      .insert([submission]);

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: 'Form data saved successfully'
    };

  } catch (error) {
    console.error('Error saving to Supabase:', error);
    return {
      success: false,
      message: 'Failed to save form data',
      error: error instanceof Error ? error.message : 'Database error'
    };
  }
};
