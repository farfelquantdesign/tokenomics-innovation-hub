
import { CircleCheck, TrendingUp, Zap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">About Quantdesign</h2>
          <p className="text-lg text-quantblack-700">
            Founded 4 years ago, Quantdesign has established itself as the industry leader in tokenomics and 
            market making setup. We believe in creating sustainable token economies that deliver real value to all stakeholders.
          </p>
          <p className="text-lg text-quantblack-700 mt-4">
            Our team combines deep expertise in finance, mathematics, and blockchain technology to design tokenomics 
            solutions that stand the test of time and market volatility.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100">
            <div className="text-3xl font-semibold mb-2">4+</div>
            <div className="text-quantblack-600">Years of Leadership</div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100">
            <div className="text-3xl font-semibold mb-2">35+</div>
            <div className="text-quantblack-600">Projects Supported</div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100">
            <div className="text-3xl font-semibold mb-2">$7B+</div>
            <div className="text-quantblack-600">Assets Supported</div>
          </div>
          <div className="bg-white p-6 rounded-sm shadow-sm border border-quantbeige-100">
            <div className="text-3xl font-semibold mb-2">11</div>
            <div className="text-quantblack-600">Integrated Processes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
