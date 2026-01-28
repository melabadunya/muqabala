import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Tecvid ders kategorileri
const lessonCategories = [
  {
    id: 'arabic-letters',
    title: '28 Arap Harfi',
    description: 'Harflerin telaffuzu ve makharij noktaları',
    lessons: [
      { id: 'alif', title: 'Elif (ا)', order: 1 },
      { id: 'ba', title: 'Be (ب)', order: 2 },
      { id: 'ta', title: 'Te (ت)', order: 3 },
      { id: 'tha', title: 'Se (ث)', order: 4 },
      { id: 'jeem', title: 'Cim (ج)', order: 5 },
      // Diğer harfler eklenecek...
    ],
    icon: '📝',
    color: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    id: 'noon-rules',
    title: 'Nun Sakin Kuralları',
    description: 'İdgam, İhfa, İklab, İzhar kuralları',
    lessons: [
      { id: 'idgham', title: 'İdgam (إدغام)', order: 1 },
      { id: 'ihfa', title: 'İhfa (إخفاء)', order: 2 },
      { id: 'iklab', title: 'İklab (إقلاب)', order: 3 },
      { id: 'izhar', title: 'İzhar (إظهار)', order: 4 },
    ],
    icon: '🌙',
    color: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    id: 'mim-rules',
    title: 'Mim Sakin Kuralları',
    description: 'Mim harfi ile ilgili tecvid kuralları',
    lessons: [
      { id: 'idgham-mithlayn', title: 'İdgam Misliyeyn', order: 1 },
      { id: 'ihfa-shafawi', title: 'İhfa Şefevi', order: 2 },
      { id: 'izhar-shafawi', title: 'İzhar Şefevi', order: 3 },
    ],
    icon: '⭐',
    color: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    id: 'madd',
    title: 'Med (Uzatma) Kuralları',
    description: 'Harflerin uzatılması ile ilgili kurallar',
    lessons: [
      { id: 'madd-tabii', title: 'Med-i Tabii', order: 1 },
      { id: 'madd-munfasil', title: 'Med-i Munfasıl', order: 2 },
      { id: 'madd-muttasil', title: 'Med-i Muttasıl', order: 3 },
      { id: 'madd-lazim', title: 'Med-i Lazım', order: 4 },
    ],
    icon: '📏',
    color: 'bg-orange-50 dark:bg-orange-900/20',
  },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-green-600 dark:text-green-400 hover:underline mb-4 inline-block"
          >
            ← Ana Sayfa
          </Link>
          <h1 className="text-4xl font-bold mb-2">Tecvid Dersleri</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Kuran-ı Kerim'i doğru okumak için gerekli tecvid kurallarını adım adım öğrenin
          </p>
        </div>

        {/* Lesson Categories */}
        <div className="space-y-8">
          {lessonCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.lessons.map((lesson) => (
                  <Link key={lesson.id} href={`/lessons/${category.id}/${lesson.id}`}>
                    <Card className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">Ders {lesson.order}</Badge>
                          <span className="text-2xl">→</span>
                        </div>
                        <CardTitle className="text-xl">{lesson.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Badge */}
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            🚧 Dersler hazırlanıyor... İlk 5 ders yakında yayında!
          </p>
        </div>
      </div>
    </div>
  );
}
