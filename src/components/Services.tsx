
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Tokenomics Design",
    description: "Comprehensive token economic models designed for sustainability and value accrual. We analyze supply mechanisms, utility functions, and governance structures.",
    image: "bg-gradient-to-br from-quantbeige-100 to-quantbeige-200",
    features: [
      "Supply & distribution planning",
      "Utility & value accrual mechanisms",
      "Governance structure design",
      "Incentive alignment analysis"
    ]
  },
  {
    title: "Market Making Setup",
    description: "Strategic liquidity provision and market making infrastructure designed to ensure healthy trading environments for your token.",
    image: "bg-gradient-to-br from-quantbeige-100 to-quantbeige-200",
    features: [
      "Liquidity pool strategy",
      "Market maker selection & setup",
      "Slippage optimization",
      "Trading pair analysis"
    ]
  },
  {
    title: "Token Launch Strategy",
    description: "End-to-end planning for successful token launches, from initial offering structure to post-launch support and market stabilization.",
    image: "bg-gradient-to-br from-quantbeige-100 to-quantbeige-200",
    features: [
      "Launch mechanism selection",
      "Price discovery strategy",
      "Vesting & lockup implementation",
      "Post-launch support plan"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-quantbeige">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Services</h2>
          <p className="text-lg text-quantblack-700">
            Productized service packages for new token issuances and existing liquid tokens, 
            designed with analytical precision and delivered with professional excellence.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className={`aspect-video ${service.image} rounded-sm flex items-center justify-center`}>
                  <div className="font-medium text-2xl text-quantblack/80">{service.title}</div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                <p className="text-quantblack-700 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start">
                      <span className="inline-block w-5 h-5 mr-3 text-quantblack-800 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-quantblack font-medium hover:translate-x-1 transition-transform duration-300"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-quantblack text-quantbeige p-10 md:p-16 rounded-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">Ready to transform your token strategy?</h3>
              <p className="mb-8 text-quantbeige-100">
                Our team of experts is ready to help you design, implement, and optimize your token economics
                and market infrastructure.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-quantbeige text-quantblack px-7 py-3 rounded-sm hover:bg-quantbeige-200 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-quantblack-800 to-quantblack-900 rounded-full flex items-center justify-center">
                <div className="w-2/3 h-2/3 border-2 border-quantbeige/20 rounded-full flex items-center justify-center">
                  <div className="w-1/2 h-1/2 border-2 border-quantbeige/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
