//  ACCORDEON 
document.querySelector(".accordeon").addEventListener("click", (e) => {
  const summary = e.target.closest("summary");
  if (!summary) return;

  const current = summary.parentElement;

  document.querySelectorAll(".accordeon details").forEach((det) => {
    if (det !== current) det.open = false;
  });
});