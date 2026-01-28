import Link from 'next/link';
import { getVerse } from '@/lib/api/quran';

export default async function AlifLessonPage() {
  // Fatiha 1:1'i örnek olarak çekiyoruz (Bismillah - Elif içerir)
  let verse = null;
  try {
    verse = await getVerse('1:1', { translations: [161], words: true });
  } catch (error) {
    console.error('Error fetching verse:', error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/lessons"
            className="text-green-600 dark:text-green-400 hover:underline mb-4 inline-block"
          >
            ← Ders Listesi
          </Link>
        </div>

        {/* Lesson Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">📝</div>
            <div>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                28 Arap Harfi - Ders 1
              </span>
              <h1 className="text-4xl font-bold">Elif Harfi (ا)</h1>
            </div>
          </div>
          <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>⏱️ 10 dakika</span>
            <span>📚 Başlangıç seviyesi</span>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="space-y-8">
          {/* Makharij Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🎯</span> Makharij (Çıkış Noktası)
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                Elif harfi <strong>boğaz bölgesi (Cevf)</strong> adı verilen bölgeden çıkar.
              </p>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💡 <strong>İpucu:</strong> Elif harfi dudaklarınızı veya dilinizi hareket ettirmeden,
                  sadece boğazınızdan "aa" sesi çıkararak telaffuz edilir.
                </p>
              </div>
            </div>
          </div>

          {/* Pronunciation Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🗣️</span> Nasıl Telaffuz Edilir?
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Doğru</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Boğazdan "aa" sesi</li>
                    <li>• Dudaklar hareketsiz</li>
                    <li>• Dil gevşek ve düz</li>
                    <li>• Açık ağız</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">❌ Yanlış</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Dudakları oynatmak</li>
                    <li>• Dilden ses çıkarmak</li>
                    <li>• Burndan ses vermek</li>
                    <li>• Zorlamak</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quran Example Section */}
          {verse && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>📖</span> Kuran'dan Örnek
              </h2>
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
                  <p className="text-3xl md:text-4xl leading-loose font-arabic mb-4" dir="rtl">
                    {verse.text_uthmani}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {verse.translations && verse.translations[0]?.text}
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-sm">
                    <strong>Elif harfleri:</strong> Bu ayette{' '}
                    <span className="font-arabic text-2xl" dir="rtl">ا</span> harfi birçok yerde geçmektedir.
                    <br />
                    Özellikle "Allah" kelimesindeki uzun "aa" sesi elif harfinin özelliğini gösterir.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Practice Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🎮</span> Pratik Yapın
            </h2>
            <div className="space-y-4">
              <p>Aşağıdaki kelimeleri elif harfine dikkat ederek okumayı deneyin:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['الله', 'القرآن', 'السلام', 'الحمد'].map((word) => (
                  <div
                    key={word}
                    className="p-4 text-center bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <p className="text-2xl font-arabic" dir="rtl">{word}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quiz Teaser */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Quiz ile Bilginizi Test Edin!</h3>
                <p className="opacity-90">
                  Elif harfi hakkında öğrendiklerinizi pekiştirin
                </p>
              </div>
              <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Quiz'e Başla →
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/lessons"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              ← Ders Listesi
            </Link>
            <Link
              href="/lessons/arabic-letters/ba"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Sonraki Ders: Be (ب) →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
