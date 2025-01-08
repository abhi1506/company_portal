import Content from "./contentSlider";
import VisionAbout from "./visionSlider";
import WhoWeAreHeroSlider from "./whoWeAreHeroSection";

export default function WhoWeAre() {
  return (
    <div style={{ marginTop: "80px" }}>
      <WhoWeAreHeroSlider />
      <Content />
      <VisionAbout />
    </div>
  );
}
