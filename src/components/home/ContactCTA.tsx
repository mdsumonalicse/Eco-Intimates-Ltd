import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    interest: 'Intimate Wear',
    details: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.details.trim()) newErrors.details = 'Please provide some details about your inquiry';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user matches the field
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      interest: 'Intimate Wear',
      details: ''
    });
  };

  return (
    <section className="bg-white" id="contact">
      {/* Contact Form & Info */}
      <div className="py-32">
        <div className="container mx-auto px-6">
          <div className="bg-soft-gray rounded-[60px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="lg:w-2/5 bg-navy p-12 lg:p-20 text-white relative">
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8">Let's Discuss Your Project</h3>
                <p className="text-white/60 mb-12 text-lg">
                  Whether you need a full private label collection or a small specialized batch, we are ready to assist.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-emerald">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-white/40 mb-1">Call Us</p>
                      <p className="text-lg font-bold">+880 1234-567890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-emerald">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-white/40 mb-1">Email Us</p>
                      <p className="text-lg font-bold">export@ecointimates.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-emerald">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-white/40 mb-1">Visit Factory</p>
                      <p className="text-lg font-bold">Ashulia, Savar, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-16">
                  {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-emerald hover:border-emerald transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Form Side */}
            <div className="lg:w-3/5 p-12 lg:p-20 bg-white relative">
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-20 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald/10 rounded-full flex items-center justify-center text-emerald mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-3xl font-tech font-bold text-navy mb-4 uppercase tracking-tighter">Inquiry Received</h4>
                    <p className="text-navy/50 font-medium max-w-sm">Thank you for reaching out. Our export team will review your requirements and get back to you within 24 business hours.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-10 text-emerald font-bold uppercase tracking-widest text-xs hover:text-navy transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2">Full Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className={`w-full bg-soft-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald outline-none transition-all ${errors.fullName ? 'ring-2 ring-red-500/50' : ''}`} 
                      />
                      {errors.fullName && (
                        <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-red-500 pl-2">
                          <AlertCircle size={12} />
                          {errors.fullName}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@brand.com" 
                        className={`w-full bg-soft-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald outline-none transition-all ${errors.email ? 'ring-2 ring-red-500/50' : ''}`} 
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-red-500 pl-2">
                          <AlertCircle size={12} />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2">Company Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Fashion Corp" 
                        className={`w-full bg-soft-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald outline-none transition-all ${errors.company ? 'ring-2 ring-red-500/50' : ''}`} 
                      />
                      {errors.company && (
                        <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-red-500 pl-2">
                          <AlertCircle size={12} />
                          {errors.company}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2">Interest</label>
                    <select 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-soft-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald outline-none transition-all"
                    >
                      <option>Intimate Wear</option>
                      <option>Sportswear</option>
                      <option>Sustainability Audit</option>
                      <option>Other Enquiry</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2">Details</label>
                  <div className="relative">
                    <textarea 
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Tell us about your requirements, MOQ, and target deadlines..." 
                      className={`w-full bg-soft-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald outline-none transition-all resize-none ${errors.details ? 'ring-2 ring-red-500/50' : ''}`}
                    ></textarea>
                    {errors.details && (
                      <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-red-500 pl-2">
                        <AlertCircle size={12} />
                        {errors.details}
                      </div>
                    )}
                  </div>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-emerald text-white font-bold py-5 rounded-2xl hover:bg-navy transition-all shadow-xl shadow-emerald/20 hover:shadow-navy/20 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  {!isSubmitting && <Send size={18} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
