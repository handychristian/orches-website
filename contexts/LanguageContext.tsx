'use client'

import { ReactNode, createContext, useContext, useState } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.bookCall': 'Book Discovery Call',

    // Hero Section
    'hero.title': 'We put AI at the center of everything we do.',
    'hero.subtitle': 'We help modern businesses integrate AI into their core operations. From automating repetitive tasks to building AI-driven content engines, we design systems that save time, drive traffic, and scale with you. We don\'t do hype. We build what works.',
    'hero.getInTouch': 'Get In Touch',
    'hero.learnMore': 'Learn More',
    'hero.platformExpert': 'Platform Expert',
    'hero.aiIntegration': 'AI Integration Specialist',
    'hero.support247': 'Priority Support',
    'hero.scrollToExplore': 'Scroll to explore',

    // Problem Solution Section
    'problemSolution.title': 'We spend our days guiding companies through our 3-step AI Transformation Journey.',
    'problemSolution.subtitle': 'A proven methodology that transforms Indonesian SMEs into AI-first organizations',
    'problemSolution.step1.title': 'Identify',
    'problemSolution.step1.description': 'We help you identify high-impact AI opportunities and build a step-by-step AI transformation strategy to bring them to life.',
    'problemSolution.step2.title': 'Educate',
    'problemSolution.step2.description': 'We train and support your team with the right tools and know-how to embed AI across your entire organization.',
    'problemSolution.step3.title': 'Develop',
    'problemSolution.step3.description': 'We leverage our extensive experience and network to develop custom AI systems that are proven to move the needle inside your business.',
    'problemSolution.results.title': 'We focus on delivering real, measurable results.',
    'problemSolution.results.proven': 'Proven',
    'problemSolution.results.provenDesc': 'Track record with chatbot and automation solutions',
    'problemSolution.results.expert': 'Expert',
    'problemSolution.results.expertDesc': 'N8N platform specialization and AI integration',
    'problemSolution.results.dedicated': 'Dedicated',
    'problemSolution.results.dedicatedDesc': 'Personalized attention and ongoing support',

    // Services
    'services.title': 'Our AI Solutions & Services',
    'services.subtitle': 'Comprehensive AI automation, content creation, and marketing solutions to transform your Indonesian SME into an AI-first organization',

    // Service 1: AI Opportunity Assessment
    'service1.title': 'AI Opportunity Assessment',
    'service1.description': 'We analyze your business processes to identify high-impact AI automation opportunities and create a strategic implementation roadmap.',
    'service1.feature1': 'Comprehensive workflow analysis',
    'service1.feature2': 'ROI-focused opportunity mapping',
    'service1.feature3': 'Custom AI transformation strategy',
    'service1.feature4': 'Implementation timeline planning',
    'service1.cta': 'Get Started',

    // Service 2: AI Automation & Development
    'service2.title': 'AI Automation & Development',
    'service2.description': 'We build tailored automation solutions using proven platforms like N8N to streamline your operations and eliminate repetitive tasks.',
    'service2.feature1': 'N8N workflow automation',
    'service2.feature2': 'System integration and connectivity',
    'service2.feature3': 'Custom AI tool development',
    'service2.feature4': 'Performance monitoring and optimization',
    'service2.cta': 'Learn More',

    // Service 3: AI Content Creation
    'service3.title': 'AI Content Creation',
    'service3.description': 'Transform your content creation with AI-powered tools. From simple prompting to custom models, we help you create engaging content efficiently.',
    'service3.feature1': 'AI content generation with prompting',
    'service3.feature2': 'Custom AI model development',
    'service3.feature3': 'Visual content creation (Midjourney, Higgsfield)',
    'service3.feature4': 'Video content automation (Veo3, RunwayML)',
    'service3.cta': 'Coming Soon',
    'service3.message': 'Open for discovery & testing - Contact us to learn more',

    // Service 4: AI Marketing Solutions
    'service4.title': 'AI Marketing Solutions',
    'service4.description': 'Leverage AI to enhance your marketing efforts with automated content creation, personalized campaigns, and data-driven insights.',
    'service4.feature1': 'Automated marketing content',
    'service4.feature2': 'Personalized campaign creation',
    'service4.feature3': 'AI-powered analytics and insights',
    'service4.feature4': 'Social media automation',
    'service4.cta': 'Coming Soon',
    'service4.message': 'Open for discovery & testing - Contact us to learn more',

    // Service 5: Team Training & Support
    'service5.title': 'Team Training & Support',
    'service5.description': 'We educate your team on AI tools and best practices, ensuring successful adoption and long-term success of your AI initiatives.',
    'service5.feature1': 'AI literacy training programs',
    'service5.feature2': 'Hands-on tool workshops',
    'service5.feature3': 'Ongoing technical support',
    'service5.feature4': 'Best practices documentation',
    'service5.cta': 'Coming Soon',
    'service5.message': 'Coming soon - Stay tuned for updates',

    // Why Choose Us Section
    'whyChoose.title': 'Why Choose Orches AI Agency?',
    'whyChoose.subtitle': 'Specialized expertise, personalized attention, proven solutions. We focus on quality over quantity.',
    'whyChoose.proven.title': 'Proven Experience',
    'whyChoose.proven.description': 'We\'ve successfully delivered chatbot solutions and workflow automation projects, giving us hands-on experience with real business challenges.',
    'whyChoose.tools.title': 'Advanced AI Tools Expertise',
    'whyChoose.tools.description': 'Deep specialization in proven AI platforms including N8N for automation, Midjourney & Higgsfield for visuals, Veo3 & RunwayML for videos, ensuring reliable, scalable solutions.',
    'whyChoose.partnership.title': 'True Partnership Approach',
    'whyChoose.partnership.description': 'We work alongside your team as trusted partners, providing ongoing support and training to ensure long-term success and sustainable growth.',
    'whyChoose.indonesian.title': 'Indonesian Market Understanding',
    'whyChoose.indonesian.description': 'Local expertise with deep understanding of Indonesian SME challenges, business culture, and regulatory requirements for compliant solutions.',
    'whyChoose.rapid.title': 'Rapid Implementation',
    'whyChoose.rapid.description': 'Efficient deployment process with minimal business disruption, allowing you to start seeing benefits quickly while maintaining operational continuity.',
    'whyChoose.support.title': 'Ongoing Support',
    'whyChoose.support.description': 'Comprehensive training and continuous support to ensure your team can effectively use and maintain the automation solutions we implement.',

    // Team Section
    'team.title': 'Meet Our Team',
    'team.subtitle': 'Experienced professionals dedicated to delivering practical AI solutions that drive real business results',
    'team.handy.name': 'Handy Christian Hokardi',
    'team.handy.role': 'CEO & AI Automation Specialist',
    'team.handy.description': 'AI automation expert with proven experience in workflow optimization and business process improvement. Specializes in identifying practical automation opportunities and implementing reliable AI solutions that deliver measurable business value and sustainable competitive advantages.',
    'team.handy.skill1': 'AI Integration',
    'team.handy.skill2': 'Workflow Automation',
    'team.handy.skill3': 'Business Strategy',
    'team.charles.name': 'Charles Tan',
    'team.charles.role': 'COO & AI Content Creation Specialist',
    'team.charles.description': 'AI content creation specialist with expertise in AI-powered content creation and customer journey optimization. Focused on implementing practical AI content creation systems that increase efficiency, improve customer engagement, and drive sustainable business growth through proven AI tools and strategies.',
    'team.charles.skill1': 'Content Automation',
    'team.charles.skill2': 'AI Marketing',
    'team.charles.skill3': 'Process Optimization',
    'team.additional': 'And 4 more Engineers',

    // Team Use Cases Section
    'team.usecases.title': 'Our Internal Use Cases',
    'team.usecases.subtitle': 'Real-world AI solutions we\'ve built for our own team',
    'team.usecases.case1.title': 'Script Generation + Supabase',
    'team.usecases.case1.description': 'AI-powered content creation engine that generates high-quality scripts and stores them in Supabase for easy access and management.',
    'team.usecases.case2.title': 'Daily Log Bot + Supabase',
    'team.usecases.case2.description': 'Automated system that captures daily activities and insights, facilitating knowledge transfer and providing a rich data source for RAG systems.',
    'team.usecases.case3.title': 'Deployment Tracker',
    'team.usecases.case3.description': 'Streamlined solution that monitors and manages deployments, enhancing professionalism and enabling scalable operations.',
    'team.usecases.case4.title': 'Lead Tracker Otomatis',
    'team.usecases.case4.description': 'Automated lead management system that captures, qualifies, and nurtures prospects, serving as a growth engine for business development.',
    'team.usecases.case5.title': 'Content Scheduler',
    'team.usecases.case5.description': 'Multi-platform content scheduling tool that optimizes posting times and manages content distribution across various channels for maximum reach.',
    'team.usecases.case6.title': 'Feedback Pipeline',
    'team.usecases.case6.description': 'Systematic approach to collecting, analyzing, and implementing user feedback, ensuring product-market fit and continuous improvement.',
    'team.usecases.case7.title': 'Performance Summary Bot',
    'team.usecases.case7.description': 'Automated performance analysis tool that provides motivational insights and reinforces company culture through data-driven feedback.',

    // Process Section
    'process.title': 'Our Proven Implementation Process',
    'process.subtitle': 'Transparent, efficient approach that delivers results with minimal disruption to your business',
    'process.step1.title': 'Discovery Call',
    'process.step1.subtitle': 'Free 30-minute consultation',
    'process.step1.description': 'Understand your business challenges and identify automation opportunities',
    'process.step1.analysis.title': 'Business Analysis',
    'process.step1.analysis.item1': 'Business process analysis',
    'process.step1.analysis.item2': 'Automation potential assessment',
    'process.step1.discovery.title': 'Solution Discovery',
    'process.step1.discovery.item1': 'Pain point identification',
    'process.step1.discovery.item2': 'Custom solution roadmap',
    'process.step2.title': 'Strategy & Planning',
    'process.step2.description': 'Detailed analysis and custom automation strategy development tailored to your specific needs',
    'process.step2.item1': 'Workflow mapping and optimization',
    'process.step2.item2': 'Technology stack selection',
    'process.step2.item3': 'Implementation timeline',
    'process.step2.item4': 'ROI projections and success metrics',
    'process.step3.title': 'Development & Testing',
    'process.step3.description': 'Build and thoroughly test your custom automation solutions using proven N8N platform',
    'process.step3.item1': 'Custom workflow development',
    'process.step3.item2': 'System integration setup',
    'process.step3.item3': 'Comprehensive testing protocols',
    'process.step3.item4': 'User acceptance testing',
    'process.step4.title': 'Deployment & Training',
    'process.step4.description': 'Seamless implementation with comprehensive team training and ongoing support',
    'process.step4.item1': 'Phased deployment approach',
    'process.step4.item2': 'Team training and documentation',
    'process.step4.item3': 'Performance monitoring setup',
    'process.step4.item4': 'Continuous optimization',

    // Contact Form Section
    'contact.title': 'The best AI systems are built side by side.',
    'contact.subtitle': 'Let\'s Partner Up',
    'contact.formTitle': 'Tell us where you\'re at',
    'contact.namePlaceholder': 'What is your name?',
    'contact.emailPlaceholder': 'What is your email?',
    'contact.rolePlaceholder': 'What is your role in the company?',
    'contact.companyPlaceholder': 'Company Name',
    'contact.websitePlaceholder': 'Company Website (optional)',
    'contact.companySizePlaceholder': 'Company Size',
    'contact.companySize1': '1-10 employees',
    'contact.companySize2': '11-50 employees',
    'contact.companySize3': '51-200 employees',
    'contact.companySize4': '201-500 employees',
    'contact.companySize5': '500+ employees',
    'contact.revenuePlaceholder': 'Annual Revenue',
    'contact.revenue1': 'Under IDR 100.000.000',
    'contact.revenue2': 'IDR 100.000.000 - IDR 250.000.000',
    'contact.revenue3': 'IDR 250.000.000 - IDR 500.000.000',
    'contact.revenue4': 'IDR 500.000.000 - IDR 1.000.000.000',
    'contact.revenue5': 'IDR 1.000.000.000+',
    'contact.budgetPlaceholder': 'Budget Range',
    'contact.budget1': 'Under IDR 5.000.000',
    'contact.budget2': 'IDR 5.000.000 - IDR 15.000.000',
    'contact.budget3': 'IDR 15.000.000 - IDR 50.000.000',
    'contact.budget4': 'IDR 50.000.000 - IDR 100.000.000',
    'contact.budget5': 'IDR 100.000.000+',
    'contact.servicesPlaceholder': 'What services are you interested in?',
    'contact.service1': 'Identifying AI opportunities',
    'contact.service2': 'AI Automation & Development',
    'contact.service3': 'AI Content Creation',
    'contact.service4': 'AI Marketing Solutions',
    'contact.service5': 'Team Training & Support',
    'contact.service6': 'Custom AI Solutions',
    'contact.messagePlaceholder': 'Message',
    'contact.submitButton': 'Send inquiry',
    'contact.submittingText': 'Opening email client...',
    'contact.successTitle': 'Email client opened successfully!',
    'contact.successMessage': 'Please send the email from your email client to complete your inquiry.',
    'contact.errorMessage': 'Unable to open email client. Please contact us directly at hello@orchesagency.com',
    'contact.directContact': 'Prefer to schedule directly?',

    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.aboutUs': 'About Us',
    'footer.ourTeam': 'Our Team',
    'footer.bookCall': 'Book Discovery Call',
    'footer.email': 'Email:',
    'footer.phone': 'Phone:',
    'footer.location': 'Location:',
    'footer.copyright': '© 2025 Orches AI Agency. All rights reserved.',
    'footer.description': 'Empowering Indonesian SMEs with intelligent automation solutions. Real value, no bullshit. Win-win partnerships for sustainable growth.',
    'footer.aiAutomation': 'AI Automation',
    'footer.aiContent': 'AI Content Creation',
    'footer.aiMarketing': 'AI Marketing',
    'footer.teamTraining': 'Team Training',

    // Language Toggle
    'language.english': 'English',
    'language.indonesian': 'Indonesian',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.services': 'Layanan',
    'nav.about': 'Tentang',
    'nav.process': 'Proses',
    'nav.contact': 'Kontak',
    'nav.bookCall': 'Jadwalkan Konsultasi',

    // Hero Section
    'hero.title': 'Kami menempatkan AI di pusat segala yang kami lakukan.',
    'hero.subtitle': 'Kami membantu bisnis modern mengintegrasikan AI ke dalam operasi inti mereka. Dari mengotomatisasi tugas berulang hingga membangun mesin konten bertenaga AI, kami merancang sistem yang menghemat waktu, meningkatkan traffic, dan berkembang bersama Anda. Kami tidak melakukan hype. Kami membangun yang benar-benar bekerja.',
    'hero.getInTouch': 'Hubungi Kami',
    'hero.learnMore': 'Pelajari Lebih Lanjut',
    'hero.platformExpert': 'Ahli Platform',
    'hero.aiIntegration': 'Spesialis Integrasi AI',
    'hero.support247': 'Dukungan Prioritas',
    'hero.scrollToExplore': 'Gulir untuk menjelajahi',

    // Problem Solution Section
    'problemSolution.title': 'Kami menghabiskan hari-hari kami memandu perusahaan melalui Perjalanan Transformasi AI 3 langkah kami.',
    'problemSolution.subtitle': 'Metodologi terbukti yang mengubah UKM Indonesia menjadi organisasi yang mengutamakan AI',
    'problemSolution.step1.title': 'Identifikasi',
    'problemSolution.step1.description': 'Kami membantu Anda mengidentifikasi peluang AI berdampak tinggi dan membangun strategi transformasi AI langkah demi langkah untuk mewujudkannya.',
    'problemSolution.step2.title': 'Edukasi',
    'problemSolution.step2.description': 'Kami melatih dan mendukung tim Anda dengan alat dan pengetahuan yang tepat untuk mengintegrasikan AI di seluruh organisasi Anda.',
    'problemSolution.step3.title': 'Kembangkan',
    'problemSolution.step3.description': 'Kami memanfaatkan pengalaman dan jaringan luas kami untuk mengembangkan sistem AI khusus yang terbukti menggerakkan bisnis Anda.',
    'problemSolution.results.title': 'Kami fokus memberikan hasil yang nyata dan terukur.',
    'problemSolution.results.proven': 'Terbukti',
    'problemSolution.results.provenDesc': 'Rekam jejak dengan solusi chatbot dan otomasi',
    'problemSolution.results.expert': 'Ahli',
    'problemSolution.results.expertDesc': 'Spesialisasi platform N8N dan integrasi AI',
    'problemSolution.results.dedicated': 'Berdedikasi',
    'problemSolution.results.dedicatedDesc': 'Perhatian personal dan dukungan berkelanjutan',

    // Services
    'services.title': 'Solusi & Layanan AI Kami',
    'services.subtitle': 'Solusi otomasi AI, pembuatan konten, dan pemasaran yang komprehensif untuk mengubah UKM Indonesia Anda menjadi organisasi yang mengutamakan AI',

    // Service 1: AI Opportunity Assessment
    'service1.title': 'Penilaian Peluang AI',
    'service1.description': 'Kami menganalisis proses bisnis Anda untuk mengidentifikasi peluang otomasi AI berdampak tinggi dan membuat peta jalan implementasi strategis.',
    'service1.feature1': 'Analisis alur kerja komprehensif',
    'service1.feature2': 'Pemetaan peluang fokus ROI',
    'service1.feature3': 'Strategi transformasi AI khusus',
    'service1.feature4': 'Perencanaan timeline implementasi',
    'service1.cta': 'Mulai Sekarang',

    // Service 2: AI Automation & Development
    'service2.title': 'Otomasi & Pengembangan AI',
    'service2.description': 'Kami membangun solusi otomasi yang disesuaikan menggunakan platform terbukti seperti N8N untuk merampingkan operasi dan menghilangkan tugas berulang.',
    'service2.feature1': 'Otomasi alur kerja N8N',
    'service2.feature2': 'Integrasi sistem dan konektivitas',
    'service2.feature3': 'Pengembangan alat AI khusus',
    'service2.feature4': 'Pemantauan kinerja dan optimisasi',
    'service2.cta': 'Pelajari Lebih Lanjut',

    // Service 3: AI Content Creation
    'service3.title': 'Pembuatan Konten AI',
    'service3.description': 'Transformasikan pembuatan konten Anda dengan alat bertenaga AI. Dari prompting sederhana hingga model khusus, kami membantu Anda membuat konten menarik secara efisien.',
    'service3.feature1': 'Generasi konten AI dengan prompting',
    'service3.feature2': 'Pengembangan model AI khusus',
    'service3.feature3': 'Pembuatan konten visual (Midjourney, Higgsfield)',
    'service3.feature4': 'Otomasi konten video (Veo3, RunwayML)',
    'service3.cta': 'Segera Hadir',
    'service3.message': 'Terbuka untuk discovery & testing - Hubungi kami untuk informasi lebih lanjut',

    // Service 4: AI Marketing Solutions
    'service4.title': 'Solusi Pemasaran AI',
    'service4.description': 'Manfaatkan AI untuk meningkatkan upaya pemasaran Anda dengan pembuatan konten otomatis, kampanye personal, dan wawasan berbasis data.',
    'service4.feature1': 'Konten pemasaran otomatis',
    'service4.feature2': 'Pembuatan kampanye personal',
    'service4.feature3': 'Analitik dan wawasan bertenaga AI',
    'service4.feature4': 'Otomasi media sosial',
    'service4.cta': 'Segera Hadir',
    'service4.message': 'Terbuka untuk discovery & testing - Hubungi kami untuk informasi lebih lanjut',

    // Service 5: Team Training & Support
    'service5.title': 'Pelatihan & Dukungan Tim',
    'service5.description': 'Kami mendidik tim Anda tentang alat AI dan praktik terbaik, memastikan adopsi yang sukses dan kesuksesan jangka panjang inisiatif AI Anda.',
    'service5.feature1': 'Program pelatihan literasi AI',
    'service5.feature2': 'Workshop alat praktis',
    'service5.feature3': 'Dukungan teknis berkelanjutan',
    'service5.feature4': 'Dokumentasi praktik terbaik',
    'service5.cta': 'Segera Hadir',
    'service5.message': 'Segera hadir - Nantikan pembaruan',

    // Why Choose Us Section
    'whyChoose.title': 'Mengapa Memilih Orches AI Agency?',
    'whyChoose.subtitle': 'Keahlian khusus, perhatian personal, solusi terbukti. Kami fokus pada kualitas daripada kuantitas.',
    'whyChoose.proven.title': 'Pengalaman Terbukti',
    'whyChoose.proven.description': 'Kami telah berhasil menghadirkan solusi chatbot dan proyek otomasi alur kerja, memberikan kami pengalaman langsung dengan tantangan bisnis nyata.',
    'whyChoose.tools.title': 'Keahlian Alat AI Canggih',
    'whyChoose.tools.description': 'Spesialisasi mendalam dalam platform AI terbukti termasuk N8N untuk otomasi, Midjourney & Higgsfield untuk visual, Veo3 & RunwayML untuk video, memastikan solusi yang andal dan skalabel.',
    'whyChoose.partnership.title': 'Pendekatan Kemitraan Sejati',
    'whyChoose.partnership.description': 'Kami bekerja bersama tim Anda sebagai mitra terpercaya, memberikan dukungan dan pelatihan berkelanjutan untuk memastikan kesuksesan jangka panjang dan pertumbuhan berkelanjutan.',
    'whyChoose.indonesian.title': 'Pemahaman Pasar Indonesia',
    'whyChoose.indonesian.description': 'Keahlian lokal dengan pemahaman mendalam tentang tantangan UKM Indonesia, budaya bisnis, dan persyaratan regulasi untuk solusi yang sesuai.',
    'whyChoose.rapid.title': 'Implementasi Cepat',
    'whyChoose.rapid.description': 'Proses deployment efisien dengan gangguan bisnis minimal, memungkinkan Anda mulai melihat manfaat dengan cepat sambil mempertahankan kontinuitas operasional.',
    'whyChoose.support.title': 'Dukungan Berkelanjutan',
    'whyChoose.support.description': 'Pelatihan komprehensif dan dukungan berkelanjutan untuk memastikan tim Anda dapat secara efektif menggunakan dan memelihara solusi otomasi yang kami implementasikan.',

    // Team Section
    'team.title': 'Kenali Tim Kami',
    'team.subtitle': 'Profesional berpengalaman yang berdedikasi memberikan solusi AI praktis yang menghasilkan hasil bisnis nyata',
    'team.handy.name': 'Handy Christian Hokardi',
    'team.handy.role': 'CEO & Spesialis Otomasi AI',
    'team.handy.description': 'Ahli otomasi AI dengan pengalaman terbukti dalam optimisasi alur kerja dan perbaikan proses bisnis. Spesialisasi dalam mengidentifikasi peluang otomasi praktis dan mengimplementasikan solusi AI yang andal yang memberikan nilai bisnis terukur dan keunggulan kompetitif berkelanjutan.',
    'team.handy.skill1': 'Integrasi AI',
    'team.handy.skill2': 'Otomasi Alur Kerja',
    'team.handy.skill3': 'Strategi Bisnis',
    'team.charles.name': 'Charles Tan',
    'team.charles.role': 'COO & Spesialis Pembuatan Konten AI',
    'team.charles.description': 'Spesialis pembuatan konten AI dengan keahlian dalam pembuatan konten bertenaga AI dan optimisasi perjalanan pelanggan. Fokus pada implementasi sistem pembuatan konten AI praktis yang meningkatkan efisiensi, meningkatkan keterlibatan pelanggan, dan mendorong pertumbuhan bisnis berkelanjutan melalui alat dan strategi AI terbukti.',
    'team.charles.skill1': 'Otomasi Konten',
    'team.charles.skill2': 'Pemasaran AI',
    'team.charles.skill3': 'Optimasi Proses',
    'team.additional': 'Dan 4 Engineer lainnya',

    // Team Use Cases Section
    'team.usecases.title': 'Use Case Internal Kami',
    'team.usecases.subtitle': 'Solusi AI dunia nyata yang kami bangun untuk tim kami sendiri',
    'team.usecases.case1.title': 'Generasi Skrip + Supabase',
    'team.usecases.case1.description': 'Mesin pembuatan konten bertenaga AI yang menghasilkan skrip berkualitas tinggi dan menyimpannya di Supabase untuk akses dan pengelolaan yang mudah.',
    'team.usecases.case2.title': 'Bot Log Harian + Supabase',
    'team.usecases.case2.description': 'Sistem otomatis yang menangkap aktivitas dan wawasan harian, memfasilitasi transfer pengetahuan dan menyediakan sumber data yang kaya untuk sistem RAG.',
    'team.usecases.case3.title': 'Pelacak Deployment',
    'team.usecases.case3.description': 'Solusi efisien yang memantau dan mengelola deployment, meningkatkan profesionalisme dan memungkinkan operasi yang dapat diskalakan.',
    'team.usecases.case4.title': 'Lead Tracker Otomatis',
    'team.usecases.case4.description': 'Sistem manajemen lead otomatis yang menangkap, mengkualifikasi, dan memelihara prospek, berfungsi sebagai mesin pertumbuhan untuk pengembangan bisnis.',
    'team.usecases.case5.title': 'Penjadwal Konten',
    'team.usecases.case5.description': 'Alat penjadwalan konten multi-platform yang mengoptimalkan waktu posting dan mengelola distribusi konten di berbagai saluran untuk jangkauan maksimal.',
    'team.usecases.case6.title': 'Pipeline Umpan Balik',
    'team.usecases.case6.description': 'Pendekatan sistematis untuk mengumpulkan, menganalisis, dan menerapkan umpan balik pengguna, memastikan kesesuaian produk-pasar dan perbaikan berkelanjutan.',
    'team.usecases.case7.title': 'Bot Ringkasan Kinerja',
    'team.usecases.case7.description': 'Alat analisis kinerja otomatis yang memberikan wawasan motivasi dan memperkuat budaya perusahaan melalui umpan balik berbasis data.',

    // Process Section
    'process.title': 'Proses Implementasi Terbukti Kami',
    'process.subtitle': 'Pendekatan transparan dan efisien yang memberikan hasil dengan gangguan minimal pada bisnis Anda',
    'process.step1.title': 'Panggilan Discovery',
    'process.step1.subtitle': 'Konsultasi gratis 30 menit',
    'process.step1.description': 'Memahami tantangan bisnis Anda dan mengidentifikasi peluang otomasi',
    'process.step1.analysis.title': 'Analisis Bisnis',
    'process.step1.analysis.item1': 'Analisis proses bisnis',
    'process.step1.analysis.item2': 'Penilaian potensi otomasi',
    'process.step1.discovery.title': 'Discovery Solusi',
    'process.step1.discovery.item1': 'Identifikasi titik masalah',
    'process.step1.discovery.item2': 'Peta jalan solusi khusus',
    'process.step2.title': 'Strategi & Perencanaan',
    'process.step2.description': 'Analisis detail dan pengembangan strategi otomasi khusus yang disesuaikan dengan kebutuhan spesifik Anda',
    'process.step2.item1': 'Pemetaan dan optimisasi alur kerja',
    'process.step2.item2': 'Pemilihan stack teknologi',
    'process.step2.item3': 'Timeline implementasi',
    'process.step2.item4': 'Proyeksi ROI dan metrik kesuksesan',
    'process.step3.title': 'Pengembangan & Testing',
    'process.step3.description': 'Membangun dan menguji secara menyeluruh solusi otomasi khusus Anda menggunakan platform N8N terbukti',
    'process.step3.item1': 'Pengembangan alur kerja khusus',
    'process.step3.item2': 'Setup integrasi sistem',
    'process.step3.item3': 'Protokol testing komprehensif',
    'process.step3.item4': 'Testing penerimaan pengguna',
    'process.step4.title': 'Deployment & Pelatihan',
    'process.step4.description': 'Implementasi mulus dengan pelatihan tim komprehensif dan dukungan berkelanjutan',
    'process.step4.item1': 'Pendekatan deployment bertahap',
    'process.step4.item2': 'Pelatihan tim dan dokumentasi',
    'process.step4.item3': 'Setup pemantauan kinerja',
    'process.step4.item4': 'Optimisasi berkelanjutan',

    // Contact Form Section
    'contact.title': 'Sistem AI terbaik dibangun berdampingan.',
    'contact.subtitle': 'Mari Bermitra',
    'contact.formTitle': 'Ceritakan di mana posisi Anda saat ini',
    'contact.namePlaceholder': 'Siapa nama Anda?',
    'contact.emailPlaceholder': 'Apa email Anda?',
    'contact.rolePlaceholder': 'Apa peran Anda di perusahaan?',
    'contact.companyPlaceholder': 'Nama Perusahaan',
    'contact.websitePlaceholder': 'Website Perusahaan (opsional)',
    'contact.companySizePlaceholder': 'Ukuran Perusahaan',
    'contact.companySize1': '1-10 karyawan',
    'contact.companySize2': '11-50 karyawan',
    'contact.companySize3': '51-200 karyawan',
    'contact.companySize4': '201-500 karyawan',
    'contact.companySize5': '500+ karyawan',
    'contact.revenuePlaceholder': 'Pendapatan Tahunan',
    'contact.revenue1': 'Di bawah IDR 100.000.000',
    'contact.revenue2': 'IDR 100.000.000 - IDR 250.000.000',
    'contact.revenue3': 'IDR 250.000.000 - IDR 500.000.000',
    'contact.revenue4': 'IDR 500.000.000 - IDR 1.000.000.000',
    'contact.revenue5': 'IDR 1.000.000.000+',
    'contact.budgetPlaceholder': 'Rentang Anggaran',
    'contact.budget1': 'Di bawah IDR 5.000.000',
    'contact.budget2': 'IDR 5.000.000 - IDR 15.000.000',
    'contact.budget3': 'IDR 15.000.000 - IDR 50.000.000',
    'contact.budget4': 'IDR 50.000.000 - IDR 100.000.000',
    'contact.budget5': 'IDR 100.000.000+',
    'contact.servicesPlaceholder': 'Layanan apa yang Anda minati?',
    'contact.service1': 'Mengidentifikasi peluang AI',
    'contact.service2': 'Otomasi & Pengembangan AI',
    'contact.service3': 'Pembuatan Konten AI',
    'contact.service4': 'Solusi Pemasaran AI',
    'contact.service5': 'Pelatihan & Dukungan Tim',
    'contact.service6': 'Solusi AI Kustom',
    'contact.messagePlaceholder': 'Pesan',
    'contact.submitButton': 'Kirim pertanyaan',
    'contact.submittingText': 'Membuka klien email...',
    'contact.successTitle': 'Klien email berhasil dibuka!',
    'contact.successMessage': 'Silakan kirim email dari klien email Anda untuk menyelesaikan pertanyaan Anda.',
    'contact.errorMessage': 'Tidak dapat membuka klien email. Silakan hubungi kami langsung di hello@orchesagency.com',
    'contact.directContact': 'Lebih suka jadwal langsung?',

    // Footer
    'footer.services': 'Layanan',
    'footer.company': 'Perusahaan',
    'footer.contact': 'Kontak',
    'footer.aboutUs': 'Tentang Kami',
    'footer.ourTeam': 'Tim Kami',
    'footer.bookCall': 'Jadwalkan Konsultasi',
    'footer.email': 'Email:',
    'footer.phone': 'Telepon:',
    'footer.location': 'Lokasi:',
    'footer.copyright': '© 2025 Orches AI Agency. Semua hak dilindungi.',
    'footer.description': 'Memberdayakan UKM Indonesia dengan solusi otomasi cerdas. Nilai nyata, tanpa omong kosong. Kemitraan win-win untuk pertumbuhan berkelanjutan.',
    'footer.aiAutomation': 'Otomasi AI',
    'footer.aiContent': 'Pembuatan Konten AI',
    'footer.aiMarketing': 'Pemasaran AI',
    'footer.teamTraining': 'Pelatihan Tim',

    // Language Toggle
    'language.english': 'Bahasa Inggris',
    'language.indonesian': 'Bahasa Indonesia',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
