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
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useCallback } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    message?: string;
  }>({});

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

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateEmail]);

  // Real-time email validation
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    
    // Clear email error if user is typing and email becomes valid
    if (email && errors.email && validateEmail(email)) {
      setErrors({ ...errors, email: undefined });
    }
  }, [formData, errors, validateEmail]);

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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          access_key: "03dec271-8971-4ef7-a7b0-e90b5afd4d95",
        });
        setErrors({}); // Clear all errors
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

  return (
    <section id="contact" className="py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="flex items-center space-x-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <GlassCard className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Send me a message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400 dark:text-green-300" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Message sent successfully!</p>
                      <p className="text-sm text-green-700 dark:text-green-300">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-400 dark:text-red-300" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Failed to send message</p>
                      <p className="text-sm text-red-700 dark:text-red-300">Please try again later or contact me directly via email.</p>
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
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      disabled={isSubmitting}
                      onBlur={() => {
                        if (formData.firstName.trim() && formData.firstName.trim().length < 2) {
                          setErrors({ ...errors, firstName: "First name must be at least 2 characters" });
                        } else if (formData.firstName.trim()) {
                          setErrors({ ...errors, firstName: undefined });
                        }
                      }}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
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
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      disabled={isSubmitting}
                      onBlur={() => {
                        if (formData.lastName.trim() && formData.lastName.trim().length < 2) {
                          setErrors({ ...errors, lastName: "Last name must be at least 2 characters" });
                        } else if (formData.lastName.trim()) {
                          setErrors({ ...errors, lastName: undefined });
                        }
                      }}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
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
                    onChange={handleEmailChange}
                    disabled={isSubmitting}
                    onBlur={() => {
                      if (formData.email.trim() && !validateEmail(formData.email)) {
                        setErrors({ ...errors, email: "Please enter a valid email address" });
                      } else if (formData.email.trim()) {
                        setErrors({ ...errors, email: undefined });
                      }
                    }}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
                <Input
                  placeholder="Subject"
                  className="rounded-xl focus:border-primary focus:ring-primary/20 transition-all duration-200"
                  disabled={isSubmitting}
                />
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
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    disabled={isSubmitting}
                    onBlur={() => {
                      if (formData.message.trim() && formData.message.trim().length < 10) {
                        setErrors({ ...errors, message: "Message must be at least 10 characters" });
                      } else if (formData.message.trim()) {
                        setErrors({ ...errors, message: undefined });
                      }
                    }}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-xl hover:scale-105 transition-transform duration-200" 
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
