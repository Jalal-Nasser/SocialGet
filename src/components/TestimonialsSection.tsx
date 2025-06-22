import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  verifiedPurchase: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sara I.",
    title: "Influencer",
    location: "New Zealand",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5.0,
    text: "I was hesitant to try at first, but ended up trying their Instagram likes trial and here I'm as a believer now. I've been buying their Instagram likes and followers for the past 6 months. The likes are 100% real and active. Last but not least, the support team is amazing! I highly recommend their services 👍",
    verifiedPurchase: "Customer bought 2 500 Instagram likes",
  },
  {
    id: 2,
    name: "Ricardo",
    title: "CMO",
    location: "Spain",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    rating: 5.0,
    text: "We are a social media management company based in Brazil. We have about 100 influencers and have tried multiple services. SocialGet stands out in every aspect. 👍",
    verifiedPurchase: "Customer bought 5 000 Instagram followers",
  },
  {
    id: 3,
    name: "Ruby E.",
    title: "Entrepreneur",
    location: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5.0,
    text: "SocialGet has been a game-changer for my small biz. Always impressed by the fact that they deliver real Instagram likes. ACTUAL REAL ACCOUNTS. Amazing service!",
    verifiedPurchase: "Customer bought 500 Instagram likes",
  },
  {
    id: 4,
    name: "Studio Troc***",
    title: "Photographer",
    location: "United States",
    avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba6ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5.0,
    text: "I've never gotten any gigs from Instagram previously and now most of my photography gigs are from Insta. Best decision and investment I've ever done. Bless you guys 🙏",
    verifiedPurchase: "Customer bought 750 Instagram likes",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light-purple dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          Our customers <span className="text-brand-primary-500">really love us</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Their only complaint? Not finding us sooner. See why our customers choose SocialGet for all of their Instagram-related growth needs.
        </p>

        {/* Overall Rating Box */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-green-500 fill-green-500" />
            ))}
            <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">4.9</span>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Rated <span className="font-bold">4.9 out of 5</span></p>
            <p className="text-gray-600 dark:text-gray-400">based on <span className="font-bold">722+ reviews</span></p>
          </div>
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover" src="https://images.unsplash.com/photo-1491528323818-fdd1faba6ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 1" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User 2" />
            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-800 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="User 3" />
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white dark:bg-gray-800 shadow-md text-left">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title} · {testimonial.location}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-green-500 fill-green-500" />
                  ))}
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{testimonial.rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex items-center text-brand-secondary-blue text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <a href="#" className="hover:underline">{testimonial.verifiedPurchase}</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;