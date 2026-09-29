import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, ArrowRight, Search, Tag, Sparkles, 
  BookOpen, Share2, Check, X, ChevronRight, Bookmark, ArrowLeft,
  ShieldCheck, Award, HeartPulse, FileText, CheckCircle2
} from 'lucide-react';

const CATEGORIES = [
  'All Posts',
  'Fat Freezing',
  'Non-Invasive Sculpting',
  'Skin Tightening',
  'Clinical Diagnosis',
  'Diet & Nutrition'
];

const BLOG_POSTS = [
  {
    id: 'cryosculpt-vs-lipo',
    title: 'CryoSculpt 360° vs. Traditional Liposuction: What Science & Surgeons Say in 2026',
    category: 'Fat Freezing',
    featured: true,
    image: '/images/treatment-cryo.jpg',
    readTime: '5 min read',
    date: 'Sep 24, 2026',
    author: {
      name: 'Dr. Arvind Swaminathan',
      role: 'Chief Aesthetic Physician',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80',
    },
    excerpt:
      'A comprehensive clinical breakdown of non-surgical fat crystallization vs invasive surgery: cellular apoptosis rates, recovery periods, safety profiles, and cost comparisons.',
    content: [
      {
        type: 'paragraph',
        text: 'Stubborn pockets of adipose tissue—commonly concentrated around the lower abdomen, flanks, and inner thighs—often resist even the most disciplined workout routines and caloric deficits. For decades, traditional suction-assisted liposuction stood as the sole clinical intervention. However, advancements in non-invasive thermal cryolipolysis have fundamentally transformed modern body contouring.'
      },
      {
        type: 'heading',
        text: 'How CryoSculpt 360° Induces Natural Cell Apoptosis'
      },
      {
        type: 'paragraph',
        text: 'Unlike mechanical suction that physically tears fat deposits under general anesthesia, CryoSculpt 360° harnesses the biological vulnerability of adipocytes to precise cold temperatures (-9°C to -11°C). While surrounding skin, nerves, and vascular channels remain completely unharmed, lipid cells undergo programmed cell death (apoptosis).'
      },
      {
        type: 'takeaways',
        items: [
          'Zero Anesthesia & Zero Cuts: Walk in during lunch break and return to work immediately.',
          'Documented 25% to 30% Fat Reduction in the treated zone over 4 to 8 weeks.',
          'Eliminated fat cells are flushed naturally via the lymphatic system and liver.',
          'Significantly lower cost and zero surgical recovery downtime compared to traditional lipo.'
        ]
      },
      {
        type: 'heading',
        text: 'Who is the Ideal Candidate?'
      },
      {
        type: 'paragraph',
        text: 'Candidates with pinchable localized fat deposits looking for natural body contouring without the trauma of invasive surgery will find CryoSculpt 360° an optimal solution. During your initial consultation at Tenziaa Clinic, a 3D ultrasound scan determines your exact subcutaneous fat thickness.'
      }
    ]
  },
  {
    id: 'deoxycholic-acid-chin',
    title: 'How Deoxycholic Acid Permanently Dissolves Double Chin Without Surgery',
    category: 'Non-Invasive Sculpting',
    featured: false,
    image: '/images/chin-reduction.jpg',
    readTime: '4 min read',
    date: 'Sep 18, 2026',
    author: {
      name: 'Dr. Radhika Menon',
      role: 'Senior Dermatologist',
      avatar: 'https://images.unsplash.com/photo-1594824813576-6415f3ec52a4?w=120&auto=format&fit=crop&q=80',
    },
    excerpt:
      'Discover how targeted micro-injections break down stubborn submental fat cell walls permanently, revealing a defined jawline with zero stitches or downtime.',
    content: [
      {
        type: 'paragraph',
        text: 'Submental fullness—commonly known as a double chin—can be genetically predetermined and largely immune to weight loss. Deoxycholic acid is a naturally synthesized bile acid that breaks down dietary fat in the gut. In aesthetic medicine, a bio-identical formulation is injected to permanently dissolve localized fat.'
      },
      {
        type: 'takeaways',
        items: [
          'US-FDA cleared injectable treatment specifically calibrated for submental fullness.',
          'Destroys cell membranes permanently: eliminated fat cells cannot re-accumulate.',
          'Noticeable contouring and jawline definition appearing over 2 to 4 sessions.'
        ]
      }
    ]
  },
  {
    id: 'rf-skin-tightening',
    title: 'The Science of RF Skin Tightening: Why Collagen Stimulates Post-Inch Loss',
    category: 'Skin Tightening',
    featured: false,
    image: '/images/rf-sculpting.jpg',
    readTime: '6 min read',
    date: 'Sep 12, 2026',
    author: {
      name: 'Clinical Team Tenziaa',
      role: 'Aesthetic Research Division',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&auto=format&fit=crop&q=80',
    },
    excerpt:
      'Why losing centimeters quickly can lead to loose skin, and how multi-polar radiofrequency heat energy rebuilds structural elastin matrices for firm, youthful skin.',
    content: [
      {
        type: 'paragraph',
        text: 'When subcutaneous fat deposits decrease rapidly, the overlying skin often struggles to retract due to depleted dermal collagen and degraded elastin fibers. Multi-polar radiofrequency (RF) delivers volumetric thermal energy to the deep dermis, stimulating immediate neocollagenesis.'
      },
      {
        type: 'takeaways',
        items: [
          'Safe, controlled dermal heating (40°C-42°C) triggers immediate collagen contraction.',
          'Long-term cellular synthesis of new collagen and elastin fibers over 60-90 days.',
          'Painless, soothing warm massage sensation with zero skin peeling or recovery time.'
        ]
      }
    ]
  },
  {
    id: 'subcutaneous-vs-visceral',
    title: 'Subcutaneous vs. Visceral Fat: What Your 3D Body Composition Scan Reveals',
    category: 'Clinical Diagnosis',
    featured: false,
    image: '/images/hero-clinic.jpg',
    readTime: '4 min read',
    date: 'Sep 05, 2026',
    author: {
      name: 'Dr. S. K. Narayanan',
      role: 'Bariatric Consultant',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=120&auto=format&fit=crop&q=80',
    },
    excerpt:
      'Understanding why diet-resistant fat refuses to budge and how localized acoustic cavitation micro-targets pinchable adipocytes for measurable inch loss.',
    content: [
      {
        type: 'paragraph',
        text: 'Not all fat is biologically equal. Visceral fat wraps around internal organs and is highly responsive to caloric deficits and cardiovascular conditioning. Subcutaneous fat, located immediately beneath the dermal layer, has fewer beta-receptors and is hormonally resistant to standard dieting.'
      },
      {
        type: 'takeaways',
        items: [
          '3D Ultrasound Scanning accurately maps your ratio of subcutaneous to visceral tissue.',
          'Non-invasive slimming specifically targets subcutaneous fat layers resistant to diet.',
          'Helps formulate a hybrid protocol of targeted inch loss and metabolic nutritional coaching.'
        ]
      }
    ]
  },
  {
    id: 'vfit-body-contouring',
    title: 'V-Fit Body Contouring: How Lunchtime 45-Minute Sessions Deliver Real Results',
    category: 'Non-Invasive Sculpting',
    featured: false,
    image: '/images/vfit-contour.jpg',
    readTime: '5 min read',
    date: 'Aug 29, 2026',
    author: {
      name: 'Dr. Arvind Swaminathan',
      role: 'Chief Aesthetic Physician',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80',
    },
    excerpt:
      'Explore how synchronized radiofrequency paired with deep muscular contraction contours the abdomen, flanks, and thighs without downtime.',
    content: [
      {
        type: 'paragraph',
        text: 'V-Fit represents next-generation comprehensive contouring. By simultaneously inducing supramaximal muscle contractions and subdermal fat apoptosis, patients achieve both firm muscle definition and circumferential centimeter reduction in single sessions.'
      },
      {
        type: 'takeaways',
        items: [
          'Equivalency of 20,000 abdominal crunches in a 30-minute reclining session.',
          'Dual mechanism: +25% average muscle fiber hypertrophy and -30% localized fat layer.',
          'Safe for all skin tones and requiring zero post-session downtime.'
        ]
      }
    ]
  },
  {
    id: 'metabolic-nutrition-rules',
    title: 'Metabolic Nutrition: 7 Doctor-Approved Rules to Prevent Fat Rebound',
    category: 'Diet & Nutrition',
    featured: false,
    image: '/images/wellness-fitness.jpg',
    readTime: '7 min read',
    date: 'Aug 20, 2026',
    author: {
      name: 'Meera Krishnan',
      role: 'Lead Clinical Nutritionist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    },
    excerpt:
      'The biological secret to maintaining your new sculpted silhouette long-term through circadian meal timing, hydration, and lymphatic drainage support.',
    content: [
      {
        type: 'paragraph',
        text: 'After eliminating stubborn fat cells through CryoSculpt or V-Fit, preserving your sculpted silhouette requires keeping remaining adipocytes from expanding. Sustainable metabolic nutrition prioritizes hormonal insulin stabilization over restrictive crash starvation.'
      },
      {
        type: 'takeaways',
        items: [
          'Prioritize 1.5g protein per kilogram of body weight to preserve metabolic lean tissue.',
          'Drink at least 3 liters of structured water daily to assist lymphatic flush of lipids.',
          'Align complex carbohydrate consumption with your natural circadian insulin sensitivity window.'
        ]
      }
    ]
  }
];

export default function BlogPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Scroll to top upon page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Filter posts based on Category and Search Query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === 'All Posts' || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSubscribed(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-slate-800 flex flex-col">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-emerald-50/70 border-b border-emerald-100/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <Link to="/" className="text-emerald-800 hover:text-emerald-950 font-bold hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-slate-900">Clinical Journal &amp; Blog</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-800 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 hover:border-[#84cc16] shadow-2xs transition-all"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Blog Page Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-emerald-200/25 blur-3xl rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#84cc16]/10 blur-3xl rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-[#84cc16]/50 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#65a30d]" />
            <span>The Official Tenziaa Clinical Aesthetic Journal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Science, Biology &amp; Real Transformations in{' '}
            <span className="bg-gradient-to-r from-emerald-800 via-[#65a30d] to-teal-700 bg-clip-text text-transparent">
              Non-Invasive Slimming
            </span>
          </h1>

          <div className="pt-3 flex justify-center">
            <div className="w-20 h-1.5 bg-[#84cc16] rounded-full"></div>
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Curated clinical insights, doctor explanations of US-FDA cleared fat reduction technologies, and evidence-based metabolic guides to help you make informed body shaping decisions.
          </p>

          {/* Quick Stats Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
              <FileText className="w-4 h-4 text-[#65a30d]" />
              <span>15+ Clinical Articles</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
              <Award className="w-4 h-4 text-[#65a30d]" />
              <span>6 Certified Aesthetic MDs</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#65a30d]" />
              <span>100% Medically Fact-Checked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        
        {/* Search & Category Filter Bar */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-88">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search treatments, topics, doctors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 focus:border-[#84cc16] focus:ring-2 focus:ring-[#84cc16]/20 text-sm text-slate-800 placeholder-slate-400 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#84cc16] hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Featured Hero Article Banner */}
        {activeCategory === 'All Posts' && !searchQuery && featuredPost && (
          <div className="mb-14">
            <div className="group relative rounded-3xl bg-white border-2 border-[#84cc16] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Image side */}
              <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[440px] relative overflow-hidden bg-slate-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#84cc16] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md">
                    Featured Medical Guide
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 font-semibold text-xs shadow-sm">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#65a30d]" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#65a30d]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-emerald-900 transition-colors tracking-tight leading-snug">
                    {featuredPost.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#84cc16]"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{featuredPost.author.name}</h4>
                      <p className="text-[11px] text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(featuredPost)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-[#65a30d] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md group-hover:scale-105 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-2 hover:border-[#84cc16] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Post Thumbnail */}
              <div className="relative h-56 overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-emerald-950 font-bold text-[11px] uppercase tracking-wider shadow-sm border border-emerald-100">
                  {post.category}
                </span>

                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-medium text-[11px] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#a3e635]" />
                  {post.readTime}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>Verified Review</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#84cc16]"
                    />
                    <div className="truncate max-w-[130px]">
                      <h4 className="text-xs font-bold text-slate-900 truncate">{post.author.name}</h4>
                      <p className="text-[10px] text-slate-400 truncate">{post.author.role}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(post)}
                    className="inline-flex items-center justify-center p-2.5 rounded-full bg-emerald-50 text-emerald-900 group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors cursor-pointer"
                    title="Read full article"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto p-8 shadow-sm">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-slate-900">No articles matched your search</h4>
            <p className="text-xs text-slate-500 mt-1">
              Try searching for "CryoSculpt", "Chin", "Skin Tightening", or clear your filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Posts');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Newsletter & Clinical Updates Banner */}
        <div className="mt-18 rounded-3xl bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-900 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-emerald-800/40">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#84cc16]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#84cc16]/20 border border-[#84cc16]/40 text-[#a3e635] text-[11px] font-bold uppercase tracking-wider">
              Free Monthly Aesthetic Journal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 tracking-tight">
              Get Doctor-Curated Fat Reduction Guides &amp; Exclusive Clinic Offers
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Join 12,000+ subscribers receiving clinical updates on non-invasive slimming breakthroughs, diet protocols, and private consultation discounts.
            </p>

            {newsletterSubscribed ? (
              <div className="mt-6 p-4 rounded-2xl bg-emerald-700/80 border border-emerald-400 text-white text-sm flex items-center gap-2">
                <Check className="w-5 h-5 text-[#a3e635]" />
                <span>Thank you! You are subscribed. Check your inbox for the 3D Body Scan welcome guide.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your personal email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#84cc16] focus:bg-white/15"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-[#84cc16] hover:bg-[#a3e635] text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Consultation Call-to-Action */}
        <div className="mt-16 text-center bg-white rounded-3xl border-2 border-[#84cc16] p-8 sm:p-12 shadow-lg">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
            Ready to Begin Your Slimming Journey?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Complimentary 3D Ultrasound Body Fat Scan
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            Meet with our aesthetic physicians in Salem and discover the custom non-invasive treatment protocol engineered for your body goals.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#84cc16] hover:bg-[#a3e635] text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105 cursor-pointer"
            >
              Book Free 3D Body Scan
            </button>
            <Link
              to="/"
              className="px-6 py-4 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Explore All Treatments
            </Link>
          </div>
        </div>

      </main>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all my-auto max-h-[92vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900 shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>

              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#84cc16] text-slate-950 backdrop-blur-md">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 space-y-6 overflow-y-auto flex-1">
              
              {/* Author & Meta */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedArticle.author.avatar}
                    alt={selectedArticle.author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#84cc16]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{selectedArticle.author.name}</h4>
                    <p className="text-xs text-slate-500">{selectedArticle.author.role}</p>
                  </div>
                </div>

                <div className="text-right text-xs text-slate-400">
                  <span>{selectedArticle.date}</span>
                  <span className="block text-emerald-800 font-semibold">{selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Dynamic Content Sections */}
              <div className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
                {selectedArticle.content.map((sec, i) => {
                  if (sec.type === 'heading') {
                    return (
                      <h4 key={i} className="text-lg sm:text-xl font-extrabold text-slate-900 pt-2">
                        {sec.text}
                      </h4>
                    );
                  }
                  if (sec.type === 'takeaways') {
                    return (
                      <div key={i} className="bg-emerald-50/70 p-5 rounded-2xl border-2 border-[#84cc16]/50 space-y-2.5">
                        <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider block">
                          Key Clinical Takeaways:
                        </span>
                        {sec.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                            <div className="w-4 h-4 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return <p key={i}>{sec.text}</p>;
                })}
              </div>

              {/* Call to Action Box */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Want Personalized Advice?</h4>
                  <p className="text-xs text-slate-500">Book your complimentary 3D Ultrasound Body Fat Scan.</p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedArticle(null);
                      if (onOpenBooking) onOpenBooking();
                    }}
                    className="flex-1 sm:flex-initial py-3 px-6 rounded-full bg-slate-900 hover:bg-[#84cc16] hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md text-center cursor-pointer"
                  >
                    Book Doctor Consult
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="py-3 px-5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
