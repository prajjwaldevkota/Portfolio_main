"use client";
import {
  GlassCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    access_key: "03dec271-8971-4ef7-a7b0-e90b5afd4d95",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [isTyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  // Auto-save form data to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, []);

  // Save form data as user types
  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      setIsTyping(false);
    }, 1000);

    setTypingTimeout(timeout);
    setIsTyping(true);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [formData]);

  // Email validation function
  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  // Form validation function
  const validateForm = useCallback((): boolean => {
    const newErrors: typeof errors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateEmail]);

  // Real-time validation
  const handleFieldChange = useCallback((field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error if field becomes valid
    if (errors[field as keyof typeof errors] && value.trim()) {
      if (field === 'email' && validateEmail(value)) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      } else if (field !== 'email' && value.trim().length >= (field === 'subject' ? 5 : 2)) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    }
  }, [errors, validateEmail]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const json = JSON.stringify(formData);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setSubmitStatus("success");
        // Clear form and localStorage
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
          access_key: "03dec271-8971-4ef7-a7b0-e90b5afd4d95",
        });
        localStorage.removeItem('contactFormData');
        setErrors({});
        // Auto-dismiss success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        // Auto-dismiss error message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      // Auto-dismiss error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "devkota.prj@gmail.com",
      href: "mailto:devkota.prj@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "London, ON",
      href: "#"
    }
  ];

  const getCharacterCount = (field: keyof Omit<typeof formData, 'access_key'>) => {
    const fieldMap = {
      firstName: 2,
      lastName: 2,
      email: 0,
      subject: 5,
      message: 10
    };
    const minLength = fieldMap[field];
    const currentLength = formData[field].length;
    return { current: currentLength, min: minLength, isValid: currentLength >= minLength };
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-transparent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                Let&apos;s work together
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 relative z-10">
                    {info.icon}
                  </div>
                  <div className="relative z-10">
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Auto-save indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Saving...</span>
              </div>
            )}
          </div>

          <GlassCard className="border-0 shadow-xl relative overflow-hidden">
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl font-semibold flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Send me a message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 border border-green-300 text-green-900 dark:bg-green-900/30 dark:border-green-700 dark:text-green-100">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-900 dark:text-green-100">Message sent successfully!</p>
                      <p className="text-sm text-green-800 dark:text-green-200">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-300 text-green-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-900 dark:text-red-200">Failed to send message</p>
                      <p className="text-sm text-red-800 dark:text-red-300">Please try again later or contact me directly via email.</p>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name"
                      className={`rounded-xl transition-all duration-200 ${
                        errors.firstName 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'focus:border-primary focus:ring-primary/20'
                      }`}
                      value={formData.firstName}
                      onChange={(e) => handleFieldChange('firstName', e.target.value)}
                      disabled={isSubmitting}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                    <div className="text-xs text-muted-foreground mt-1 text-right">
                      {getCharacterCount('firstName').current}/{getCharacterCount('firstName').min} min
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      className={`rounded-xl transition-all duration-200 ${
                        errors.lastName 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'focus:border-primary focus:ring-primary/20'
                      }`}
                      value={formData.lastName}
                      onChange={(e) => handleFieldChange('lastName', e.target.value)}
                      disabled={isSubmitting}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                    <div className="text-xs text-muted-foreground mt-1 text-right">
                      {getCharacterCount('lastName').current}/{getCharacterCount('lastName').min} min
                    </div>
                  </div>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className={`rounded-xl transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'focus:border-primary focus:ring-primary/20'
                    }`}
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    disabled={isSubmitting}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className={`rounded-xl transition-all duration-200 ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'focus:border-primary focus:ring-primary/20'
                    }`}
                    value={formData.subject}
                    onChange={(e) => handleFieldChange('subject', e.target.value)}
                    disabled={isSubmitting}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                  <div className="text-xs text-muted-foreground mt-1 text-right">
                    {getCharacterCount('subject').current}/{getCharacterCount('subject').min} min
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className={`rounded-xl resize-none transition-all duration-200 ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                        : 'focus:border-primary focus:ring-primary/20'
                    }`}
                    value={formData.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    disabled={isSubmitting}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.message}
                    </p>
                  )}
                  <div className="text-xs text-muted-foreground mt-1 text-right">
                    {getCharacterCount('message').current}/{getCharacterCount('message').min} min
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-xl hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
