export type Locale = "id" | "en"

export type Experience = {
  period: string
  title: string
  company: string
  location: string
  description: string[]
  skills: string[]
}

export type Project = {
  title: string
  role: string
  description: string
  technologies: string[]
  github?: string
}

export type Thesis = {
  title: string
  description: string[]
  technologies: string[]
}

export type Org = {
  period: string
  title: string
  company: string
  location: string
  description: string[]
}

export type Certification = {
  title: string
  issuer: string
  date: string
}

export type SkillCategory = {
  title: string
  skills: string[]
}

export type Education = {
  period: string
  institution: string
  degree: string
  gpa: string
  location: string
}

export type CVData = {
  name: string
  role: string
  tagline: string
  location: string
  phone: string
  email: string
  linkedin: string
  github: string
  website: string
  summary: string[]
  experiences: Experience[]
  projects: Project[]
  thesis: Thesis
  organizations: Org[]
  certifications: Certification[]
  skillCategories: SkillCategory[]
  education: Education[]
  languages: string[]
  nav: { id: string; label: string }[]
  sectionTitles: Record<string, string>
  status: string
}

export const cv: Record<Locale, CVData> = {
  id: {
    name: "Deni Setiawan",
    role: "Full-Stack Developer",
    tagline: "Saya membangun sistem yang scalable dan andal — dari frontend, backend, database, hingga infrastruktur.",
    location: "Surabaya, Indonesia",
    phone: "+62-851-8665-1337",
    email: "iamdenisetiawan@gmail.com",
    linkedin: "https://linkedin.com/in/deni-setiawan1337",
    github: "https://github.com/DeNNYHZ",
    website: "https://dennyhz.dev",
    summary: [
      "Lulusan S1 Informatika dengan pengalaman sebagai IT Lead dan Full-Stack Developer, menangani operasional IT dan pengembangan sistem end-to-end — mulai dari frontend, backend, dan database, hingga server, network, hardware, dan koordinasi vendor.",
      "Memimpin tim IT (2 orang) dan tim CCTV (4 orang) dan berhasil mengintegrasikan BCA Virtual Account ke sistem pembayaran perusahaan untuk IPL dan perpanjangan parkir online.",
      "Terbiasa bekerja dengan Golang, JavaScript/Next.js, REST API, PostgreSQL, MongoDB, Redis, Docker, dan Oracle Cloud Infrastructure, serta performance testing menggunakan JMeter, Vegeta, Prometheus, dan Grafana.",
    ],
    experiences: [
      {
        period: "Apr 2026 — Sekarang",
        title: "IT Staff (IT Lead) & Full-Stack Developer",
        company: "Puncak Group",
        location: "Surabaya, Indonesia",
        description: [
          "Melanjutkan tanggung jawab operasional IT (aplikasi, infrastruktur, server, network, hardware) setelah pergantian personel senior, dan memimpin serta mengoordinasikan tim IT (2 orang) dan tim CCTV (4 orang) dalam pembagian kerja, troubleshooting, dan eskalasi ke vendor.",
          "Merancang dan mengembangkan integrasi BCA Virtual Account ke sistem pembayaran perusahaan (frontend, backend/API, dan alur transaksi), mendukung pembayaran IPL dan perpanjangan parkir secara online.",
          "Mengembangkan dan melakukan maintenance aplikasi perusahaan secara full-stack — REST API, backend business logic, integrasi database, hingga testing dan debugging fitur berdasarkan kebutuhan operasional.",
          "Menangani troubleshooting IT end-to-end lintas hardware, software, network, aplikasi, dan server (Linux & Windows), termasuk PC assembly/disassembly dan instalasi sistem operasi.",
          "Mengelola operasional dan troubleshooting parking system, termasuk koordinasi langsung dengan vendor eksternal untuk maintenance dan penyelesaian masalah teknis.",
          "Menjaga availability dan stability layanan IT perusahaan melalui monitoring server, analisis resource utilization, konfigurasi, dan log.",
        ],
        skills: ["IT Leadership", "BCA VA Integration", "Full-Stack", "System Integration", "IT Operations"],
      },
      {
        period: "Sep 2024 — Jan 2025",
        title: "Backend Developer Intern",
        company: "Technopartner.ID",
        location: "Yogyakarta, Indonesia",
        description: [
          "Membangun, mengintegrasikan, dan melakukan maintenance backend API untuk aplikasi berbasis mobile dan web.",
          "Berkolaborasi dengan tim lintas fungsi untuk memastikan performa, skalabilitas, dan reliabilitas API.",
          "Mendukung optimasi sistem, bug fixing, dan pengembangan fitur di berbagai proyek.",
          "Berkontribusi pada peningkatan arsitektur backend dan maintenance API level produksi.",
          "Menggunakan lingkungan berbasis Docker dan tools API testing untuk mendukung alur kerja development.",
        ],
        skills: ["API Integration", "Backend Development", "Docker", "API Testing"],
      },
    ],
    projects: [
      {
        title: "Finance Application API",
        role: "Backend Developer",
        description: "Mengembangkan REST API untuk aplikasi keuangan menggunakan Golang, termasuk backend business logic, integrasi MongoDB, serta testing/debugging via Postman.",
        technologies: ["Golang", "REST API", "MongoDB", "Postman"],
        github: "https://github.com/DeNNYHZ",
      },
      {
        title: "Inventory Management Dashboard",
        role: "Full-Stack Developer",
        description: "Membangun dashboard web untuk pengelolaan inventaris dengan Next.js, termasuk integrasi frontend-database dan application flow berbasis data.",
        technologies: ["Next.js", "JavaScript", "Supabase", "PostgreSQL"],
        github: "https://github.com/DeNNYHZ/Dashboard-Inventory-Management",
      },
      {
        title: "Book Management API",
        role: "Backend Developer",
        description: "Mendesain dan mengembangkan REST API (CRUD) untuk sistem pengelolaan buku menggunakan Golang Fiber dan PostgreSQL, diuji dengan Postman.",
        technologies: ["Golang", "Fiber", "PostgreSQL", "REST API"],
        github: "https://github.com/DeNNYHZ/Book-Management-API",
      },
      {
        title: "Daily Planner",
        role: "Mobile Developer",
        description: "Mengembangkan aplikasi mobile untuk pengelolaan aktivitas dan perencanaan kegiatan harian.",
        technologies: ["Flutter", "Dart"],
        github: "https://github.com/DeNNYHZ/Daily-Planner",
      },
      {
        title: "Petra Bookstore",
        role: "Mobile Developer",
        description: "Mengembangkan aplikasi toko buku online dengan navigasi terstruktur, fitur detail buku, wishlist, serta pencarian dan filter berdasarkan harga dan penulis.",
        technologies: ["Flutter"],
        github: "https://github.com/DeNNYHZ/Petra-Book-Store",
      },
      {
        title: "API Rate Limiting & Throttling Security System",
        role: "Backend Developer",
        description: "Mengimplementasikan mekanisme rate limiting dan throttling untuk memitigasi serangan DDoS dan mencegah API overload, serta men-deploy infrastruktur backend secara aman di VPS menggunakan Docker.",
        technologies: ["Golang", "Docker", "VPS"],
        github: "https://github.com/DeNNYHZ",
      },
    ],
    thesis: {
      title: "Analisis Performa Rate Limiting pada Skenario Normal dan Lonjakan Trafik",
      description: [
        "Mengimplementasikan dan membandingkan tiga algoritma rate limiting (Token Bucket, Leaky Bucket, Sliding Window) pada REST API Golang + Redis untuk sistem pemesanan tiket, diuji dengan Apache JMeter dan Vegeta pada skenario Normal, Spike, dan DDoS.",
        "Mencegah potensi downtime saat serangan DDoS dengan menurunkan latency P95 dari 18.401 ms menjadi ±1.190 ms, sekaligus memblokir 95,71%–97,88% request berbahaya secara efektif.",
        "Mempertahankan success rate 93,62% dan 0% false positive block rate pada algoritma Token Bucket saat lonjakan trafik sah (Spike Load), menjaga transaksi tetap lancar tanpa memblokir pengguna sah.",
        "Mengoptimalkan throughput hingga 730 request/detik pada VPS terbatas (2 vCPU, 2GB RAM) serta menurunkan latency P95 kondisi normal dari 341 ms menjadi 130–270 ms menggunakan Leaky Bucket dan Token Bucket.",
      ],
      technologies: ["Golang", "Redis", "PostgreSQL", "Docker", "VPS", "Apache JMeter", "Vegeta", "Prometheus", "Grafana"],
    },
    organizations: [
      {
        period: "Mei – Jun 2023",
        title: "Programming Tutor",
        company: "Tutorial Pemrograman Semester Genap",
        location: "Surabaya, Indonesia",
        description: [
          "Membimbing mahasiswa tingkat awal menyelesaikan studi kasus pemrograman Java dan Python melalui pendampingan personal, latihan terstruktur, dan umpan balik konstruktif.",
        ],
      },
      {
        period: "Nov 2022",
        title: "Anggota HIMA Divisi Game — Komite",
        company: "PCU Esports Challenge",
        location: "Surabaya, Indonesia",
        description: [
          "Menyusun rulebook resmi turnamen, mengatur bracket pertandingan, serta bertugas sebagai juri dan supervisor untuk memastikan kompetisi berjalan adil dan tertib.",
        ],
      },
      {
        period: "Agu 2022",
        title: "Programming Tutor",
        company: "PCU: Community Service Programming",
        location: "Surabaya, Indonesia",
        description: [
          "Menjadi mentor bagi anak-anak untuk memahami dasar-dasar pemrograman menggunakan aplikasi Scratch, sekaligus menumbuhkan minat mereka terhadap teknologi dan kemampuan problem-solving.",
        ],
      },
    ],
    certifications: [
      { title: "Red Hat System Administration I (RH124)", issuer: "Red Hat", date: "September 2023" },
      { title: "Red Hat OpenShift I: Containers & Kubernetes (DO180)", issuer: "Red Hat", date: "Juli 2024" },
      { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco", date: "Oktober 2024" },
      { title: "HackerRank Problem Solving (Basic)", issuer: "HackerRank", date: "November 2024" },
      { title: "HackerRank Python (Basic)", issuer: "HackerRank", date: "November 2024" },
    ],
    skillCategories: [
      { title: "Languages", skills: ["Go", "JavaScript", "Python", "Java", "PHP", "Dart"] },
      { title: "Frontend", skills: ["Next.js", "HTML", "CSS", "Flutter"] },
      { title: "Backend", skills: ["Go (Fiber)", "Laravel", "REST API"] },
      { title: "Database", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"] },
      { title: "Infrastructure", skills: ["Linux", "Windows", "Docker/Docker Compose", "Nginx", "Oracle Cloud Infrastructure (OCI)"] },
      { title: "IT Support & Payment Systems", skills: ["Network/Server/Hardware Troubleshooting", "PC Assembly", "System Integration", "BCA VA Integration", "Parking System Management"] },
      { title: "Monitoring & Tools", skills: ["Prometheus", "Grafana", "JMeter", "Vegeta", "Postman", "Git/GitHub", "JetBrains IDE", "Android Studio", "pgAdmin"] },
      { title: "Leadership & Operations", skills: ["Team Coordination", "Task Delegation", "Vendor Coordination", "IT Operations"] },
    ],
    education: [
      {
        period: "2021 — 2025",
        institution: "Universitas Kristen Petra",
        degree: "S1 Informatika / Sarjana Komputer (S.Kom.)",
        gpa: "IPK 3,15 / 4,00 · 146 SKS",
        location: "Surabaya, Indonesia",
      },
    ],
    languages: ["Bahasa Indonesia — Native", "Bahasa Inggris — Working Proficiency"],
    nav: [
      { id: "about", label: "Tentang" },
      { id: "experience", label: "Pengalaman" },
      { id: "projects", label: "Proyek" },
      { id: "thesis", label: "Skripsi" },
      { id: "organizations", label: "Organisasi" },
      { id: "skills", label: "Keahlian" },
      { id: "education", label: "Pendidikan" },
      { id: "certifications", label: "Sertifikasi" },
    ],
    sectionTitles: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      thesis: "Skripsi",
      organizations: "Organisasi",
      skills: "Keahlian",
      education: "Pendidikan",
      certifications: "Sertifikasi",
    },
    status: "Terbuka untuk peluang kerja",
  },
  en: {
    name: "Deni Setiawan",
    role: "Full-Stack Developer",
    tagline: "I build scalable, reliable systems — from frontend, backend, and database, all the way to infrastructure.",
    location: "Surabaya, Indonesia",
    phone: "+62-851-8665-1337",
    email: "iamdenisetiawan@gmail.com",
    linkedin: "https://linkedin.com/in/deni-setiawan1337",
    github: "https://github.com/DeNNYHZ",
    website: "https://dennyhz.dev",
    summary: [
      "Computer Science (S1) graduate with experience as an IT Lead and Full-Stack Developer, handling IT operations and end-to-end system development — from frontend, backend, and database to server, network, hardware, and vendor coordination.",
      "Led an IT team (2 people) and a CCTV team (4 people), and successfully integrated BCA Virtual Account into the company's payment system for IPL and online parking renewal.",
      "Comfortable working with Golang, JavaScript/Next.js, REST API, PostgreSQL, MongoDB, Redis, Docker, and Oracle Cloud Infrastructure, as well as performance testing with JMeter, Vegeta, Prometheus, and Grafana.",
    ],
    experiences: [
      {
        period: "Apr 2026 — Present",
        title: "IT Staff (IT Lead) & Full-Stack Developer",
        company: "Puncak Group",
        location: "Surabaya, Indonesia",
        description: [
          "Continued IT operational responsibilities (applications, infrastructure, servers, network, hardware) after senior personnel turnover, and led and coordinated the IT team (2 people) and CCTV team (4 people) in task distribution, troubleshooting, and vendor escalation.",
          "Designed and developed the BCA Virtual Account integration into the company's payment system (frontend, backend/API, and transaction flow), supporting IPL payments and online parking renewal.",
          "Developed and maintained company applications full-stack — REST API, backend business logic, database integration, to feature testing and debugging based on operational needs.",
          "Handled end-to-end IT troubleshooting across hardware, software, network, applications, and servers (Linux & Windows), including PC assembly/disassembly and OS installation.",
          "Managed parking system operations and troubleshooting, including direct coordination with external vendors for maintenance and technical issue resolution.",
          "Maintained IT service availability and stability through server monitoring, resource utilization analysis, configuration, and logs.",
        ],
        skills: ["IT Leadership", "BCA VA Integration", "Full-Stack", "System Integration", "IT Operations"],
      },
      {
        period: "Sep 2024 — Jan 2025",
        title: "Backend Developer Intern",
        company: "Technopartner.ID",
        location: "Yogyakarta, Indonesia",
        description: [
          "Built, integrated, and maintained backend APIs for mobile and web applications.",
          "Collaborated with cross-functional teams to ensure API performance, scalability, and reliability.",
          "Supported system optimization, bug fixing, and feature development across multiple projects.",
          "Contributed to backend architecture improvements and production-level API maintenance.",
          "Used Docker-based environments and API testing tools to support the development workflow.",
        ],
        skills: ["API Integration", "Backend Development", "Docker", "API Testing"],
      },
    ],
    projects: [
      {
        title: "Finance Application API",
        role: "Backend Developer",
        description: "Developed a REST API for a finance application using Golang, including backend business logic, MongoDB integration, and testing/debugging via Postman.",
        technologies: ["Golang", "REST API", "MongoDB", "Postman"],
        github: "https://github.com/DeNNYHZ",
      },
      {
        title: "Inventory Management Dashboard",
        role: "Full-Stack Developer",
        description: "Built a web dashboard for inventory management with Next.js, including frontend-database integration and data-driven application flow.",
        technologies: ["Next.js", "JavaScript", "Supabase", "PostgreSQL"],
        github: "https://github.com/DeNNYHZ/Dashboard-Inventory-Management",
      },
      {
        title: "Book Management API",
        role: "Backend Developer",
        description: "Designed and developed a REST API (CRUD) for a book management system using Golang Fiber and PostgreSQL, tested with Postman.",
        technologies: ["Golang", "Fiber", "PostgreSQL", "REST API"],
        github: "https://github.com/DeNNYHZ/Book-Management-API",
      },
      {
        title: "Daily Planner",
        role: "Mobile Developer",
        description: "Developed a mobile app for managing activities and planning daily tasks.",
        technologies: ["Flutter", "Dart"],
        github: "https://github.com/DeNNYHZ/Daily-Planner",
      },
      {
        title: "Petra Bookstore",
        role: "Mobile Developer",
        description: "Developed an online bookstore app with structured navigation, book detail, wishlist, and search/filter by price and author.",
        technologies: ["Flutter"],
        github: "https://github.com/DeNNYHZ/Petra-Book-Store",
      },
      {
        title: "API Rate Limiting & Throttling Security System",
        role: "Backend Developer",
        description: "Implemented rate limiting and throttling mechanisms to mitigate DDoS attacks and prevent API overload, and deployed the backend infrastructure securely on a VPS using Docker.",
        technologies: ["Golang", "Docker", "VPS"],
        github: "https://github.com/DeNNYHZ",
      },
    ],
    thesis: {
      title: "Rate Limiting Performance Analysis in Normal and Traffic Surge Scenarios",
      description: [
        "Implemented and compared three rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window) on a Golang + Redis REST API for a ticket booking system, tested with Apache JMeter and Vegeta under Normal, Spike, and DDoS scenarios.",
        "Prevented potential downtime during DDoS attacks by reducing P95 latency from 18,401 ms to ±1,190 ms, while effectively blocking 95.71%–97.88% of malicious requests.",
        "Maintained a 93.62% success rate and 0% false positive block rate with the Token Bucket algorithm during legitimate traffic surges (Spike Load), keeping transactions smooth without blocking legitimate users.",
        "Optimized throughput up to 730 requests/second on a limited VPS (2 vCPU, 2GB RAM) and reduced normal-condition P95 latency from 341 ms to 130–270 ms using Leaky Bucket and Token Bucket.",
      ],
      technologies: ["Golang", "Redis", "PostgreSQL", "Docker", "VPS", "Apache JMeter", "Vegeta", "Prometheus", "Grafana"],
    },
    organizations: [
      {
        period: "May – Jun 2023",
        title: "Programming Tutor",
        company: "Even Semester Programming Tutorial",
        location: "Surabaya, Indonesia",
        description: [
          "Guided junior students in solving Java and Python programming case studies through personal mentoring, structured exercises, and constructive feedback.",
        ],
      },
      {
        period: "Nov 2022",
        title: "HIMA Gaming Division Member — Committee",
        company: "PCU Esports Challenge",
        location: "Surabaya, Indonesia",
        description: [
          "Drafted the official tournament rulebook, organized match brackets, and served as a judge and supervisor to ensure fair and orderly competition.",
        ],
      },
      {
        period: "Aug 2022",
        title: "Programming Tutor",
        company: "PCU: Community Service Programming",
        location: "Surabaya, Indonesia",
        description: [
          "Mentored children to understand programming fundamentals using Scratch, while nurturing their interest in technology and problem-solving skills.",
        ],
      },
    ],
    certifications: [
      { title: "Red Hat System Administration I (RH124)", issuer: "Red Hat", date: "September 2023" },
      { title: "Red Hat OpenShift I: Containers & Kubernetes (DO180)", issuer: "Red Hat", date: "July 2024" },
      { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco", date: "October 2024" },
      { title: "HackerRank Problem Solving (Basic)", issuer: "HackerRank", date: "November 2024" },
      { title: "HackerRank Python (Basic)", issuer: "HackerRank", date: "November 2024" },
    ],
    skillCategories: [
      { title: "Languages", skills: ["Go", "JavaScript", "Python", "Java", "PHP", "Dart"] },
      { title: "Frontend", skills: ["Next.js", "HTML", "CSS", "Flutter"] },
      { title: "Backend", skills: ["Go (Fiber)", "Laravel", "REST API"] },
      { title: "Database", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"] },
      { title: "Infrastructure", skills: ["Linux", "Windows", "Docker/Docker Compose", "Nginx", "Oracle Cloud Infrastructure (OCI)"] },
      { title: "IT Support & Payment Systems", skills: ["Network/Server/Hardware Troubleshooting", "PC Assembly", "System Integration", "BCA VA Integration", "Parking System Management"] },
      { title: "Monitoring & Tools", skills: ["Prometheus", "Grafana", "JMeter", "Vegeta", "Postman", "Git/GitHub", "JetBrains IDE", "Android Studio", "pgAdmin"] },
      { title: "Leadership & Operations", skills: ["Team Coordination", "Task Delegation", "Vendor Coordination", "IT Operations"] },
    ],
    education: [
      {
        period: "2021 — 2025",
        institution: "Petra Christian University",
        degree: "Bachelor of Computer Science (S.Kom.)",
        gpa: "GPA 3.15 / 4.00 · 146 credits",
        location: "Surabaya, Indonesia",
      },
    ],
    languages: ["Indonesian — Native", "English — Working Proficiency"],
    nav: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "thesis", label: "Thesis" },
      { id: "organizations", label: "Organizations" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
      { id: "certifications", label: "Certifications" },
    ],
    sectionTitles: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      thesis: "Thesis",
      organizations: "Organizations",
      skills: "Skills",
      education: "Education",
      certifications: "Certifications",
    },
    status: "Open to work",
  },
}
