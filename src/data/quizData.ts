import { CategoryDetails, Question, Persona } from '../types/quiz';

export const categories: CategoryDetails[] = [
  {
    key: 'frontend',
    label: 'Desenvolvimento Frontend',
    color: '#3B82F6', // Tailwind Blue-500
    description: 'Interface do usuário, responsividade, design system e UX/UI.'
  },
  {
    key: 'backend',
    label: 'Desenvolvimento Backend',
    color: '#10B981', // Tailwind Emerald-500
    description: 'APIs, bancos de dados, segurança, lógica de negócios e arquitetura.'
  },
  {
    key: 'infraSupport',
    label: 'Suporte em TI & Infra',
    color: '#8B5CF6', // Tailwind Violet-500
    description: 'Servidores, nuvem (AWS, GCP), CI/CD, segurança da informação e atendimento.'
  },
  {
    key: 'salesBiz',
    label: 'Vendas & Negócios',
    color: '#F59E0B', // Tailwind Amber-500
    description: 'Negociação, análise de mercado, vendas consultivas B2B e captação de clientes.'
  },
  {
    key: 'marketingSEO',
    label: 'Marketing Digital & SEO',
    color: '#EF4444', // Tailwind Red-500
    description: 'Geração de tráfego, SEO, anúncios pagos, copy e análise de métricas digitais.'
  },
  {
    key: 'productAgile',
    label: 'Gestão de Produto & Ágil',
    color: '#EC4899', // Tailwind Pink-500
    description: 'Metodologias ágeis, visão de produto, priorização do backlog e facilitação de times.'
  }
];

