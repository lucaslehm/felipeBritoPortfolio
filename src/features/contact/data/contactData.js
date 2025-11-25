export const contractMe = {
  title: "Me contrate",
  text: "Estou buscando uma oportunidade formal como Designer Gráfico. Se você tem interesse em um profissional qualificado para compor sua equipe, que aprende rápido e entrega resultado, podemos conversar! Estou disponível para entrevistas.",
  buttonText: "Marcar entrevista",
};

export const formContact = {
  title: 'Precisa de um Freela?',

  description: 'Eu também trabalho com projetos pontuais, como desenvolvimento de identidades visuais, criativos de alta performance, artes para social media e outros projetos referente a design gráfico.',

  formFields: {
    Name: {
      id: "name",
      label: 'Nome',
      type: 'text',
      placeholder: 'Digite seu nome...',
      icon: 'RiUserLine',
      required: true
    },

    Phone: {
      id: "phone",
      label: 'Telefone (com DDD)',
      type: 'tel',
      placeholder: 'Ex: (11) 99999-9999',
      icon: 'RiPhoneLine',
      required: true
    },

    Email: {
      id: "email",
      label: 'E-mail',
      type: 'email',
      placeholder: 'Digite seu e-mail...',
      icon: 'RiMailLine',
      required: true
    },

    Area: {
      id: "area",
      label: 'Área',
      type: 'select',
      placeholder: 'Selecione a área...',
      icon: 'RiBriefcaseLine',
      options: [
        'Branding',
        'Criativos',
        'Social Media',
        'Outros'
      ],
      required: true
    },

    Urgency: {
      id: "urgency",
      label: 'Urgência do projeto',
      type: 'select',
      placeholder: 'Qual o nível de urgência?',
      icon: 'RiTimerLine',
      options: [
        'Baixa - sem pressa',
        'Média - nas próximas semanas',
        'Alta - preciso começar logo',
        'Urgente - para ontem!'
      ],
      required: true
    },

    ProjectDescription: {
      id: "project_description",
      label: 'Sobre o projeto',
      type: 'textarea',
      placeholder: 'Descreva seu projeto...',
      icon: 'RiChat3Line',
      required: true
    }
  }
}