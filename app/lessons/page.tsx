import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AbcIcon from '@mui/icons-material/Abc';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import StarIcon from '@mui/icons-material/Star';
import StraightenIcon from '@mui/icons-material/Straighten';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
    Icon: AbcIcon,
    color: 'bg-royal-blue/10 text-royal-blue',
    borderColor: 'border-royal-blue/20',
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
    Icon: NightsStayIcon,
    color: 'bg-forest/10 text-forest',
    borderColor: 'border-forest/20',
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
    Icon: StarIcon,
    color: 'bg-lavender/30 text-purple-700',
    borderColor: 'border-lavender/40',
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
    Icon: StraightenIcon,
    color: 'bg-chili/10 text-chili',
    borderColor: 'border-chili/20',
  },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-pearl dark:bg-ink">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">← Ana Sayfa</Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2 text-ink dark:text-pearl">Tecvid Dersleri</h1>
          <p className="text-chalkboard">
            Kuran-ı Kerim'i doğru okumak için gerekli tecvid kurallarını adım adım öğrenin
          </p>
        </div>

        {/* Lesson Categories */}
        <div className="space-y-12">
          {lessonCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.Icon sx={{ fontSize: 32 }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-ink dark:text-pearl">{category.title}</h2>
                  <p className="text-chalkboard">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.lessons.map((lesson) => (
                  <Link key={lesson.id} href={`/lessons/${category.id}/${lesson.id}`}>
                    <Card className={`hover:shadow-xl transition-all hover:scale-105 cursor-pointer h-full border-2 ${category.borderColor}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-pale-blue text-navy">
                            Ders {lesson.order}
                          </Badge>
                          <ArrowForwardIcon className="text-royal-blue" />
                        </div>
                        <CardTitle className="text-xl text-ink dark:text-pearl">{lesson.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Badge */}
        <Card className="mt-12 border-pale-blue/20">
          <CardHeader className="text-center">
            <p className="text-chalkboard">
              🚧 Dersler hazırlanıyor... İlk 5 ders yakında yayında!
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
