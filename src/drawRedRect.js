// ceshi
export function drawRedRect(svg) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', 0);
  rect.setAttribute('y', 0);
  rect.setAttribute('fill', 'red');
  rect.setAttribute('width', 200);
  rect.setAttribute('height', 200);
  svg.appendChild(rect);
}
