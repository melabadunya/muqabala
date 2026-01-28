import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 max-w-4xl">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🌙 Muqabala
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300">
            Learn Quran Tajweed
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Master the art of Quranic recitation with interactive lessons, audio examples, and guided practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Step-by-step Tajweed rules with Makharij demonstrations
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-2">Audio Examples</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Listen to correct pronunciation from expert reciters
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Practice & Quiz</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Test your knowledge and track your progress
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/lessons" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
            Start Learning
          </Link>
          <Link href="/lessons" className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
            View Lessons
          </Link>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>✨ Built with Next.js 15 & Tailwind CSS</p>
          <p className="mt-2">Made with ❤️ for the Muslim community</p>
        </div>
      </main>
    </div>
  );
}
