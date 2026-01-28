# 📚 Tecvid Dersi Yapısı

**Version:** 1.0  
**Date:** January 28, 2026  
**Status:** ✅ Template Ready

---

## 🎯 Ders Şablonu

Her Tecvid dersi aşağıdaki standart yapıyı izlemelidir:

### 1. **Ders Başlığı (Header)**
- 📝 Kategori badge'i (örn: "28 Arap Harfi - Ders 1")
- 🔤 Harf/Kural adı (Türkçe + Arapça)
- ⏱️ Tahmini süre (10-15 dakika)
- 📚 Seviye (Başlangıç/Orta/İleri)

### 2. **Makharij Bölümü** 🎯
- Harfin/Kuralın çıkış noktası
- Anatomik açıklama (boğaz, dudak, dil vs.)
- İpucu kartı (nasıl telaffuz edilir)
- Görsel/Animasyon (gelecekte eklenecek)

### 3. **Telaffuz Rehberi** 🗣️
İki sütunlu kart sistemi:

**✅ Doğru:**
- Anatomik pozisyon
- Ses özellikleri
- Pratik ipuçları
- Video/Audio örneği (gelecekte)

**❌ Yanlış:**
- Yaygın hatalar
- Neden yanlış olduğu
- Nasıl düzeltilir

### 4. **Kuran'dan Örnekler** 📖
- Quran.com API'den gerçek ayetler
- Arapça metin (Uthmani script)
- Türkçe çeviri
- Harfin/Kuralın vurgulandığı bölümler
- Açıklama kartı

### 5. **Pratik Bölümü** 🎮
- 4-8 adet pratik kelime/cümle
- İnteraktif kartlar (hover/click)
- Audio playback (gelecekte)
- Tekrar butonu

### 6. **Quiz Teaser** 🎯
- Quiz'e davet kartı
- Kısa açıklama
- CTA butonu (Quiz'e Başla)

### 7. **Navigasyon** 🔗
- Ders Listesi butonu (geri)
- Sonraki Ders butonu (ileri)
- İlerleme göstergesi (gelecekte)

---

## 🎨 Kullanılan Shadcn Bileşenleri

```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
```

---

## 📝 Örnek Ders Yapısı

### Elif (ا) Harfi - Tam Ders

```markdown
## 1. Başlık
- Badge: "28 Arap Harfi - Ders 1"
- Harf: "Elif Harfi (ا)"
- Süre: 10 dakika
- Seviye: Başlangıç

## 2. Makharij
- Çıkış: Boğaz bölgesi (Cevf)
- Açıklama: Dudak/dil hareketsiz, boğazdan "aa" sesi
- İpucu: Sadece boğazdan ses

## 3. Telaffuz
Doğru:
- Boğazdan "aa" sesi
- Dudaklar hareketsiz
- Dil gevşek ve düz
- Açık ağız

Yanlış:
- Dudakları oynatmak
- Dilden ses çıkarmak
- Burndan ses vermek
- Zorlamak

## 4. Kuran Örneği
- Ayet: Fatiha 1:1 (Bismillah)
- API: getVerse('1:1')
- Vurgu: "Allah" kelimesindeki "aa" sesi

## 5. Pratik
Kelimeler:
- الله (Allah)
- القرآن (Kuran)
- السلام (Selam)
- الحمد (Hamd)

## 6. Quiz
- 10 soru
- Çoktan seçmeli
- Progress tracking

## 7. Navigasyon
- Geri: Ders Listesi
- İleri: Be (ب) Harfi
```

---

## 🔄 Gelecek Geliştirmeler

### Faz 1 (Haftalar 1-2)
- ✅ Temel yapı kuruldu
- ✅ Shadcn bileşenleri entegre edildi
- ✅ Quran API bağlantısı
- ⏳ 28 harf dersi içeriği

### Faz 2 (Haftalar 3-4)
- ⏳ Audio player entegrasyonu
- ⏳ Word-by-word playback
- ⏳ Hız kontrolü (0.5x, 1x)
- ⏳ Makharij animasyonları

### Faz 3 (Haftalar 5-6)
- ⏳ Quiz sistemi
- ⏳ Progress tracking
- ⏳ User authentication (Supabase)
- ⏳ Gamification (badges, streaks)

### Faz 4 (Haftalar 7-8)
- ⏳ Nun Sakin kuralları
- ⏳ Mim Sakin kuralları
- ⏳ Med kuralları
- ⏳ Advanced tecvid rules

---

## 📊 İçerik Öncelikleri

### Yüksek Öncelik (Hemen)
1. **28 Arap Harfi** - Temel harfler
   - Elif (ا) ✅
   - Be (ب) ⏳
   - Te (ت) ⏳
   - Se (ث) ⏳
   - ... (24 harf daha)

### Orta Öncelik (2-4 hafta)
2. **Nun Sakin Kuralları**
   - İdgam (إدغام)
   - İhfa (إخفاء)
   - İklab (إقلاب)
   - İzhar (إظهار)

3. **Mim Sakin Kuralları**
   - İdgam Misliyeyn
   - İhfa Şefevi
   - İzhar Şefevi

### Düşük Öncelik (1-2 ay)
4. **Med Kuralları**
   - Med-i Tabii
   - Med-i Munfasıl
   - Med-i Muttasıl
   - Med-i Lazım

---

## 💾 Ders İçeriği Kaydetme

### Markdown Format (Şimdilik)
```
content/lessons/arabic-letters/01-alif.md
content/lessons/arabic-letters/02-ba.md
...
```

### Supabase Database (Gelecekte)
```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  category TEXT,
  slug TEXT UNIQUE,
  title_tr TEXT,
  title_ar TEXT,
  order INT,
  duration INT,
  level TEXT,
  makharij JSONB,
  pronunciation JSONB,
  quran_examples JSONB,
  practice_words JSONB,
  created_at TIMESTAMP
);
```

---

## 🎯 Başarı Kriterleri

Her ders için:
- ✅ Shadcn bileşenleri kullanılmalı
- ✅ Responsive design (mobil uyumlu)
- ✅ Dark mode desteği
- ✅ Quran API entegrasyonu
- ✅ Türkçe içerik
- ✅ Arapça font desteği
- ⏳ Audio örnekleri (Faz 2)
- ⏳ Quiz sistemi (Faz 3)

---

## 📚 İçerik Yazma Rehberi

### Makharij Açıklaması
- Basit ve anlaşılır dil
- Anatomik terimler kullan ama açıkla
- Pratik ipuçları ver
- Görsel referans ekle (gelecekte)

### Telaffuz Rehberi
- Doğru/Yanlış formatı kullan
- Her madde kısa ve öz
- Pratik örnekler ver
- Yaygın hataları belirt

### Kuran Örnekleri
- API'den gerçek ayetler çek
- Kısa ayetler tercih et
- Vurgulanacak kısmı belirt
- Türkçe çeviri ekle

### Pratik Kelimeler
- Yaygın Kuran kelimeleri
- 4-8 adet yeterli
- Görsel olarak çekici
- İnteraktif kartlar

---

**Not:** Bu yapı sürekli geliştirilecek. Kullanıcı geri bildirimleri ile optimize edilecek.
