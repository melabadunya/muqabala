import Link from 'next/link';
import { getVerse } from '@/lib/api/quran';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

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
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start gap-4 mb-4">
              <div className="text-6xl">📝</div>
              <div className="flex-1">
                <Badge className="mb-2">28 Arap Harfi - Ders 1</Badge>
                <CardTitle className="text-4xl mb-2">Elif Harfi (ا)</CardTitle>
                <CardDescription className="flex gap-4 text-base">
                  <span>⏱️ 10 dakika</span>
                  <span>📚 Başlangıç seviyesi</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Lesson Content */}
        <div className="space-y-8">
          {/* Makharij Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🎯</span> Makharij (Çıkış Noktası)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Elif harfi <strong>boğaz bölgesi (Cevf)</strong> adı verilen bölgeden çıkar.
              </p>
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-4">
                  <p className="text-sm">
                    💡 <strong>İpucu:</strong> Elif harfi dudaklarınızı veya dilinizi hareket ettirmeden,
                    sadece boğazınızdan "aa" sesi çıkararak telaffuz edilir.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Pronunciation Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🗣️</span> Nasıl Telaffuz Edilir?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-700 dark:text-green-400">✅ Doğru</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Boğazdan "aa" sesi</li>
                      <li>• Dudaklar hareketsiz</li>
                      <li>• Dil gevşek ve düz</li>
                      <li>• Açık ağız</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 dark:text-red-400">❌ Yanlış</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Dudakları oynatmak</li>
                      <li>• Dilden ses çıkarmak</li>
                      <li>• Burndan ses vermek</li>
                      <li>• Zorlamak</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Quran Example Section */}
          {verse && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>📖</span> Kuran'dan Örnek
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl md:text-4xl leading-loose font-arabic mb-4" dir="rtl">
                      {verse.text_uthmani}
                    </p>
                    <Separator className="my-4" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {verse.translations && verse.translations[0]?.text}
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                  <CardContent className="pt-4">
                    <p className="text-sm">
                      <strong>Elif harfleri:</strong> Bu ayette{' '}
                      <span className="font-arabic text-2xl" dir="rtl">ا</span> harfi birçok yerde geçmektedir.
                      <br />
                      Özellikle "Allah" kelimesindeki uzun "aa" sesi elif harfinin özelliğini gösterir.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          )}

          {/* Practice Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🎮</span> Pratik Yapın
              </CardTitle>
              <CardDescription>
                Aşağıdaki kelimeleri elif harfine dikkat ederek okumayı deneyin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['الله', 'القرآن', 'السلام', 'الحمد'].map((word) => (
                  <Card
                    key={word}
                    className="hover:bg-accent hover:scale-105 transition-all cursor-pointer"
                  >
                    <CardContent className="pt-6 text-center">
                      <p className="text-2xl font-arabic" dir="rtl">{word}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quiz Teaser */}
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 border-none text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quiz ile Bilginizi Test Edin!</h3>
                  <p className="opacity-90">
                    Elif harfi hakkında öğrendiklerinizi pekiştirin
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="shrink-0">
                  Quiz'e Başla →
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Separator className="my-8" />
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/lessons">← Ders Listesi</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/lessons/arabic-letters/ba">Sonraki Ders: Be (ب) →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
