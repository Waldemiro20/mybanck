export const brand = {
  name: 'MyBanck',
  slogan: 'Seu banco digital, do seu jeito.',
  tagline: 'Finanças simples, seguras e inteligentes.',
};

export const user = {
  name: 'Nataniel de Aguiar',
  firstName: 'Nataniel',
  email: 'nataniel.silva@email.com',
  avatar: 'NA',
  accountType: 'Conta Digital',
  agency: '0001',
  account: '123456-7',
};

export const balance = {
  available: 12458.73,
  hidden: false,
};

export const quickActions = [
  { id: '1', label: 'PIX', icon: 'flash' as const, color: '#00B894' },
  { id: '2', label: 'Transferir', icon: 'swap-horizontal' as const, color: '#6C5CE7' },
  { id: '3', label: 'Pagar', icon: 'barcode' as const, color: '#FDCB6E' },
  { id: '4', label: 'Extrato', icon: 'document-text' as const, color: '#00CEC9' },
];

export const services = [
  {
    id: '1',
    name: 'Conta Digital',
    description: 'Conta 100% gratuita, sem tarifas escondidas e com rendimento automático.',
    icon: 'wallet' as const,
    color: '#6C5CE7',
  },
  {
    id: '2',
    name: 'PIX',
    description: 'Transferências instantâneas 24h por dia, todos os dias da semana.',
    icon: 'flash' as const,
    color: '#00B894',
  },
  {
    id: '3',
    name: 'Cartão Virtual',
    description: 'Cartão de crédito virtual com cashback em todas as compras.',
    icon: 'card' as const,
    color: '#00CEC9',
  },
  {
    id: '4',
    name: 'Investimentos',
    description: 'Aplique seu dinheiro com segurança e acompanhe a rentabilidade em tempo real.',
    icon: 'trending-up' as const,
    color: '#FDCB6E',
  },
  {
    id: '5',
    name: 'Empréstimos',
    description: 'Crédito pessoal com taxas competitivas e aprovação em minutos.',
    icon: 'cash' as const,
    color: '#FF6B6B',
  },
  {
    id: '6',
    name: 'Cashback',
    description: 'Ganhe dinheiro de volta em compras selecionadas com parceiros MyBanck.',
    icon: 'gift' as const,
    color: '#A29BFE',
  },
];

export const company = {
  history:
    'Fundada em 2026, a MyBanck nasceu com a missão de democratizar o acesso a serviços financeiros de qualidade. Em poucos anos, conquistamos milhares de clientes que buscam uma alternativa moderna e transparente ao banking tradicional.',
  mission:
    'Simplificar a vida financeira das pessoas, oferecendo soluções digitais acessíveis, seguras e inovadoras.',
  vision:
    'Ser a fintech mais confiável e amada do Brasil, referência em experiência digital e atendimento humanizado.',
  values: ['Transparência', 'Inovação', 'Segurança', 'Acessibilidade', 'Empatia'],
  differentiators: [
    'Conta digital 100% gratuita',
    'Atendimento 24/7 via chat',
    'Cashback em todas as compras',
    'Investimentos a partir de R$ 1',
    'Interface intuitiva e moderna',
  ],
};

export const profileSettings = [
  { id: '1', label: 'Dados pessoais', icon: 'person-outline' as const },
  { id: '2', label: 'Segurança', icon: 'shield-checkmark-outline' as const },
  { id: '3', label: 'Notificações', icon: 'notifications-outline' as const },
  { id: '4', label: 'Cartões', icon: 'card-outline' as const },
  { id: '5', label: 'Limites', icon: 'speedometer-outline' as const },
  { id: '6', label: 'Ajuda', icon: 'help-circle-outline' as const },
  { id: '7', label: 'Sair', icon: 'log-out-outline' as const, danger: true },
];
