export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  displayDate: string;
  image: string;
  excerpt: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "summer-reading-for-parents",
    title: "Summer Reading for Parents",
    date: "2026-07-06",
    displayDate: "Jul 6, 2026",
    image: "/images/unsplash-image-IiEFmIXZWSw.jpg",
    excerpt:
      "Book recommendations for every kind of college-parent worry, from prestige panic to the money conversation.",
    content: [
      { type: "h3", text: "The “Will my kid be okay?” Parent" },
      {
        type: "p",
        text: "Where You Go Is Not Who You'll Be by Frank Bruni — let go of the prestige panic.",
      },
      {
        type: "p",
        text: "How to Raise an Adult by Julie Lythcott-Haims — former Stanford dean of students on the damage of over-parenting. Think about reframing the process.",
      },
      { type: "h3", text: "The “How will we pay for this?” Parent" },
      {
        type: "p",
        text: "The Price You Pay for College by Ron Lieber — how to start thinking about the money side.",
      },
      { type: "h3", text: "The “How does admissions actually work?” Parent" },
      {
        type: "p",
        text: "Who Gets In and Why by Jeff Selingo — the story of a higher-education journalist embedded in three admissions offices for a year. Also, subscribing to his Next newsletter is a good ongoing source of information.",
      },
      { type: "h3", text: "The “My kid won't talk to me about any of this” Parent" },
      {
        type: "p",
        text: "The Self-Driven Child by William Stixrud & Ned Johnson — advice for parents? Stop. Giving your kid motivation and autonomy in the process will lead to better results.",
      },
      { type: "h3", text: "Blogs / Free Resources" },
      { type: "list", items: ["College Essay Guy", "BigFuture by College Board"] },
    ],
  },
  {
    slug: "g80afq2fu6fhkf0btumhojuyrbpust",
    title: "OES July Newsletter",
    date: "2026-07-01",
    displayDate: "Jul 1, 2026",
    image: "/images/unsplash-image-aId-xYRTlEc.jpg",
    excerpt:
      "What Jeffrey Selingo's latest report means for students, why the essay is the one thing AI can't do, and key dates for the fall.",
    content: [
      { type: "p", text: "Hello OES community," },
      {
        type: "p",
        text: "A new report from higher-education writer Jeffrey Selingo has a clear warning for families navigating college right now: the old college-to-career playbook is being rewritten in real time, and the students who will thrive are those who understand what's changing.",
      },
      { type: "p", text: "Here's what you need to know." },
      { type: "h3", text: "The job market your student is entering" },
      {
        type: "p",
        text: "AI isn't replacing college. But it is replacing the entry-level work that once trained new graduates. The question is whether the college your student attends is preparing them for that reality or hoping it goes away.",
      },
      {
        type: "p",
        text: "Jeff Selingo calls what students need “job altitude”: graduating with skills that put them above the work AI is already claiming. That means original thinking, judgment, and the ability to evaluate and direct AI output, not just use it. The students who will thrive are those who combine their education with genuine, hard-to-automate capability.",
      },
      {
        type: "p",
        text: "This is worth one real conversation with your student this summer: What are you building that AI can't do?",
      },
      { type: "h3", text: "Juniors: the essay is the one thing AI can't do for you" },
      {
        type: "p",
        text: "Common App opens August 1, four weeks from now. The goal between now and then: a genuine first draft of your main essay. Not polished. Not perfect. Just honest and specific.",
      },
      {
        type: "p",
        text: "The essay works because it's human. Admissions officers read thousands of AI-adjacent essays this past cycle, and they notice. Your student's voice, their real story, their actual thinking is the one thing in this application that no tool can replicate. It's also, increasingly, one of the most important differentiators.",
      },
      {
        type: "p",
        text: "If your junior hasn't started, this month is the moment. Reach out and we'll get moving.",
      },
      { type: "h3", text: "Beach reads that raise test scores" },
      {
        type: "p",
        text: "The best summer test prep costs nothing and feels like a vacation: let your student read for pleasure. A recent episode of Tests and the Rest argued that casual summer reading effectively builds the reading skills that improve SAT and ACT scores.",
      },
      {
        type: "p",
        text: "Focus on engagement over “literary value.” A book your student finishes beats an abandoned classic. Contemporary fiction introduces test vocabulary in context, improving fluency, tone, and understanding of complex arguments — skills measured by the tests. Aim for “useful friction”: books they understand about 80% of, with enough challenge to grow.",
      },
      {
        type: "p",
        text: "Some favorites from the episode include Project Hail Mary, Tomorrow and Tomorrow and Tomorrow, Portrait of a Thief, Check & Mate, and Their Vicious Games. For tougher titles, “tandem reading” — listening to audiobooks while following along in print — improves comprehension and pronunciation, serving as a reading aid rather than a replacement.",
      },
      { type: "p", text: "Start with what your student watches or plays, then expand." },
      { type: "h3", text: "Test prep: upcoming SAT & ACT dates" },
      {
        type: "p",
        text: "If your junior still needs to test or retest, there are several upcoming dates this fall. Register early — seats fill quickly and late fees apply.",
      },
      {
        type: "list",
        items: [
          "SAT — Aug. 22, 2026 (registration deadline Aug. 7)",
          "SAT — Sept. 12, 2026 (registration deadline Aug. 28)",
          "SAT — Oct. 3, 2026 (registration deadline Sept. 18)",
          "ACT — Sept. 19, 2026 (registration deadline Aug. 14)",
          "ACT — Oct. 17, 2026 (registration deadline Sept. 11)",
        ],
      },
      {
        type: "p",
        text: "Register for the SAT at collegeboard.org and for the ACT at act.org.",
      },
      {
        type: "p",
        text: "If your student needs structured test prep support this summer, I recommend reaching out to Megan Fitzwater at CPP (College Planning Partnerships). Megan's company works with our clients and has in-depth knowledge of the SAT and ACT. Email: megan@satprepct.com.",
      },
      { type: "h3", text: "Key dates" },
      {
        type: "list",
        items: [
          "August 1: Common App opens for the Class of 2027",
          "August 1: Free applications open for Montana State University and University of Montana (MT residents)",
          "August 7: SAT registration deadline for Aug. 22 test",
        ],
      },
      { type: "h3", text: "Work with OES" },
      {
        type: "p",
        text: "O'Donnell Educational Solutions partners with families on college counseling, career counseling, gap year advising, and boarding school consulting. Whether students are building college lists, exploring careers, considering a gap year, or boarding school, the right guidance makes the process clearer and less stressful.",
      },
      {
        type: "p",
        text: "If you're interested in my services or know someone who might benefit, please have them reach out and book a free consultation.",
      },
      { type: "p", text: "Have a great 4th of July with friends and family." },
      { type: "p", text: "As always, I'm here. Please reach out anytime." },
    ],
  },
  {
    slug: "financial-aid-news-in-higher-education",
    title: "Financial Aid News in Higher Education",
    date: "2026-06-23",
    displayDate: "Jun 23, 2026",
    image: "/images/unsplash-image-lZ_4nPFKcV8.jpg",
    excerpt:
      "New federal autopay incentives and Whitman College's “10% Promise” — two developments worth knowing about before the next FAFSA cycle.",
    content: [
      {
        type: "p",
        text: "The following information was written by Jeff Levy from Big J Educational Consulting and edited and revised by Jack O'Donnell.",
      },
      {
        type: "p",
        text: "U.S. Department of Education will lower interest rates on federal student loans by up to one percentage point for borrowers who enroll in automatic payments, starting July 1, 2026. This temporary reduction, which will last until June 30, 2028, aims to address the high default rates and encourage more borrowers to remain current on their loans. The incentive is tied to automatic payments that help borrowers pay on time. Currently, only 40.1% of borrowers in active repayment are enrolled in autopay. Borrowers already in autopay will receive an additional 0.75 percentage-point reduction, as they already benefit from a 0.25 percentage-point rate deduction. The rate reduction applies to loans disbursed after July 1, 2012.",
      },
      {
        type: "p",
        text: "Autopay is a feature available to all federal borrowers that allows the servicer to automatically debit their monthly student loan payment from their bank account. Borrowers currently enrolled in autopay receive a quarter-percentage-point interest rate reduction.",
      },
      {
        type: "p",
        text: "“This interest rate reduction will help borrowers as they consider new, affordable repayment plans and work to repay their loans on time,” Undersecretary of Education Nicholas Kent said in a statement. “We expect this temporary incentive to drive up repayment rates and significantly improve the overall health of the federal student loan portfolio.” — U.S. Department of Education",
      },
      { type: "h3", text: "The Whitman 10% Promise" },
      {
        type: "p",
        text: "Whitman College has introduced its “10% Promise,” an initiative that ensures annual tuition will not exceed 10% of a family's adjusted gross income. Unlike traditional financial aid formulas that consider multiple variables, Whitman's approach is straightforward, relying solely on a family's adjusted gross income as reported on FAFSA or a federal tax form. This promise applies to all students, regardless of economic background, and covers up to four years of attendance, with annual re-certification required through FAFSA.",
      },
      {
        type: "p",
        text: "Adam Miller, Vice President for Admission and Financial Aid at Whitman, emphasized the college's commitment to reducing financial uncertainty and making college more accessible. Payment under this formula would forego the need to submit the CSS Profile. However, if submission of the CSS Profile yields a lower net cost, Whitman will honor the lower of the two pricing approaches.",
      },
    ],
  },
  {
    slug: "what-colleges-look-for-in-high-school-students",
    title: "What Colleges Look for in High School Students",
    date: "2026-06-09",
    displayDate: "Jun 9, 2026",
    image: "/images/unsplash-image-b7CRDcwfNFU.jpg",
    excerpt:
      "A field-tested list from Independent Educational Consultants Association members on what consistently rises to the top of an application.",
    content: [
      {
        type: "p",
        text: "When families ask me what colleges really want, my honest answer is: it depends on the college. Every school weighs things differently, and that's exactly why strategy matters. The list below, compiled from feedback among Independent Educational Consultants Association (IECA) members, captures the strengths and experiences that consistently rise to the top.",
      },
      {
        type: "p",
        text: "No single factor makes or breaks an application. Think of this list as a piece of a larger picture, and how those pieces come together is where a thoughtful plan pays off.",
      },
      {
        type: "list",
        items: [
          "The most rigorous curriculum available that challenges the student (AP, IB, dual enrollment, or other advanced classes).",
          "A high grade point average in major core subjects. However, academic rigor outweighs a high grade point average. (This surprises a lot of families — a B in a hard class often reads better than an A in an easy one.)",
          "Engagement in meaningful activities that align with the student's interests, whether in or out of school. It's more impactful to have a few activities with consistent involvement than many with only occasional participation. (In my experience, this is where students stumble most — they spread themselves thin instead of going deep.)",
          "An effectively written essay that provides insight into the student's unique personality, qualities, and values.",
          "Demonstrated leadership inside or outside of school.",
          "High scores on standardized tests (ACT, SAT) that reflect academic performance.",
          "Demographic and personal characteristics that contribute to a diverse and interesting student body.",
          "Strong counselor/teacher recommendations that provide further insight into the student.",
          "Special talents that could contribute to campus life.",
          "A strong intellectual curiosity demonstrated through participation in available research opportunities, independent projects, and extracurricular pursuits.",
          "Character and values that reflect those of a contributing community member.",
          "Demonstrated interest and enthusiasm in attending the college or university of choice (through campus visits, communication with the school, interaction on social media, etc.).",
        ],
      },
      {
        type: "p",
        text: "If you work with me, I can help you put this list into action, building a plan that plays to a student's strengths and finds the best possible fit academically, personally, and socially.",
      },
      {
        type: "p",
        text: "Source: Independent Educational Consultants Association (IECA), “What Colleges Look for in High School Students.” iecaonline.com",
      },
    ],
  },
  {
    slug: "why-hire-an-independent-college-counselor",
    title: "Why Hire an Independent College Counselor?",
    date: "2026-06-03",
    displayDate: "Jun 3, 2026",
    image: "/images/jack-odonnell.jpeg",
    excerpt:
      "The numbers behind why more Montana and Mountain West families are turning to private counselors — and what an IEC actually does.",
    content: [
      {
        type: "p",
        text: "Finding the right college is one of the most important and most overwhelming decisions a student will make. With thousands of schools to consider, rising costs, and an increasingly competitive admissions landscape, many families in Montana and the Mountain West are turning to Independent Educational Consultants (IECs) for personalized support. Here's why investing in a private counselor pays off.",
      },
      { type: "h3", text: "The system isn't built to give your student enough attention" },
      {
        type: "list",
        items: [
          "There are over 2,500 four-year colleges in the United States alone.",
          "The current student-to-counselor ratio in U.S. public schools is 372:1.",
          "Most school counselors, despite being talented and dedicated, are juggling academic advising, mental health support, scheduling, and dozens of other responsibilities alongside college prep.",
        ],
      },
      { type: "h3", text: "The college search is more complex than ever" },
      {
        type: "list",
        items: [
          "College costs have increased by over 180% in the past 20 years, making fit, academic and financial needs more critical than ever.",
          "The rise of test-optional policies, early decision/early action strategies, and shifting admissions criteria has made the process genuinely harder to navigate without expert guidance.",
          "A strong application isn't just grades and test scores — it's a cohesive story, and crafting that story takes time and intentionality.",
        ],
      },
      { type: "h3", text: "What an IEC actually does for your student" },
      {
        type: "list",
        items: [
          "Builds a personalized, balanced college list based on academic profile, interests, budget, and fit, not just rankings.",
          "Provides one-on-one essay coaching that brings out the student's authentic voice.",
          "Creates a custom application timeline so nothing falls through the cracks.",
          "Offers expert knowledge of specific schools, programs, and what admissions offices are actually looking for.",
          "Helps navigate financial aid, scholarships, and how to compare award letters.",
          "Serves as a steady, calm presence for both students and parents throughout a stressful process.",
        ],
      },
      {
        type: "p",
        text: "It's my job to stay current on what's changing at schools across the country so your family doesn't have to.",
      },
      { type: "h3", text: "Working with a professional you can trust" },
      {
        type: "p",
        text: "As a professional Independent Educational Consultant, I am a proud member of IECA (Independent Educational Consultants Association), an international professional association representing experienced, ethical independent consultants. IECA members are held to a strict code of ethics and commit to ongoing professional development, including regular visits to college campuses.",
      },
      {
        type: "p",
        text: "Every student's path is different. I'd love to learn about yours. If you're searching for a college counselor in Bozeman, Helena, Missoula, or anywhere in Montana, I'd love to connect. Schedule a free consultation and let's talk about how I can support your family through this process.",
      },
    ],
  },
  {
    slug: "the-value-of-an-honors-college",
    title: "The Value of an Honors College",
    date: "2026-02-27",
    displayDate: "Feb 27, 2026",
    image: "/images/unsplash-image-rNxLDFUWIoQ.jpg",
    excerpt:
      "Honors colleges aren't all the same — a look at what they actually offer and how to tell if one is right for your student.",
    content: [
      {
        type: "p",
        text: "I often research schools for specific students, focusing on finding the right 'fit'; sometimes the best option is to suggest applying to a school's honors college.",
      },
      {
        type: "p",
        text: "The common misconception in higher education is that honors colleges are for students seeking 'a more prestigious version of the same school' — the perks of priority registration, a more modern dorm, and a special certification or resume boost. The bottom line is that honors colleges are not all the same. Each school my students apply to offers differentiated programming tailored to a specific type of learner.",
      },
      {
        type: "p",
        text: "For example, a common safety option for many students in the Mountain West is the University of Utah. The school provides a discounted rate to students with residency located in the West, through the Western Undergraduate Exchange (WUE). The University of Utah also offers highly motivated, academically talented students the opportunity to be part of the school's honors college.",
      },
      {
        type: "p",
        text: "The Honors College at the University of Utah provides students with the opportunity to engage in in-depth research or creative work, with assistance from a faculty advisor, and to submit a thesis project in their senior year. The program values life skills, specialty advising perks, and the opportunity for students to engage in research to further their interest in a particular area associated with their major.",
      },
      { type: "h3", text: "Different types of honors college offerings" },
      {
        type: "list",
        items: [
          "Interdisciplinary learning: combining a major or focusing on a broader liberal arts curriculum.",
          "Academic flexibility: ability to drop general requirement courses.",
          "Access, advising, mentorship: individualized attention, internship opportunities, and research.",
          "Specialized pathways: technology/business blend in your major or special distinction (e.g. UT-Austin Computer Science & Business).",
        ],
      },
      {
        type: "p",
        text: "The value of selecting an honors college at a large university compared to attending a private liberal arts school has created a massive shift in the college admissions landscape.",
      },
      {
        type: "p",
        text: "It's also important to note that an honors college is not for everyone. Ask yourself: What do I want in my college experience? What kind of experience is each honors college offering, and for whom does it work best?",
      },
      {
        type: "p",
        text: "Where you end up attending college, the major you pick, and the right environment are all important factors. Pick the route that is best for you, grow from your experiences, and learn skills that bring you fulfillment in your life and future career.",
      },
    ],
  },
  {
    slug: "showing-growth-in-the-personal-essay",
    title: "Showing Growth in the Personal Essay",
    date: "2025-12-09",
    displayDate: "Dec 9, 2025",
    image: "/images/growth-image.png",
    excerpt:
      "The most crucial aspect of the personal essay isn't the story itself — it's the growth the student shows through it.",
    content: [
      {
        type: "p",
        text: "Personal growth is an important concept to understand. I've always had a fixed mindset that growth comes with age and experience. Although that may be true in some regards, college essay editing has taught me a great deal about personal growth.",
      },
      {
        type: "p",
        text: "The Common App personal essay allows students to use 650 words to highlight a personal story that demonstrates their character and identity beyond numbers like GPA, test scores, and extracurriculars. This essay gives applicants a chance to share their authentic selves and exercise their freedom of expression. The goal is for admissions counselors to understand your character and determine whether you would be a good fit for their campus. Writing the personal essay is one of the most important parts of any student's college application because it can set them apart from other students with similar qualities and strengths. In the world of AI and test-optional schools, the personal essay is more important than ever to show admissions counselors your original voice.",
      },
      {
        type: "p",
        text: "In my opinion, the most crucial aspect of your personal essay is growth. I constantly find myself asking students questions like 'how did you grow from this experience?' 'What did this teach you about yourself?' I encourage students to write with honesty, detail, and a growth mindset. Colleges are eager to see how you would contribute to their community, so show them your maturity, character, and self-awareness in a positive way.",
      },
      {
        type: "p",
        text: "The personal essay helps me understand my students and, in turn, helps them find the right academic, social, and personal fit. As I continue to gain experience in educational consulting, I am constantly reminded of the ways I can refine my skills and deepen my understanding of this evolving field.",
      },
      {
        type: "p",
        text: "This holiday season, I'm grateful for all the opportunities my students have given me to reflect, learn, and continue growing alongside them.",
      },
    ],
  },
  {
    slug: "seo-keywords-vs-writing-a-great-college-essay",
    title: "SEO Keywords vs Writing a Great College Essay",
    date: "2025-06-23",
    displayDate: "Jun 23, 2025",
    image: "/images/seo-blog.png",
    excerpt:
      "What educational consulting websites and college essays have in common: you're competing for attention, and authenticity wins both games.",
    content: [
      {
        type: "p",
        text: "What do educational consulting websites and college essays have in common? You're competing with thousands of people to make a lasting impression. As I've built my business over the last year, I'm still learning how I can stand out. Buzzwords in a college essay and keywords for an SEO search engine are similar. It's important to be authentic, specific, and detailed.",
      },
      { type: "h3", text: "Know your audience" },
      {
        type: "p",
        text: "Keywords like 'educational consulting', 'college consulting', and 'Bozeman college counseling' are all keywords that can drive traffic to my website — just like buzzwords in an essay for a college applicant. From my expertise, colleges want to know how you can contribute to their community, and how you will personally grow from your experience at said college. I often find myself telling students to add the words 'community' and 'growth' when they are writing their essays. For SEO, you are writing keywords to engage a human audience for your website clicks. College essays are targeted at admissions counselors to notice a student with depth, personability, and character.",
      },
      { type: "h3", text: "Don't be generic" },
      {
        type: "p",
        text: "You need to stand out by showing your authentic side for both SEO keywords and essays. You're not going to find the perfect essay topic, nor the algorithm that will give you the most website visits. Instead, make it clear who you are and what you are offering.",
      },
      { type: "p", text: "Be clear. Be intentional. Be you." },
      { type: "h3", text: "Authenticity wins" },
      {
        type: "p",
        text: "Google rewards websites that are real. The term “keyword stuffing” is a reminder to avoid making your website into something that is not authentic to your brand. Your essay should tell a story that reflects who you truly are, not a version you think colleges want to see. Just as websites perform better when they're useful and honest, college essays stand out when they're personal, reflective, and real.",
      },
      {
        type: "p",
        text: "Whether you're building a website or writing a college essay, success comes down to clarity, strategy, and heart. You need to know your audience, say something real, and present it in a way that's both smart and sincere.",
      },
    ],
  },
  {
    slug: "the-college-decision",
    title: "The College Decision",
    date: "2025-05-01",
    displayDate: "May 1, 2025",
    image: "/images/unsplash-image-VLaKsTkmVhk.jpg",
    excerpt:
      "Looking back a decade later on choosing a small liberal arts college over a large university — and what actually made it the right call.",
    content: [
      {
        type: "p",
        text: "April is an exciting time for both students and parents. Most high school seniors have already chosen their college destination and are coasting through the final stretch of high school, what many call the “senioritis” phase. But some are still facing one of the biggest decisions of their young lives: Where do I go to college?",
      },
      {
        type: "p",
        text: "When I was a high school senior, I chose a small liberal arts college over a large university. Why? Because I believed it was the right fit for the future version of myself. Looking back ten years later, I can confidently say it was one of the best decisions I've ever made.",
      },
      {
        type: "p",
        text: "When I was faced with the daunting choice of choosing two polar opposite schools, I kept realizing that it's important to choose a school where you see yourself finding success both academically and personally. College is not all about academics; it's about failures, seeking new opportunities, and learning from your experiences to become more personally connected to your identity.",
      },
      {
        type: "p",
        text: "During my four years, I built lifelong friendships, discovered new interests, and finally figured out what direction I wanted to pursue. Like many 18-year-olds, I had no clue what I wanted to do at first. I changed my major three times before discovering my passion for history. I started dating the woman I'll marry this summer. I was accepted into a school of education to pursue my master's degree. Today, I run my own educational consulting business, something I never would've imagined back then.",
      },
      {
        type: "p",
        text: "So here's my advice: pick the school that will let you figure out a path to understand your identity. Find an adviser, teacher, or friend who will keep you motivated and accountable. Experience new things, meet new people, and explore.",
      },
    ],
  },
  {
    slug: "why-fit-matters-more-than-prestige",
    title: "Why Fit Matters More Than Prestige",
    date: "2025-03-14",
    displayDate: "Mar 14, 2025",
    image: "/images/unsplash-image-i6NcIJXdK10.jpg",
    excerpt:
      "As decision dates arrive, a reminder that a dream school isn't everything — fit is what actually predicts a good four years.",
    content: [
      {
        type: "p",
        text: "As college decision dates arrive, I remind myself and my students that a dream school isn't everything. While educational consultants have varying philosophies, I prioritize finding the right fit.",
      },
      {
        type: "p",
        text: "The college acceptance process can be a stressful and confusing time for students and parents alike. With so many factors to consider, it can be difficult to know where to start. One of the most important things to remember is that fit is more important than prestige.",
      },
      {
        type: "p",
        text: "A prestigious school may look good on paper, but if it's not a good fit for you, you will not likely be happy there. When choosing a college, it's important to consider your academic interests, learning style, and social preferences. You should also visit the schools you're interested in to get a feel for the campus culture.",
      },
      {
        type: "p",
        text: "There are a number of reasons why fit is more important than prestige. First, you're more likely to succeed at a school where you're comfortable and engaged. Second, you're more likely to make friends and build relationships with professors and classmates at a school that's a good fit for you. Third, you're more likely to find opportunities for extracurricular activities and internships at a school where you're involved on campus.",
      },
      {
        type: "p",
        text: "Of course, prestige does matter to some extent. A degree from a prestigious school can open doors to certain career opportunities. However, it's important to remember that prestige is not the only factor that matters. If you're not happy at a prestigious school, you're not going to get the most out of your college experience.",
      },
      {
        type: "p",
        text: "So, when you're choosing a college, don't just focus on the prestige. Take the time to consider the fit. Visit the schools you're interested in, talk to students and professors, and get a feel for the campus culture. Choosing a college that's a good fit for you is one of the most important decisions you'll make in your life.",
      },
      {
        type: "p",
        text: "My final piece of advice: I encourage you to seek out an educational institution that fosters both your academic and personal growth.",
      },
    ],
  },
  {
    slug: "merit-based-scholarships",
    title: "Merit-Based Scholarships",
    date: "2025-01-10",
    displayDate: "Jan 10, 2025",
    image: "/images/unsplash-image-adQAb-L-YkE.jpg",
    excerpt:
      "Where to look for merit aid, what it actually gets you beyond tuition savings, and the main categories to know.",
    content: [
      {
        type: "p",
        text: "The late winter and early spring months, especially the beginning of March, are critical times for families navigating the college application process. Among the many factors that need to be considered, cost is one of the most important. Understanding how and where to secure funding for your education can make a significant difference. This is where merit-based scholarships come into play.",
      },
      {
        type: "p",
        text: "Merit-based scholarships are awarded based on a student's achievements, abilities, and potential contributions to a school's community. The benefits of receiving these scholarships go beyond simply funding your education — they can provide lasting advantages throughout your college career and beyond.",
      },
      { type: "h3", text: "How to find merit-based scholarships" },
      {
        type: "list",
        items: [
          "Institutional Scholarships: Many colleges and universities offer merit scholarships, which can typically be found on the school's departmental webpages. Always check the school's official website for detailed information on available scholarships and application procedures.",
          "External Scholarships: These scholarships are provided by corporations, scholarship databases, associations, and community organizations. Websites like Scholarships.com, Fastweb, and Niche are great places to start looking for external scholarships.",
          "High School Resources: Don't forget to tap into your high school's resources. Your school counselor can provide valuable information, and independent counselors may also have leads on scholarships. Additionally, employers often offer scholarship benefits, and there may be affinity groups (e.g., for athletes or specific communities) that have their own funding opportunities.",
        ],
      },
      { type: "h3", text: "Benefits of merit-based scholarships" },
      {
        type: "list",
        items: [
          "Financial Freedom: Merit scholarships can reduce or eliminate the need for student loans, allowing you greater flexibility in your career after graduation.",
          "Recognition of Excellence: These scholarships serve as a tangible recognition of your hard work and dedication.",
          "Enhanced Opportunities: Some merit scholarships come with additional perks like priority registration, mentorship programs, research opportunities, and access to exclusive networking events.",
          "Career Advantage: Listing prestigious merit scholarships on your resume can help demonstrate to future employers and graduate schools that you have been recognized for excellence.",
        ],
      },
      { type: "h3", text: "Types of merit-based scholarships" },
      {
        type: "list",
        items: [
          "Academic Scholarships: based on GPA, class rank, AP courses, and standardized test scores.",
          "Athletic Scholarships: awarded for exceptional athletic performance and achievements.",
          "Artistic Scholarships: recognize talents in areas like music, creative writing, art, and performing arts.",
          "Leadership Scholarships: given to students who have demonstrated leadership in high school, in their communities, or organizations.",
          "Community Service Scholarships: awarded for volunteer work or community service involvement.",
          "Corporate or Industry-Specific Scholarships: offered by businesses or organizations within specific industries.",
        ],
      },
      {
        type: "p",
        text: "Merit-based scholarships offer a fantastic opportunity to reduce the financial burden of a college education while also earning recognition for your hard work and accomplishments. Be sure to explore all possible avenues for scholarships to maximize your chances of receiving financial support during your college years.",
      },
      {
        type: "p",
        text: "Citation: St. John's University. (2025, March 12). Merit-based scholarships: Everything you need to know to get college funding. St. John's University.",
      },
    ],
  },
  {
    slug: "from-the-classroom-to-consulting",
    title: "From the Classroom to Consulting: Holiday Gratitude",
    date: "2024-12-18",
    displayDate: "Dec 18, 2024",
    image: "/images/unsplash-image-kldU494J0x4.jpg",
    excerpt:
      "Reflecting on the first months of O'Donnell Educational Solutions, and the mentor who made it possible.",
    content: [
      {
        type: "p",
        text: "As I reflect on the past few months of starting O'Donnell Educational Solutions, I'm reminded of how much my professional journey has always been centered around education. After graduating, I taught, coached, and worked in admissions, experiencing everything from inner-city public schools to private boarding institutions. Over the last five years, I've witnessed and learned so much. However, the most dramatic shift in my career came when I decided to pivot from the classroom and launch my own educational consulting business.",
      },
      {
        type: "p",
        text: "Starting a new business comes with its share of challenges, highs and lows, and steep learning curves. When making such a transition, many seek mentorship and guidance. I've been incredibly fortunate to have a mentor who has shaped me into who I am today — my mom, Mary Jo O'Donnell. She has been my inspiration in starting this business and has shared her wisdom from over 10 years of success in the field.",
      },
      {
        type: "p",
        text: "One of the most valuable lessons my mom taught me is the importance of listening to each student's unique story. Understanding their goals and backgrounds is crucial to helping them find the right college fit. This advice has become the foundation of my approach to educational consulting. Mary Jo is a respected figure in the Bozeman community, known for her expertise in college counseling. Her reputation speaks for itself, and I strive to carry on her legacy in my own work.",
      },
      {
        type: "p",
        text: "My journey into educational consulting has been incredibly rewarding. College counseling is a pivotal part of any individual's life, and helping students find schools that align with their aspirations is both fulfilling and meaningful.",
      },
      {
        type: "p",
        text: "This holiday season, I encourage you all to take a moment to express gratitude to someone who has made a difference in your life. Whether personally or professionally, there's always someone to thank for your success and growth.",
      },
      { type: "p", text: "Thank you, Mom, for guiding me as I embark on this new career path." },
      { type: "p", text: "Merry Christmas!" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
