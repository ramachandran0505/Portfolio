import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { userData } from '../data';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${userData.contact.email}?subject=Portfolio Message from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`;
    window.location.href = mailtoLink;
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
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-primary-500 text-sm font-bold transition-all placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-primary-500 text-sm font-bold transition-all placeholder:text-gray-400"
                />
              </div>
              <textarea
                placeholder="Message..."
                required
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 p-4 rounded-xl focus:ring-2 focus:ring-primary-500 text-sm font-bold transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-black py-4 rounded-xl shadow-lg shadow-primary-500/20 transition-all flex items-center justify-center gap-3 uppercase tracking-widest hover:scale-[1.01] active:scale-[0.99]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
