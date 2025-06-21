import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We provide easy and secured checkouts via card, crypto, Google Pay & Apple Pay payments.",
  },
  {
    question: "I have a custom request, how do I proceed?",
    answer: (
      <>
        For urgent matters, please contact us via <Link to="/contact" className="text-brand-primary-500 hover:underline">contact us</Link> page.
      </>
    ),
  },
  {
    question: "What are Your Working Hours?",
    answer: "Our customer support is available 24/7, ready to answer to your burning questions around the clock.",
  },
  {
    question: "How fast is the delivery?",
    answer: "The delivery time depends on the service, some services take 30 seconds to deliver and some services take up to 24 hours to deliver.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
        Your Questions <span className="text-brand-primary-500">Answered</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Find answers to the most common questions about our services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6 text-left">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:no-underline py-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>

      {/* Still have questions? section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-8 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="text-left md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Still have questions?</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
        </div>
        <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white px-6 py-3 text-lg">
          Get in touch
        </Button>
      </div>
    </section>
  );
};

export default FAQSection;