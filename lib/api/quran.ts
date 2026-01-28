/**
 * Quran.com API Client
 * Based on https://github.com/quran/quran.com-frontend-next
 */

const API_BASE_URL = 'https://api.quran.com/api/v4';

export interface Chapter {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: number[];
  translated_name: {
    language_name: string;
    name: string;
  };
}

export interface Verse {
  id: number;
  verse_number: number;
  verse_key: string;
  hizb_number: number;
  rub_el_hizb_number: number;
  ruku_number: number;
  manzil_number: number;
  sajdah_number: number | null;
  text_uthmani: string;
  text_indopak: string;
  text_imlaei: string;
  text_uthmani_simple: string;
  page_number: number;
  juz_number: number;
  words: Word[];
  translations?: Translation[];
}

export interface Word {
  id: number;
  position: number;
  audio_url: string;
  char_type_name: string;
  text_uthmani: string;
  text_indopak: string;
  text_imlaei: string;
  verse_key: string;
  translation?: {
    text: string;
    language_name: string;
  };
}

export interface Translation {
  id: number;
  resource_id: number;
  text: string;
}

/**
 * Fetch all chapters (Surahs)
 */
export async function getChapters(language = 'tr'): Promise<Chapter[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/chapters?language=${language}`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch chapters: ${response.statusText}`);
    }

    const data = await response.json();
    return data.chapters;
  } catch (error) {
    console.error('Error fetching chapters:', error);
    throw error;
  }
}

/**
 * Fetch a specific chapter
 */
export async function getChapter(id: number, language = 'tr'): Promise<Chapter> {
  try {
    const response = await fetch(`${API_BASE_URL}/chapters/${id}?language=${language}`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch chapter: ${response.statusText}`);
    }

    const data = await response.json();
    return data.chapter;
  } catch (error) {
    console.error(`Error fetching chapter ${id}:`, error);
    throw error;
  }
}

/**
 * Fetch verses for a chapter
 */
export async function getVerses(
  chapterId: number,
  options: {
    perPage?: number;
    page?: number;
    translations?: number[]; // Translation IDs (e.g., 161 for Turkish)
    words?: boolean;
    audio?: number; // Reciter ID
  } = {}
): Promise<{ verses: Verse[]; pagination: any }> {
  const {
    perPage = 10,
    page = 1,
    translations = [77], // Default Turkish translation (Diyanet)
    words = true,
    audio,
  } = options;

  try {
    const params = new URLSearchParams({
      per_page: perPage.toString(),
      page: page.toString(),
      words: words.toString(),
    });

    if (translations.length > 0) {
      params.append('translations', translations.join(','));
    }

    if (audio) {
      params.append('audio', audio.toString());
    }

    const response = await fetch(
      `${API_BASE_URL}/verses/by_chapter/${chapterId}?${params}`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch verses: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      verses: data.verses,
      pagination: data.pagination,
    };
  } catch (error) {
    console.error(`Error fetching verses for chapter ${chapterId}:`, error);
    throw error;
  }
}

/**
 * Fetch a specific verse
 */
export async function getVerse(
  verseKey: string,
  options: {
    translations?: number[];
    words?: boolean;
    audio?: number;
  } = {}
): Promise<Verse> {
  const { translations = [77], words = true, audio } = options;

  try {
    const params = new URLSearchParams({
      words: words.toString(),
    });

    if (translations.length > 0) {
      params.append('translations', translations.join(','));
    }

    if (audio) {
      params.append('audio', audio.toString());
    }

    const response = await fetch(
      `${API_BASE_URL}/verses/by_key/${verseKey}?${params}`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch verse: ${response.statusText}`);
    }

    const data = await response.json();
    return data.verse;
  } catch (error) {
    console.error(`Error fetching verse ${verseKey}:`, error);
    throw error;
  }
}

/**
 * Get audio URL for a verse
 * Reciter IDs: 7 (Mishary Rashid Alafasy), 6 (Abdul Basit), etc.
 */
export function getVerseAudioUrl(verseKey: string, reciterId = 7): string {
  return `https://verses.quran.com/${reciterId}/${verseKey}.mp3`;
}
