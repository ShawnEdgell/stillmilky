import React from 'react';
import YouTubeVideos from './components/YouTubeVideos';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="bg-blue-600 w-full py-4 text-white text-center shadow-md">
        <h1 className="text-4xl font-bold">StillMilky</h1>
        <p className="text-lg">Your Hub for Skateboarding Content</p>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <YouTubeVideos />
      </main>
      <footer className="bg-blue-600 w-full py-4 text-white text-center mt-4 shadow-md">
        <p className="text-sm">© 2024 StillMilky. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