export const personas: Persona[] = [
  {
    id: 'frontend_persona',
    title: 'Desenvolvedor(a) Frontend',
    category: 'frontend',
    shortDescription: 'Criador de experiências interativas, focando na excelência da interface e usabilidade do usuário.',
    description: 'Você é focado na entrega visual e experiência fluida do usuário final. Adora transformar designs em código de alta performance, utilizando bibliotecas e frameworks modernos. Para uma software house, sua atenção aos detalhes garante que o produto final seja intuitivo e atrativo.',
    traits: [
      'Domínio de HTML, CSS, JavaScript/TypeScript.',
      'Apreço por design system e acessibilidade web.',
      'Conexão forte com frameworks como React, Vue ou Next.js.',
      'Visão centrada no usuário final e em performance de carregamento.'
    ],
    idealRole: 'Desenvolvedor Frontend / UI Engineer',
    skills: ['React / Vue / Angular', 'CSS / Tailwind CSS', 'Design Responsivo', 'Consumo de APIs REST / GraphQL']
  },
  {
    id: 'backend_persona',
    title: 'Desenvolvedor(a) Backend',
    category: 'backend',
    shortDescription: 'Arquiteto de dados e regras de negócio complexas, focado em estabilidade e segurança.',
    description: 'Você adora criar soluções robustas e escaláveis, focado na segurança, no tráfego de dados e no desempenho de servidores. No contexto da software house, você é quem garante que as funcionalidades do negócio rodem sem falhas por trás das cortinas.',
    traits: [
      'Modelagem e otimização de bancos de dados (SQL e NoSQL).',
      'Criação de APIs eficientes e documentadas (REST, GraphQL).',
      'Preocupação constante com segurança da informação e autenticação.',
      'Pensamento lógico avançado e arquitetura de sistemas.'
    ],
    idealRole: 'Desenvolvedor Backend / Arquiteto de Software',
    skills: ['Node.js / Python / C# / Java', 'Bancos de Dados (Postgres, MongoDB)', 'Arquitetura Clean Code', 'Segurança & Criptografia']
  },
  {
    id: 'infra_support_persona',
    title: 'Analista de Suporte & Infraestrutura Cloud',
    category: 'infraSupport',
    shortDescription: 'Guardião dos servidores e resolvedor de problemas técnicos de TI e suporte ao cliente.',
    description: 'Você brilha quando o assunto é estabilidade do sistema, implantação automatizada (CI/CD) e suporte técnico especializado. Garante que os ambientes de produção funcionem 24/7 e ajuda o time e o cliente a contornarem qualquer adversidade técnica.',
    traits: [
      'Conhecimento de nuvens como AWS, Azure ou Google Cloud.',
      'Experiência com pipelines de CI/CD e monitoramento de servidores.',
      'Habilidade para diagnosticar e solucionar problemas técnicos rapidamente.',
      'Empatia e comunicação clara no suporte ao usuário final.'
    ],
    idealRole: 'DevOps / SysAdmin / Analista de Suporte Técnico',
    skills: ['Docker & Kubernetes', 'Cloud Computing (AWS/GCP)', 'Monitoramento de Sistemas', 'Troubleshooting']
  },
  {
    id: 'sales_biz_persona',
    title: 'Consultor de Vendas & Negócios',
    category: 'salesBiz',
    shortDescription: 'O elo de novos projetos, especialista em fechar negócios e prospectar clientes B2B.',
    description: 'Seu foco está em expandir a carteira de clientes e diagnosticar dores do mercado que a software house pode resolver. Você ama conversar com clientes, entender suas necessidades corporativas e desenhar propostas comerciais assertivas.',
    traits: [
      'Excelente comunicação verbal e persuasão.',
      'Foco em metas, prospecção e fechamento de contratos.',
      'Habilidade de negociar com gestores e decisores de nível C.',
      'Compreensão de tecnologia para vender soluções sob medida.'
    ],
    idealRole: 'Business Development Representative (BDR) / Account Executive (AE)',
    skills: ['Prospecção B2B / Cold Calling', 'Negociação Comercial', 'Gestão de CRM', 'Apresentação de Propostas']
  },
  {
    id: 'marketing_seo_persona',
    title: 'Especialista em Marketing Digital & SEO',
    category: 'marketingSEO',
    shortDescription: 'O mestre da tração, responsável por atrair tráfego e consolidar a marca da empresa.',
    description: 'Você sabe como posicionar um produto no Google e atrair os clientes certos através de anúncios ou conteúdo valioso. Para a software house, sua criatividade e foco em dados são essenciais para transformar visitas em leads qualificados.',
    traits: [
      'Domínio de estratégias de SEO (On-page, Off-page, Técnico).',
      'Gestão de campanhas de tráfego pago (Google Ads, Meta Ads).',
      'Produção e otimização de conteúdo com foco em conversão.',
      'Análise de dados de performance no Google Analytics.'
    ],
    idealRole: 'Analista de Marketing Digital / Consultor SEO / Growth Marketer',
    skills: ['SEO & Redação Técnica', 'Mídia Paga (Ads)', 'Email Marketing / Inbound', 'Web Analytics']
  },
  {
    id: 'product_agile_persona',
    title: 'Product Owner / Scrum Master',
    category: 'productAgile',
    shortDescription: 'O maestro das entregas ágeis e guardião do backlog do produto.',
    description: 'Você atua na ponte entre o cliente, o negócio e o time técnico. Sua missão principal é transformar visões em escopos concretos e entregáveis, garantindo que o time trabalhe com foco e eficiência utilizando frameworks ágeis.',
    traits: [
      'Facilidade de comunicação e mediação de conflitos.',
      'Visão estratégica de negócios e gestão de produtos digitais.',
      'Familiaridade com Scrum, Kanban e metodologias ágeis.',
      'Excelência na priorização e escrita de histórias de usuário.'
    ],
    idealRole: 'Product Owner / Scrum Master / Gerente de Projetos',
    skills: ['Scrum / Kanban', 'User Stories & Backlog', 'Visão de Produto / MVP', 'Gestão de Stakeholders']
  }
];

