import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { userData } from '../data';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Replace these placeholders with your EmailJS credentials
    // You can get them by signing up at https://www.emailjs.com/
    const SERVICE_ID = 'Rama9944'; // You will need to replace this
    const TEMPLATE_ID = 'template_zug4s7t'; // You will need to replace this
    const PUBLIC_KEY = 'CABMAH1m01zWG7d7j'; // You will need to replace this

    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form.current,
      PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setIsSending(false);
        form.current.reset();
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setIsSending(false);
        // Clear error message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="relative py-16 px-6 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background Ornaments - Compact versions */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full mb-4 border border-primary-100 dark:border-primary-800">
            <MessageSquare size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="text-4xl font-black mb-4 tracking-tight">Let's <span className="text-primary-600 italic">Chat.</span></h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto text-sm">Have a project or just want to say hi? My inbox is always open.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-5 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 group hover:border-primary-500/30 transition-all">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Email</p>
                <p className="text-[11px] md:text-xs font-bold text-gray-900 dark:text-white">{userData.contact.email}</p>
              </div>
            </div>

            <div className="p-5 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 group hover:border-primary-500/30 transition-all">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Phone</p>
                <p className="text-sm font-bold">{userData.contact.phone}</p>
              </div>
            </div>

            <div className="p-5 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4 group hover:border-primary-500/30 transition-all">
              <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl shadow-sm flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Location</p>
                <p className="text-sm font-bold">{userData.contact.location}</p>
              </div>
            </div>
          </div>

          {/* Form Column - Compact */}
          <div className="lg:col-span-2">
            <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
              <div className="mb-2">
                <h3 className="text-xl font-black text-gray-900 dark:text-white">Send me a message</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-primary-500 text-sm font-bold transition-all placeholder:text-gray-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-primary-500 text-sm font-bold transition-all placeholder:text-gray-400"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message..."
                required
                rows="4"
                className="w-full bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-primary-500 text-sm font-bold transition-all placeholder:text-gray-400 resize-none"
              ></textarea>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-800 animate-in fade-in slide-in-from-top-2">
                  <CheckCircle size={18} />
                  <span className="text-xs font-bold">Message sent correctly! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-800 animate-in fade-in slide-in-from-top-2">
                  <XCircle size={18} />
                  <span className="text-xs font-bold">Oops! Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className={`w-full ${isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'} text-white font-black py-4 rounded-xl shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-3 uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99]`}
              >
                {isSending ? 'Sending...' : 'Send Message'} <Send size={18} className={isSending ? 'animate-pulse' : ''} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
