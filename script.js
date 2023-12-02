//your JS code here. If required.
function updateTotal() {
      const prices = document.querySelectorAll('.prices');
      let totalPrice = 0;

      prices.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
      });

      const table = document.getElementById('groceryTable');
      const totalRow = document.createElement('tr');
      const totalCell = document.createElement('td');

      totalCell.textContent = 'Total Price: $' + totalPrice.toFixed(2);
      totalCell.setAttribute('colspan', '2');
      totalRow.appendChild(totalCell);
      
      // Remove the previous total row if it exists
      const existingTotalRow = table.querySelector('.total-row');
      if (existingTotalRow) {
        table.querySelector('tbody').removeChild(existingTotalRow);
      }

      totalRow.classList.add('total-row');
      table.querySelector('tbody').appendChild(totalRow);
    }

    // Call the updateTotal function initially and whenever prices change
    updateTotal();