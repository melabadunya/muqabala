import Link from 'next/link';
import { getVerse } from '@/lib/api/quran';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import QuizIcon from '@mui/icons-material/Quiz';

export default async function IdghamLessonPage() {
  // İdgam örnekleri için ayetler
  let verse1 = null; // من يعمل - Zilzal 99:7
  let verse2 = null; // من ربهم - Bakara 2:5
  
  try {
    verse1 = await getVerse('99:7', { words: true });
    verse2 = await getVerse('2:5', { words: true });
  } catch (error) {
    console.error('Error fetching verses:', error);
  }

  return (
    <div className="min-h-screen bg-pearl dark:bg-ink">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/lessons">← Ders Listesi</Link>
          </Button>
        </div>

        {/* Lesson Header */}
        <Card className="mb-8 border-forest/20">
          <CardHeader>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                <NightsStayIcon className="text-forest" sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 bg-pale-blue text-navy">Nun Sakin Kuralları - Ders 1</Badge>
                <CardTitle className="text-4xl mb-2 text-ink dark:text-pearl">İdgam (إدغام)</CardTitle>
                <CardDescription className="flex gap-4 text-base">
                  <span>⏱️ 15 dakika</span>
                  <span>📚 Başlangıç</span>
                  <span className="text-forest font-semibold">Birleştirme Kuralı</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Lesson Content */}
        <div className="space-y-8">
          {/* Definition Section */}
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                <MenuBookIcon className="text-royal-blue" />
                İdgam Nedir?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-ink dark:text-pearl">
                <strong>İdgam (إدغام)</strong> Arapça'da "birleştirme, sokma" anlamına gelir. 
                Tecvid ilminde, <strong>Nun Sakin (نْ)</strong> veya <strong>Tenvin</strong> sonrasında 
                6 özel harf geldiğinde uygulanan kuraldır.
              </p>
              
                <Card className="bg-royal-blue/10 border-royal-blue/30">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <GpsFixedIcon className="text-royal-blue mt-1" />
                    <div>
                      <p className="text-base font-bold text-royal-blue mb-2">
                        Hatırlatma Tekniği: YERMUN Kelimesi
                      </p>
                      <p className="text-base text-ink dark:text-pearl mb-3">
                        İdgam harfleri için 
                        <span className="font-quran text-2xl mx-2" dir="rtl">يرملون</span> 
                        kelimesini ezberleyin!
                      </p>
                      <div className="grid grid-cols-6 gap-2 mt-2">
                        {['ي', 'ر', 'م', 'ل', 'و', 'ن'].map((letter, idx) => (
                          <div key={idx} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-royal-blue/20">
                            <span className="text-3xl font-quran text-ink dark:text-pearl" dir="rtl">{letter}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Types Section */}
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                <GpsFixedIcon className="text-royal-blue" />
                İdgam'ın İki Türü
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Idgham with Ghunnah */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-ink dark:text-pearl">
                  <span className="text-forest">1.</span>
                  İdgam bi-Ghunne (غنة ile)
                </h3>
                <Card className="bg-forest/10 border-forest/30">
                  <CardContent className="pt-4 space-y-3">
                    <p className="text-ink dark:text-pearl text-base"><strong>4 Harf:</strong> ي، ن، م، و (Ye, Nun, Mim, Vav)</p>
                    <p className="text-ink dark:text-pearl text-base"><strong>Özellik:</strong> Genizden ses (ghunne) ile 2 hareke süresince okunur</p>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {[
                        { letter: 'ي', name: 'Ye' },
                        { letter: 'ن', name: 'Nun' },
                        { letter: 'م', name: 'Mim' },
                        { letter: 'و', name: 'Vav' }
                      ].map((item) => (
                        <Badge key={item.letter} className="text-base bg-forest text-white">
                          <span className="font-quran text-xl mr-1" dir="rtl">{item.letter}</span>
                          {item.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Idgham without Ghunnah */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-ink dark:text-pearl">
                  <span className="text-royal-blue">2.</span>
                  İdgam bila-Ghunne (غنة siz)
                </h3>
                <Card className="bg-royal-blue/10 border-royal-blue/30">
                  <CardContent className="pt-4 space-y-3">
                    <p className="text-ink dark:text-pearl text-base"><strong>2 Harf:</strong> ل، ر (Lam, Ra)</p>
                    <p className="text-ink dark:text-pearl text-base"><strong>Özellik:</strong> Ghunne OLMADAN, direkt birleştirme</p>
                    <div className="flex gap-2 flex-wrap mt-2">
                      {[
                        { letter: 'ل', name: 'Lam' },
                        { letter: 'ر', name: 'Ra' }
                      ].map((item) => (
                        <Badge key={item.letter} className="text-base bg-royal-blue text-white">
                          <span className="font-quran text-xl mr-1" dir="rtl">{item.letter}</span>
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
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                <RecordVoiceOverIcon className="text-royal-blue" />
                Nasıl Okunur?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-forest/10 border-forest/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-forest">
                      <CheckCircleIcon />
                      Doğru
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-base text-ink dark:text-pearl">
                      <li>• <strong>Bi-ghunne:</strong> Genizden 2 hareke ses</li>
                      <li>• Nun/Tenvin kaybolur, harf güçlenir</li>
                      <li>• Ghunne nazal (burundan) olmalı</li>
                      <li>• <strong>Bila-ghunne:</strong> Direkt birleştir</li>
                      <li>• Akıcı ve düzgün geçiş</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-chili/10 border-chili/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-chili">
                      <CancelIcon />
                      Yanlış
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-base text-ink dark:text-pearl">
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
            <Card className="border-pale-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                  <MenuBookIcon className="text-royal-blue" />
                  Kuran'dan Örnekler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Idgham bi-ghunne example */}
                {verse1 && (
                  <div>
                    <Badge className="mb-2 bg-forest text-white">İdgam bi-Ghunne Örneği</Badge>
                    <Card className="bg-gradient-to-br from-forest/5 to-forest/10 border-forest/20">
                      <CardContent className="pt-6 text-center">
                        <p className="text-4xl md:text-5xl leading-loose font-quran mb-4 text-ink dark:text-pearl" dir="rtl">
                          {verse1.text_uthmani}
                        </p>
                        <Badge variant="outline" className="mt-4">Zilzal 99:7</Badge>
                      </CardContent>
                    </Card>
                    <Card className="mt-2 bg-sage border-forest/20">
                      <CardContent className="pt-4">
                        <p className="text-base text-ink dark:text-pearl">
                          <strong className="text-forest">İdgam:</strong> <span className="font-quran text-xl" dir="rtl">مَن يَعْمَلْ</span> (men ya'mel)
                          <br />
                          <span className="font-quran text-lg" dir="rtl">نْ + ي</span> → <strong>Nun Sakin</strong> + <strong>Ye harfi</strong> 
                          → Ghunne ile birleştir
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Idgham bila-ghunne example */}
                {verse2 && (
                  <div>
                    <Badge className="mb-2 bg-royal-blue text-white">İdgam bila-Ghunne Örneği</Badge>
                    <Card className="bg-gradient-to-br from-royal-blue/5 to-royal-blue/10 border-royal-blue/20">
                      <CardContent className="pt-6 text-center">
                        <p className="text-4xl md:text-5xl leading-loose font-quran mb-4 text-ink dark:text-pearl" dir="rtl">
                          {verse2.text_uthmani}
                        </p>
                        <Badge variant="outline" className="mt-4">Bakara 2:5</Badge>
                      </CardContent>
                    </Card>
                    <Card className="mt-2 bg-sage border-royal-blue/20">
                      <CardContent className="pt-4">
                        <p className="text-base text-ink dark:text-pearl">
                          <strong className="text-royal-blue">İdgam:</strong> <span className="font-quran text-xl" dir="rtl">مِن رَّبِّهِمْ</span> (min rabbihim)
                          <br />
                          <span className="font-quran text-lg" dir="rtl">نْ + ر</span> → <strong>Nun Sakin</strong> + <strong>Ra harfi</strong> 
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
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                <SportsEsportsIcon className="text-royal-blue" />
                Pratik Yapın
              </CardTitle>
              <CardDescription>
                Aşağıdaki kelimelerde İdgam kuralını bulun ve hangi türü olduğunu belirleyin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-chalkboard mb-3">
                  <Badge className="bg-forest text-white mr-2">Bi-Ghunne</Badge> 
                  <Badge className="bg-royal-blue text-white">Bila-Ghunne</Badge>
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
                          ? 'bg-forest/10 border-forest/30'
                          : 'bg-royal-blue/10 border-royal-blue/30'
                      }`}
                    >
                      <CardContent className="pt-4 text-center">
                        <p className="text-3xl font-quran mb-2 text-ink dark:text-pearl" dir="rtl">{item.word}</p>
                        <p className="text-xs text-chalkboard">{item.romanization}</p>
                        <p className="text-xs text-chalkboard mt-1">{item.meaning}</p>
                        <Badge className={`mt-2 ${item.type === 'bi-ghunne' ? 'bg-forest text-white' : 'bg-royal-blue text-white'}`}>
                          {item.type === 'bi-ghunne' ? 'Bi-Ghunne' : 'Bila-Ghunne'}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quiz Teaser */}
          <Card className="bg-gradient-to-r from-royal-blue to-navy border-none text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <QuizIcon sx={{ fontSize: 40 }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Quiz ile Bilginizi Test Edin!</h3>
                    <p className="opacity-90">
                      İdgam kuralı hakkında öğrendiklerinizi pekiştirin
                    </p>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="shrink-0 bg-white text-royal-blue hover:bg-pale-blue">
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
            <Button asChild size="lg" className="bg-royal-blue hover:bg-navy">
              <Link href="/lessons/noon-rules/ihfa">Sonraki: İhfa →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
