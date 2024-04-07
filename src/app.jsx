import { GlobalResets } from './tokens/resets';
import { SpriteWithIcons } from './tokens/icons';
import { GlobalFonts } from './tokens/fonts';
import { GlobalColors } from './tokens/colors';
import { GlobalShadows } from './tokens/shadows';
import { GlobalRadiuses } from './tokens/radiuses';
import { CategoryCard } from './components/category-card';

function App() {
  return (
    <>
      <GlobalResets />
      <GlobalFonts />
      <GlobalColors />
      <GlobalShadows />
      <GlobalRadiuses />
      <SpriteWithIcons />

      <CategoryCard 
        name="Прогулочные"
        amount="189 моделей"
        image="images/categories/1.jpg"
        imageAlt="Красный прогулочный велик"
      />
    </>
  );
}

export { App };
