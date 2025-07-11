import { Injectable } from '@angular/core';
import { CompanyDetails } from '../../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  companiesDetails: Array<CompanyDetails> = [
    {
      companyId: 1,
      title: "Investment Register Activities",
      titleAr: "أنشطة السجل الإستثماري",
      caption: "Empowering growth through strategic investment",
      captionAr: "تمكين النمو من خلال الاستثمار الاستراتيجي",
      activities: [
        { id: 1, name: 'General Trading', nameAr: "تجارة عامة", image: 'assets/images/slider/img1.jpg', description: "is a core activity of UAE Investment and Development Company, enabling the import, export, and distribution of diverse products. Through strategic partnerships and market expertise, we support trade operations that drive economic growth and meet regional demand efficiently.", descriptionAr: "يُعدّ قطاع التجارة أحد الأنشطة الرئيسية لشركة الإمارات للاستثمار والتطوير، حيث يُمكّن من استيراد وتصدير وتوزيع منتجات متنوعة. ومن خلال شراكاتنا الاستراتيجية وخبرتنا في السوق، ندعم العمليات التجارية التي تُحفّز النمو الاقتصادي وتُلبّي الطلب الإقليمي بكفاءة." },
        { id: 2, name: 'Investment in Commercial Management', nameAr: "الاستثمار في الإدارة التجارية", image: 'assets/images/slider/img2.jpg', description: "is a key activity of UAE Investment and Development Company, focused on enhancing the value of commercial assets. We offer strategic planning, operational oversight, and investment support to optimize performance and ensure long-term profitability of commercial properties.", descriptionAr: "يُعدّ الاستثمار العقاري أحد الأنشطة الرئيسية لشركة الإمارات للاستثمار والتطوير، ويركز على تعزيز قيمة الأصول التجارية. نقدم التخطيط الاستراتيجي والإشراف التشغيلي والدعم الاستثماري لتحسين الأداء وضمان ربحية العقارات التجارية على المدى الطويل." },
        { id: 3, name: 'Investment in Industrial Management', nameAr: "الاستثمار في الإدارة الصناعية", image: 'assets/images/slider/img3.jpg', description: "is a core activity of UAE Investment and Development Company, aimed at enhancing the value and performance of industrial assets. We support the development, operation, and modernization of industrial facilities to boost productivity, encourage innovation, and ensure sustainable growth.", descriptionAr: "يُعدّ الاستثمار الصناعي أحد الأنشطة الرئيسية لشركة الإمارات للاستثمار والتطوير، ويهدف إلى تعزيز قيمة الأصول الصناعية وأدائها. ندعم تطوير وتشغيل وتحديث المنشآت الصناعية لتعزيز الإنتاجية، وتشجيع الابتكار، وضمان النمو المستدام." },
        { id: 4, name: 'Investment in Agricultural Management', nameAr: "الاستثمار في الإدارة الزراعية", image: 'assets/images/slider/img4.jpg', description: "is a vital activity of UAE Investment and Development Company, focusing on developing and enhancing agricultural assets. We support modern farming, efficient operations, and innovative technologies to boost productivity and sustainability.", descriptionAr: "هو نشاط حيوي لشركة الإمارات للاستثمار والتطوير، يُركز على تطوير وتحسين الأصول الزراعية. ندعم الزراعة الحديثة، والعمليات الفعالة، والتقنيات المبتكرة لتعزيز الإنتاجية والاستدامة." },
        { id: 5, name: 'Investment in Oil and Natural Gas Projects', nameAr: "الاستثمار في مشاريع النفط والغاز الطبيعي", image: 'assets/images/slider/img5.jpg', description: "is a key focus of UAE Investment and Development Company. We support energy infrastructure and partner with industry leaders to promote sustainable extraction, efficient processing, and long-term sector growth.", descriptionAr: "يُعدّ قطاع الطاقة محورًا رئيسيًا لشركة الإمارات للاستثمار والتطوير. ندعم البنية التحتية للطاقة ونتعاون مع روّاد الصناعة لتعزيز الاستخراج المستدام والمعالجة الفعّالة ونموّ القطاع على المدى الطويل." },
        { id: 6, name: 'Investment in Sport Development', nameAr: "الاستثمار في تطوير الرياضة", image: 'assets/images/slider/img6.png', description: "is a key activity of UAE Investment and Development Company, focusing on promoting and developing sports initiatives. We support infrastructure, talent growth, and events to enhance the sports sector’s impact and sustainability.", descriptionAr: "يُعدّ قطاع الرياضة أحد الأنشطة الرئيسية لشركة الإمارات للاستثمار والتطوير، حيث يُركّز على تعزيز وتطوير المبادرات الرياضية. ندعم البنية التحتية، وتنمية المواهب، والفعاليات الرياضية لتعزيز تأثير القطاع الرياضي واستدامته." },
        { id: 7, name: 'Investment in Water Development', nameAr: "الاستثمار في تنمية المياه", image: 'assets/images/slider/img7.jpg', description: "is a vital activity of UAE Investment and Development Company, focusing on improving water resources and infrastructure. We support sustainable management, innovative technologies, and efficient solutions to enhance water availability and quality.", descriptionAr: "يُعدّ قطاع المياه أحد الأنشطة الحيوية لشركة الإمارات للاستثمار والتطوير، ويركز على تحسين موارد المياه والبنية التحتية. ندعم الإدارة المستدامة، والتقنيات المبتكرة، والحلول الفعّالة لتعزيز توافر المياه وجودتها." },
        { id: 8, name: 'Investment in Healthcare Development', nameAr: "الاستثمار في تطوير الرعاية الصحية", image: 'assets/images/slider/img8.jpg', description: "is a key activity of UAE Investment and Development Company, focused on advancing healthcare facilities and services. We promote innovative solutions, quality care, and sustainable growth in the healthcare sector.", descriptionAr: "يُعدّ أحد الأنشطة الرئيسية لشركة الإمارات للاستثمار والتطوير، ويركز على تطوير مرافق وخدمات الرعاية الصحية. ندعم الحلول المبتكرة والرعاية عالية الجودة والنمو المستدام في قطاع الرعاية الصحية." },
        { id: 9, name: 'Investment in Educational Development', nameAr: "الاستثمار في تطوير التعليم", image: 'assets/images/slider/img9.jpg', description: "is a key activity of UAE Investment and Development Company, aimed at enhancing educational institutions, infrastructure, and innovative learning methods to foster skilled and knowledgeable future generations.", descriptionAr: "يعد التعليم أحد الأنشطة الرئيسية لشركة الإمارات للاستثمار والتطوير، ويهدف إلى تعزيز المؤسسات التعليمية والبنية التحتية وأساليب التعلم المبتكرة لتعزيز الأجيال المستقبلية الماهرة والمعرفة." },
        { id: 10, name: 'Investment in Tourist Development', nameAr: "الاستثمار في التنمية السياحية", image: 'assets/images/slider/img10.jpg', description: "is a key activity of UAE Investment and Development Company, aimed at improving tourism facilities, supporting sustainable initiatives, and creating engaging experiences to drive growth and attract visitors to the region.", descriptionAr: "يعد تطوير المشاريع السياحية أحد الأنشطة الرئيسية لشركة الإمارات للاستثمار والتطوير، ويهدف إلى تحسين المرافق السياحية، ودعم المبادرات المستدامة، وخلق تجارب جذابة لدفع النمو وجذب الزوار إلى المنطقة." },
        { id: 11, name: 'Investment in Retail Development', nameAr: "الاستثمار في تطوير التجزئة", image: 'assets/images/slider/img11.png', description: "is a core activity of UAE Investment and Development Company, focused on enhancing retail spaces, improving customer experiences, and supporting sustainable growth to boost the retail sector’s performance and appeal.", descriptionAr: "يعد تطوير مساحات التجزئة أحد الأنشطة الأساسية لشركة الإمارات للاستثمار والتطوير، ويركز على تعزيز مساحات البيع بالتجزئة، وتحسين تجارب العملاء، ودعم النمو المستدام لتعزيز أداء قطاع التجزئة وجاذبيته." },
        { id: 12, name: 'Investment in Energy Development', nameAr: "الاستثمار في تنمية الطاقة", image: 'assets/images/slider/img12.png', description: "is a key focus of UAE Investment and Development Company, aimed at advancing sustainable energy projects, optimizing resource use, and supporting innovation to ensure long-term growth and energy efficiency.", descriptionAr: "يعد الاستثمار في الطاقة المستدامة أحد المحاور الرئيسية لشركة الإمارات للاستثمار والتطوير، والتي تهدف إلى تعزيز مشاريع الطاقة المستدامة، وتحسين استخدام الموارد، ودعم الابتكار لضمان النمو طويل الأجل وكفاءة الطاقة." }
      ]
    },
    {
      companyId: 2,
      title: "Properties Register Activities",
      titleAr: "أنشطة السجل العقاري",
      caption: "Your partner in profitable property investment",
      captionAr: "شريكك في الاستثمار العقاري المربح",
      activities: [
        { id: 1, name: 'Buying & Selling of Real Estate', nameAr: 'شراء وبيع العقارات', image: 'assets/images/properties/img1.png', description: "We offer expert support in real estate buying and selling across the UAE. We connect clients with the right opportunities through trusted advice and market expertise. Our process is transparent, efficient, and focused on delivering maximum value. From start to finish, we ensure smooth, successful property transactions.", descriptionAr: "نُسهّل معاملات العقارات من خلال توفير تجربة سلسة للمشترين والبائعين. نركز على الشفافية والأسعار العادلة ومساعدة عملائنا على تحقيق أقصى قيمة من استثماراتهم." },
        { id: 2, name: 'Real Estate Buying & Selling Brokerage', nameAr: 'وساطة شراء وبيع العقارات', image: 'assets/images/properties/img2.jpg', description: "We connect buyers and sellers through trusted, expert-led brokerage services. Our team provides market insights, personalized guidance, and seamless transaction support. We help buyers find the right properties and assist sellers in achieving optimal returns. With professionalism and transparency, we ensure smooth, successful deals across the UAE.", descriptionAr: "نربط المشترين والبائعين من خلال خدمات وساطة موثوقة بقيادة خبراء. يقدم فريقنا رؤىً شاملة للسوق، وإرشادات شخصية، ودعمًا سلسًا للمعاملات. نساعد المشترين في العثور على العقارات المناسبة، ونساعد البائعين على تحقيق أفضل العوائد. باحترافية وشفافية، نضمن صفقات سلسة وناجحة في جميع أنحاء الإمارات العربية المتحدة." },
        { id: 3, name: 'Leasing Property Brokerage Agents', nameAr: 'وكلاء الوساطة العقارية التأجيرية', image: 'assets/images/properties/img3.jpg', description: "We offer comprehensive leasing solutions designed to maximize exposure and minimize vacancy periods. Through strategic marketing, targeted outreach, and a deep understanding of local market dynamics, we help landlords lease their properties swiftly, securely, and at the best possible terms.", descriptionAr: "نقدم حلول تأجير شاملة مصممة لتعزيز حضورنا وتقليل فترات الشواغر. من خلال التسويق الاستراتيجي، والتواصل المُستهدف، والفهم العميق لديناميكيات السوق المحلية، نساعد مُلّاك العقارات على تأجير عقاراتهم بسرعة وأمان وبأفضل الشروط الممكنة." },
      ]
    },
    // {
    //   companyId: 3,
    //   title: "UAE Cleaning Services",
    //   caption: "Trusted cleaning experts for every need",
    //   activities: [
    //     { id: 1, name: 'Building Cleaning Services', image: 'assets/images/cleaning/img1.jpg', description: "We provide professional cleaning for residential and commercial buildings, including routine maintenance and deep cleaning. Our teams use eco-friendly products to keep spaces clean, safe, and welcoming for everyone." },
    //     { id: 2, name: 'Residential Property Care Services', image: 'assets/images/cleaning/img2.jpg', description: "We offer specialized cleaning and maintenance services to keep your home clean and welcoming. Using eco-friendly products, we ensure the health and safety of your family." },
    //     { id: 3, name: 'Disinfection & Sterilization Services', image: 'assets/images/cleaning/img3.jpg', description: "We provide professional disinfection and sterilization services to ensure safe and hygienic environments. Using advanced and effective methods, we eliminate harmful germs and bacteria." },
    //     { id: 4, name: 'Tanks & Containers Cleaning Services', image: 'assets/images/cleaning/img4.jpg', description: "We offer expert cleaning services for tanks and containers to ensure they remain safe and contaminant-free. Using advanced techniques, we thoroughly remove residues and buildup." },
    //     { id: 5, name: 'Dry Ice Blast Cleaning', image: 'assets/images/cleaning/img5.jpg', description: "We deliver specialized dry ice blast cleaning services that effectively eliminate dirt, grease, and buildup without causing surface damage. This non-abrasive, environmentally safe technique is ideal for a variety of applications." },
    //     { id: 6, name: 'Advertising Signboards Cleaning Services', image: 'assets/images/cleaning/img6.jpg', description: "We provide professional advertising signboard cleaning services to keep your signs clear, bright, and visually appealing. Using safe and effective methods, we remove dirt, dust, and weather buildup without damaging the surface. " },
    //     { id: 7, name: 'Carpets & Textiles Mending', image: 'assets/images/cleaning/img7.jpg', description: "We offer expert carpets and textiles mending services to restore the appearance and extend the life of your fabrics. From repairing tears and frays to reweaving and patching, our skilled team handles all types of damage with care. We ensure your carpets and textiles look refreshed, well-maintained, and ready for continued use." },
    //   ]
    // },
    {
      companyId: 3,
      title: "UAE General Trading",
      titleAr: "الإمارات العربية المتحدة للتجارة العامة",
      caption: "Where Global Trade Meets Local Trust",
      captionAr: 'حيث تلتقي التجارة العالمية بالثقة المحلية',
      activities: [
        { id: 1, name: 'General Trading', nameAr: "تجارة عامة", image: 'assets/images/generalTrading/img1.jpg', description: "We specialize in sourcing and delivering quality products across various industries, backed by trusted global partnerships and deep local market knowledge. Our focus is on providing reliable, customized trade solutions that meet your unique needs. Committed to excellence and innovation, we build long-term relationships through seamless transactions and sustainable practices.", descriptionAr: "نحن متخصصون في توفير وتسليم منتجات عالية الجودة عبر مختلف الصناعات، مدعومين بشراكات عالمية موثوقة ومعرفة عميقة بالأسواق المحلية. نركز على تقديم حلول تجارية موثوقة ومخصصة تلبي احتياجاتكم الفريدة. ملتزمون بالتميز والابتكار، نبني علاقات طويلة الأمد من خلال معاملات سلسة وممارسات مستدامة." },
      ]
    },
    {
      companyId: 4,
      caption: "Technology Solutions Tailored for Your Growth",
      captionAr: 'حلول تكنولوجية مصممة خصيصًا لنموك',
      title: 'UAE Information Systems',
      titleAr: 'الإمارات العربية المتحدة لأنظمة المعلومات',
      activities: [
        { id: 1, name: 'Computer Systems Housing Services', nameAr: "خدمات الإسكان لأنظمة الكمبيوتر", image: 'assets/images/it/img1.jpg', description: "We provide secure and reliable hosting solutions for your computer systems and servers, featuring advanced facilities with environmental controls and power redundancy. Our 24/7 monitoring and expert support ensure maximum uptime and data protection, allowing your business to run smoothly without infrastructure worries.", descriptionAr: "نقدم حلول استضافة آمنة وموثوقة لأنظمة الكمبيوتر والخوادم لديكم، مع مرافق متطورة مع ضوابط بيئية وتقنية توفير الطاقة. تضمن مراقبتنا على مدار الساعة طوال أيام الأسبوع ودعمنا الخبير أقصى درجات التشغيل وحماية البيانات، مما يسمح لأعمالكم بالعمل بسلاسة دون أي مشاكل تتعلق بالبنية التحتية." },
        { id: 2, name: 'Information Technology Network Services', nameAr: "خدمات شبكات تكنولوجيا المعلومات", image: 'assets/images/it/img2.jpg', description: "We deliver comprehensive network solutions designed to keep your business connected and secure. Our services include network design, implementation, monitoring, and maintenance, ensuring optimal performance and reliability. With robust security measures and expert support, we help protect your data and enable seamless communication across your organization.", descriptionAr: "نقدم حلولاً شبكية شاملة مصممة للحفاظ على اتصال أعمالك وأمانها. تشمل خدماتنا تصميم الشبكات وتنفيذها ومراقبتها وصيانتها، مما يضمن الأداء الأمثل والموثوقية. بفضل إجراءات الأمان القوية والدعم الفني المتميز، نساعد في حماية بياناتك وتمكين التواصل السلس في مؤسستك." },
        { id: 3, name: 'Data Entry Services', nameAr: "خدمات إدخال البيانات", image: 'assets/images/it/img3.jpg', description: "We offer accurate and efficient data entry solutions to help manage and organize your information. Our skilled team ensures fast processing with attention to detail, maintaining data integrity and confidentiality. By streamlining your data management, we support better decision-making and operational efficiency.", descriptionAr: "نقدم حلولاً دقيقة وفعّالة لإدخال البيانات لمساعدتك في إدارة معلوماتك وتنظيمها. يضمن فريقنا الماهر معالجة سريعة مع الاهتمام بالتفاصيل، والحفاظ على سلامة البيانات وسريتها. من خلال تبسيط إدارة بياناتك، ندعم اتخاذ قرارات أفضل وكفاءة تشغيلية." },
        { id: 4, name: 'Internet Content Provider', nameAr: "مزود محتوى الإنترنت", image: 'assets/images/it/img4.jpg', description: "We deliver high-quality, relevant digital content tailored to engage your target audience. Our services include content creation, management, and distribution across multiple online platforms. By providing timely and compelling information, we help enhance your brand presence and drive customer interaction.", descriptionAr: "نقدم محتوى رقميًا عالي الجودة وذا صلة، مصمم خصيصًا لجذب جمهورك المستهدف. تشمل خدماتنا إنشاء المحتوى وإدارته وتوزيعه عبر منصات إلكترونية متعددة. من خلال توفير معلومات دقيقة وفعّالة في الوقت المناسب، نساعد في تعزيز حضور علامتك التجارية وزيادة تفاعل العملاء." },
        { id: 5, name: 'IT Infrastructure', nameAr: "البنية التحتية لتكنولوجيا المعلومات", image: 'assets/images/it/img5.jpg', description: "We design, build, and maintain robust IT infrastructure that supports your business operations. Our solutions ensure reliable connectivity, secure data storage, and scalable systems to meet your evolving needs. With expert management and proactive support, we help maximize performance and efficiency.", descriptionAr: "نقوم بتصميم وبناء وصيانة بنية تحتية قوية لتكنولوجيا المعلومات تدعم عمليات أعمالكم. تضمن حلولنا اتصالاً موثوقًا، وتخزينًا آمنًا للبيانات، وأنظمة قابلة للتطوير لتلبية احتياجاتكم المتغيرة. بفضل الإدارة الخبيرة والدعم الاستباقي، نساعدكم على تحقيق أقصى قدر من الأداء والكفاءة." },
      ]
    },
    {
      companyId: 5,
      caption: "Trusted Commercial Brokerage. Proven Business Results",
      captionAr: 'وساطة تجارية موثوقة. نتائج أعمال مثبتة',
      title: 'UAE Commercial Broker',
      titleAr: 'الإمارات العربية المتحدة للوساطة التجارية',
      activities: [
        { id: 1, name: 'Commercial Brokers', nameAr: "الوسطاء التجاريون", image: 'assets/images/comB/img1.jpg', description: "Commercial brokers act as professional intermediaries, connecting buyers and sellers in business transactions such as property sales, leases, and investments. They offer expert market insight, negotiate on behalf of clients, and ensure smooth, transparent deals. Their goal is to secure the best terms while supporting business growth and long-term success.", descriptionAr: "يعمل الوسطاء التجاريون كوسطاء محترفين، يربطون بين المشترين والبائعين في المعاملات التجارية، مثل بيع العقارات والإيجارات والاستثمارات. يقدمون رؤىً سوقيةً متخصصة، ويتفاوضون نيابةً عن العملاء، ويضمنون صفقاتٍ سلسة وشفافة. هدفهم هو ضمان أفضل الشروط، مع دعم نمو الأعمال وتحقيق النجاح على المدى الطويل." },
      ]
    },
    {
      companyId: 6,
      caption: "Keeping Your Facilities Safe and Efficient",
      captionAr: 'الحفاظ على سلامة وكفاءة مرافقك',
      title: 'UAE Facilities Management Services',
      titleAr: 'الإمارات العربية المتحدة لخدمات إدارة المرافق',
      activities: [
        { id: 1, name: 'Business Entities Management Services', nameAr: "خدمات إدارة الكيانات التجارية", image: 'assets/images/fm/img1.jpg', description: "We provide comprehensive support for company formation, registration, and ongoing compliance to help businesses operate smoothly and meet regulatory requirements. Our services include handling documentation, licensing, and administrative tasks, allowing clients to focus on their core activities while we manage the complexities of business management.", descriptionAr: "نقدم دعمًا شاملًا لتأسيس الشركات وتسجيلها والامتثال المستمر لها، لمساعدة الشركات على العمل بسلاسة وتلبية المتطلبات التنظيمية. تشمل خدماتنا معالجة الوثائق والتراخيص والمهام الإدارية، مما يتيح للعملاء التركيز على أنشطتهم الرئيسية بينما نتولى نحن إدارة تعقيدات إدارة الأعمال." },
      ]
    },
        {
      companyId: 7,
      title: 'UAE Documents Clearing',
      titleAr: "تخليص معاملات في الإمارات العربية المتحدة",
      caption: "Fast. Reliable. Hassle-Free Document Services",
      captionAr: "خدمات مستندات سريعة وموثوقة وسهلة",
      activities: [
        { id: 1, name: 'Business Entities Management Services', nameAr: "خدمات إدارة الكيانات التجارية", image: 'assets/images/fm/img1.jpg', description: "We provide comprehensive support for company formation, registration, and ongoing compliance to help businesses operate smoothly and meet regulatory requirements. Our services include handling documentation, licensing, and administrative tasks, allowing clients to focus on their core activities while we manage the complexities of business management.", descriptionAr: "نقدم دعمًا شاملًا لتأسيس الشركات وتسجيلها والامتثال المستمر لها، لمساعدة الشركات على العمل بسلاسة وتلبية المتطلبات التنظيمية. تشمل خدماتنا معالجة الوثائق والتراخيص والمهام الإدارية، مما يتيح للعملاء التركيز على أنشطتهم الرئيسية بينما نتولى نحن إدارة تعقيدات إدارة الأعمال." },
      ]
    }
  ]

  getCompanyDetails(id: string): CompanyDetails {
    const numericId = Number(id);
    const result = this.companiesDetails.find(companyDetails => companyDetails.companyId === numericId);
    if (!result) {
      throw new Error(`Company with ID ${numericId} not found`);
    }
    return result;
  }
}
