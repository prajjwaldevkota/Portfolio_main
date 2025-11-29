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
    <section id="contact" className="py-24 relative bg-background overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Have a project in mind? Let&apos;s build something extraordinary together.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card border border-white/5 rounded-2xl p-8 shadow-2xl">
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 flex items-center gap-3">
                <CheckCircle className="h-5 w-5" />
                <p className="text-sm font-medium">Message sent successfully!</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-3">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm font-medium">Failed to send message. Please try again.</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">First Name</label>
                  <Input
                    placeholder="John"
                    className="bg-secondary/50 border-white/5 focus:border-white/20 transition-all"
                    value={formData.firstName}
                    onChange={(e) => handleFieldChange('firstName', e.target.value)}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Last Name</label>
                  <Input
                    placeholder="Doe"
                    className="bg-secondary/50 border-white/5 focus:border-white/20 transition-all"
                    value={formData.lastName}
                    onChange={(e) => handleFieldChange('lastName', e.target.value)}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary/50 border-white/5 focus:border-white/20 transition-all"
                  value={formData.email}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Subject</label>
                <Input
                  placeholder="Project Inquiry"
                  className="bg-secondary/50 border-white/5 focus:border-white/20 transition-all"
                  value={formData.subject}
                  onChange={(e) => handleFieldChange('subject', e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-secondary/50 border-white/5 focus:border-white/20 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 transition-all"
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
          </div>

          <div className="mt-12 flex justify-center gap-8">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-white/10 transition-colors">
                  {info.icon}
                </div>
                <span className="text-sm font-medium">{info.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
