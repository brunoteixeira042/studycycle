const EXEMPLO_CICLOS = {
  "activeCircleId": "ciclo_basico_migrado",
  "circles": [
    {
      "id": "ciclo_basico_migrado",
      "name": "Ciclo Básico",
      "subjects": [
        {
          "id": "portugues",
          "name": "Português",
          "color": "#E57373",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Compreensão de Textos",
              "items": [
                "Compreensão de textos narrativos e descritivos",
                "Compreensão de textos dissertativos",
                "Informações literais e inferências",
                "Tipologia textual",
                "Gêneros textuais"
              ]
            },
            {
              "name": "Semântica e Morfologia",
              "items": [
                "Sinônimos, antônimos e substituição de palavras",
                "Reescrita de frases e parágrafos",
                "Substantivos, Adjetivos e Artigos",
                "Pronomes: classificação e emprego",
                "Verbos: tempos e modos",
                "Conjunções e Preposições"
              ]
            },
            {
              "name": "Sintaxe e Coesão",
              "items": [
                "Termos da oração (Sujeito, Predicado, Objetos)",
                "Orações coordenadas e subordinadas",
                "Coesão referencial (Anáfora e Catáfora)",
                "Emprego de conectores lógicos"
              ]
            },
            {
              "name": "Regras Oficiais",
              "items": [
                "Ortografia oficial e Acentuação gráfica",
                "Pontuação",
                "Concordância verbal e nominal",
                "Regência verbal e nominal",
                "Crase",
                "Colocação pronominal"
              ]
            }
          ]
        },
        {
          "id": "bd",
          "name": "Bancos de Dados",
          "color": "#81C784",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Fundamentos e Arquitetura",
              "items": [
                "Banco de dados: Conceitos e Abstração",
                "Arquitetura de BD",
                "Topologia: Alta disponibilidade e Escalabilidade"
              ]
            },
            {
              "name": "Modelagem e SGBD",
              "items": [
                "Modelagem MER",
                "Normalização de dados (1FN a BCNF)",
                "SGBD: Microsoft SQL Server, MySQL, PostgreSQL"
              ]
            },
            {
              "name": "Linguagem SQL e Segurança",
              "items": [
                "SQL (ANSI): DDL, DML, DQL",
                "Transact-SQL (T-SQL)",
                "Balanceamento de carga e Replicação",
                "Otimização de consultas (tuning) e Segurança"
              ]
            }
          ]
        },
        {
          "id": "bi",
          "name": "BI e Análise da Info",
          "color": "#64B5F6",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Inteligência de Negócios (BI)",
              "items": [
                "Fundamentos e técnicas de BI",
                "Sistemas de suporte a decisão",
                "Data Warehouse (ETL e OLAP)",
                "Modelagem dimensional (Star e Snowflake)"
              ]
            },
            {
              "name": "Data Mining e Big Data",
              "items": [
                "Noções de Big Data",
                "CRISP-DM",
                "Classificação, Regras de associação, Clusterização, Anomalias",
                "Machine Learning e Mineração de texto",
                "Visualização de dados"
              ]
            },
            {
              "name": "Análise de Informação",
              "items": [
                "Dado, Informação, Conhecimento, Inteligência",
                "Dados estruturados e abertos",
                "Bancos relacionais: Metadados, views, índices, Chaves",
                "Lei de Acesso à Informação"
              ]
            }
          ]
        },
        {
          "id": "eng_soft",
          "name": "Engenharia de Software",
          "color": "#FFD54F",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Processos e Requisitos",
              "items": [
                "Ciclo de vida do software",
                "Metodologias Ágeis",
                "Análise de requisitos funcionais e não funcionais"
              ]
            },
            {
              "name": "Modelagem e Qualidade",
              "items": [
                "Modelagem orientada a objetos",
                "UML: Diagramas Estruturais e Comportamentais",
                "Norma ISO/IEC 9126",
                "Análise de Pontos de Função (APF)"
              ]
            }
          ]
        },
        {
          "id": "seg_info",
          "name": "Segurança da Informação",
          "color": "#FF8A65",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Gestão e Normas",
              "items": [
                "Princípios da Segurança (CIA)",
                "ISO/IEC 27001 e 27002",
                "Políticas de segurança e auditoria",
                "Gestão de riscos e continuidade (ISO 27005 e 22301)"
              ]
            },
            {
              "name": "Controles e Ciclo de Vida",
              "items": [
                "Classificação de ativos e controle de acesso",
                "Segurança física e lógica",
                "Políticas para mobile (BYOD) e Trabalho remoto",
                "Segurança em RH e incidentes",
                "Segurança no desenvolvimento de sistemas"
              ]
            }
          ]
        },
        {
          "id": "infra_redes",
          "name": "Infraestrutura e Redes",
          "color": "#BA68C8",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Sistemas Operacionais",
              "items": [
                "Gestão de processos, memória e I/O",
                "Windows Server 2012 e 2016",
                "RedHat Linux"
              ]
            },
            {
              "name": "Redes e Equipamentos",
              "items": [
                "Fundamentos Ethernet e Wi-fi",
                "SAN, Switches e Roteadores",
                "Modelo OSI e TCP/IP (IPv4 e IPv6)",
                "VOIP e VPN"
              ]
            },
            {
              "name": "Serviços e Infraestrutura",
              "items": [
                "Firewall, Certificado Digital",
                "Active Directory (AD)",
                "Nuvem (SaaS, IaaS, PaaS) e Virtualização",
                "Docker e DevOps",
                "Servidores de Aplicação e Bancos na Infra"
              ]
            }
          ]
        },
        {
          "id": "gov_ti",
          "name": "Gestão, Gov. e Contratos",
          "color": "#4DB6AC",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Governança e Estatística",
              "items": [
                "Internet no Brasil (CGI.BR) e no mundo",
                "Televisão Digital no Brasil",
                "Estatística descritiva, Medidas de dispersão e Probabilidade",
                "Regressão linear e testes de hipóteses"
              ]
            },
            {
              "name": "Frameworks",
              "items": [
                "COBIT 2019",
                "ITIL 4",
                "Gestão da qualidade, processos e projetos"
              ]
            },
            {
              "name": "Fiscalização de Contratos",
              "items": [
                "Lei das Estatais e Lei do Pregão",
                "IN ME/SLTI nº 1/2019",
                "Critérios de remuneração, ANS, papéis do fiscal e preposto",
                "LGPD (Lei 13.709/2018)"
              ]
            }
          ]
        },
        {
          "id": "direito",
          "name": "Direito Básico",
          "color": "#A1887F",
          "target": 7200,
          "time": 0,
          "checked": [],
          "topics": [
            {
              "name": "Direito Constitucional",
              "items": [
                "Aplicabilidade das normas",
                "Direitos e garantias fundamentais",
                "Organização político-administrativa do Estado",
                "Poder Executivo, Legislativo e Judiciário"
              ]
            },
            {
              "name": "Direito Administrativo",
              "items": [
                "Estado, governo e administração pública",
                "Ato administrativo e Agentes públicos",
                "Poderes da administração",
                "Responsabilidade civil do Estado",
                "Licitações (Lei 8.666/93 e Lei 14.133/21)"
              ]
            }
          ]
        }
      ]
    }
  ]
};
