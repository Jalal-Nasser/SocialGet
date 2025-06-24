import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { fetchServices, addService, updateService, deleteService, Service } from '@/lib/services';
import { showSuccess, showError } from '@/utils/toast';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const ManageServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    platform: '',
    service_name: '',
    path: '',
    description: '',
    price: '',
    unit: '',
  });

  const loadServices = async () => {
    setLoading(true);
    try {
      const data = await fetchServices();
      setServices(data);
    } catch (error) {
      showError('Failed to load services.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string, id: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleAddEditService = async () => {
    try {
      const serviceData = {
        ...formData,
        price: parseFloat(formData.price),
      };

      if (editingService) {
        await updateService(editingService.id, serviceData);
        showSuccess('Service updated successfully!');
      } else {
        await addService(serviceData);
        showSuccess('Service added successfully!');
      }
      await loadServices();
      setIsDialogOpen(false);
      setEditingService(null);
      setFormData({ platform: '', service_name: '', path: '', description: '', price: '', unit: '' });
    } catch (error) {
      showError('Failed to save service.');
      console.error('Save service error:', error);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await deleteService(id);
        showSuccess('Service deleted successfully!');
        await loadServices();
      } catch (error) {
        showError('Failed to delete service.');
        console.error('Delete service error:', error);
      }
    }
  };

  const openEditDialog = (service: Service) => {
    setEditingService(service);
    setFormData({
      platform: service.platform,
      service_name: service.service_name,
      path: service.path,
      description: service.description || '',
      price: service.price.toString(),
      unit: service.unit,
    });
    setIsDialogOpen(true);
  };

  const openAddDialog = () => {
    setEditingService(null);
    setFormData({ platform: '', service_name: '', path: '', description: '', price: '', unit: '' });
    setIsDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Manage Services</h1>
          <Button onClick={openAddDialog} className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
            <PlusCircle className="h-5 w-5 mr-2" /> Add New Service
          </Button>
        </div>

        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">All Services</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-gray-600 dark:text-gray-400">Loading services...</p>
            ) : services.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">No services found. Add one!</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Platform</TableHead>
                      <TableHead>Service Name</TableHead>
                      <TableHead>Path</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">{service.platform}</TableCell>
                        <TableCell>{service.service_name}</TableCell>
                        <TableCell>{service.path}</TableCell>
                        <TableCell>${service.price.toFixed(3)}</TableCell>
                        <TableCell>{service.unit}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="icon" onClick={() => openEditDialog(service)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="destructive" size="icon" onClick={() => handleDeleteService(service.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <DialogHeader>
            <DialogTitle>{editingService ? 'Edit Service' : 'Add New Service'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="platform" className="text-right">Platform</Label>
              <Select onValueChange={(value) => handleSelectChange(value, 'platform')} value={formData.platform}>
                <SelectTrigger id="platform" className="col-span-3">
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent>
                  {['Twitter', 'Instagram', 'YouTube', 'TikTok', 'Facebook', 'Reddit', 'LinkedIn'].map(p => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="service_name" className="text-right">Service Name</Label>
              <Input id="service_name" value={formData.service_name} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="path" className="text-right">Path (URL slug)</Label>
              <Input id="path" value={formData.path} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Textarea id="description" value={formData.description} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">Price</Label>
              <Input id="price" type="number" step="0.001" value={formData.price} onChange={handleInputChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="unit" className="text-right">Unit (e.g., /Follower)</Label>
              <Input id="unit" value={formData.unit} onChange={handleInputChange} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddEditService} className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white">
              {editingService ? 'Save Changes' : 'Add Service'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default ManageServices;