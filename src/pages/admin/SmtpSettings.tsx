import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { showSuccess, showError } from '@/utils/toast';
import { fetchSmtpSettings, saveSmtpSetting, SmtpSetting } from '@/lib/smtp'; // Import new SMTP functions

const SmtpSettings: React.FC = () => {
  const [provider, setProvider] = useState<'zeptomail' | 'sender'>('zeptomail');
  const [form, setForm] = useState({
    zeptomail: { apiKey: '', fromEmail: '' },
    sender: { apiKey: '', fromEmail: '' },
  });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      setLoading(true);
      try {
        const settings = await fetchSmtpSettings();
        const newForm = { ...form };
        settings.forEach(s => {
          if (s.provider === 'zeptomail') {
            newForm.zeptomail = { apiKey: s.api_key, fromEmail: s.from_email };
          } else if (s.provider === 'sender') {
            newForm.sender = { apiKey: s.api_key, fromEmail: s.from_email };
          }
        });
        setForm(newForm);
      } catch (error) {
        showError('Failed to load SMTP settings.');
        console.error('Error loading SMTP settings:', error);
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

  const handleProviderChange = (prov: 'zeptomail' | 'sender') => {
    setProvider(prov);
    setStatus(null);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setStatus('Saving...');
    try {
      const currentSettings = form[provider];
      if (!currentSettings.apiKey || !currentSettings.fromEmail) {
        showError('Please fill in both API Key and From Email.');
        setStatus(null);
        return;
      }

      await saveSmtpSetting({
        provider: provider,
        api_key: currentSettings.apiKey,
        from_email: currentSettings.fromEmail,
      });
      showSuccess('SMTP settings saved successfully!');
      setStatus('Settings saved!');
    } catch (error) {
      showError('Failed to save SMTP settings.');
      console.error('Save SMTP settings error:', error);
      setStatus('Save failed.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleTest = async () => {
    setStatus('Testing...');
    // In a real application, this would involve calling a Supabase Edge Function
    // that uses the saved API key and from_email to send a test email.
    // For now, we'll simulate it and remind the user about the Edge Function.
    await new Promise(resolve => setTimeout(resolve, 1500));
    showSuccess('Test email simulated! (Requires Supabase Edge Function for real sending)');
    setStatus('Test simulated.');
  };

  const currentProviderForm = form[provider];

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-sm rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">SMTP Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <Button
                  variant={provider === 'zeptomail' ? 'default' : 'outline'}
                  onClick={() => handleProviderChange('zeptomail')}
                  className={provider === 'zeptomail' ? 'bg-brand-primary-500 hover:bg-brand-primary-600 text-white' : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                >
                  Zepto Mail
                </Button>
                <Button
                  variant={provider === 'sender' ? 'default' : 'outline'}
                  onClick={() => handleProviderChange('sender')}
                  className={provider === 'sender' ? 'bg-brand-primary-500 hover:bg-brand-primary-600 text-white' : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                >
                  Sender
                </Button>
              </div>

              {loading ? (
                <div className="text-center text-gray-600 dark:text-gray-400">Loading settings...</div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`${provider}ApiKey`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">API Key</Label>
                    <Input
                      id={`${provider}ApiKey`}
                      type="text"
                      name="apiKey"
                      placeholder={`${provider === 'zeptomail' ? 'Zepto Mail' : 'Sender'} API Key`}
                      value={currentProviderForm.apiKey}
                      onChange={handleChange}
                      disabled={isSaving}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`${provider}FromEmail`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From Email</Label>
                    <Input
                      id={`${provider}FromEmail`}
                      type="email"
                      name="fromEmail"
                      placeholder="From Email Address"
                      value={currentProviderForm.fromEmail}
                      onChange={handleChange}
                      disabled={isSaving}
                      className="w-full"
                    />
                  </div>
                  <div className="mt-6 flex gap-2">
                    <Button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {isSaving ? 'Saving...' : 'Save Settings'}
                    </Button>
                    <Button
                      onClick={handleTest}
                      disabled={isSaving}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Test SMTP
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

export default SmtpSettings;