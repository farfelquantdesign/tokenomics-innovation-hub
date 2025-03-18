
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-quantbeige-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Get in Touch</h2>
          <p className="text-lg text-quantblack-700">
            Ready to elevate your token strategy? Contact our team for a consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-sm shadow-sm border border-quantbeige-200">
            <h3 className="text-2xl font-medium mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-quantblack-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border border-quantbeige-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-quantblack/20"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-quantblack-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border border-quantbeige-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-quantblack/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-quantblack-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-quantbeige-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-quantblack/20"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-quantblack-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-quantbeige-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-quantblack/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-quantblack-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-quantbeige-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-quantblack/20"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-quantblack text-quantbeige px-6 py-3 rounded-sm hover:bg-quantblack-800 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-white p-8 rounded-sm shadow-sm border border-quantbeige-200 mb-8">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-4 text-quantblack-600 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@quantdesign.com" className="text-quantblack-600 hover:text-quantblack transition-colors">
                      info@quantdesign.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-4 text-quantblack-600 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+11234567890" className="text-quantblack-600 hover:text-quantblack transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-4 text-quantblack-600 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Office</p>
                    <address className="text-quantblack-600 not-italic">
                      123 Blockchain Avenue<br />
                      Suite 456<br />
                      Financial District<br />
                      New York, NY 10004
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-quantblack text-quantbeige p-8 rounded-sm">
              <h3 className="text-xl font-medium mb-4">Working Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
