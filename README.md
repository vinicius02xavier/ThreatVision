# 🛡️ frontCyber

> Cyber Threat Intelligence Dashboard desenvolvido com HTML, CSS e TypeScript para monitoramento e análise de vulnerabilidades CVE em tempo real.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![Cybersecurity](https://img.shields.io/badge/Cybersecurity-Threat%20Intelligence-red)

---

## 📖 Sobre o Projeto

O **frontCyber** é uma aplicação web voltada para **Cyber Threat Intelligence (CTI)** e **Gestão de Vulnerabilidades**, permitindo a consulta, visualização e análise de vulnerabilidades conhecidas (CVEs) através de fontes públicas de inteligência de ameaças.

O objetivo do projeto é simular um dashboard utilizado por equipes de segurança para monitoramento de riscos, análise de vulnerabilidades e apoio à tomada de decisões.

Este projeto foi desenvolvido utilizando apenas tecnologias nativas da web:

- HTML5
- CSS3
- TypeScript
- APIs REST
- LocalStorage

---

## ✨ Funcionalidades

### 📊 Dashboard Executivo

- Quantidade total de CVEs carregadas
- Vulnerabilidades críticas
- Vulnerabilidades altas
- Vulnerabilidades médias
- Data da última atualização

### 🔎 Pesquisa Inteligente

- Busca de CVEs por palavra-chave
- Pesquisa por fornecedor
- Pesquisa por produto

### 🚨 Gestão de Vulnerabilidades

- Exibição de CVSS
- Classificação por severidade
- Data de publicação
- Descrição detalhada

### 📈 Visualização de Dados

- Distribuição por severidade
- Estatísticas gerais
- Tendências de vulnerabilidades

### ⭐ Favoritos

- Salvar CVEs para análise posterior
- Persistência via LocalStorage

### 🌙 Interface Moderna

- Dark Mode inspirado em Security Operations Centers (SOC)
- Layout responsivo
- Experiência otimizada para desktop e dispositivos móveis

---

## 🖼️ Preview

### Dashboard Principal

```text
┌─────────────────────────────────────────┐
│ frontCyber                            │
├─────────────────────────────────────────┤
│ Critical │ High │ Medium │ Total       │
├─────────────────────────────────────────┤
│            Gráficos CTI                 │
├─────────────────────────────────────────┤
│          Tabela de CVEs                 │
└─────────────────────────────────────────┘
```

---

## 🏗️ Arquitetura

```text
frontCyber/
│
├── index.html
│
├── css/
│   ├── reset.css
│   ├── layout.css
│   ├── dashboard.css
│   └── modal.css
│
├── ts/
│   ├── main.ts
│   ├── api.ts
│   ├── dashboard.ts
│   ├── table.ts
│   ├── charts.ts
│   ├── filters.ts
│   ├── favorites.ts
│   └── types.ts
│
├── assets/
│   ├── logo.svg
│   └── icons/
│
├── data/
│
└── README.md
```

---

## ⚙️ Tecnologias Utilizadas

- TypeScript
- HTML5
- CSS3
- Chart.js
- Fetch API
- LocalStorage

---

## 🌐 Fonte de Dados

O projeto utiliza informações públicas de vulnerabilidades disponibilizadas pelo:

- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}

Principais bases:

- NVD (National Vulnerability Database)
- CVE Program

---

## 🚀 Como Executar

### Clone o repositório

```bash
git clone https://github.com/vinicius02xavier/frontCyber.git
```

### Entre na pasta

```bash
cd frontCyber
```

### Instale as dependências

```bash
npm install
```

### Execute em modo desenvolvimento

```bash
npm run dev
```

### Build para produção

```bash
npm run build
```

---

## 🎯 Objetivos de Aprendizado

Este projeto foi criado para praticar:

- Consumo de APIs REST
- TypeScript
- Manipulação de DOM
- Visualização de dados
- Estruturação de aplicações frontend
- Conceitos de Threat Intelligence
- Gestão de Vulnerabilidades
- Boas práticas de desenvolvimento web

---

## 🔮 Roadmap

### Versão 1.0

- [x] Estrutura inicial do projeto
- [ ] Dashboard principal
- [ ] Consulta de CVEs
- [ ] Sistema de filtros
- [ ] Favoritos

### Versão 2.0

- [ ] Exportação de relatórios PDF
- [ ] Histórico de pesquisas
- [ ] Dashboard avançado
- [ ] Comparação entre fornecedores

### Versão 3.0

- [ ] Integração com múltiplas fontes de inteligência
- [ ] Mapa global de ameaças
- [ ] Alertas personalizados
- [ ] Indicadores de risco

---

## 📚 Conceitos de Segurança Abordados

- Cyber Threat Intelligence (CTI)
- Vulnerability Management
- CVE (Common Vulnerabilities and Exposures)
- CVSS (Common Vulnerability Scoring System)
- Risk Assessment
- Security Monitoring
- Security Operations Center (SOC)

---

## 👨‍💻 Autor

**Vinícius Xavier**

Tecnólogo em Análise e Desenvolvimento de Sistemas.

Interessado em:

- Cibersegurança
- Desenvolvimento Web
- Gestão de Vulnerabilidades
- Threat Intelligence
- Segurança de Banco de Dados

### Contato

GitHub: https://github.com/vinicius02xavier

LinkedIn: https://www.linkedin.com