export const questions: Question[] = [
  {
    id: 1,
    title: 'Quando você começa a planejar um novo software, qual o seu foco inicial?',
    choices: [
      {
        id: 'q1a1',
        text: 'Visualizar como será o fluxo do usuário e como as interfaces serão organizadas de forma amigável.',
        scores: { frontend: 5, productAgile: 2 }
      },
      {
        id: 'q1a2',
        text: 'Definir o modelo de dados, linguagens e como as APIs se conectarão.',
        scores: { backend: 5, infraSupport: 1 }
      },
      {
        id: 'q1a3',
        text: 'Estimar a viabilidade de servidores, escalabilidade e contingência de falhas.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q1a4',
        text: 'Analisar o potencial de monetização e o retorno sobre o investimento (ROI).',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q1a5',
        text: 'Planejar como a solução será promovida e como atrair os primeiros usuários.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q1a6',
        text: 'Definir o MVP (Produto Mínimo Viável) e organizar o backlog inicial do time.',
        scores: { productAgile: 5, salesBiz: 1 }
      }
    ]
  },
  {
    id: 2,
    title: 'Um cliente está insatisfeito porque o sistema atual demora para carregar. Qual sua abordagem?',
    choices: [
      {
        id: 'q2a1',
        text: 'Reduzir o tamanho dos arquivos (HTML, CSS, JS), otimizar imagens e carregar recursos sob demanda.',
        scores: { frontend: 5 }
      },
      {
        id: 'q2a2',
        text: 'Otimizar queries do banco de dados e aplicar sistemas de cache como Redis.',
        scores: { backend: 5 }
      },
      {
        id: 'q2a3',
        text: 'Investigar se o servidor está sobrecarregado e configurar auto-scaling ou CDN.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q2a4',
        text: 'Conversar com o cliente, acalmá-lo e explicar o plano de ação de forma comercial e consultiva.',
        scores: { salesBiz: 4, infraSupport: 2 }
      },
      {
        id: 'q2a5',
        text: 'Melhorar a mensagem de carregamento e atualizar as comunicações de SEO para não perder tráfego.',
        scores: { marketingSEO: 3, frontend: 2 }
      },
      {
        id: 'q2a6',
        text: 'Reunir o time no próximo sprint para priorizar a correção técnica e mitigar gargalos.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 3,
    title: 'Qual ferramenta ou conceito você mais gostaria de dominar no momento?',
    choices: [
      {
        id: 'q3a1',
        text: 'Frameworks visuais modernos, manipulação de estado (Redux, Zustand) e animações CSS.',
        scores: { frontend: 5 }
      },
      {
        id: 'q3a2',
        text: 'Design de APIs (GraphQL/gRPC), microsserviços e bancos de dados avançados.',
        scores: { backend: 5 }
      },
      {
        id: 'q3a3',
        text: 'Infraestrutura como código (Terraform), Docker, Kubernetes e segurança na nuvem.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q3a4',
        text: 'Técnicas de vendas B2B complexas, persuasão e fechamento de grandes contratos.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q3a5',
        text: 'SEO avançado, Growth Hacking e campanhas de conversão de anúncios.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q3a6',
        text: 'Modelagem de produtos digitais, métricas de negócio e facilitação ágil.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 4,
    title: 'Em uma reunião de time, como você costuma contribuir melhor?',
    choices: [
      {
        id: 'q4a1',
        text: 'Validando se o design proposto é viável e proporcionando ideias para melhorar a usabilidade.',
        scores: { frontend: 5 }
      },
      {
        id: 'q4a2',
        text: 'Explicando como a lógica será estruturada e garantindo que as integrações funcionem bem.',
        scores: { backend: 5 }
      },
      {
        id: 'q4a3',
        text: 'Destacando a necessidade de monitoramento e de uma esteira de deploy contínuo (CI/CD).',
        scores: { infraSupport: 4, productAgile: 1 }
      },
      {
        id: 'q4a4',
        text: 'Compartilhando as principais queixas dos clientes e as propostas que estão prestes a fechar.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q4a5',
        text: 'Mostrando como as novas funcionalidades podem ser usadas para atrair novos leads e aumentar as buscas orgânicas.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q4a6',
        text: 'Organizando as tarefas, removendo impedimentos do time e lembrando do objetivo do sprint.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 5,
    title: 'Como você mede o sucesso de um software que acabou de ser lançado?',
    choices: [
      {
        id: 'q5a1',
        text: 'Pela baixa taxa de rejeição nas telas e feedbacks positivos sobre a beleza do layout.',
        scores: { frontend: 5 }
      },
      {
        id: 'q5a2',
        text: 'Pelo baixo índice de erros e crashes nos servidores e velocidade de resposta de APIs.',
        scores: { backend: 5 }
      },
      {
        id: 'q5a3',
        text: 'Pelos dashboards de disponibilidade do servidor se mantendo em 99,9% uptime.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q5a4',
        text: 'Pela renovação de contratos ou pelo aumento no ticket médio dos novos clientes atraídos.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q5a5',
        text: 'Pelo crescimento orgânico nas buscas do Google e custo baixo por clique nas campanhas.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q5a6',
        text: 'Pelos KPIs de produto (ativação, retenção e satisfação geral do usuário final).',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 6,
    title: 'Um cliente envia uma proposta comercial que a software house não consegue atender por restrições técnicas. O que fazer?',
    choices: [
      {
        id: 'q6a1',
        text: 'Conversar diretamente com ele para propor uma alternativa de interface mais simples e viável.',
        scores: { frontend: 4, productAgile: 1 }
      },
      {
        id: 'q6a2',
        text: 'Revisar a arquitetura técnica com o time para ver se é possível ajustar o backend para atender.',
        scores: { backend: 5 }
      },
      {
        id: 'q6a3',
        text: 'Pesquisar ferramentas prontas ou infraestrutura de terceiros para suprir a demanda.',
        scores: { infraSupport: 4 }
      },
      {
        id: 'q6a4',
        text: 'Negociar com o cliente para entender a real dor dele e direcionar a venda para algo que a empresa domine.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q6a5',
        text: 'Avaliar se há valor mercadológico para criar uma nova feature e gerar case de marketing depois.',
        scores: { marketingSEO: 4, salesBiz: 1 }
      },
      {
        id: 'q6a6',
        text: 'Mapear a dor do cliente, documentar as histórias e debater com os desenvolvedores uma entrega gradual.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 7,
    title: 'Seu time precisa realizar uma migração para uma nova tecnologia. Qual sua maior preocupação?',
    choices: [
      {
        id: 'q7a1',
        text: 'Garantir que a transição não estrague a experiência visual do usuário final.',
        scores: { frontend: 5 }
      },
      {
        id: 'q7a2',
        text: 'Manter a integridade de todos os dados salvos e o funcionamento de todas as regras de negócio.',
        scores: { backend: 5 }
      },
      {
        id: 'q7a3',
        text: 'Certificar que os ambientes de testes e produção subam sem interrupção de serviço.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q7a4',
        text: 'Comunicar os clientes da melhor forma, mostrando o valor e profissionalismo na mudança.',
        scores: { salesBiz: 4, marketingSEO: 1 }
      },
      {
        id: 'q7a5',
        text: 'Utilizar a migração para novas linguagens como um chamariz comercial para atrair novos leads.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q7a6',
        text: 'Gerenciar o cronograma da migração para que não atrase as outras entregas importantes do produto.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 8,
    title: 'Como você reage quando ocorre uma queda completa do sistema?',
    choices: [
      {
        id: 'q8a1',
        text: 'Verifico logo se há alguma tela de erro personalizada e amigável para o usuário.',
        scores: { frontend: 4, infraSupport: 1 }
      },
      {
        id: 'q8a2',
        text: 'Analiso os logs de erros da API para ver onde a requisição falhou.',
        scores: { backend: 5 }
      },
      {
        id: 'q8a3',
        text: 'Acesso o provedor de nuvem (AWS/Azure) e subo imediatamente a contingência ou reinicio os containers.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q8a4',
        text: 'Ligo para os clientes mais importantes para tranquilizá-los e avisar que o time já está trabalhando.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q8a5',
        text: 'Fico atento para suspender campanhas pagas temporariamente para não gastar dinheiro de tráfego com o site fora do ar.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q8a6',
        text: 'Centralizo a comunicação do incidente, aciono os desenvolvedores e estimo o tempo de reparo.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 9,
    title: 'Como você definiria seu papel em um projeto que está começando do zero?',
    choices: [
      {
        id: 'q9a1',
        text: 'Montar a estrutura base do frontend (Next.js, Tailwind), configurar rotas e criar as primeiras telas.',
        scores: { frontend: 5 }
      },
      {
        id: 'q9a2',
        text: 'Criar as tabelas no banco de dados, mapear relacionamentos e definir a segurança das rotas da API.',
        scores: { backend: 5 }
      },
      {
        id: 'q9a3',
        text: 'Configurar a pipeline de deploy e disponibilizar as chaves dos ambientes na nuvem.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q9a4',
        text: 'Prospectar os primeiros patrocinadores ou clientes que queiram comprar o projeto antecipado.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q9a5',
        text: 'Estudar as palavras-chave do nicho e planejar a identidade da marca nas redes e buscas.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q9a6',
        text: 'Alinhar as expectativas dos stakeholders, planejar sprints e definir o cronograma de entregas.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 10,
    title: 'Um concorrente da sua software house lançou uma funcionalidade inovadora. O que você faz?',
    choices: [
      {
        id: 'q10a1',
        text: 'Analiso a interface e o fluxo do concorrente para criar algo ainda mais moderno e bonito no nosso sistema.',
        scores: { frontend: 5 }
      },
      {
        id: 'q10a2',
        text: 'Pesquiso como foi a engenharia por trás do recurso para fazer uma versão mais rápida e escalável.',
        scores: { backend: 5 }
      },
      {
        id: 'q10a3',
        text: 'Mapeio se a nossa atual infraestrutura suporta essa nova funcionalidade sem gargalos.',
        scores: { infraSupport: 4 }
      },
      {
        id: 'q10a4',
        text: 'Aproveito para conversar com clientes insatisfeitos do concorrente e oferecer nossa solução.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q10a5',
        text: 'Crio campanhas focadas na nossa vantagem competitiva para fisgar o público que busca essa novidade.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q10a6',
        text: 'Adiciono a funcionalidade ao backlog de prioridades do produto e ajusto a rota da entrega com o time.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 11,
    title: 'Qual dessas tarefas você mais gosta de executar no dia a dia?',
    choices: [
      {
        id: 'q11a1',
        text: 'Ajustar CSS, implementar componentes de design system e testar layouts no celular.',
        scores: { frontend: 5 }
      },
      {
        id: 'q11a2',
        text: 'Resolver bugs de regras de negócio, modelar tabelas e fazer consultas SQL complexas.',
        scores: { backend: 5 }
      },
      {
        id: 'q11a3',
        text: 'Automatizar tarefas de TI, instalar certificados SSL e diagnosticar lentidão nos servidores.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q11a4',
        text: 'Apresentar propostas de desenvolvimento de software para empresários e fechar parcerias.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q11a5',
        text: 'Configurar testes A/B, analisar tráfego no Google Analytics e escrever conteúdos estratégicos.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q11a6',
        text: 'Conduzir reuniões de alinhamento, escutar o cliente e refinar as prioridades das próximas semanas.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 12,
    title: 'Um cliente quer mudar completamente o escopo na metade do projeto. Qual a melhor saída?',
    choices: [
      {
        id: 'q12a1',
        text: 'Avisar que a interface e o design system precisarão ser refeitos e negociar esse tempo extra de front.',
        scores: { frontend: 4 }
      },
      {
        id: 'q12a2',
        text: 'Verificar se as tabelas e APIs antigas podem ser reaproveitadas para não perder código backend.',
        scores: { backend: 4 }
      },
      {
        id: 'q12a3',
        text: 'Mapear os custos extras que os novos recursos trarão em consumo de cloud e servidores.',
        scores: { infraSupport: 4 }
      },
      {
        id: 'q12a4',
        text: 'Emitir um aditivo de contrato para cobrar pelo novo escopo, já que a entrega original mudou.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q12a5',
        text: 'Explicar que a mudança de escopo pode prejudicar o tráfego SEO já planejado para a campanha de lançamento.',
        scores: { marketingSEO: 4 }
      },
      {
        id: 'q12a6',
        text: 'Avaliar o impacto da mudança, ajustar a ordem do backlog e negociar os prazos com o cliente no formato ágil.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 13,
    title: 'Quando o assunto é dados, em qual área você mais atua?',
    choices: [
      {
        id: 'q13a1',
        text: 'Como os dados são exibidos na tela para o usuário (tabelas visuais, gráficos dinâmicos).',
        scores: { frontend: 5 }
      },
      {
        id: 'q13a2',
        text: 'Como os dados são processados e armazenados com segurança no banco de dados.',
        scores: { backend: 5 }
      },
      {
        id: 'q13a3',
        text: 'Como são feitos os backups, segurança de rede e armazenamento escalável na nuvem.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q13a4',
        text: 'Análise de dados de faturamento, crescimento do cliente e novas oportunidades comerciais.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q13a5',
        text: 'Dados de conversão, cliques, origem de tráfego (Google, Facebook) e engajamento.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q13a6',
        text: 'Métricas de produto como Churn, CAC (Custo de Aquisição de Cliente) e LTV (Life Time Value).',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 14,
    title: 'Qual a sua postura em relação a feedbacks dos clientes da software house?',
    choices: [
      {
        id: 'q14a1',
        text: 'Gosto quando dão ideias para melhorar a usabilidade ou layout e deixá-lo mais bonito.',
        scores: { frontend: 5 }
      },
      {
        id: 'q14a2',
        text: 'Aproveito para corrigir gargalos ou lentidões no sistema que o cliente identificou.',
        scores: { backend: 5 }
      },
      {
        id: 'q14a3',
        text: 'Utilizo feedbacks sobre quedas no sistema para melhorar nossa infraestrutura cloud.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q14a4',
        text: 'Uso feedbacks positivos para colher depoimentos e fechar novas vendas com outros clientes.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q14a5',
        text: 'Estudo os elogios ou críticas para criar novos posts de marketing e consolidar a marca.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q14a6',
        text: 'Mapeio tudo na ferramenta de backlog (Jira/Trello) para organizar as melhorias nas próximas entregas.',
        scores: { productAgile: 5 }
      }
    ]
  },
  {
    id: 15,
    title: 'O que te deixa mais orgulhoso(a) ao final de um longo projeto?',
    choices: [
      {
        id: 'q15a1',
        text: 'Ver que o produto tem uma interface deslumbrante e que os usuários elogiam a facilidade de usar.',
        scores: { frontend: 5 }
      },
      {
        id: 'q15a2',
        text: 'Saber que o sistema é extremamente rápido, seguro e aguenta milhões de requisições sem falhar.',
        scores: { backend: 5 }
      },
      {
        id: 'q15a3',
        text: 'Ter certeza que a infraestrutura está 100% automatizada e monitorada com deploys contínuos.',
        scores: { infraSupport: 5 }
      },
      {
        id: 'q15a4',
        text: 'Saber que a venda do software gerou um faturamento excelente para a nossa software house.',
        scores: { salesBiz: 5 }
      },
      {
        id: 'q15a5',
        text: 'Ver o produto alcançando o topo das buscas do Google e bombando em campanhas de marketing.',
        scores: { marketingSEO: 5 }
      },
      {
        id: 'q15a6',
        text: 'Perceber que o projeto foi entregue no prazo e gerou valor real para as dores do cliente.',
        scores: { productAgile: 5 }
      }
    ]
  }
];
