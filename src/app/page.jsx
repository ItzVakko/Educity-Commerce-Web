import Partner from "./Partner";
import CategorySection from "./CategorySection";
import ClothesCategories from "./ClothesCategories";
import Footer from "./Components/GlobalComponents/Footer";
import NavBar from "./Components/GlobalComponents/NavBar";
import HeaderBanner from "./HeaderBanner";

import "./page.css";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <HeaderBanner />
      </header>
      <main className="main-page-main-content">
        {/* <Partner /> */}
        <CategorySection />
        <ClothesCategories category="men" categoryGeorgian="კაცი" />
        <ClothesCategories category="women" categoryGeorgian="ქალი" />
      </main>

      <Footer />
    </>
  );
}
