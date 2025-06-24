import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const YoutubeDownloader: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">YouTube Video Downloader</h1>
        <Card className="bg-white dark:bg-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Download YouTube Videos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Paste a YouTube video URL below to download it.
            </p>
            <div className="flex flex-col space-y-2">
              <label htmlFor="youtube-url" className="text-sm font-medium text-gray-700 dark:text-gray-300">YouTube Video URL</label>
              <Input id="youtube-url" type="url" placeholder="e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            </div>
            <Button className="bg-brand-primary-500 hover:bg-brand-secondary-blue text-white w-full">
              Download Video
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default YoutubeDownloader;