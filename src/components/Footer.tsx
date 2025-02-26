import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub',
      href: 'https://github.com/Aayush518'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/Aayush518'
    }
  ];

  const footerLinks = [
    { 
      label: 'ABOUT',
      path: '/about'
    },
    { 
      label: 'FAQS',
      path: '/faqs'
    },
    { 
      label: 'CONTACT',
      path: '/contact'
    }
  ];

  return (
    <footer id="contact" className="bg-zinc-950 py-20 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdHRlcm4gaWQ9InN1YmdyaWQiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCAxMCAwIE0gMCAwIEwgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PHBhdGggZD0iTSAwIDAgTCAyMCAwIE0gMCAwIEwgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-[8rem] font-display font-extralight tracking-tighter bg-gradient-to-r from-white via-amber-100 to-amber-500/80 bg-clip-text text-transparent mb-6">
              CELLAR
            </h3>
            <p className="text-zinc-400 text-xl max-w-2xl">
              Subscribe to our newsletter for exclusive updates, special offers, and insights into the world of premium beverages.
            </p>
          </motion.div>

        </div>

        <div className="mt-12 relative">
          <motion.div 
            className="flex gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent border-b border-zinc-800 py-4 text-lg focus:outline-none focus:border-amber-500 transition-colors"
            />
            <motion.button
              className="group relative px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity" />
              <span className="relative z-10 text-amber-500 font-medium tracking-wider">
                SUBSCRIBE
              </span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-8">
            {footerLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                }}
                className="text-zinc-500 hover:text-amber-500 transition-colors text-sm tracking-wider"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-amber-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative group">
                  <Icon className="w-5 h-5" />
                  <ExternalLink className="w-3 h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          <div className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} CELLAR. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}