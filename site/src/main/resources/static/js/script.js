// A página não possui botões ou controles interativos no Figma original.
// Este estado ajuda o navegador a sinalizar quando fontes e imagens locais
// terminaram de carregar, sem alterar o visual ou a ordem do conteúdo.
const visuals = [
  ...Array.from(document.images, (image) =>
    typeof image.decode === "function" ? image.decode() : Promise.resolve(),
  ),
  document.fonts?.ready ?? Promise.resolve(),
];

Promise.allSettled(visuals).then(() => {
  document.documentElement.dataset.visualsReady = "true";
});
