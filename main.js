import { html, render } from './bem/Lib/lit-html.js'

const matrixContainer = document.querySelector('#matrix')
const spiralContainer = document.querySelector('#spiral')
const dimensionInput = document.querySelector('#dimension')
const orderInput = document.querySelector('#order')
const button = document.querySelector('#button')

const tdTemplate = (cellContent) => html`
  <td class='Table-Cell'>${cellContent}</td>
`

const trTemplate = (arr) => html`
  <tr class='Table-Row'>${arr.map(tdTemplate)}</tr>
`

const tableTemplate = (arr) => html`
  <table class='Table'>
    <tbody>${arr.map(trTemplate)}</tbody>
  </table>
`

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

const renderResult = () => {
  render(tableTemplate(matrix), matrixContainer)
}

renderResult()
button.addEventListener('click', () => { renderResult() })