const toCurrency = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    currency: 'rub',
    style: 'currency',
  }).format(price);
}

document.querySelectorAll('.price').forEach(node => {
  node.textContent = toCurrency(node.textContent)
})

const $card = document.querySelector('.card');

if ($card) {
  $card.addEventListener('click', (e) => {
    if (e.target.classList.contains('js-remove')) {
      fetch(`/card/remove/${e.target.dataset.id}`, {
        method: 'delete'
      }).then(res => res.json())
        .then(card => {
          if (card.courses.length) {
            const html = card.courses.map(item => {
              return `
              <tr>
                <td>${item.title}</td>
                <td>${item.count}</td>
                <td>
                  <button class="btn btn-small js-remove" data-id="${item.id}">Удалить</button>
                </td>
              </tr>
              `
            }).join('');
            $card.querySelector('tbody').innerHTML = html;
            $card.querySelector('.price').textContent = toCurrency(card.price);
          } else {
            $card.innerHTML = '<p>Корзина пуста</p>';
          }
        })
    }
  })
}