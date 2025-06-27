"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSession } from '@/hooks/use-session';
import { supabase } from '@/integrations/supabase/client';
import { showSuccess, showError } from '@/utils/toast';
import { Fingerprint } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, profile, isLoading: isSessionLoading } = useSession();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAddingPasskey, setIsAddingPasskey] = useState(false);

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name || '');
      setLastName(profile.last_name || '');
    }
  }, [profile]);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ first_name: firstName, last_name: lastName })
        .eq('id', user?.id)
        .select()
        .single();

      if (error) {
        throw error;
      }

      showSuccess('Profile updated successfully!');
    } catch (error: any) {
      showError(`Failed to update profile: ${error.message}`);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAddPasskey = async () => {
    setIsAddingPasskey(true);
    try {
      const { error } = await supabase.auth.addPasskey();
      if (error) throw error;
      showSuccess('Passkey added successfully!');
    } catch (error: any) {
      showError(`Failed to add passkey: ${error.message}`);
    } finally {
      setIsAddingPasskey(false);
    }
  };

  if (isSessionLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-700 dark:text-gray-300">Loading profile...</p>
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <p className="text-red-500">You must be logged in to view your profile.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Your Profile</h1>
        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</Label>
                <Input id="email" type="email" value={user.email || ''} readOnly disabled className="mt-1" />
              </div>
              <div>
                <Label htmlFor="role" className="text-sm font-medium text-gray-700 dark:text-gray-300">Role</Label>
                <Input id="role" type="text" value={profile?.role || 'user'} readOnly disabled className="mt-1" />
              </div>
            </div>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={isUpdating}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={isUpdating}
                  className="mt-1"
                />
              </div>
              <Button type="submit" className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white" disabled={isUpdating}>
                {isUpdating ? 'Updating...' : 'Update Profile'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Security Settings</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">Manage your account security, including passkeys.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleAddPasskey} disabled={isAddingPasskey}>
              <Fingerprint className="mr-2 h-4 w-4" />
              {isAddingPasskey ? 'Follow Browser Prompts...' : 'Add a Passkey'}
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              Add a passkey to your account for a faster and more secure sign-in experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;