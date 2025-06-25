/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default async function decorate(block) {



  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);
    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    // decorate accordion item
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);

    const newText = document.createElement('p')

    summary.addEventListener('mouseover', () => {
      newText.innerText = summary.hasAttribute('open') ? 'Open' : 'Closed'

      summary.appendChild(newText)      
    })

    summary.addEventListener('mouseout', () => {
      
      summary.removeChild(newText)
    })

  });

    const res = await fetch("/data.json")
    const data = await res.json()

    console.log(data)
}