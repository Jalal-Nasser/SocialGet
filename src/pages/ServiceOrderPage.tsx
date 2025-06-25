import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, Shield, Zap, Clock } from 'lucide-react';
import { getServiceByPlatformAndPath } from '@/lib/services';
import { useSession } from '@/components/auth/SessionContextProvider';
import { showSuccess, showError } from '@/utils/toast';

const ServiceOrderPage = () => {
  const { platform, serviceName } = useParams();
  const [service, setService] = useState(null);
  const [quantity, setQuantity] = useState(100);
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { session } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    const loadService = async () => {
      if (platform && serviceName) {
        try {
          const data = await getServiceByPlatformAndPath(platform, serviceName);
          setService(data);
        } catch (error) {
          showError('Failed to load service details');
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadService();
  }, [platform, serviceName]);

  const handleOrder = async () => {
    if (!session) {
      navigate('/login');
      return;
    }
    
    try {
      // Process order logic here
      showSuccess('Order placed successfully!');
    } catch (error) {
      showError('Failed to place order');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (!service) return <div>Service not found</div>;

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Order {service.platform} {service.service_name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label className="block mb-2">Quantity</label>
                <div className="flex flex-wrap gap-2">
                  {serviceQuantityOptions[service.path]?.map(option => (
                    <Button
                      key={option.quantity}
                      variant={quantity === option.quantity ? 'default' : 'outline'}
                      onClick={() => setQuantity(option.quantity)}
                    >
                      {option.quantity} ({option.price}$)
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block mb-2">Link to your content</label>
                <Input 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder={`Enter your ${service.platform} link`}
                />
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleOrder}
                disabled={!link}
              >
                Place Order (${(quantity * service.price).toFixed(2)})
              </Button>
            </div>
            
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium">High Quality</h4>
                    <p className="text-sm text-gray-600">Real engagement from active accounts</p>
                  </div>
                </div>
                {/* Add other features similarly */}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceOrderPage;