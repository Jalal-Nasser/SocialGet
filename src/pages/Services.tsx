import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchServices } from '@/lib/services';

const Services = () => {
  const [services, setServices] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadServices();
  }, []);

  if (isLoading) return <div>Loading services...</div>;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <Link to={`/services/${service.platform.toLowerCase()}/${service.path}`} key={service.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.platform} {service.service_name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="font-medium">From ${service.price.toFixed(4)} {service.unit}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;