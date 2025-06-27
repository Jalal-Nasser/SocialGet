import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { showSuccess, showError } from '@/utils/toast';
import { fetchPaymentSettings, savePaymentSetting, PaymentSetting } from '@/lib/paymentSettings';

const PaymentSettings: React.FC = () => {
  const [provider, setProvider] = useState<'paypal' | 'stripe' | 'crypto' | 'skrill'>('paypal');
  const [form, setForm] = useState({
    paypal: { apiKey: '', secretKey: '', enabled: false },
    stripe: { apiKey: '', secretKey: '', enabled: false },
    crypto: { apiKey: '', secretKey: '', enabled: false }, // Placeholder for crypto gateway ID/key
    skrill: { apiKey: '', secretKey: '', enabled: false }, // Placeholder for Skrill merchant ID/secret
  });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      setLoading(true);
      try {
        const settings = await fetchPaymentSettings();
        const newForm = { ...form };
        settings.forEach(s => {
          if (s.provider in newForm) {
            newForm[s.provider as keyof typeof newForm] = {
              apiKey: s.api_key || '',
              secretKey: s.secret_key || '',
              enabled: s.enabled,
            };
          }
        });
        setForm(newForm);
      } catch (error) {
        showError('Failed to load payment settings.');
        console.error('Error loading payment settings:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [provider]: {
        ...prev[provider],
        [name]: value,
      },
    }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setForm(prev => ({
      ...prev,
      [provider]: {
        ...prev[provider],
        enabled: checked,
      },
    }));
  };

  const handleProviderChange = (prov: typeof provider) => {
    setProvider(prov);
    setStatus(null);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setStatus('Saving...');
    try {
      const currentSettings = form[provider];
      // Basic validation: API Key is often required
      if (!currentSettings.apiKey) {
        showError('API Key is required.');
        setStatus(null);
        return;
      }

      await savePaymentSetting({
        provider: provider,
        api_key: currentSettings.apiKey,
        secret_key: currentSettings.secretKey,
        enabled: currentSettings.enabled,
      });
      showSuccess('Payment settings saved successfully!');
      setStatus('Settings saved!');
    } catch (error) {
      showError('Failed to save payment settings.');
      console.error('Save payment settings error:', error);
      setStatus('Save failed.');
    } finally {
      setIsSaving(false);
    }
  };

  const currentProviderForm = form[provider];

  const getPlaceholderText = (field: 'apiKey' | 'secretKey') => {
    const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);
    if (field === 'apiKey') {
      return `${providerName} API Key / Client ID`;
    }
    return `${providerName} Secret Key / Webhook Secret`;
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-sm rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">Payment Gateway Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <Button
                  variant={provider === 'paypal' ? 'default' : 'outline'}
                  onClick={() => handleProviderChange('paypal')}
                  className={provider === 'paypal' ? 'bg-brand-primary-500 hover:bg-brand-primary-600 text-white' : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                >
                  PayPal
                </Button>
                <Button
                  variant={provider === 'stripe' ? 'default' : 'outline'}
                  onClick={() => handleProviderChange('stripe')}
                  className={provider === 'stripe' ? 'bg-brand-primary-500 hover:bg-brand-primary-600 text-white' : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                >
                  Stripe
                </Button>
                <Button
                  variant={provider === 'crypto' ? 'default' : 'outline'}
                  onClick={() => handleProviderChange('crypto')}
                  className={provider === 'crypto' ? 'bg-brand-primary-500 hover:bg-brand-primary-600 text-white' : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                >
                  Crypto
                </Button>
                <Button
                  variant={provider === 'skrill' ? 'default' : 'outline'}
                  onClick={() => handleProviderChange('skrill')}
                  className={provider === 'skrill' ? 'bg-brand-primary-500 hover:bg-brand-primary-600 text-white' : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                >
                  Skrill
                </Button>
              </div>

              {loading ? (
                <div className="text-center text-gray-600 dark:text-gray-400">Loading settings...</div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`${provider}ApiKey`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">API Key / Client ID</Label>
                    <Input
                      id={`${provider}ApiKey`}
                      type="text"
                      name="apiKey"
                      placeholder={getPlaceholderText('apiKey')}
                      value={currentProviderForm.apiKey}
                      onChange={handleChange}
                      disabled={isSaving}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`${provider}SecretKey`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Secret Key / Webhook Secret (Optional)</Label>
                    <Input
                      id={`${provider}SecretKey`}
                      type="text"
                      name="secretKey"
                      placeholder={getPlaceholderText('secretKey')}
                      value={currentProviderForm.secretKey}
                      onChange={handleChange}
                      disabled={isSaving}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-2 mt-4">
                    <Switch
                      id={`${provider}Enabled`}
                      checked={currentProviderForm.enabled}
                      onCheckedChange={handleSwitchChange}
                      disabled={isSaving}
                      className="data-[state=checked]:bg-brand-primary-500 data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:bg-gray-700"
                    />
                    <Label htmlFor={`${provider}Enabled`} className="text-sm font-medium text-gray-700 dark:text-gray-300">Enable {provider.charAt(0).toUpperCase() + provider.slice(1)} Gateway</Label>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <Button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isSaving ? 'Saving...' : 'Save Settings'}
                    </Button>
                    {status && <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center ml-2">{status}</span>}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PaymentSettings;