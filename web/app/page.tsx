import BoxNavbar from "@/src/presentation/layout/Navbar/BoxNavbar";
import BoxFooter from "@/src/presentation/layout/Footer/BoxFooter";
import BoxHero from "@/src/presentation/components/Hero/BoxHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BoxNavbar />
      <div className="pt-32">
        <BoxHero />
      </div>
      <BoxFooter />
    </div>
  );
}
