export default function resolveProductionUrl(document) {
  return `https://localhost:8000/preview/${document.slug.current}`;
}
