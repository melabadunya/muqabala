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
    verse1 = await getVerse('99:7', { words: false });
    verse2 = await getVerse('2:5', { words: false });
  } catch (error) {
    console.error('Error fetching verses:', error);
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/lessons">← Ders Listesi</Link>
          </Button>
        </div>

        {/* Lesson Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-[#1A342E]/10 dark:bg-[#1A342E]/30 flex items-center justify-center flex-shrink-0">
                <NightsStayIcon className="text-[#1A342E] dark:text-[#86AFA6]" sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 bg-[#235AF3] text-white">Nun Sakin Kuralları - Ders 1</Badge>
                <CardTitle className="text-4xl mb-2">İdgam (إدغام)</CardTitle>
                <CardDescription className="flex gap-4 text-base">
                  <span>⏱️ 15 dakika</span>
                  <span>📚 Başlangıç</span>
                  <span className="text-[#1A342E] dark:text-[#86AFA6] font-semibold">Birleştirme Kuralı</span>
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
                <MenuBookIcon className="text-[#235AF3]" />
                İdgam Nedir?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                <strong>İdgam (إدغام)</strong> Arapça'da "birleştirme, sokma" anlamına gelir. 
                Tecvid ilminde, <strong>Nun Sakin (نْ)</strong> veya <strong>Tenvin</strong> sonrasında 
                6 özel harf geldiğinde uygulanan kuraldır.
              </p>
              
              <Card className="bg-[#235AF3]/10 border-[#235AF3]/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <GpsFixedIcon className="text-[#235AF3] mt-1" />
                    <div className="flex-1">
                      <p className="text-base font-bold text-[#002EAD] dark:text-[#DBE4FF] mb-3">
                        Hatırlatma Tekniği: YERMUN Kelimesi
                      </p>
                      <p className="text-base mb-4">
                        İdgam harfleri için 
                        <span className="font-arabic text-3xl mx-2" dir="rtl">يرملون</span> 
                        kelimesini ezberleyin!
                      </p>
                      <div className="grid grid-cols-6 gap-3">
                        {['ي', 'ر', 'م', 'ل', 'و', 'ن'].map((letter, idx) => (
                          <div key={idx} className="text-center p-4 bg-white dark:bg-[#1E1E1E] rounded-lg border-2 border-[#235AF3]/30">
                            <span className="text-4xl font-arabic text-foreground" dir="rtl">{letter}</span>
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GpsFixedIcon className="text-[#235AF3]" />
                İdgam'ın İki Türü
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Idgham with Ghunnah */}
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-[#1A342E] dark:text-[#86AFA6]">1.</span>
                  İdgam bi-Ghunne (غنة ile)
                </h3>
                <Card className="bg-[#1A342E]/10 dark:bg-[#1A342E]/30 border-[#1A342E]/30">
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-base"><strong>4 Harf:</strong> ي، ن، م، و (Ye, Nun, Mim, Vav)</p>
                    <p className="text-base"><strong>Özellik:</strong> Genizden ses (ghunne) ile 2 hareke süresince okunur</p>
                    <div className="flex gap-2 flex-wrap mt-3">
                      {[
                        { letter: 'ي', name: 'Ye' },
                        { letter: 'ن', name: 'Nun' },
                        { letter: 'م', name: 'Mim' },
                        { letter: 'و', name: 'Vav' }
                      ].map((item) => (
                        <Badge key={item.letter} className="text-lg px-4 py-2 bg-[#1A342E] text-white">
                          <span className="font-arabic text-2xl mr-2" dir="rtl">{item.letter}</span>
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
                  <span className="text-[#235AF3]">2.</span>
                  İdgam bila-Ghunne (غنة siz)
                </h3>
                <Card className="bg-[#235AF3]/10 border-[#235AF3]/30">
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-base"><strong>2 Harf:</strong> ل، ر (Lam, Ra)</p>
                    <p className="text-base"><strong>Özellik:</strong> Ghunne OLMADAN, direkt birleştirme</p>
                    <div className="flex gap-2 flex-wrap mt-3">
                      {[
                        { letter: 'ل', name: 'Lam' },
                        { letter: 'ر', name: 'Ra' }
                      ].map((item) => (
                        <Badge key={item.letter} className="text-lg px-4 py-2 bg-[#235AF3] text-white">
                          <span className="font-arabic text-2xl mr-2" dir="rtl">{item.letter}</span>
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
                <RecordVoiceOverIcon className="text-[#235AF3]" />
                Nasıl Okunur?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-[#1A342E]/10 dark:bg-[#1A342E]/30 border-[#1A342E]/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-[#1A342E] dark:text-[#86AFA6]">
                      <CheckCircleIcon />
                      Doğru
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Bi-ghunne:</strong> Genizden 2 hareke ses</li>
                      <li>• Nun/Tenvin kaybolur, harf güçlenir</li>
                      <li>• Ghunne nazal (burundan) olmalı</li>
                      <li>• <strong>Bila-ghunne:</strong> Direkt birleştir</li>
                      <li>• Akıcı ve düzgün geçiş</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-[#FC440F]/10 dark:bg-[#FC440F]/20 border-[#FC440F]/30">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2 text-[#FC440F]">
                      <CancelIcon />
                      Yanlış
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-base">
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
                  <MenuBookIcon className="text-[#235AF3]" />
                  Kuran'dan Örnekler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Idgham bi-ghunne example */}
                {verse1 && (
                  <div>
                    <Badge className="mb-3 bg-[#1A342E] text-white text-base px-4 py-2">İdgam bi-Ghunne Örneği</Badge>
                    <Card className="bg-[#1A342E]/5 dark:bg-[#1A342E]/20 border-[#1A342E]/30">
                      <CardContent className="pt-8 pb-8 text-center">
                        <p className="text-5xl md:text-6xl leading-loose font-arabic text-foreground mb-6" dir="rtl">
                          {verse1.text_uthmani}
                        </p>
                        <Badge variant="outline" className="text-base">Zilzal 99:7</Badge>
                      </CardContent>
                    </Card>
                    <Card className="mt-3 bg-[#EBEEE4] dark:bg-[#1A342E]/40 border-[#1A342E]/20">
                      <CardContent className="pt-4">
                        <p className="text-base">
                          <strong className="text-[#1A342E] dark:text-[#86AFA6]">İdgam:</strong>{' '}
                          <span className="font-arabic text-2xl mx-1" dir="rtl">مَن يَعْمَلْ</span> 
                          <span className="text-muted-foreground">(men ya'mel)</span>
                          <br />
                          <span className="font-arabic text-xl mx-1" dir="rtl">نْ + ي</span> → 
                          <strong> Nun Sakin</strong> + <strong>Ye harfi</strong> → Ghunne ile birleştir
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Idgham bila-ghunne example */}
                {verse2 && (
                  <div>
                    <Badge className="mb-3 bg-[#235AF3] text-white text-base px-4 py-2">İdgam bila-Ghunne Örneği</Badge>
                    <Card className="bg-[#235AF3]/5 dark:bg-[#235AF3]/20 border-[#235AF3]/30">
                      <CardContent className="pt-8 pb-8 text-center">
                        <p className="text-5xl md:text-6xl leading-loose font-arabic text-foreground mb-6" dir="rtl">
                          {verse2.text_uthmani}
                        </p>
                        <Badge variant="outline" className="text-base">Bakara 2:5</Badge>
                      </CardContent>
                    </Card>
                    <Card className="mt-3 bg-[#EBEEE4] dark:bg-[#235AF3]/20 border-[#235AF3]/20">
                      <CardContent className="pt-4">
                        <p className="text-base">
                          <strong className="text-[#235AF3]">İdgam:</strong>{' '}
                          <span className="font-arabic text-2xl mx-1" dir="rtl">مِن رَّبِّهِمْ</span>
                          <span className="text-muted-foreground">(min rabbihim)</span>
                          <br />
                          <span className="font-arabic text-xl mx-1" dir="rtl">نْ + ر</span> → 
                          <strong> Nun Sakin</strong> + <strong>Ra harfi</strong> → Ghunne OLMADAN birleştir
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
                <SportsEsportsIcon className="text-[#235AF3]" />
                Pratik Yapın
              </CardTitle>
              <CardDescription className="text-base">
                Aşağıdaki kelimelerde İdgam kuralını bulun ve hangi türü olduğunu belirleyin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Badge className="bg-[#1A342E] text-white px-4 py-2">Bi-Ghunne</Badge> 
                  <Badge className="bg-[#235AF3] text-white px-4 py-2">Bila-Ghunne</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          ? 'bg-[#1A342E]/10 dark:bg-[#1A342E]/30 border-[#1A342E]/30'
                          : 'bg-[#235AF3]/10 dark:bg-[#235AF3]/30 border-[#235AF3]/30'
                      }`}
                    >
                      <CardContent className="pt-6 text-center">
                        <p className="text-4xl font-arabic mb-3 text-foreground" dir="rtl">{item.word}</p>
                        <p className="text-sm text-muted-foreground">{item.romanization}</p>
                        <p className="text-sm text-muted-foreground font-semibold mt-1">{item.meaning}</p>
                        <Badge className={`mt-3 ${item.type === 'bi-ghunne' ? 'bg-[#1A342E] text-white' : 'bg-[#235AF3] text-white'}`}>
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
          <Card className="bg-gradient-to-r from-[#235AF3] to-[#002EAD] border-none text-white">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <QuizIcon sx={{ fontSize: 48 }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Quiz ile Bilginizi Test Edin!</h3>
                    <p className="text-lg opacity-95">
                      İdgam kuralı hakkında öğrendiklerinizi pekiştirin
                    </p>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="shrink-0 bg-white text-[#235AF3] hover:bg-[#DBE4FF] text-lg px-8">
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
            <Button asChild size="lg" className="bg-[#235AF3] hover:bg-[#002EAD] text-white">
              <Link href="/lessons/noon-rules/ihfa">Sonraki: İhfa →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
