export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    name: "Jack O'Donnell",
    role: "Founder / Consultant",
    image: "/images/jack-odonnell.jpeg",
    imageWidth: 1000,
    imageHeight: 1500,
    bio: [
      "Jack has worked in education throughout his professional career. He worked for two independent schools over the past four years (Stevenson School and Hawai'i Preparatory Academy). Teaching, residential life, coaching, and admissions work were all facets of his previous jobs. Jack received a BA in History from the University of Denver and an MA in Education & Curriculum. His experience in private education influenced his decision to start OES in 2024. Jack believes that through personalized guidance your child can find the ideal environment to further their learning.",
      "Jack grew up in Bozeman, MT, and has since returned to his hometown. Jack possesses a warm and accepting demeanor that enables him to forge genuine connections with a wide array of clients and students. With a deep understanding of the college application process, Jack is committed to helping students navigate their paths to success.",
    ],
  },
  {
    name: "Caroline Dewing",
    role: "College / Boarding Consultant",
    image: "/images/caroline-dewing.jpeg",
    imageWidth: 1241,
    imageHeight: 1844,
    bio: [
      "Caroline is dedicated to helping students unlock their potential and navigate the complex landscape of education and career choices. With over a decade of experience spanning both private, boarding, and public school sectors, Caroline brings a unique perspective and comprehensive understanding of what it takes to thrive in today's competitive environment.",
      "Throughout her career, Caroline has worked in various roles, including classroom teacher, admissions officer, residential faculty member, dorm parent, and high school varsity lacrosse coach. She gained a wide range of valuable experience from Greenwich Country Day School in Greenwich, CT, and Stevenson School, in Pebble Beach, CA. Caroline grew up in Wilton, CT. She holds a BA in Education from the College of Charleston and a MA in Education from Manhattanville College. She currently lives in North Carolina with her husband Woody.",
      "Caroline is passionate about ensuring that every student feels understood, prepared, and excited for what lies ahead.",
    ],
  },
  {
    name: "Mary Jo O'Donnell",
    role: "Senior Advisor - Essay Expert",
    image: "/images/mary-jo-odonnell.jpg",
    imageWidth: 332,
    imageHeight: 336,
    bio: [
      "Mary Jo has worked in education for over three decades. Her career started with teaching English in Japan and the U.S., later serving as Executive Director of the Bozeman Schools Foundation. She then started Right Fit College Consulting in 2014 and completed a college counseling program through UC Riverside. Mary Jo has worked with over 250 clients in college counseling both in Bozeman and throughout the U.S.",
      "Mary Jo will serve as an advisor to Jack and work on the essay writing process. She brings a vast amount of experience and guidance to all clients who work with OES.",
    ],
  },
];
