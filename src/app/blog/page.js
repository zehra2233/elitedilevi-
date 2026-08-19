import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPage() {
  return (
    <main>
      <Header />

      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#314A8A] mb-4">Blog</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Our blog is coming soon. Check back for language learning tips, exam guides, and news from Elite Dil Evi.
        </p>
      </section>

      <Footer />
    </main>
  );
}
