import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { showSuccess, showError } from '@/utils/toast';
import { services } from '@/data/servicesData';

const OrderForm: React.FC = () => {
  const [platform, setPlatform] = useState('');
  const [service, setService] = useState('');
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = services.filter(s => s.platform === platform);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !service || !link || !quantity) {
      showError('Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call for placing an order
      await new Promise(resolve => setTimeout(resolve, 1500));
      showSuccess('Order placed successfully!');
      // Clear form
      setPlatform('');
      setService('');
      setLink('');
      setQuantity('');
    } catch (error) {
      showError('Failed to place order. Please try again.');
      console.error('Order submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Place a New Order</h2>

      <div>
        <Label htmlFor="platform">Platform</Label>
        <Select onValueChange={setPlatform} value={platform} disabled={isSubmitting}>
          <SelectTrigger id="platform">
            <SelectValue placeholder="Select a platform" />
          </SelectTrigger>
          <SelectContent>
            {Array.from(new Set(services.map(s => s.platform))).map(p => (
              <SelectItem key={p} value={p}>{p}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="service">Service</Label>
        <Select onValueChange={setService} value={service} disabled={isSubmitting || !platform}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {availableServices.map(s => (
              <SelectItem key={s.path} value={s.path}>{s.serviceName} (${s.price.toFixed(2)})</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="link">Link</Label>
        <Input
          id="link"
          type="url"
          placeholder="Enter link to your post/profile"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          type="number"
          placeholder="e.g., 1000"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full bg-brand-primary-500 hover:bg-brand-secondary-blue text-white" disabled={isSubmitting}>
        {isSubmitting ? 'Placing Order...' : 'Place Order'}
      </Button>
    </form>
  );
};

export default OrderForm;