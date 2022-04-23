const buildProgression = (first, step, length) => {
  const progression = Array.from({ length }, (_, index) => first + step * index);
  return progression;
};

export default buildProgression;
