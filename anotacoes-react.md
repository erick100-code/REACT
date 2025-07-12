# 📝 Anotações sobre Ambiente de Desenvolvimento e Produção no React

## 🚧 Modo de Desenvolvimento

- Quando você executa `npm run dev` ou `npm start`, seu projeto React roda em **modo de desenvolvimento**.
- O site abre no `localhost` e mostra mensagens de aviso e debug para facilitar o desenvolvimento.
- A extensão React Developer Tools mostra um ícone vermelho e a mensagem:
  > This page is using the development build of React.
- **Isso é normal** durante o desenvolvimento local.

---

## 🚀 Modo de Produção

- Quando o projeto estiver pronto para ser publicado, execute:
  ```
  npm run build
  ```
- Isso gera uma versão otimizada do seu site na pasta `build` (ou `dist`).
- Essa versão é menor, mais rápida e não mostra mensagens de debug.
- **Sempre publique a versão de produção** para garantir desempenho e segurança.

---

## 📌 Resumo

- Use `npm run dev` ou `npm start` para desenvolver localmente.
- Use `npm run build` para gerar os arquivos finais para publicação.
- A mensagem de "development build" é apenas um aviso, não um erro.

---

**Dica:**  
Mantenha essas anotações para lembrar sempre das diferenças entre os modos e garantir que seu site esteja pronto para produção!