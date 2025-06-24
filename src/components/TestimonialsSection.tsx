import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  quote: string;
  author: string;
  avatarUrl?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "SocialGet has truly transformed my online presence! The services are fast, reliable, and the results are incredible. Highly recommend for anyone looking to boost their social media.",
    author: "Sarah J.",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=SJ",
    rating: 5,
  },
  {
    quote: "I was skeptical at first, but SocialGet delivered exactly what they promised. My engagement rates have soared, and their customer support is top-notch. A game-changer!",
    author: "Mark T.",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=MT",
    rating: 5,
  },
  {
    quote: "The best service for social media growth I've used so far. The process is simple, and the quality of followers and likes is genuine. Very satisfied with the outcome.",
    author: "Emily R.",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=ER",
    rating: 5,
  },
  {
    quote: "Fast delivery and excellent results! SocialGet helped me reach a wider audience on YouTube much quicker than I expected. Their services are a must-try for content creators.",
    author: "David L.",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=DL",
    rating: 5,
  },
  {
    quote: "Finally, a reliable platform for social media growth. The pricing is fair, and the services are effective. My Instagram profile has never looked better!",
    author: "Jessica P.",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=JP",
    rating: 5,
  },
  {
    quote: "SocialGet made it so easy to get the boost I needed for my new business page. The increase in followers and likes gave me the social proof to attract more organic growth.",
    author: "Chris B.",
    avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=CB",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
        What Our <span className="text-brand-primary-500">Customers Say</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Hear directly from the people who have experienced exponential growth with SocialGet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <CardHeader className="pb-4">
              <Avatar className="w-20 h-20 mb-4">
                <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} />
                <AvatarFallback className="bg-brand-secondary-blue text-white text-xl font-bold">{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{testimonial.author}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;