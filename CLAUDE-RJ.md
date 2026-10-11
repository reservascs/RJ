# CLAUDE-RJ.md — Projeto RJ

> Versão enxuta do Brazil Xcursions (BX). Documento mestre do BX: `CLAUDE.md`. Aqui só o que é específico do RJ.
> Pasta própria: `Desktop/RJ` (antes era `BX/site-parceiro/`, que não existe mais).

---

## 1. O que é

Site simplificado, só 2 páginas:

- **Index = catálogo** (lista dos passeios do Rio de Janeiro)
- **Pacote = página do passeio** (parceiro: botão de compra leva ao link do parceiro)

Sem home, blog, mapa nem carrinho/checkout.

Operado pela **Casa São Conrado** (Maxifor Serviços Empresariais Ltda., CNPJ 08.575.101/0001-00).

**Contatos:**
- WhatsApp +55 21 97368-8693
- turismo@casasaoconrado.com
- Rua Coronel Ribeiro Gomes, 328 — São Conrado, Rio de Janeiro/RJ, 22610-240

---

## 2. Regras do projeto

- **Só RJ:** `render.js` com `SITE_UF='RJ'` filtra os passeios.
- **Sem carrinho:** botão de compra = **link único** (`linkPagamento` no passeio, link do parceiro).
- **Independente do BX:** `data.js`, `assets/`, scripts e admin próprios. Não misturar caminhos com o BX principal.
- **Servidor de terceiro** (PHP+MySQL), **upload manual**. Não é Cloudflare.
- Admin de login/usuários copiado do BX (painel único).

---

## 3. Dados

- **`data.js`** → array `PACOTES` (só passeios RJ). Mesmos campos do BX: `id`/slug, `categoria`, `titulo`, `tagline`, `descricao`, inclusos/`naoInclusos`, `preco`/`precoNumerico`, `imagens[]` (capa = `imagens[0]`), `videos[]`, `duracao`, relacionados, `uf`, `linkPagamento`.
- i18n 5 idiomas (pt/en/es/fr/de): `TRADUCOES_INTERFACE` + `tInterface('chave.sub')`; páginas com `trocarIdioma()` devem chamar `definirIdioma()`.
- Validar após editar: `node --check data.js`.

---

## 4. Fotos

- Pastas `FOTOS-NOVAS/` e `FOTOS-PASSEIOS/` ligadas ao script de otimização (`otimizar-fotos.py` + `datajs_merge.py`), mesmo padrão do BX. Rodar os comandos **dentro da pasta `RJ/`**.
- Foto `-hero` no nome vira capa. `--fix-hero` reordena capas; `--limpar` remove do `data.js` fotos apagadas do disco.
- Página admin própria pra inserir e escolher fotos das galerias sem depender do admin do servidor.
- Padrão de nome: `<id>N.jpg`, capa = `<id>1`, vídeo = `<id>-video.mp4`.

---

## 5. Estilo

Mesmos tokens do BX, com **fundo branco** (`--cor-branco:#fffdf9`):
`--cor-primaria:#1f4d3a` · `--cor-secundaria:#c69a4e` · `--cor-areia:#f6f2e9` · verde-floresta `#0d3b2e`.
Título serifa (Fraunces), corpo sans (Inter). **Mobile-first.** Alta definição, minimalista, títulos sem ponto final.

---

## 6. Integração com casasaoconrado.com

- Site atual do parceiro roda na **Com'online** (CMS proprietário, não é hosting estático).
- Plano: manter o mesmo link, só trocar as páginas de passeios/atividades pro conteúdo novo via **rota/proxy no Cloudflare**; quartos e reservas continuam na Com'online.
- Acesso admin ao DNS de casasaoconrado.com: sim.

---

## 7. Pendências

- Entender o servidor do parceiro: o pipeline de fotos (`FOTOS-NOVAS`, `datajs_merge.py`) vai no pacote entregue ao admin de lá ou fica só local?
- Definir a rota/proxy Cloudflare pras páginas de passeios.

---

## 8. Preferências do dono (Stan)

Respostas curtas e diretas. Trocar só o que foi pedido. Validar um problema por vez. Publicar sem terminal. Registrar ações em `claude/CONTEXTO-PROJETO.md`.
