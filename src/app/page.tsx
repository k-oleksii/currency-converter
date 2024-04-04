import DetailsSection from './_components/details-section/DetailsSection';
import Hero from './_components/hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <DetailsSection
        title="Конвертер валют"
        desc="Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків."
        buttonLink="/converter"
        buttonText="Конвертувати валюту"
        image="/card-bg.png"
      />
    </>
  );
}
