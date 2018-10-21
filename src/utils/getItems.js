export default length =>
  Array.from({ length })
    .fill(null)
    .map((_, i) => i);
