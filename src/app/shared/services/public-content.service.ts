import { Injectable } from '@angular/core';
import { ChooseUs } from '../../app.component.models';

@Injectable({
  providedIn: 'root'
})
export class PublicContentService {

  constructor() { }

  chooseUs: Array<ChooseUs> = [
    {
      id: 1,
      image: "assets/images/icons/icon-5.png",
      name: 'Smart Investment',
      nameAr: 'الاستثمار الذكي',
      description: "Invest in one of the world’s most profitable real estate markets with high rental yields, zero income tax, and consistent capital appreciation in the UAE.",
      descriptionAr: "استثمر في أحد أكثر أسواق العقارات ربحية في العالم مع عائدات إيجارية عالية وضريبة دخل صفرية وتقدير رأس المال المستمر في دولة الإمارات العربية المتحدة."
    },
    {
      id: 2,
      image: "assets/images/icons/icon-1.png",
      name: 'Wide Renge Of Properties',
      nameAr: 'مجموعة واسعة من العقارات',
      description: "Discover a diverse portfolio of properties to suit every lifestyle and budget — from cozy apartments to luxurious estates, there’s something for everyone.",
      descriptionAr: "اكتشف مجموعة متنوعة من العقارات التي تناسب كل نمط حياة وميزانية - من الشقق المريحة إلى العقارات الفاخرة، هناك ما يناسب الجميع."
    },
    {
      id: 3,
      image: "assets/images/icons/icon-2.png",
      name: 'Trusted by thousands',
      nameAr: 'موثوق بها من قبل الآلاف',
      description: "Trusted by thousands for our dedication to excellence — experience the care and reliability that keeps clients returning and recommending confidently.",
      descriptionAr: "تحظى شركتنا بثقة الآلاف بفضل التزامنا بالتميز - جرب الرعاية والموثوقية التي تجعل العملاء يعودون ويوصون بنا بثقة."
    },
    {
      id: 4,
      image: "assets/images/icons/icon-4.png",
      name: 'We are here near you',
      nameAr: 'نحن هنا بالقرب منك',
      description: "We are here near you with local expertise and personalized support — always ready to assist you with friendly service right where you need it.",
      descriptionAr: "نحن هنا بالقرب منك بخبرة محلية ودعم شخصي - مستعدون دائمًا لمساعدتك بخدمة ودية حيث تحتاج إليها."
    },
    //      <article class="col-lg-3 col-md-6 col-xs-12 serv  mb-3 pt" data-aos="fade-up">
    //     <div class="serv-flex arrow">
    //         <div class="art-1 img-15">
    //             <img src="assets/images/icons/icon-3.png" alt="">
    //             <h3 class="tajawal-bold">Financing made easy</h3>
    //         </div>
    //         <div class="service-text-p">
    //             <p class="text-center tajawal-regular">Financing made easy with flexible solutions and expert
    //                 support — enjoy a smooth, stress-free process tailored to your unique needs and goals.</p>
    //         </div>
    //     </div>
    // </article> 
  ];

  stats = [
    { icon: 'bi-house-door', value: '48,000+', label: 'Homes delivered', labelAr: "المنازل المُسلمة" },
    { icon: 'bi-buildings', value: '50,100+', label: 'In planning and progress', labelAr: "في التخطيط والتقدم" },
    { icon: 'bi-award', value: '40+', label: 'Professional Certifications', labelAr: "الشهادات المهنية" },
    { icon: 'bi-graph-up', value: '25+', label: 'Years in Operation', labelAr: "سنوات الخبرة" }
  ];

  invExcellence = [
    { value: "+12", desc: "Global licenses", descAr: "التراخيص العالمية" },
    { value: "+10", desc: "International awards", descAr: "الجوائز الدولية" },
    { value: "+15", desc: "Regional offices", descAr: "المكاتب الإقليمية" },
    { value: "24/7", desc: "Local support", descAr: "الدعم المحلي" },
  ]

  getWhyChooseUs(): Array<ChooseUs> {
    return this.chooseUs
  }

  getPropStats(): Array<any> {
    return this.stats
  }

  getInvExcellence(): Array<any> {
    return this.invExcellence
  }
}
