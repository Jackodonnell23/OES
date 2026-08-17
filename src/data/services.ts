export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  sections: {
    heading?: string;
    body: string[];
    list?: boolean;
  }[];
};

export const services: Service[] = [
  {
    slug: "college-counseling",
    title: "College Counseling",
    summary:
      "Comprehensive college counseling services, including application support, scholarship guidance, essay editing, and college list creation.",
    image: "/images/unsplash-image-8ePZbdxnpi0.jpg",
    sections: [
      {
        body: [
          "We provide comprehensive college counseling services, including application support, scholarship guidance, essay editing, and college list creation.",
          "Our goal is to simplify the college application process, reduce stress, and empower students to achieve their academic and career aspirations.",
        ],
      },
      {
        heading: "Comprehensive Packages",
        list: true,
        body: [
          "Freshman - Senior Comprehensive (4 years)",
          "Sophomore - Senior Comprehensive (3 years)",
          "Junior-Senior Comprehensive (2 years)",
          "Senior Year Comprehensive (1 year)",
        ],
      },
      {
        heading: "Roadmap Package (4 sessions)",
        body: [
          "We will provide you with a framework of resources and give you initial guidance on the college application process. This typically includes Common Application, UC application support, essay brainstorming, editing, and college list creation.",
        ],
      },
    ],
  },
  {
    slug: "independent-school-consulting",
    title: "Independent School Consulting",
    summary:
      "Personalized support throughout the entire independent and boarding school search and placement process, from initial research to decision-making and school transition.",
    image: "/images/unsplash-image-ljvKJ84BV3o.jpg",
    sections: [
      {
        body: [
          "Our comprehensive service provides personalized support throughout the entire independent school search and placement process, from initial research to decision-making and school transition.",
        ],
      },
      {
        heading: "What's included",
        list: true,
        body: [
          "Meetings with parent(s) & student",
          "Review of all relevant school documents and any educational testing",
          "Recommendation of schools",
          "Support in the admissions process",
          "Interview preparation",
          "Communication with prospective schools",
          "Review of schools and decision-making",
          "Athletics/arts placement",
          "Support in transition and first year of school",
        ],
      },
      {
        body: [
          "Jack and Caroline’s experience in boarding school admissions brings a wealth of knowledge and a compassionate approach to help families confidently navigate this important decision.",
        ],
      },
      {
        heading: "Targeted School Consulting",
        body: [
          "Curated sessions that help parents and students with a general understanding of the boarding school application process, school list creation, best fit, and interview preparation.",
        ],
      },
    ],
  },
  {
    slug: "gap-year-advising",
    title: "Gap Year Advising",
    summary:
      "Packages designed to help parents and students navigate different gap-year offerings so they can find the best fit.",
    image: "/images/unsplash-image-b7CRDcwfNFU.jpg",
    sections: [
      {
        body: [
          "Packages for gap year advising are designed to help parents and students navigate different offerings so they can find the best fit. Programs are beneficial for students looking to learn more about themselves and discover their values and goals.",
        ],
      },
      {
        heading: "What's included",
        list: true,
        body: [
          "Meetings with parent(s) & student",
          "Review of all relevant documents",
          "Recommendation of programs",
          "Support in the application process",
          "Communication with programs",
          "Review of program list and decision-making",
        ],
      },
    ],
  },
];
