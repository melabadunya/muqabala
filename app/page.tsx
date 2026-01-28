import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 max-w-5xl w-full">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🌙 Muqabala
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 font-semibold">
            Kuran Tecvidi Öğren
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            İnteraktif dersler, uzman hafızlardan ses örnekleri ve rehberli pratiklerle 
            Kuran-ı Kerim'i doğru okuma sanatını öğrenin
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          <Card className="hover:shadow-xl transition-all hover:scale-105">
            <CardHeader>
              <div className="text-4xl mb-2">📚</div>
              <CardTitle>İnteraktif Dersler</CardTitle>
              <CardDescription>
                Makharij gösterimleri ile adım adım tecvid kuralları
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:scale-105">
            <CardHeader>
              <div className="text-4xl mb-2">🎵</div>
              <CardTitle>Ses Örnekleri</CardTitle>
              <CardDescription>
                Uzman hafızlardan doğru telaffuz dinleyin
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-xl transition-all hover:scale-105">
            <CardHeader>
              <div className="text-4xl mb-2">🎯</div>
              <CardTitle>Pratik & Quiz</CardTitle>
              <CardDescription>
                Bilginizi test edin ve ilerlemenizi takip edin
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/lessons">Öğrenmeye Başla</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link href="/lessons">Tüm Dersler</Link>
          </Button>
        </div>

        {/* Stats */}
        <Card className="mt-12 w-full">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">28</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Arap Harfi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tecvid Kuralı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pratik Örnek</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Made with ❤️ for the Muslim community</p>
        </div>
      </main>
    </div>
  );
}
