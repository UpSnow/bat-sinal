# 🦇 Bat Sinal - Sistema de Alerta

Este é um pequeno sistema de envio de "Bat Sinais", feito com **React Native + Expo**, que permite o envio de informações de contato através de um formulário simples. Ideal para situações onde um alerta ou pedido de ajuda precisa ser enviado rapidamente.

---

## 🧱 Funcionalidades

- ✅ Tela inicial com logo e botão de acesso
- ✅ Navegação entre telas usando **React Navigation**
- ✅ Formulário com os seguintes campos:
  - Nome
  - Telefone para contato
  - Localização atual
  - Observações
- ✅ Botão "Enviar" com alerta de confirmação
- ✅ Uso de `useState` para gerenciamento de estado
- ✅ Botões implementados com `Pressable` (substituindo `TouchableOpacity`)

---

## 🖼️ Telas

### 1. Tela Inicial (Tela do Homem)
- Exibe a **logo** do sistema no centro da tela
- Um botão "Chamar o Bat Sinal" leva para o formulário

### 2. Tela de Formulário
- Inputs para nome, telefone, localização e observação
- Botão "Enviar" que dispara um alerta com os dados preenchidos
- Após confirmação, os dados são enviados (ou podem ser processados/salvos)

---

## 🧰 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation (Stack)](https://reactnavigation.org/)
- Hooks do React (`useState`)
- Componentes modernos:
  - `Pressable`, `TextInput`, `Alert`, `ScrollView`, `Image`
