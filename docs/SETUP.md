**No GitHub (via interface):**

1. Repositório → **Settings → Pages**
2. Source: `Deploy from a branch`
3. Branch: `main` / pasta `/ (root)`
4. Save

O GitHub detecta o arquivo `CNAME` automaticamente e já preenche o domínio customizado nessa tela. Se não aparecer, cole `santaluziafarmacias.com.br` manualmente no campo "Custom domain".

---

**Configuração DNS (registro.br ou onde o domínio foi comprado)**

```
# Registros a criar no painel de DNS
Tipo    Nome    Valor
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     SEU_USUARIO.github.io.
```

Os 4 IPs são fixos do GitHub Pages (apex domain apontando pros servidores deles). O `www` vai como CNAME pro seu domínio `.github.io`.

---

**Depois da propagação DNS (pode levar até 24h):**

Volte em Settings → Pages e marque **Enforce HTTPS** — o GitHub emite certificado SSL automático via Let's Encrypt, mas só libera essa opção depois que o DNS propagar corretamente.

```bash
# verificar propagação (rodar local)
dig santaluziafarmacias.com.br +short
dig www.santaluziafarmacias.com.br +short
```

Se `dig` retornar os 4 IPs do GitHub, propagou. Se retornar vazio ou IP diferente, ainda está propagando ou o registro está errado.

---

**Checklist final antes de considerar "no ar":**

- [ ] Preencher todos os placeholders do `index.html` (telefone, endereço, CNPJ, CRF)
- [ ] Substituir `AW-SEU_ID_AQUI` / `LABEL_DA_CONVERSAO_AQUI` (criar conversão no Google Ads primeiro)
- [ ] Gerar `[EMBED_CODE]` do Google Maps (Maps → Compartilhar → Incorporar mapa)
- [ ] Pegar `[GOOGLE_PLACE_ID]` do link de avaliações do seu perfil Google Business
- [ ] Subir fotos reais em `assets/img/` (fachada, logo, og-cover)
- [ ] Testar os 3 links `/go/*` no celular (WhatsApp precisa abrir certo em iOS e Android)
