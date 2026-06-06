import { useState } from 'react'
import {
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCog,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const profile = {
  name: 'Azis Maulana',
  headline: 'Mahasiswa Teknik Informatika | IoT & Electronics Enthusiast',
  location: 'Surakarta, Jawa Tengah',
  email: 'azismaulana2411@gmail.com',
  whatsapp: '0895-0978-6701',
  github: 'https://github.com/Azlana77',
  photo: '/azis-profile.jpg',
  cv: '/CV-Azis-Maulana.pdf',
}

const navItems = [
  ['Tentang', '#about'],
  ['Skills', '#skills'],
  ['Proyek', '#projects'],
  ['Pengalaman', '#experience'],
  ['Kontak', '#contact'],
]

const about =
  'Mahasiswa Teknik Informatika semester 6 di Universitas Duta Bangsa Surakarta yang memiliki dasar kuat di bidang elektronika praktis dari latar belakang SMK Teknik Audio Video. Memiliki pengalaman dalam perakitan sistem IoT menggunakan Arduino dan ESP32, perancangan database relasional, serta pengembangan web dasar. Saat ini tertarik mencari peluang magang di bidang IoT, sistem embedded, atau pengembangan sistem yang menggabungkan kemampuan hardware dan software.'

const skillGroups = [
  {
    title: 'Hardware & Electronics',
    icon: Cpu,
    items: ['Perakitan sirkuit', 'Breadboard / PCB', 'Penyolderan', 'Multimeter', 'Arduino IDE', 'ESP32', 'Sensor'],
  },
  {
    title: 'Software Development',
    icon: Code2,
    items: ['PHP', 'Laravel', 'HTML', 'CSS', 'Dasar C++'],
  },
  {
    title: 'Database & Networking',
    icon: Database,
    items: ['MySQL', 'ERD Design', 'Dasar jaringan'],
  },
  {
    title: 'Digital Tools',
    icon: MonitorCog,
    items: ['Visual Studio Code', 'Git', 'GitHub', 'Figma', 'Canva', 'Microsoft Office'],
  },
  {
    title: 'Soft Skills',
    icon: MessageCircle,
    items: ['Manajemen waktu', 'Komunikasi', 'Problem solving', 'Kerja tim'],
  },
]

const projects = [
  {
    title: 'Sistem Kendali Lampu Hias Batik',
    category: 'IoT & Electronics Project',
    tech: ['Arduino Nano', 'HC-05', 'Bluetooth', 'Relay', 'Lampu Seri dan Paralel'],
    description:
      'Membangun sistem kontrol lampu hias batik menggunakan Arduino Nano dan modul Bluetooth HC-05. Sistem memungkinkan pengguna mengontrol lampu melalui smartphone tanpa perlu menggunakan saklar manual.',
    badge: 'Published Article',
    featured: true,
    icon: CircuitBoard,
    action: {
      label: 'Baca Artikel',
      href: 'https://ojs.udb.ac.id/Senatib/article/view/4351',
    },
  },
  {
    title: 'Sistem Irigasi Otomatis Berbasis IoT',
    category: 'IoT Project',
    tech: ['ESP32', 'Blynk', 'Sensor Kelembaban Tanah'],
    description:
      'Merancang sistem penyiraman tanaman otomatis berbasis ESP32 yang bekerja berdasarkan data kelembaban tanah secara real-time. Sistem terhubung dengan aplikasi Blynk untuk monitoring dan kendali jarak jauh.',
    icon: Cpu,
    action: {
      label: 'Lihat Video Demo',
      href: 'https://drive.google.com/file/d/15kSOwf_hONsgZyRc6AN_NFu_Oy8Vs0pR/view?usp=drive_link',
    },
  },
  {
    title: 'Sistem Informasi Perpustakaan SIMPUS',
    category: 'Database & System Analysis',
    tech: ['ERD', 'MySQL', 'Database Relasional'],
    image: '/erd-simpus.png',
    imageAlt: 'ERD Sistem Informasi Perpustakaan SIMPUS',
    description:
      'Berkontribusi pada perancangan database, pembuatan ERD, identifikasi entitas, atribut, dan relasi antar entitas untuk sistem informasi perpustakaan. Fokus proyek ini adalah analisis dan desain database, bukan pembuatan website.',
    icon: Database,
  },
  {
    title: 'Web Reservasi Hotel Twin Star',
    category: 'Web Development',
    tech: ['Laravel', 'Tailwind CSS', 'AI-Assisted Development'],
    image: '/hotel-twin-star.png',
    imageAlt: 'Screenshot website reservasi Hotel Twin Star',
    description:
      'Mengembangkan website reservasi hotel dengan bantuan alur kerja AI-assisted development. Fitur utama meliputi manajemen user Admin dan Public serta CRUD untuk pengelolaan reservasi kamar.',
    icon: Code2,
    tallImage: true,
  },
]

const experiences = [
  {
    company: 'PT Fasadetama Indonesia / BPN Kantah Karanganyar',
    role: 'Data Entry',
    duration: '2 Bulan, 2025',
    points: [
      'Mengelola dan melakukan input data pertanahan ke sistem digital.',
      'Memastikan validitas dokumen fisik dan digital untuk mendukung proses administrasi pertanahan.',
    ],
  },
  {
    company: 'Hotel Aston Solo',
    role: 'Engineering Intern',
    duration: '3 Bulan, 2020',
    points: [
      'Melakukan pemeliharaan preventif dan perbaikan sistem kelistrikan serta perangkat elektronik hotel.',
      'Berkolaborasi dengan tim teknis untuk menangani gangguan operasional infrastruktur bangunan.',
    ],
  },
  {
    company: 'PT Centrepark Citra Corpora',
    role: 'Cashier',
    duration: '2021 - 2023',
    points: [
      'Bertanggung jawab atas transaksi pembayaran di RS Indriati dan MITA 10 Solo.',
      'Menjaga akurasi laporan keuangan harian dan memberikan layanan pelanggan secara profesional.',
    ],
  },
]

const education = [
  {
    school: 'Universitas Duta Bangsa Surakarta',
    major: 'S1 Teknik Informatika',
    year: '2023 - Sekarang',
  },
  {
    school: 'SMKN 2 Surakarta',
    major: 'Teknik Audio Video / Elektronika',
    year: '2018 - 2021',
  },
]

const certifications = [
  'Webinar IoT: Belajar Desain PCB Dari Nol - KMTek, 2024',
  'Webinar Humanizing AI: Ekosistem AI Indonesia - STEI ITB, 2025',
  'Keamanan Aplikasi Web - Cycology ITTS, 2023',
  'Dasar Pemrograman C++ - Dilesin Academy, 2023',
  'Kenal Profesi Backend Developer - Latihacks, 2025',
]

function AssetImage({ src, alt, className = '', fallbackClassName = '', icon: Icon = CircuitBoard }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`flex items-center justify-center bg-[#0b2545] text-cyan-100 ${fallbackClassName || className}`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/10">
          <Icon aria-hidden="true" className="h-8 w-8" />
        </div>
      </div>
    )
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
      <p className="mb-3 text-sm font-bold uppercase text-cyan-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-[#071725] md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  )
}

