const baseUrl = "https://elitedil.com";

const paths = [
  "/",
  "/about-us",
  "/admissionserv",
  "/blog",
  "/consultation",
  "/contact",
  "/courses/english/adults",
  "/courses/english/junior",
  "/courses/german",
  "/courses/turkish",
  "/exams",
  "/exams/goethe",
  "/exams/ielts",
  "/exams/osd",
  "/exams/pte",
  "/exams/telc",
  "/exams/toefl",
  "/general",
  "/onlineclass",
  "/private",
  "/private/english",
  "/private/german",
  "/private/turkish",
  "/registration",
  "/uniguide",
];

export default function sitemap() {
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
