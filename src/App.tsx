import {useMemo, useState} from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Check,
  Copy,
  Download,
  Expand,
  FileBadge,
  FileText,
  Instagram,
  Mail,
  MessageCircle,
  Trophy,
  Users,
} from 'lucide-react';
import {LightboxModal} from './components/LightboxModal';
import {ResilientImage} from './components/ResilientImage';
import {
  ACHIEVEMENTS,
  CERTIFICATES,
  INTERNSHIP,
  ORGANIZATIONS,
  PROFILE,
  type GalleryPhoto,
} from './data/portfolioData';

type OrgFilter =
  | 'Semua'
  | 'Kepemimpinan'
  | 'Keuangan & Administrasi'
  | 'Pendidikan & Keilmuan';

const ORG_FILTERS: OrgFilter[] = [
  'Semua',
  'Kepemimpinan',
  'Keuangan & Administrasi',
  'Pendidikan & Keilmuan',
];

const HERO_COUNTER_STATS = [
  {
    icon: Briefcase,
    value: '1+',
    label: 'Pengalaman Magang',
  },
  {
    icon: Users,
    value: '4+',
    label: 'Pengalaman Organisasi',
  },
  {
    icon: Trophy,
    value: '10+',
    label: 'Program Kerja Terealisasi',
  },
  {
    icon: FileBadge,
    value: '5+',
    label: 'Sertifikat & Pelatihan',
  },
];

