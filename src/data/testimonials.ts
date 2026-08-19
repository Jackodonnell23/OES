export type Testimonial = {
  quote: string;
  attribution: string;
  image?: string;
  source?: "Google Review";
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jack has been such a motivating force in my daughter's college search. He is thoughtful, approachable, and pragmatic, and has really helped her plan well for the application season ahead.",
    attribution: "Jesse T.",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Jack provided invaluable support to both my sons. He helped my youngest craft strong college essays, and guided my college freshman in exploring career paths that matched his strengths - many of which I hadn't considered. His insight gave my son clear direction and gave him confidence in his career paths.",
    attribution: "Megan B.",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "I had a great experience working with Jack, and he helped me reach my goals for a college education.",
    attribution: "Justin Z. (Student)",
    image: "/images/testimonial-3.jpg",
  },
  {
    quote:
      "My daughter deserved more college guidance than her school or parents could provide. A friend mentioned Jack to me. We hired him to help Harper make the right choice, for her, about where she should study for college. Harper already had a set of plans and had done a lot of legwork on her own but we hired Jack as an insurance policy. The decision was probably one of the best decision I've made. Jack was not an insurance policy. He took Harper through his process. And if she were writing this, would say he was more than a coach and a supporter, but also a friend. My wife and I love what he did for her. She learned so much that she completely changed her plans and is headed to college 100% certain she made the right choice for her, for all the right reasons. Personally, Jack was also a pleasure to work with. He was a professional at every turn; communicative, responsive, charming. O'Donnell Education Services gets a 11 out 10.",
    attribution: "Chris Leonard",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "We interviewed different consultants and chose Jack due to his focus on finding the right fit for each student. And he did exactly that! Our daughter is very excited to be attending a school that met all our criteria and in an environment where she feels she can thrive.",
    attribution: "Jennifer James",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Jack is so helpful and made my application process so easy and stress free! I found it really helpful how he was able to narrow down my choices and provide options based on my interests and preferred environments!!",
    attribution: "Piper Carico (Student)",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Jack was a wealth of knowledge for our oldest child. We felt so lost going into this process as she had very diverse college list. Hiring Jack allowed the college search to be fun for our family. We didn't have to stay on our daughter to get things in by deadlines and to write her essays, because she did all of that with Jack. Going into Senior year she felt ahead of the game and not overwhelmed. We would highly recommend Jack.",
    attribution: "Emily Hardan",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Jack helped me so much with all my application needs and finding and researching school! He is awesome and makes everything very easy for you. If it weren't for him my essay would not have been even close to how good it was and I probably would not have landed on such an awesome subject!",
    attribution: "Emery Belasco (Student)",
    source: "Google Review",
    rating: 5,
  },
  {
    quote:
      "Jack was amazing to work with and helped structure both future plans and change current ones to better align with what I wanted and needed. Highly Recommend!",
    attribution: "Cormick Smith (Student)",
    source: "Google Review",
    rating: 5,
  },
];