function ButtonLink({ href, children, variant = 'primary', icon: Icon, download }) {
  const base =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2'
  const styles = {
    primary: 'bg-[#071725] text-white shadow-lg shadow-slate-900/15 hover:bg-[#0b2545]',
    light: 'border border-slate-200 bg-white text-[#071725] hover:border-cyan-300 hover:text-cyan-800',
    ghost: 'border border-white/20 bg-white/10 text-white hover:bg-white/15',
  }

  return (
    <a href={href} download={download} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`${base} ${styles[variant]}`}>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </a>
  )
}

function ProjectCard({ project }) {
  const Icon = project.icon
  const visual = (
    <AssetImage
      src={project.image}
      alt={project.imageAlt || project.title}
      icon={Icon}
      className={`h-full w-full rounded-t-lg object-cover ${project.tallImage ? 'object-top' : 'object-center'}`}
      fallbackClassName="h-full w-full rounded-t-lg"
    />
  )

  return (
    <article className={`overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${project.featured ? 'border-cyan-300 shadow-cyan-900/10' : 'border-slate-200'}`}>
      <div className="relative h-52 bg-[#0b2545]">
        {project.image ? (
          project.tallImage ? (
            <a href={project.image} target="_blank" rel="noreferrer" aria-label={`Buka gambar ${project.title}`}>
              {visual}
            </a>
          ) : (
            visual
          )
        ) : (
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#071725,#0b4a6f_55%,#10b981)] text-white">
            <div className="rounded-lg border border-white/20 bg-white/10 p-5">
              <Icon aria-hidden="true" className="h-10 w-10" />
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#071725]">{project.category}</span>
          {project.badge ? <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-[#071725]">{project.badge}</span> : null}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#071725]">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              {item}
            </span>
          ))}
        </div>
        {project.action ? (
          <div className="mt-5">
            <ButtonLink href={project.action.href} variant="light" icon={ExternalLink}>
              {project.action.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </article>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#f6f8fb]">
      <a className="skip-link" href="#main">
        Lewati ke konten
      </a>

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#main" className="flex items-center gap-3 font-bold text-[#071725]">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071725] text-sm text-white">AM</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-bold text-slate-600 transition hover:text-cyan-700">
                {label}
              </a>
            ))}
          </div>
          <ButtonLink href={`mailto:${profile.email}`} variant="light" icon={Mail}>
            Hubungi
          </ButtonLink>
        </nav>
      </header>

      <main id="main">
        <section className="bg-[#071725] text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-20 lg:px-8">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-bold text-cyan-100">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                {profile.location}
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">{profile.name}</h1>
              <p className="mt-4 text-xl font-bold text-cyan-100 md:text-2xl">{profile.headline}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200">
                Portofolio sederhana untuk peluang magang di bidang IoT, sistem embedded, database, dan pengembangan sistem yang menghubungkan hardware dengan software.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={profile.cv} icon={Download} download>
                  Download CV
                </ButtonLink>
                <ButtonLink href={`mailto:${profile.email}`} variant="ghost" icon={Mail}>
                  Hubungi Saya
                </ButtonLink>
                <ButtonLink href={profile.github} variant="ghost" icon={Code2}>
                  GitHub
                </ButtonLink>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-lg border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/20">
                <div className="aspect-square overflow-hidden rounded-lg bg-cyan-200/10">
                  <AssetImage src={profile.photo} alt={`Foto profil ${profile.name}`} className="h-full w-full object-cover" fallbackClassName="h-full w-full" icon={Sparkles} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                    <p className="text-cyan-100">Fokus</p>
                    <p className="font-bold">IoT & Database</p>
                  </div>
                  <div className="rounded-lg border border-white/15 bg-white/10 p-3">
                    <p className="text-cyan-100">Status</p>
                    <p className="font-bold">Siap Magang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-cyan-700">Tentang Saya</p>
              <h2 className="text-3xl font-bold text-[#071725] md:text-4xl">Latar elektronika, bergerak ke sistem digital.</h2>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="leading-8 text-slate-600">{about}</p>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Keterampilan" title="Kemampuan yang relevan untuk proyek teknis." description="Dikelompokkan agar mudah dibaca oleh recruiter, dosen, atau calon rekan kolaborasi." />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon
                return (
                  <article key={group.title} className="rounded-lg border border-slate-200 bg-[#f8fafc] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-800">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <h3 className="font-bold text-[#071725]">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-700 shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Proyek" title="Proyek IoT, database, dan web development." description="Disusun sesuai kontribusi sebenarnya, termasuk proyek tanpa gambar dengan visual fallback." />
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-[#071725] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <p className="mb-3 text-sm font-bold uppercase text-cyan-200">Pengalaman</p>
              <h2 className="text-3xl font-bold md:text-4xl">Pengalaman kerja yang membentuk ketelitian dan tanggung jawab.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {experiences.map((item) => (
                <article key={item.company} className="rounded-lg border border-white/15 bg-white/10 p-5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <Briefcase aria-hidden="true" className="mt-1 h-5 w-5 text-cyan-200" />
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#071725]">{item.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  <p className="mt-1 text-sm font-bold text-cyan-100">{item.company}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-cyan-700">Pendidikan</p>
              <h2 className="text-3xl font-bold text-[#071725] md:text-4xl">Dasar akademik dan elektronika praktis.</h2>
            </div>
            <div className="grid gap-4">
              {education.map((item) => (
                <article key={item.school} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-cyan-100 text-cyan-800">
                      <GraduationCap aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-[#071725]">{item.school}</h3>
                      <p className="mt-1 text-slate-600">{item.major}</p>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-slate-500">
                        <CalendarDays aria-hidden="true" className="h-4 w-4" />
                        {item.year}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Sertifikasi" title="Pelatihan yang mendukung minat teknis." />
            <div className="grid gap-3 md:grid-cols-2">
              {certifications.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-[#f8fafc] p-4">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                  <p className="font-bold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-lg bg-[#0b2545] p-6 text-white shadow-xl shadow-slate-900/15 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-cyan-200">Kontak</p>
                <h2 className="text-3xl font-bold md:text-4xl">Terbuka untuk peluang magang dan kolaborasi.</h2>
                <p className="mt-4 leading-7 text-slate-200">
                  Silakan hubungi melalui email, WhatsApp, atau lihat profil GitHub untuk mengenal proyek dan minat teknis saya lebih lanjut.
                </p>
              </div>
              <div className="grid gap-3">
                <ButtonLink href={`mailto:${profile.email}`} variant="ghost" icon={Mail}>
                  {profile.email}
                </ButtonLink>
                <ButtonLink href="https://wa.me/6289509786701" variant="ghost" icon={Phone}>
                  WhatsApp {profile.whatsapp}
                </ButtonLink>
                <ButtonLink href={profile.github} variant="ghost" icon={Code2}>
                  GitHub Azlana77
                </ButtonLink>
                <ButtonLink href={profile.cv} variant="ghost" icon={Download} download>
                  Download CV
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 {profile.name}. Portofolio pribadi.</p>
          <a href="#main" className="inline-flex items-center gap-2 font-bold text-[#071725] hover:text-cyan-700">
            Kembali ke atas
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
