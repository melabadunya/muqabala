import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import QuizIcon from '@mui/icons-material/Quiz';

export default function Home() {
  return (
    <div className="min-h-screen bg-pearl dark:bg-ink">
      <div className="container mx-auto px-4 py-12">
        <main className="flex flex-col items-center gap-12 max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold text-royal-blue">
              🌙 Muqabala
            </h1>
            <p className="text-3xl text-ink dark:text-pearl font-semibold">
              Kuran Tecvidi Öğren
            </p>
            <p className="text-lg text-chalkboard max-w-2xl">
              İnteraktif dersler, uzman hafızlardan ses örnekleri ve rehberli pratiklerle 
              Kuran-ı Kerim'i doğru okuma sanatını öğrenin
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <Card className="hover:shadow-xl transition-all border-pale-blue/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-royal-blue/10 flex items-center justify-center mb-4">
                  <MenuBookIcon className="text-royal-blue" sx={{ fontSize: 40 }} />
                </div>
                <CardTitle className="text-ink dark:text-pearl">İnteraktif Dersler</CardTitle>
                <CardDescription>
                  Makharij gösterimleri ile adım adım tecvid kuralları
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all border-pale-blue/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center mb-4">
                  <RecordVoiceOverIcon className="text-forest" sx={{ fontSize: 40 }} />
                </div>
                <CardTitle className="text-ink dark:text-pearl">Ses Örnekleri</CardTitle>
                <CardDescription>
                  Uzman hafızlardan doğru telaffuz dinleyin
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all border-pale-blue/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-chili/10 flex items-center justify-center mb-4">
                  <QuizIcon className="text-chili" sx={{ fontSize: 40 }} />
                </div>
                <CardTitle className="text-ink dark:text-pearl">Pratik & Quiz</CardTitle>
                <CardDescription>
                  Bilginizi test edin ve ilerlemenizi takip edin
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="text-lg px-8 bg-royal-blue hover:bg-navy">
              <Link href="/lessons">Öğrenmeye Başla</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 border-royal-blue text-royal-blue hover:bg-pale-blue">
              <Link href="/lessons">Tüm Dersler</Link>
            </Button>
          </div>

          {/* Stats */}
          <Card className="mt-12 w-full border-pale-blue/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-royal-blue">28</div>
                  <div className="text-sm text-chalkboard mt-1">Arap Harfi</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-forest">15+</div>
                  <div className="text-sm text-chalkboard mt-1">Tecvid Kuralı</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-chili">∞</div>
                  <div className="text-sm text-chalkboard mt-1">Pratik Örnek</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-chalkboard">
            <p>Made with ❤️ for the Muslim community</p>
          </div>
        </main>
      </div>
    </div>
  );
}
