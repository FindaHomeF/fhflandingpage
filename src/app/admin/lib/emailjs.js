import emailjs from '@emailjs/browser';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your-public-key');
};

// Send email function
export const sendEmail = async (templateId, templateParams) => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your-service-id',
      templateId,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your-public-key'
    );
    return result;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};

// Email templates
export const EMAIL_TEMPLATES = {
  WELCOME: 'template_welcome',
  NOTIFICATION: 'template_notification',
  REPORT: 'template_report',
};

