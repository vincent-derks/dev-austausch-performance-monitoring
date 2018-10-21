const backgrounds = ['#C91F37', '#9B59B6', '#4DAF7C', '#A17917', '#6C7A89'];

const getRandomBackground = currentBackGroundColor => {
  const randomIndex = Math.round(Math.random() * (backgrounds.length - 1));
  let randomBackground = backgrounds[randomIndex];
  if (randomBackground === currentBackGroundColor) {
    return getRandomBackground(currentBackGroundColor);
  }
  return randomBackground;
};

export default getRandomBackground;
