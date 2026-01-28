import Link from 'next/link';
import { getVerse } from '@/lib/api/quran';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import AbcIcon from '@mui/icons-material/Abc';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import QuizIcon from '@mui/icons-material/Quiz';

export default async function AlifLessonPage() {
  // Elif harfi örneği için ayet (Fatiha 1:1)
  let verse = null;
  
  try {
    verse = await getVerse('1:1', { words: true });
  } catch (error) {
    console.error('Error fetching verse:', error);
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
        <Card className="mb-8 border-royal-blue/20">
          <CardHeader>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-royal-blue/10 flex items-center justify-center flex-shrink-0">
                <AbcIcon className="text-royal-blue" sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 bg-pale-blue text-navy">28 Arap Harfi - Ders 1</Badge>
                <CardTitle className="text-4xl mb-2 text-ink dark:text-pearl">Elif (ا)</CardTitle>
                <CardDescription className="flex gap-4 text-base">
                  <span>⏱️ 10 dakika</span>
                  <span>📚 Başlangıç</span>
                  <span className="text-royal-blue font-semibold">İlk Harf</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Lesson Content */}
        <div className="space-y-8">
          {/* Letter Display */}
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="text-center text-ink dark:text-pearl">Harf Görünümü</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-9xl font-quran mb-4 text-royal-blue" dir="rtl">ا</div>
                <p className="text-2xl font-bold mb-2 text-ink dark:text-pearl">Elif</p>
                <p className="text-lg text-chalkboard">Alif</p>
              </div>
              <Separator className="my-6" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm text-chalkboard mb-1">Başta</p>
                  <span className="text-4xl font-quran text-ink dark:text-pearl" dir="rtl">ا</span>
                </div>
                <div>
                  <p className="text-sm text-chalkboard mb-1">Ortada</p>
                  <span className="text-4xl font-quran text-ink dark:text-pearl" dir="rtl">بـا</span>
                </div>
                <div>
                  <p className="text-sm text-chalkboard mb-1">Sonda</p>
                  <span className="text-4xl font-quran text-ink dark:text-pearl" dir="rtl">دعا</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Makharij - Çıkış Noktası */}
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                <GpsFixedIcon className="text-royal-blue" />
                Makharij (Çıkış Noktası)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="bg-royal-blue/10 border-royal-blue/30">
                <CardContent className="pt-4">
                  <p className="text-base text-ink dark:text-pearl">
                    <strong className="text-royal-blue">Elif (ا)</strong> harfi <strong>boğazın en alt kısmından</strong> (el-Cevf) çıkar.
                    Bu bölge içi boş bir alan olup, ses burada rezonansa uğrar.
                  </p>
                  <Separator className="my-3" />
                  <ul className="space-y-2 text-base text-ink dark:text-pearl">
                    <li>• <strong>Makharij:</strong> El-Cevf (Boğaz boşluğu)</li>
                    <li>• <strong>Özellik:</strong> Med harfi (uzatılabilir)</li>
                    <li>• <strong>Tip:</strong> Sessiz harf / Hareke taşıyıcı</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Pronunciation */}
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                <RecordVoiceOverIcon className="text-royal-blue" />
                Telaffuz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-ink dark:text-pearl">
                Elif harfi kendi başına ses çıkarmaz. Üzerindeki hareke (feth a, esre, damme) ile seslenir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-forest/10 border-forest/30">
                  <CardContent className="pt-4 text-center">
                    <p className="text-5xl font-quran mb-2 text-ink dark:text-pearl" dir="rtl">أَ</p>
                    <p className="text-lg font-bold text-ink dark:text-pearl">Fetha</p>
                    <p className="text-sm text-chalkboard">"a" sesi</p>
                  </CardContent>
                </Card>
                <Card className="bg-lavender/30 border-lavender/50">
                  <CardContent className="pt-4 text-center">
                    <p className="text-5xl font-quran mb-2 text-ink dark:text-pearl" dir="rtl">إِ</p>
                    <p className="text-lg font-bold text-ink dark:text-pearl">Kesre</p>
                    <p className="text-sm text-chalkboard">"i" sesi</p>
                  </CardContent>
                </Card>
                <Card className="bg-royal-blue/10 border-royal-blue/30">
                  <CardContent className="pt-4 text-center">
                    <p className="text-5xl font-quran mb-2 text-ink dark:text-pearl" dir="rtl">أُ</p>
                    <p className="text-lg font-bold text-ink dark:text-pearl">Damme</p>
                    <p className="text-sm text-chalkboard">"u" sesi</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Quran Example */}
          {verse && (
            <Card className="border-pale-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                  <MenuBookIcon className="text-royal-blue" />
                  Kuran'dan Örnek
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-gradient-to-br from-royal-blue/5 to-royal-blue/10 border-royal-blue/20">
                  <CardContent className="pt-6 text-center">
                    <p className="text-4xl md:text-5xl leading-loose font-quran mb-4 text-ink dark:text-pearl" dir="rtl">
                      {verse.text_uthmani}
                    </p>
                    <Badge variant="outline" className="mt-4">Fatiha 1:1</Badge>
                  </CardContent>
                </Card>
                <Card className="bg-sage border-royal-blue/20">
                  <CardContent className="pt-4">
                    <p className="text-base text-ink dark:text-pearl">
                      <strong className="text-royal-blue">Elif Örnekleri:</strong>
                      <br />
                      • <span className="font-quran text-xl mx-1" dir="rtl">ٱلرَّحْمَٰنِ</span> (er-Rahman) - Başta hemze + elif
                      <br />
                      • <span className="font-quran text-xl mx-1" dir="rtl">ٱلرَّحِيمِ</span> (er-Rahim) - Başta hemze + elif
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          )}

          {/* Practice Words */}
          <Card className="border-pale-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ink dark:text-pearl">
                <SportsEsportsIcon className="text-royal-blue" />
                Pratik Kelimeler
              </CardTitle>
              <CardDescription>
                Elif harfini içeren kelimelerle pratik yapın
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { word: 'أَبٌ', transliteration: 'ab', meaning: 'baba' },
                  { word: 'أُمٌّ', transliteration: 'umm', meaning: 'anne' },
                  { word: 'إِيمَانٌ', transliteration: 'iman', meaning: 'iman' },
                  { word: 'آمَنَ', transliteration: 'amene', meaning: 'iman etti' },
                  { word: 'كِتَابٌ', transliteration: 'kitab', meaning: 'kitap' },
                  { word: 'سَمَاءٌ', transliteration: 'sema', meaning: 'gök' },
                ].map((item, idx) => (
                  <Card
                    key={idx}
                    className="hover:scale-105 transition-all cursor-pointer bg-royal-blue/10 border-royal-blue/30"
                  >
                    <CardContent className="pt-4 text-center">
                      <p className="text-4xl font-quran mb-2 text-ink dark:text-pearl" dir="rtl">{item.word}</p>
                      <p className="text-sm text-chalkboard">{item.transliteration}</p>
                      <p className="text-sm text-chalkboard mt-1 font-semibold">{item.meaning}</p>
                    </CardContent>
                  </Card>
                ))}
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
                      Elif harfi hakkında öğrendiklerinizi pekiştirin
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
              <Link href="/lessons/arabic-letters/ba">Sonraki: Be (ب) →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
