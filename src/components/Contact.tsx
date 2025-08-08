import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from './constants';
import { Send } from 'lucide-react';

const Contact: React.FC = React.memo(() => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) {
        setStatus('error');
        return;
      }

      setIsSubmitting(true);
      setStatus(null);

      try {
        const res = await fetch("https://formsubmit.co/clementwa01@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        if (res.ok) {
          setFormData({ name: '', email: '', message: '' });
          setStatus('success');
        } else {
          throw new Error('Failed to send');
        }
      } catch (err) {
        console.error(err);
        setStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Teleport to Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate? Let’s build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just chat about web development, I’d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="text-purple-400 group-hover:scale-110 transition-transform">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800/50 rounded-lg text-gray-400 ${link.color} transition-colors`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.label}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-1 focus:ring-purple-400 resize-none"
              ></textarea>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 rounded-lg font-semibold ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                } text-white flex items-center justify-center space-x-2`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {status && (
              <p
                className={`mt-4 text-center ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {status === 'success'
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Try again.'}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
