# Checklist: validar conversão Google Ads antes de subir campanha

## 1. Teste manual do redirect

- [ ] Abrir `https://santaluziafarmacias.com.br/go/google.html` direto no navegador (desktop e mobile)
- [ ] Confirmar que redireciona pro WhatsApp em até ~1.5s
- [ ] Confirmar que a mensagem pré-preenchida aparece certa no WhatsApp Web/App

## 2. Validar disparo do gtag (Tag Assistant)

- [ ] Instalar extensão "Google Tag Assistant Legacy" ou usar o Tag Assistant novo (tagassistant.google.com)
- [ ] Ativar modo de preview/debug apontando pra `go/google.html`
- [ ] Confirmar que aparece o evento `conversion` disparando com o `send_to` correto (`AW-.../LABEL...`)
- [ ] Verificar no console do navegador (F12) se não há erro de gtag bloqueado (adblock pode mascarar teste — testar também em aba anônima sem extensões)

## 3. Verificar no Google Ads

- [ ] Google Ads → Ferramentas → Conversões → abrir a ação de conversão criada
- [ ] Status deve mudar de "Sem conversões recentes" pra "Registrando conversões" (pode levar algumas horas após o primeiro teste)
- [ ] Rodar o teste do item 1 pelo menos 2-3 vezes em sessões diferentes (navegador anônimo, dispositivos diferentes) pra gerar volume mínimo de validação

## 4. Teste do link real do anúncio (não só o /go/google.html)

- [ ] Pegar a URL final configurada no Google Ads (com `{lpurl}` ou landing page apontando pro `/go/google.html`)
- [ ] Simular clique em um anúncio de teste (ou usar "Visualização de anúncio e diagnóstico" no Google Ads, sem consumir orçamento)
- [ ] Confirmar que os parâmetros UTM chegam certos na URL (`utm_source=google&utm_medium=cpc...`)

## 5. Teste cross-device/cross-browser (crítico pra WhatsApp)

- [ ] iOS Safari → deve abrir app WhatsApp ou wa.me no navegador
- [ ] Android Chrome → deve abrir app WhatsApp direto
- [ ] Desktop sem WhatsApp instalado → deve cair no WhatsApp Web
- [ ] Testar com adblocker ativo (uBlock, Brave) — se o gtag for bloqueado, o `setTimeout` de 1.5s ainda precisa garantir o redirect (fallback funcionando)

## 6. Confirmar antes de ativar campanha de verdade

- [ ] Pelo menos 1 conversão de teste aparecendo no Google Ads
- [ ] `robots.txt` não está bloqueando `/go/` (Google não precisa indexar essas páginas, mas o crawler do Ads Preview precisa acessar — não bloquear via robots)
- [ ] Certificado HTTPS ativo (cadeado verde) — sem isso o Google pode rejeitar o anúncio
- [ ] index.html carregando rápido no PageSpeed Insights (>70 mobile é aceitável pra landing simples)

## 7. Pós-lançamento (primeiros 3 dias)

- [ ] Checar diariamente em Ads → Conversões se o número está subindo
- [ ] Comparar cliques no anúncio vs conversas recebidas no WhatsApp Business (bater manualmente pelos primeiros dias)
- [ ] Se conversão não registrar em 48h com cliques confirmados, revisar `AW-ID` e `LABEL` (erro de digitação é a causa mais comum)