export default function App() {
  const [orgFilter, setOrgFilter] = useState<OrgFilter>('Semua');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [lightboxPhotos, setLightboxPhotos] = useState<GalleryPhoto[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredOrganizations = useMemo(() => {
    if (orgFilter === 'Semua') return ORGANIZATIONS;
    return ORGANIZATIONS.filter((item) => item.focus === orgFilter);
  }, [orgFilter]);

  const openLightbox = (photos: GalleryPhoto[], index: number) => {
    setLightboxPhotos(photos);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contacts.emailDisplay);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = PROFILE.contacts.emailUrl;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F9FD] text-[#0A1931]">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#DCE5F2]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#beranda"
            className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4FA3]"
          >
            <svg
              width="34"
              height="22"
              viewBox="0 0 38 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M2 22L10.5 2H14.5L23 22H18.5L16.7 17.5H8.3L6.5 22H2ZM9.7 14H15.3L12.5 7L9.7 14Z"
                fill="#0B2C5D"
              />
              <path
                d="M17.5 2H21.7L25.2 15.6L29.1 2H32.6L36.5 15.6L39.8 2H44L38.4 22H34.6L30.8 8.9L27 22H23.1L17.5 2Z"
                transform="scale(0.86,1)"
                fill="#1B4FA3"
              />
            </svg>
            <span className="h-5 w-px bg-[#CBD5E1]" aria-hidden="true" />
            <span className="font-display text-base sm:text-lg font-bold tracking-tight text-[#0A1931]">
              {PROFILE.name}
            </span>
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3B4D6B]"
          >
            <a
              href="#tentang"
              className="hover:text-[#0B2C5D] hover:underline underline-offset-4 decoration-[#1B4FA3] transition-colors whitespace-nowrap shrink-0"
            >
              Tentang Saya
            </a>
            <a
              href="#pengalaman"
              className="hover:text-[#0B2C5D] hover:underline underline-offset-4 decoration-[#1B4FA3] transition-colors whitespace-nowrap shrink-0"
            >
              Pengalaman
            </a>
            <a
              href="#organisasi"
              className="hover:text-[#0B2C5D] hover:underline underline-offset-4 decoration-[#1B4FA3] transition-colors whitespace-nowrap shrink-0"
            >
              Organisasi
            </a>
            <a
              href="#prestasi"
              className="hover:text-[#0B2C5D] hover:underline underline-offset-4 decoration-[#1B4FA3] transition-colors whitespace-nowrap shrink-0"
            >
              Prestasi
            </a>
            <a
              href="#sertifikat"
              className="hover:text-[#0B2C5D] hover:underline underline-offset-4 decoration-[#1B4FA3] transition-colors whitespace-nowrap shrink-0"
            >
              Sertifikat
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0B2C5D] hover:bg-[#1B4FA3] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
            >
              Kontak
            </a>
          </div>
        </div>
      </header>

      <main id="beranda">
        {/* Section 1: Hero Layout Matching User Reference */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#EDF3FC] via-[#FAFCFF] to-[#E8F0FB] border-b border-[#DCE5F2]">
          {/* Subtle Royal Navy & Cobalt Decorative Wave Backdrop */}
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-24 sm:h-36 lg:h-40 z-0"
          >
            <path
              d="M0 150C260 195 540 210 860 170C1140 135 1310 75 1440 35V220H0V150Z"
              fill="#1B4FA3"
              fillOpacity="0.14"
            />
            <path
              d="M0 175C340 212 690 210 1020 165C1210 139 1345 96 1440 64V220H0V175Z"
              fill="#0B2C5D"
            />
          </svg>

          {/* Left Diagonal Accent Shape Behind Portrait */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute left-0 top-0 bottom-0 w-[26%] bg-gradient-to-br from-[#1B4FA3]/12 via-[#0B2C5D]/20 to-[#0B2C5D] z-0"
            style={{
              clipPath: 'polygon(0 0, 42% 0, 100% 100%, 0% 100%)',
            }}
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-8 pt-8 lg:pt-10 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Portrait of Abdul Wafi (S.Akun) */}
              <div className="lg:col-span-3 flex justify-center lg:justify-start self-end order-2 lg:order-1">
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      [
                        PROFILE.heroPortraitCutout,
                        PROFILE.heroCollage,
                        PROFILE.heroPortrait,
                        PROFILE.podiumPhoto,
                      ],
                      0
                    )
                  }
                  aria-label="Perbesar potret resmi Abdul Wafi"
                  className="group relative w-64 sm:w-72 lg:w-full max-w-[320px] rounded-t-2xl lg:rounded-t-2xl overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
                >
                  <ResilientImage
                    src={PROFILE.heroPortraitCutout.src}
                    alt={PROFILE.heroPortraitCutout.alt}
                    fallbackTitle={PROFILE.heroPortraitCutout.caption}
                    className="w-full h-auto object-cover object-top block transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="sr-only">Perbesar foto potret</span>
                </button>
              </div>

              {/* Center Column: Headline, Description, Actions & 4-Stat Bar */}
              <div className="lg:col-span-5 space-y-6 pb-8 lg:pb-14 order-1 lg:order-2">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#3B4D6B] uppercase">
                      Portofolio
                    </span>
                    <span
                      className="h-px w-20 bg-[#94A3B8]"
                      aria-hidden="true"
                    />
                  </div>

                  <h1 className="font-display text-[clamp(2.35rem,4.3vw,3.55rem)] font-bold leading-[1.06] tracking-tight text-[#0A1931] text-balance">
                    Abdul <span className="text-[#1B4FA3]">Wafi, S.Akun.</span>
                  </h1>

                  <p className="text-base sm:text-lg font-medium text-[#1E293B]">
                    Sarjana Akuntansi · Bidang{' '}
                    <span className="text-[#1B4FA3] font-semibold">
                      Akuntansi &amp; Keuangan
                    </span>
                  </p>
                </div>

                <p className="text-[15px] sm:text-base leading-[1.68] text-[#334155] max-w-[48ch]">
                  {PROFILE.heroLead}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="#pengalaman"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2C5D] hover:bg-[#1B4FA3] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
                  >
                    <span>Lihat Portofolio</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <a
                    href={PROFILE.pdfPath}
                    download="CV-Portofolio-Abdul-Wafi.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#0B2C5D] text-[#0B2C5D] hover:bg-[#0B2C5D] hover:text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    <span>Unduh CV</span>
                  </a>
                </div>

                {/* 4-Column Stat Strip directly inside hero center matching design */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 border-t border-[#CBD5E1]/80 bg-white/80 backdrop-blur-xs rounded-xl border border-[#DCE5F2] divide-y sm:divide-y-0 sm:divide-x divide-[#DCE5F2]">
                  {HERO_COUNTER_STATS.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="p-3.5 flex flex-col items-center text-center gap-1"
                      >
                        <Icon
                          className="w-5 h-5 text-[#1B4FA3] mb-0.5"
                          aria-hidden="true"
                        />
                        <span className="font-display text-xl font-bold tabular-nums text-[#0A1931]">
                          {stat.value}
                        </span>
                        <span className="text-[11px] leading-tight font-medium text-[#3B4D6B]">
                          {stat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: 4-Photo Podium & Yudisium Collage */}
              <div className="lg:col-span-4 pb-10 lg:pb-14 order-3">
                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      [
                        PROFILE.heroCollage,
                        PROFILE.heroPortraitCutout,
                        PROFILE.heroPortrait,
                        PROFILE.podiumPhoto,
                      ],
                      0
                    )
                  }
                  aria-label="Perbesar kolase dokumentasi pidato dan Yudisium XIII"
                  className="group relative block w-full rounded-2xl overflow-hidden shadow-[0_18px_40px_-15px_rgba(11,44,93,0.22)] border border-white bg-white p-1.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
                >
                  <ResilientImage
                    src={PROFILE.heroCollage.src}
                    alt={PROFILE.heroCollage.alt}
                    fallbackTitle={PROFILE.heroCollage.caption}
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B2C5D]/85 text-white text-xs font-medium backdrop-blur-xs">
                    <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Perbesar</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle Editorial Marquee Divider */}
        <div
          aria-hidden="true"
          className="border-b border-[#DCE5F2] bg-[#EEF3FA] overflow-hidden py-3"
        >
          <div className="flex w-max animate-marquee whitespace-nowrap text-xs font-medium text-[#3B4D6B] tracking-wide">
            <span className="px-4">
              DPRD Kabupaten Situbondo · SEMA FEBI UIN KHAS Jember · PMII Rayon FEBI · GenBI Jember · Ikatan Mahasiswa Situbondo · HMPS Akuntansi Syariah · Ikatan Akuntan Indonesia · BNSP Public Speaking ·
            </span>
            <span className="px-4">
              DPRD Kabupaten Situbondo · SEMA FEBI UIN KHAS Jember · PMII Rayon FEBI · GenBI Jember · Ikatan Mahasiswa Situbondo · HMPS Akuntansi Syariah · Ikatan Akuntan Indonesia · BNSP Public Speaking ·
            </span>
          </div>
        </div>

        {/* Tentang Saya Identity Band */}
        <section
          id="tentang"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 py-12 sm:py-16 border-b border-[#DCE5F2]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              <p className="text-xs font-semibold text-[#1B4FA3]">
                Tentang Saya · {PROFILE.discipline}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0A1931] text-balance">
                Integritas Administrasi, Akuntansi &amp; Kepemimpinan Publik
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <p className="text-[15px] sm:text-base leading-[1.7] text-[#334155]">
                {PROFILE.lead}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-[#DCE5F2] text-xs sm:text-sm">
                <div>
                  <p className="text-[#475569]">Asal &amp; Kelahiran</p>
                  <p className="font-semibold text-[#0A1931] mt-0.5">
                    {PROFILE.birthInfo}
                  </p>
                </div>
                <div>
                  <p className="text-[#475569]">Gelar &amp; Pendidikan</p>
                  <p className="font-semibold text-[#0A1931] mt-0.5">
                    Sarjana Akuntansi (S.Akun.) · UIN KHAS Jember
                  </p>
                </div>
                <div>
                  <p className="text-[#475569]">Kompetensi Inti</p>
                  <p className="font-semibold text-[#0A1931] mt-0.5">
                    Akuntansi, Administrasi &amp; Keuangan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pengalaman Magang */}
        <section
          id="pengalaman"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16 sm:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#1B4FA3]">
                  01 · {INTERNSHIP.period}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1931] text-balance">
                  {INTERNSHIP.institution}
                </h2>
                <p className="font-serif-editorial italic text-lg text-[#3B4D6B]">
                  {INTERNSHIP.role}
                </p>
              </div>

              <p className="text-[15px] leading-[1.7] text-[#334155]">
                {INTERNSHIP.summary}
              </p>

              <ol className="space-y-4 pt-3 border-t border-[#DCE5F2]">
                {INTERNSHIP.duties.map((duty, idx) => (
                  <li
                    key={duty}
                    className="flex gap-4 text-[15px] leading-[1.65] text-[#1E293B]"
                  >
                    <span className="font-mono text-xs font-medium tabular-nums text-[#1B4FA3] pt-1 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Bento Gallery for DPRD Situbondo */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {INTERNSHIP.photos.map((photo, idx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => openLightbox(INTERNSHIP.photos, idx)}
                  aria-label={`Lihat dokumentasi: ${photo.caption}`}
                  className={`group relative overflow-hidden rounded-2xl border border-[#DCE5F2] bg-[#EEF3FA] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3] ${
                    idx === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  <ResilientImage
                    src={photo.src}
                    alt={photo.alt}
                    fallbackTitle={photo.caption}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162E]/85 via-[#07162E]/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-3">
                    <p className="text-xs sm:text-sm font-medium text-white leading-snug line-clamp-2">
                      {photo.caption}
                    </p>
                    <Expand
                      className="w-4 h-4 text-white/85 shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Pengalaman Organisasi */}
        <section
          id="organisasi"
          className="border-t border-[#DCE5F2] bg-white py-16 sm:py-20"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold text-[#1B4FA3]">
                  02 · Rekam Jejak Organisasi
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1931] text-balance">
                  Lima Peran Strategis di Kampus &amp; Komunitas Daerah
                </h2>
              </div>

              <div
                role="group"
                aria-label="Filter peran organisasi"
                className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#EEF3FA] border border-[#DCE5F2] self-start md:self-auto"
              >
                {ORG_FILTERS.map((filter) => {
                  const isActive = orgFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setOrgFilter(filter)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#0B2C5D] text-white shadow-xs'
                          : 'text-[#3B4D6B] hover:text-[#0A1931]'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-[#DCE5F2] border-t border-[#DCE5F2]">
              {filteredOrganizations.map((org) => (
                <article
                  key={org.id}
                  className="py-10 first:pt-8 last:pb-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#475569]">
                      <span className="font-mono tabular-nums font-medium text-[#1B4FA3]">
                        {org.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-[#0A1931]">
                        {org.role}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">
                        {org.highlightStat}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#0A1931] text-balance">
                      {org.organization}
                    </h3>

                    <p className="text-[15px] leading-[1.65] text-[#334155]">
                      {org.summary}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {org.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-[1.65] text-[#334155]"
                        >
                          <span
                            aria-hidden="true"
                            className="text-[#1B4FA3] font-semibold select-none"
                          >
                            —
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                    {org.photos.map((photo, pIdx) => (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => openLightbox(org.photos, pIdx)}
                        aria-label={`Perbesar foto ${org.organization}: ${photo.caption}`}
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#DCE5F2] bg-[#EEF3FA] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
                      >
                        <ResilientImage
                          src={photo.src}
                          alt={photo.alt}
                          fallbackTitle={photo.caption}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07162E]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute bottom-2 right-2 inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#0B2C5D]/85 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Prestasi Kuliah (Deep Royal Navy Showcase) */}
        <section
          id="prestasi"
          className="bg-[#07162E] text-[#F8FAFC] py-16 sm:py-20"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-[#93C5FD]">
                  03 · Prestasi Kuliah &amp; Kompetisi
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                  Pengakuan Akademik &amp; Presentasi Tingkat Nasional
                </h2>
              </div>
              <p className="text-sm text-blue-100/75 max-w-sm leading-relaxed">
                Capaian forum ilmiah nasional FORNASMEBI dan kompetisi media kreatif tingkat universitas selama masa studi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {ACHIEVEMENTS.map((ach, idx) => (
                <article
                  key={ach.id}
                  className={`${
                    idx === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                  } rounded-2xl border border-white/14 bg-[#0D2347] p-6 sm:p-8 flex flex-col justify-between gap-6`}
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-blue-100/75">
                      <span className="font-mono tabular-nums text-[#FBBF24]">
                        {ach.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{ach.level}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{ach.year}</span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white text-balance">
                        {ach.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-100/85">
                        {ach.event}
                      </p>
                    </div>

                    <p className="text-sm sm:text-[15px] leading-[1.65] text-blue-50/80 tracking-[0.01em]">
                      {ach.description}
                    </p>

                    {ach.reward && (
                      <div className="inline-flex items-center gap-2 text-xs font-mono tabular-nums text-[#FCD34D] pt-1">
                        <Award className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>{ach.reward}</span>
                      </div>
                    )}
                  </div>

                  <div
                    className={`grid gap-3 ${
                      ach.photos.length > 1
                        ? 'grid-cols-1 sm:grid-cols-3'
                        : 'grid-cols-1'
                    }`}
                  >
                    {ach.photos.map((photo, pIdx) => (
                      <button
                        key={photo.id}
                        type="button"
                        onClick={() => openLightbox(ach.photos, pIdx)}
                        aria-label={`Perbesar bukti prestasi: ${photo.caption}`}
                        className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#061226]/60 aspect-[4/3] cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                      >
                        <ResilientImage
                          src={photo.src}
                          alt={photo.alt}
                          fallbackTitle={photo.caption}
                          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#061226]/75 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute bottom-2.5 right-2.5 inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#0B2C5D]/85 text-white">
                          <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Sertifikat Kompetensi */}
        <section
          id="sertifikat"
          className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16 sm:py-20"
        >
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DCE5F2] pb-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-semibold text-[#1B4FA3]">
                  04 · Sertifikasi Kompetensi &amp; Keahlian
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1931] text-balance">
                  Validasi Profesional Akuntansi, Syariah &amp; Komunikasi Publik
                </h2>
              </div>
              <p className="text-sm text-[#475569]">
                Klik sertifikat mana saja untuk memeriksa dokumen dalam resolusi penuh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATES.map((cert, idx) => (
                <article
                  key={cert.id}
                  className="rounded-2xl border border-[#DCE5F2] bg-white overflow-hidden flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() =>
                      openLightbox(
                        CERTIFICATES.map((c) => c.photo),
                        idx
                      )
                    }
                    aria-label={`Perbesar sertifikat ${cert.title}`}
                    className="group relative aspect-[4/3] w-full bg-[#EEF3FA] border-b border-[#DCE5F2] overflow-hidden p-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
                  >
                    <ResilientImage
                      src={cert.photo.src}
                      alt={cert.photo.alt}
                      fallbackTitle={cert.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B2C5D]/90 text-white text-xs font-medium">
                      <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Inspeksi Dokumen</span>
                    </span>
                  </button>

                  <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#475569]">
                        <span className="font-mono tabular-nums font-medium text-[#1B4FA3]">
                          {cert.index}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{cert.competency}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold tracking-tight text-[#0A1931]">
                        {cert.title}
                      </h3>

                      <p className="text-sm text-[#334155]">{cert.issuer}</p>
                    </div>

                    <div className="pt-4 border-t border-[#DCE5F2] space-y-1 text-xs text-[#475569]">
                      <div className="flex items-center justify-between gap-4">
                        <span>Tanggal</span>
                        <span className="font-mono tabular-nums text-[#0A1931] text-right">
                          {cert.date}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Nomor Sertifikat</span>
                        <span className="font-mono tabular-nums text-[#0A1931] text-right">
                          {cert.regNumber}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Keterangan</span>
                        <span className="text-[#0A1931] text-right">
                          {cert.locationOrNote}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Kontak & Dokumen */}
        <section
          id="kontak"
          className="border-t border-[#DCE5F2] bg-[#EEF3FA] py-16 sm:py-20"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-5">
                <p className="text-xs font-semibold text-[#1B4FA3]">
                  05 · Kontak Langsung
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1931] text-balance">
                  Terbuka untuk Peluang Karier, Administrasi &amp; Akuntansi Syariah
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#334155] max-w-[54ch]">
                  Hubungi Abdul Wafi secara langsung melalui WhatsApp, email, atau Instagram untuk kebutuhan rekrutmen staf administrasi, keuangan, maupun kolaborasi program kelembagaan.
                </p>

                <div className="pt-2">
                  <a
                    href={PROFILE.pdfPath}
                    download="Portofolio-Abdul-Wafi.pdf"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#0B2C5D] hover:bg-[#1B4FA3] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4FA3]"
                  >
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    <span>Unduh Berkas Portofolio Lengkap (PDF)</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl border border-[#DCE5F2] bg-white divide-y divide-[#DCE5F2]">
                {/* WhatsApp */}
                <a
                  href={PROFILE.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#F6F9FD] transition-colors group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-lg bg-[#1B4FA3]/10 text-[#0B2C5D] flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#475569]">WhatsApp</p>
                      <p className="font-mono text-base font-medium tabular-nums text-[#0A1931] truncate">
                        {PROFILE.contacts.whatsappDisplay}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 text-[#475569] group-hover:text-[#1B4FA3] transition-colors shrink-0"
                    aria-hidden="true"
                  />
                </a>

                {/* Email */}
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <a
                    href={PROFILE.contacts.emailUrl}
                    className="flex items-center gap-4 min-w-0 group flex-1"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#1B4FA3]/10 text-[#0B2C5D] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#475569]">Email</p>
                      <p className="text-base font-medium text-[#0A1931] group-hover:text-[#1B4FA3] transition-colors truncate">
                        {PROFILE.contacts.emailDisplay}
                      </p>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Salin alamat email"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-[#DCE5F2] hover:border-[#1B4FA3] text-[#334155] hover:text-[#0B2C5D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check
                          className="w-3.5 h-3.5 text-[#1B4FA3]"
                          aria-hidden="true"
                        />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Salin</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instagram */}
                <a
                  href={PROFILE.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#F6F9FD] transition-colors group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-11 h-11 rounded-lg bg-[#1B4FA3]/10 text-[#0B2C5D] flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#475569]">Instagram</p>
                      <p className="text-base font-medium text-[#0A1931] truncate">
                        {PROFILE.contacts.instagramDisplay}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 text-[#475569] group-hover:text-[#1B4FA3] transition-colors shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-[#DCE5F2] bg-[#F6F9FD] py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <p>
            © {new Date().getFullYear()} Abdul Wafi, S.Akun. — Portofolio Bidang Akuntansi, Administrasi &amp; Kepemimpinan.
          </p>
          <div className="flex items-center gap-6">
            <a href="#tentang" className="hover:text-[#0B2C5D] transition-colors">
              Tentang Saya
            </a>
            <a href="#pengalaman" className="hover:text-[#0B2C5D] transition-colors">
              Pengalaman
            </a>
            <a href="#organisasi" className="hover:text-[#0B2C5D] transition-colors">
              Organisasi
            </a>
            <a href="#prestasi" className="hover:text-[#0B2C5D] transition-colors">
              Prestasi
            </a>
            <a href="#sertifikat" className="hover:text-[#0B2C5D] transition-colors">
              Sertifikat
            </a>
            <a href="#beranda" className="font-semibold text-[#1B4FA3] hover:underline">
              Kembali ke Atas
            </a>
          </div>
        </div>
      </footer>

      <LightboxModal
        photos={lightboxPhotos}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
}
