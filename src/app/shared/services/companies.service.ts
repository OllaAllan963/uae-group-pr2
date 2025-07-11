import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { ICompany, SubCompany } from '../../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.myVideo.nativeElement;
    video.muted = true; // ensure muted
    video.play().catch(err => {
      console.log('Autoplay prevented:', err);
    });
  }

  constructor() { }

  companies: Array<ICompany> = [
    {
      id: 1,
      image: 'assets/images/carousel/img1.jpg',
      image1: "assets/images/carousel/img11.png",
      video: 'assets/videos/investement.mp4',
      video2: 'assets/videos/investement2.mp4',
      caption: "Empowering growth through strategic investment",
      captionAr: 'تمكين النمو من خلال الاستثمار الاستراتيجي',
      title: 'UAE Investment and Development',
      titleAr: 'يو إيه إي للإستثمار والتنمية',
      description: "UAE Investment and Development Group connects global investors with Gulf opportunities across key sectors. We offer expert support, financing, and strategic partnerships to grow your business.",
      descriptionAr: "مجموعة الإمارات للاستثمار والتطوير تربط المستثمرين العالميين بفرص الاستثمار في الخليج عبر القطاعات الرئيسية. نقدم لكم دعمًا متخصصًا وتمويلًا وشراكات استراتيجية لتنمية أعمالكم.",
      description1: "IDG bridges global innovation with local expertise, helping foreign businesses grow across the UAE. Based in Dubai, we empower diverse entrepreneurs through regional knowledge and resources.",
      description1Ar: "تجمع IDG بين الابتكار العالمي والخبرة المحلية، مما يساعد الشركات الأجنبية على النمو في جميع أنحاء الإمارات العربية المتحدة. انطلاقًا من مقرنا في دبي، نمكّن رواد الأعمال المتنوعين من خلال المعرفة والموارد الإقليمية.",
      description2: "We support startups and enterprises across sectors like tourism, health, and agriculture. With strong GCC ties, we connect clients to top investors in Saudi Arabia, Qatar, and beyond.",
      description2Ar: "ندعم الشركات الناشئة والمؤسسات في قطاعات مثل السياحة والصحة والزراعة. بفضل علاقاتنا القوية مع دول مجلس التعاون الخليجي، نربط عملائنا بكبار المستثمرين في المملكة العربية السعودية وقطر وغيرهما."
    },
    {
      id: 2,
      image: 'assets/images/carousel/img2.png',
      image1: "assets/images/carousel/img14.png",
      video: 'assets/videos/properties.mp4',
      video2: 'assets/videos/properties2.mp4',
      caption: "Your partner in profitable property investment",
      captionAr: 'شريكك في الاستثمار العقاري المربح',
      title: 'UAE International Property',
      titleAr: 'يو إيه إي الدولية للعقارات',
      description: 'part of the prestigious UAE Group, is a leading real estate enterprise specializing in premium residential, commercial, and investment opportunities across the United Arab Emirates. With a focus on quality, integrity, and innovation, we connect clients with properties that define luxury, value, and lasting potential.',
      descriptionAr: 'التابعة لمجموعة يو إيه إي المرموقة ، هي شركة عقارية رائدة متخصصة في توفير فرص سكنية وتجارية واستثمارية فاخرة في جميع أنحاء الإمارات العربية المتحدة. مع تركيزنا على الجودة والنزاهة والابتكار، نربط عملائنا بعقارات تُجسّد الفخامة والقيمة العالية والإمكانات المستدامة.',
      description1: "UAE International Property leads in real estate management, brokerage, and land investment, offering tailored services for buying, selling, and property care with transparency and precision.",
      description1Ar: "تعد شركة يو إيه إي الدولية للعقارات رائدة في مجال إدارة العقارات والوساطة والاستثمار في الأراضي، وتقدم خدمات مصممة خصيصًا للشراء والبيع ورعاية العقارات بشفافية ودقة.",
      description2: " We manage all property types with end-to-end solutions, using smart systems for contracts, reporting, and tenant support to maximize returns and strengthen owner-tenant ties.",
      description2Ar: "نحن ندير جميع أنواع الممتلكات بحلول شاملة، باستخدام أنظمة ذكية للعقود وإعداد التقارير ودعم المستأجرين لتحقيق أقصى قدر من العائدات وتعزيز العلاقات بين المالك والمستأجر."
    },
    // {
    //   id: 3,
    //   image: 'assets/images/carousel/img3.png',
    //   caption: "Trusted cleaning experts for every need",
    //   captionAr: 'خبراء التنظيف الموثوق بهم لكل احتياجاتك',
    //   title: 'UAE Cleaning Services',
    //   titleAr: 'الإمارات العربية المتحدة لخدمات التنظيف',
    //   description: 'We offer professional cleaning services across the UAE for buildings, offices, flats, and vehicles. Using eco-friendly products and advanced techniques, we ensure thorough, hygienic cleaning—from regular maintenance to deep and specialized cleaning—delivering reliable, high-quality results.'
    // },
    {
      id: 3,
      image: 'assets/images/carousel/img4.png',
      video: 'assets/videos/gt1.mp4',
      video2: 'assets/videos/gt2.mp4',
      caption: "Where Global Trade Meets Local Trust",
      captionAr: 'حيث تلتقي التجارة العالمية بالثقة المحلية',
      title: 'UAE General Trading',
      titleAr: 'يو إيه إي للتجارة العامة',
      description: 'We specialize in sourcing and supplying a wide range of products, including consumer goods, industrial materials, household items, and other essential commodities. Supported by strong global networks and deep market insight, we deliver efficient, reliable, and seamless trade solutions tailored to your specific needs.',
      descriptionAr: 'نحن متخصصون في توريد مجموعة واسعة من المنتجات، بما في ذلك السلع الاستهلاكية، والمواد الصناعية، والأدوات المنزلية، وغيرها من السلع الأساسية. بفضل شبكاتنا العالمية القوية ومعرفتنا العميقة بالسوق، نقدم حلولاً تجارية فعّالة وموثوقة وسلسة، مصممة خصيصاً لتلبية احتياجاتكم الخاصة.'
    },
    {
      id: 4,
      image: 'assets/images/carousel/img7.jpg',
      video: 'assets/videos/is1.mp4',
      video2: 'assets/videos/is2.mp4',
      caption: "Technology Solutions Tailored for Your Growth",
      captionAr: 'حلول تكنولوجية مصممة خصيصًا لنموك',
      title: 'UAE Information Systems',
      titleAr: 'يو إيه إي لأنظمة المعلومات',
      description: 'We deliver innovative and dependable technology solutions that boost business efficiency and connectivity. By streamlining data management and strengthening IT infrastructure, we help organizations adapt, grow, and stay competitive in today’s fast-evolving digital landscape. Our commitment to excellence ensures tailored support that meets the unique needs of each client.',
      descriptionAr: "نقدم حلولاً تقنية مبتكرة وموثوقة تعزز كفاءة الأعمال وترابطها. من خلال تبسيط إدارة البيانات وتعزيز البنية التحتية لتكنولوجيا المعلومات، نساعد المؤسسات على التكيف والنمو والحفاظ على قدرتها التنافسية في ظل التطور الرقمي السريع اليوم. التزامنا بالتميز يضمن دعمًا مصممًا خصيصًا لتلبية الاحتياجات الفريدة لكل عميل."
    },
    // {
    //   id: 5,
    //   image: 'assets/images/carousel/img9.png',
    //   caption: "Explore Our Other Companies",
    //   captionAr: 'استكشف شركاتنا الأخرى',
    //   title: 'Other Companies',
    //   titleAr: 'شركات أخرى',
    //   description: 'Explore our other companies offering expert solutions in facilities management, IT services, and document clearing—designed to support every aspect of your business journey.'
    // },
    {
      id: 5,
      image: 'assets/images/carousel/img5.png',
      video: 'assets/videos/cb1.mp4',
      video2: 'assets/videos/cb2.mp4',
      caption: "Trusted Commercial Brokerage. Proven Business Results",
      captionAr: 'وساطة تجارية موثوقة. نتائج أعمال مثبتة',
      title: 'UAE Commercial Broker',
      titleAr: 'يو إيه إي للوساطة التجارية',
      description: 'We specialize in facilitating successful commercial transactions by connecting businesses with the right opportunities. With deep market knowledge and a client-focused approach, we provide reliable brokerage services that support growth, investment, and long-term success. Whether you are buying, selling, or leasing, we ensure transparent, strategic, and efficient deals every step of the way.',
      descriptionAr: "نحن متخصصون في تسهيل المعاملات التجارية الناجحة من خلال ربط الشركات بالفرص المناسبة. بفضل معرفتنا العميقة بالسوق ونهجنا المُركّز على العميل، نُقدّم خدمات وساطة موثوقة تدعم النمو والاستثمار والنجاح على المدى الطويل. سواءً كنتم تُجرون عمليات شراء أو بيع أو استئجار، نضمن لكم صفقات شفافة واستراتيجية وفعّالة في كل خطوة."
    },
    {
      id: 6,
      image: 'assets/images/carousel/img6.jpg',
      video: 'assets/videos/fm1.mp4',
      video2: 'assets/videos/fm2.mp4',
      caption: "Keeping Your Facilities Safe and Efficient",
      captionAr: 'الحفاظ على سلامة وكفاءة مرافقك',
      title: 'UAE Facilities Management Services',
      titleAr: 'يو إيه إي لخدمات إدارة المرافق',
      description: 'We offer comprehensive facilities management to keep your properties safe, efficient, and well-maintained. Our expert team handles maintenance, cleaning, security, and technical support, ensuring smooth operations. We tailor services to meet each client’s needs, enhancing property value and occupant satisfaction.',
      descriptionAr: "نقدم إدارة شاملة للمرافق لضمان سلامة عقاراتكم وكفاءتها وصيانتها. يتولى فريقنا الخبير أعمال الصيانة والتنظيف والأمن والدعم الفني، لضمان سير العمل بسلاسة. نصمم خدماتنا خصيصًا لتلبية احتياجات كل عميل، مما يعزز قيمة العقار ويضمن رضا شاغليه."
    },
    {
      id: 7,
      image: 'assets/images/carousel/img8.jpg',
      video: 'assets/videos/dc1.mp4',
      video2: 'assets/videos/dc2.mp4',
      title: 'UAE Documents Clearing',
      titleAr: "يو إيه إي لتخليص المعاملات",
      caption: "Fast. Reliable. Hassle-Free Document Services",
      captionAr: "خدمات مستندات سريعة وموثوقة وسهلة",
      description: 'UAE Documents Clearing provides 24/7 document management, clearance, and follow-up across all government departments. We also offer comprehensive secretarial, travel, and meeting coordination services to enhance business efficiency.',
      descriptionAr: "تقدم شركة يو إيه إي لتخليص المعاملات خدمات إدارة وتخليص ومتابعة المستندات على مدار الساعة طوال أيام الأسبوع في جميع الدوائر الحكومية. كما نقدم خدمات سكرتارية شاملة، وخدمات السفر، وتنسيق الاجتماعات، لتعزيز كفاءة الأعمال."
    }
  ];

  getCompanies(): Array<ICompany> {
    return this.companies
  }

  getCompany(id: string): ICompany {
    const numericId = Number(id);
    const result = this.companies.find(companies => companies.id === numericId);
    if (!result) {
      throw new Error(`Company with ID ${numericId} not found`);
    }
    return result;
  }
}
