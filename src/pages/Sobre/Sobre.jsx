import Skills from "../../components/Skills";
import SobreSection from "../../components/SobreSection";
import ParallaxText from "../../components/ParallaxText"; 

export default function Sobre() {
  return (
    <>
      <SobreSection />
      <div className=" pb-28">
        <ParallaxText baseVelocity={-5}>JavaScript Python C++</ParallaxText>
        <ParallaxText baseVelocity={5}>React NextJS CSS HTML</ParallaxText>
        <ParallaxText baseVelocity={-5}>JavaScript Python C++</ParallaxText>
      </div>
      <Skills />
    </>
  )
}
