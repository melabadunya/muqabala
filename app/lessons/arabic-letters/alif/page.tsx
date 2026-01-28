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
    verse = await getVerse('1:1', { words: false });
  } catch (error) {
    console.error('Error fetching verse:', error);
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
              <div className="w-16 h-16 rounded-2xl bg-[#235AF3]/10 dark:bg-[#235AF3]/30 flex items-center justify-center flex-shrink-0">
                <AbcIcon className="text-[#235AF3]" sx={{ fontSize: 40 }} />
              </div>
              <div className="flex-1">
                <Badge className="mb-2 bg-[#235AF3] text-white">28 Arap Harfi - Ders 1</Badge>
                <CardTitle className="text-4xl mb-2">Elif (ا)</CardTitle>
                <CardDescription className="flex gap-4 text-base">
                  <span>⏱️ 10 dakika</span>
                  <span>📚 Başlangıç</span>
                  <span className="text-[#235AF3] font-semibold">İlk Harf</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Lesson Content */}
        <div className="space-y-8">
          {/* Letter Display */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Harf Görünümü</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="text-9xl font-arabic mb-6 text-[#235AF3]" dir="rtl">ا</div>
                <p className="text-3xl font-bold mb-2">Elif</p>
                <p className="text-xl text-muted-foreground">Alif</p>
              </div>
              <Separator className="my-8" />
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">Başta</p>
                  <span className="text-5xl font-arabic" dir="rtl">ا</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">Ortada</p>
                  <span className="text-5xl font-arabic" dir="rtl">بـا</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">Sonda</p>
                  <span className="text-5xl font-arabic" dir="rtl">دعا</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Makharij - Çıkış Noktası */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GpsFixedIcon className="text-[#235AF3]" />
                Makharij (Çıkış Noktası)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="bg-[#235AF3]/10 dark:bg-[#235AF3]/20 border-[#235AF3]/30">
                <CardContent className="pt-6">
                  <p className="text-base mb-4">
                    <strong className="text-[#235AF3]">Elif (ا)</strong> harfi{' '}
                    <strong>boğazın en alt kısmından</strong> (el-Cevf) çıkar.
                    Bu bölge içi boş bir alan olup, ses burada rezonansa uğrar.
                  </p>
                  <Separator className="my-4" />
                  <ul className="space-y-3 text-base">
                    <li><strong>Makharij:</strong> El-Cevf (Boğaz boşluğu)</li>
                    <li><strong>Özellik:</strong> Med harfi (uzatılabilir)</li>
                    <li><strong>Tip:</strong> Sessiz harf / Hareke taşıyıcı</li>
                  </ul>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Pronunciation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RecordVoiceOverIcon className="text-[#235AF3]" />
                Telaffuz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base">
                Elif harfi kendi başına ses çıkarmaz. Üzerindeki hareke (fetha, kesre, damme) ile seslenir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-[#1A342E]/10 dark:bg-[#1A342E]/30 border-[#1A342E]/30">
                  <CardContent className="pt-8 pb-8 text-center">
                    <p className="text-6xl font-arabic mb-4" dir="rtl">أَ</p>
                    <p className="text-xl font-bold mb-2">Fetha</p>
                    <p className="text-base text-muted-foreground">"a" sesi</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#D1BCE3]/30 dark:bg-[#D1BCE3]/20 border-[#D1BCE3]/40">
                  <CardContent className="pt-8 pb-8 text-center">
                    <p className="text-6xl font-arabic mb-4" dir="rtl">إِ</p>
                    <p className="text-xl font-bold mb-2">Kesre</p>
                    <p className="text-base text-muted-foreground">"i" sesi</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#235AF3]/10 dark:bg-[#235AF3]/30 border-[#235AF3]/30">
                  <CardContent className="pt-8 pb-8 text-center">
                    <p className="text-6xl font-arabic mb-4" dir="rtl">أُ</p>
                    <p className="text-xl font-bold mb-2">Damme</p>
                    <p className="text-base text-muted-foreground">"u" sesi</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Quran Example */}
          {verse && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MenuBookIcon className="text-[#235AF3]" />
                  Kuran'dan Örnek
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="bg-[#235AF3]/5 dark:bg-[#235AF3]/20 border-[#235AF3]/30">
                  <CardContent className="pt-8 pb-8 text-center">
                    <p className="text-5xl md:text-6xl leading-loose font-arabic mb-6" dir="rtl">
                      {verse.text_uthmani}
                    </p>
                    <Badge variant="outline" className="text-base">Fatiha 1:1</Badge>
                  </CardContent>
                </Card>
                <Card className="bg-[#EBEEE4] dark:bg-[#235AF3]/20 border-[#235AF3]/20">
                  <CardContent className="pt-4">
                    <p className="text-base">
                      <strong className="text-[#235AF3]">Elif Örnekleri:</strong>
                      <br />
                      • <span className="font-arabic text-2xl mx-2" dir="rtl">ٱلرَّحْمَٰنِ</span> 
                      <span className="text-muted-foreground">(er-Rahman) - Başta hemze + elif</span>
                      <br />
                      • <span className="font-arabic text-2xl mx-2" dir="rtl">ٱلرَّحِيمِ</span>
                      <span className="text-muted-foreground">(er-Rahim) - Başta hemze + elif</span>
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          )}

          {/* Practice Words */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SportsEsportsIcon className="text-[#235AF3]" />
                Pratik Kelimeler
              </CardTitle>
              <CardDescription className="text-base">
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
                    className="hover:scale-105 transition-all cursor-pointer bg-[#235AF3]/10 dark:bg-[#235AF3]/30 border-[#235AF3]/30"
                  >
                    <CardContent className="pt-6 text-center">
                      <p className="text-5xl font-arabic mb-3" dir="rtl">{item.word}</p>
                      <p className="text-sm text-muted-foreground">{item.transliteration}</p>
                      <p className="text-sm font-semibold mt-2">{item.meaning}</p>
                    </CardContent>
                  </Card>
                ))}
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
                      Elif harfi hakkında öğrendiklerinizi pekiştirin
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
              <Link href="/lessons/arabic-letters/ba">Sonraki: Be (ب) →</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
