// Lógica do carrinho de compras - Brazil Xcursions
// Protótipo: persistência local via localStorage (sem backend real).

const CART_KEY = 'bx_cart_v1';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(pacoteId, participantes, data) {
  participantes = Math.max(1, parseInt(participantes, 10) || 1);
  const cart = getCart();
  const existente = cart.find(function (item) {
    return item.id === pacoteId && item.data === (data || '');
  });
  if (existente) {
    existente.participantes += participantes;
  } else {
    cart.push({ id: pacoteId, participantes: participantes, data: data || '' });
  }
  saveCart(cart);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartItem(index, participantes, data) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].participantes = Math.max(1, parseInt(participantes, 10) || 1);
    if (data !== undefined) cart[index].data = data;
  }
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function getCartDetalhado() {
  return getCart().map(function (item) {
    const pacote = getPacoteById(item.id);
    if (!pacote) return null;
    const subtotal = (pacote.precoNumerico || 0) * item.participantes;
    return Object.assign({}, item, {
      pacote: pacote,
      subtotal: subtotal
    });
  }).filter(Boolean);
}

function getCartTotal() {
  return getCartDetalhado().reduce(function (soma, item) {
    return soma + item.subtotal;
  }, 0);
}

function getCartCount() {
  return getCart().reduce(function (soma, item) {
    return soma + item.participantes;
  }, 0);
}

function formatBRL(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const count = getCartCount();
  badges.forEach(function (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
