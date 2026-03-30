const PORTFOLIO = {
  bio: {
    name: "Ahmad Shaman Virk",
    title: "Senior Software Engineer",
    experience: "13+ years",
    location: "München, Germany",
    email: "shaman.virk@gmail.com",
    phone: "+49 176 67449518",
    linkedin: "https://www.linkedin.com/in/a-virk",
    languages: ["English", "German (A1)"],
    cvDownload: "assets/Ahmad_Shaman_Virk_CV.pdf"
  },

  highlights: [
    "Integration framework enabling internal teams and external LOBs to connect with SAP Digital Commerce Platform",
    "API gateway layer: Kyma → ORY Hydra/Oathkeeper → ISTIO migration",
    "Spring Cloud Gateway plugin system for serverless request interception and transformation",
    "MVP to production, reducing processing time from hours to minutes",
    "Full-text distributed search and payment gateway integrations (Stripe, Etisalat)",
    "Social + e-commerce platform built as team lead, concept to production",
    "Industrial automation tools for Oil & Gas refineries (Java EE + C++ via JNI)"
  ],

  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Java", "JavaScript", "Spring Boot", "Spring Cloud Gateway", "Node.js", "Lambda/Serverless", "GraphQL", "JPA/Hibernate", "Spring Security"]
    },
    {
      category: "Cloud & Infrastructure",
      items: ["Kubernetes", "Helm", "Docker", "Kyma", "ISTIO", "Azure", "PCF", "Tilt"]
    },
    {
      category: "DevOps",
      items: ["Jenkins", "Concourse CI", "Maven", "Apache", "Linux"]
    },
    {
      category: "Observability",
      items: ["Grafana", "Dynatrace", "Distributed Tracing", "JSON-structured logging"]
    },
    {
      category: "Security",
      items: ["ISTIO", "ORY Hydra/Oathkeeper", "OAuth 2.0", "OIDC"]
    },
    {
      category: "Frontend",
      items: ["Angular", "TypeScript", "RxJs", "NgRx", "SAP Commerce Spartacus", "HTML5"]
    },
    {
      category: "Eventing & Messaging",
      items: ["NATS", "RabbitMQ", "Event Proxies", "Spring Cloud Streams"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Flyway", "Liquibase"]
    },
    {
      category: "Testing",
      items: ["JUnit", "TDD", "Contract Tests", "Integration Tests", "Playwright", "SonarQube"]
    }
  ],

  experience: [
    {
      company: "Striped Giraffe / SAP",
      role: "Software Engineer",
      context: "Consultant at SAP Store",
      period: "Sept 2020 – Present",
      stack: ["Java", "Spring Boot", "Spring Cloud Gateway", "NATS", "Kubernetes", "ISTIO", "PostgreSQL", "Grafana"],
      summary: [
        "Built the Extension Framework for SAP Digital Commerce Platform",
        "Core focus: API gateway, authentication/authorization, developer tooling"
      ],
      detail: [
        "Developed integration framework for internal teams and external SAP LOBs",
        "Designed and implemented API gateway using Kyma API Rules, ORY Hydra/Oathkeeper",
        "Migrated API gateway to ISTIO for auth/authz",
        "Built Spring Cloud Gateway plugin system — serverless function interception and transformation",
        "Built reusable JSON-structured logging libraries for observability",
        "Consolidated OpenAPI/Swagger specs into unified developer portal with scope-based access control",
        "Built Grafana dashboards; used Dynatrace for monitoring and troubleshooting",
        "POC: Spartacus Checkout integration with Hybris (HILTI client)",
        "Delivered My Choice storefronts based on Hybris & Spartacus"
      ]
    },
    {
      company: "Cinnova / Comcast",
      role: "Senior Software Engineer",
      context: "Consultant at Comcast Business",
      period: "Sep 2018 – Dec 2019",
      stack: ["Java", "Spring Boot", "Spring Cloud Streams", "RabbitMQ", "MS Azure", "PCF"],
      summary: [
        "Microservices architecture migration and automation platform for enterprise managed services"
      ],
      detail: [
        "Led microservices migration from monolithic architecture",
        "Built automation platform for enterprise managed services workflows",
        "Worked with Spring Cloud Streams and RabbitMQ for event-driven processing",
        "Deployed on Microsoft Azure and Pivotal Cloud Foundry"
      ]
    },
    {
      company: "Focusteck",
      role: "Senior Software Engineer",
      context: null,
      period: "Dec 2015 – Jan 2018",
      stack: ["Java", "Spring", "JAX-RS", "MySQL", "ASP.NET", "Angular"],
      summary: [
        "Two engagements: non-profit donation platform (GIIVV / Punch Agency) and airline ticketing (Faremakers)"
      ],
      detail: [
        "GIIVV: Built backend for non-profit donation platform with Stripe payment integration",
        "Faremakers: Led team of 4, implemented Etisalat payment gateway for airline ticketing",
        "Adapco GeoPro: Maintained web-based data management system (PHP, JavaScript)"
      ]
    },
    {
      company: "Archimedes / Chefya",
      role: "Senior Software Engineer",
      context: null,
      period: "Jun 2014 – Nov 2015",
      stack: ["Java", "Spring MVC", "Thymeleaf", "Hibernate", "Apache Solr"],
      summary: [
        "Built e-commerce + social platform for the food industry"
      ],
      detail: [
        "Designed and developed full social and e-commerce platform for Chefya",
        "Implemented full-text distributed search using Spring Data Solr + Apache Solr",
        "Built as team lead from concept to production"
      ]
    },
    {
      company: "Sensys",
      role: "Software Engineer",
      context: "Later became INTECH Process Automation Inc.",
      period: "Jul 2011 – May 2014",
      stack: ["Java EE", "C++", "JNI"],
      summary: [
        "Industrial automation tools for Oil & Gas refineries"
      ],
      detail: [
        "Built industrial automation and data management tools for Oil & Gas sector",
        "Integrated Java EE with native C++ code via JNI for performance-critical operations"
      ]
    }
  ]
};
