import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SmtpSettings: React.FC = () => {
  const [provider, setProvider] = useState<'zeptomail' | 'sender'>('zeptomail');
  const [form, setForm] = useState({
    zeptoApiKey: '',
    zeptoFrom: '',
    senderApiKey: '',
    senderFrom: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProviderChange = (prov: 'zeptomail' | 'sender') => {
    setProvider(prov);
    setStatus(null);
  };

  const handleTest = async () => {
    setStatus('Testing...');
    // Here you would call your backend API to test SMTP
    setTimeout(() => setStatus('Test email sent (simulated)!'), 1000);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Card>
        <CardHeader>
          <CardTitle>SMTP Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Button variant={provider === 'zeptomail' ? 'default' : 'outline'} onClick={() => handleProviderChange('zeptomail')}>Zepto Mail</Button>
            <Button variant={provider === 'sender' ? 'default' : 'outline'} onClick={() => handleProviderChange('sender')}>Sender</Button>
          </div>
          {provider === 'zeptomail' && (
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="zeptoApiKey"
                placeholder="Zepto Mail API Key"
                value={form.zeptoApiKey}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 border rounded"
                type="email"
                name="zeptoFrom"
                placeholder="From Email"
                value={form.zeptoFrom}
                onChange={handleChange}
              />
            </div>
          )}
          {provider === 'sender' && (
            <div className="space-y-4">
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="senderApiKey"
                placeholder="Sender API Key"
                value={form.senderApiKey}
                onChange={handleChange}
              />
              <input
                className="w-full p-2 border rounded"
                type="email"
                name="senderFrom"
                placeholder="From Email"
                value={form.senderFrom}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="mt-4 flex gap-2">
            <Button onClick={handleTest}>Test SMTP</Button>
            {status && <span className="text-sm text-gray-600">{status}</span>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmtpSettings;
