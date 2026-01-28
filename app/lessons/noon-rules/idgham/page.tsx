import Link from 'next/link';
import { getVerse } from '@/lib/api/quran';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default async function IdghamLessonPage() {
  // İdgam örnekleri için ayetler
  let verse1 = null; // من يعمل - Zilzal 99:7
  let verse2 = null; // من ربهم - Bakara 2:5
  
  try {
    verse1 = await getVerse('99:7', { translations: [161], words: true });
    verse2 = await getVerse('2:5', { translations: [161], words: true });
  } catch (error) {
    console.error('Error fetching verses:', error);
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
              <div className="text-6xl">🌙</div>
              <div className="flex-1">
                <Badge className="mb-2">Nun Sakin Kuralları - Ders 1</Badge>
                <CardTitle className="text-4xl mb-2">İdgam (إدغام)</CardTitle>
                <CardDescription className="flex gap-4 text-base">
                  <span>⏱️ 15 dakika</span>
                  <span>📚 Başlangıç seviyesi</span>
                  <span>🎯 Birleştirme Kuralı</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Lesson Content */}
        <div className="space-y-8">
          {/* Definition Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📖</span> İdgam Nedir?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                <strong>İdgam (إدغام)</strong> Arapça'da "birleştirme, sokma" anlamına gelir. 
                Tecvid ilminde, <strong>Nun Sakin (نْ)</strong> veya <strong>Tenvin</strong> sonrasında 
                6 özel harf geldiğinde uygulanan kuraldır.
              </p>
              
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-4">
                  <p className="text-sm mb-3">
                    💡 <strong>Hatırlatma Tekniği:</strong> İdgam harfleri için 
                    <span className="font-bold text-lg mx-2" dir="rtl">يرملون</span> 
                    (YERMUN) kelimesini ezberleyin!
                  </p>
                  <div className="grid grid-cols-6 gap-2 mt-2">
                    {['ي', 'ر', 'م', 'ل', 'و', 'ن'].map((letter, idx) => (
                      <div key={idx} className="text-center p-2 bg-white dark:bg-gray-800 rounded">
                        <span className="text-2xl font-arabic" dir="rtl">{letter}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Types Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🎯</span> İdgam'ın İki Türü
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Idgham with Ghunnah */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">1.</span>
                  İdgam bi-Ghunne (غنة ile)
                </h3>
                <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <CardContent className="pt-4 space-y-3">
                    <p><strong>4 Harf:</strong> ي، ن، م، و (Ye, Nun, Mim, Vav)</p>
                    <p><strong>Özellik:</strong> Genizden ses (ghunne) ile 2 hareke süresince okunur</p>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {[
                        { letter: 'ي', name: 'Ye' },
                        { letter: 'ن', name: 'Nun' },
                        { letter: 'م', name: 'Mim' },
                        { letter: 'و', name: 'Vav' }
                      ].map((item) => (
                        <Badge key={item.letter} variant="secondary" className="text-base">
                          <span className="font-arabic text-xl mr-1" dir="rtl">{item.letter}</span>
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Idgham without Ghunnah */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">2.</span>
                  İdgam bila-Ghunne (غنة siz)
                </h3>
                <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <CardContent className="pt-4 space-y-3">
                    <p><strong>2 Harf:</strong> ل، ر (Lam, Ra)</p>
                    <p><strong>Özellik:</strong> Ghunne OLMADAN, direkt birleştirme</p>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {[
                        { letter: 'ل', name: 'Lam' },
                        { letter: 'ر', name: 'Ra' }
                      ].map((item) => (
                        <Badge key={item.letter} variant="secondary" className="text-base">
                          <span className="font-arabic text-xl mr-1" dir="rtl">{item.letter}</span>
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* How to Pronounce */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🗣️</span> Nasıl Okunur?
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
                      <li>• <strong>Bi-ghunne:</strong> Genizden 2 hareke ses</li>
                      <li>• Nun/Tenvin kaybolur, harf güçlenir</li>
                      <li>• Ghunne nazal (burundan) olmalı</li>
                      <li>• <strong>Bila-ghunne:</strong> Direkt birleştir</li>
                      <li>• Akıcı ve düzgün geçiş</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 dark:text-red-400">❌ Yanlış</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Nun/Tenvin'i telaffuz etmek</li>
                      <li>• Ghunne'yi çok kısa yapmak</li>
                      <li>• Bila-ghunne'de ghunne yapmak</li>
                      <li>• Harfi yumuşak okumak</li>
                      <li>• Araya ses eklemek</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Quran Examples */}
          {(verse1 || verse2) && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>📖</span> Kuran'dan Örnekler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Idgham bi-ghunne example */}
                {verse1 && (
                  <div>
                    <Badge className="mb-2" variant="secondary">İdgam bi-Ghunne Örneği</Badge>
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl md:text-4xl leading-loose font-arabic mb-4" dir="rtl">
                          {verse1.text_uthmani}
                        </p>
                        <Separator className="my-4" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {verse1.translations && verse1.translations[0]?.text}
                        </p>
                        <p className="text-xs text-gray-500">Zilzal 99:7</p>
                      </CardContent>
                    </Card>
                    <Card className="mt-2 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                      <CardContent className="pt-4">
                        <p className="text-sm">
                          <strong>İdgam:</strong> <span className="font-arabic text-xl" dir="rtl">مَن يَعْمَلْ</span> (men ya'mel)
                          <br />
                          <span className="font-arabic text-lg" dir="rtl">نْ + ي</span> → <strong>Nun Sakin</strong> + <strong>Ye harfi</strong> 
                          → Ghunne ile birleştir
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Idgham bila-ghunne example */}
                {verse2 && (
                  <div>
                    <Badge className="mb-2" variant="secondary">İdgam bila-Ghunne Örneği</Badge>
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-6 text-center">
                        <p className="text-3xl md:text-4xl leading-loose font-arabic mb-4" dir="rtl">
                          {verse2.text_uthmani}
                        </p>
                        <Separator className="my-4" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {verse2.translations && verse2.translations[0]?.text}
                        </p>
                        <p className="text-xs text-gray-500">Bakara 2:5</p>
                      </CardContent>
                    </Card>
                    <Card className="mt-2 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                      <CardContent className="pt-4">
                        <p className="text-sm">
                          <strong>İdgam:</strong> <span className="font-arabic text-xl" dir="rtl">مِن رَّبِّهِمْ</span> (min rabbihim)
                          <br />
                          <span className="font-arabic text-lg" dir="rtl">نْ + ر</span> → <strong>Nun Sakin</strong> + <strong>Ra harfi</strong> 
                          → Ghunne OLMADAN birleştir
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
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
                Aşağıdaki kelimelerde İdgam kuralını bulun ve hangi türü olduğunu belirleyin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  🟢 Yeşil: Bi-Ghunne (غنة ile) | 🔵 Mavi: Bila-Ghunne (غنة siz)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { word: 'مَن يَقُولُ', type: 'bi-ghunne', romanization: 'men yaqulu', meaning: 'kim der' },
                    { word: 'مِن رَّبِّكَ', type: 'bila-ghunne', romanization: 'min rabbike', meaning: 'Rabbinden' },
                    { word: 'مَن مَّالٍ', type: 'bi-ghunne', romanization: 'men malin', meaning: 'bir maldan' },
                    { word: 'مِن لَّدُنْهُ', type: 'bila-ghunne', romanization: 'min ledunhu', meaning: 'O\'nun katından' },
                    { word: 'أَن نَّقُولَ', type: 'bi-ghunne', romanization: 'en naqule', meaning: 'söylememiz' },
                    { word: 'مِن وَلِيٍّ', type: 'bi-ghunne', romanization: 'min veliyyin', meaning: 'bir dosttan' },
                  ].map((item, idx) => (
                    <Card
                      key={idx}
                      className={`hover:scale-105 transition-all cursor-pointer ${
                        item.type === 'bi-ghunne' 
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                          : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      <CardContent className="pt-4 text-center">
                        <p className="text-2xl font-arabic mb-2" dir="rtl">{item.word}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{item.romanization}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.meaning}</p>
                        <Badge className="mt-2" variant={item.type === 'bi-ghunne' ? 'default' : 'secondary'}>
                          {item.type === 'bi-ghunne' ? '🟢 Bi-Ghunne' : '🔵 Bila-Ghunne'}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                    İdgam kuralı hakkında öğrendiklerinizi pekiştirin
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
              <Link href="/lessons/noon-rules/ihfa">Sonraki Ders: İhfa (إخفاء) →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
