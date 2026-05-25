/**
 * AkiHaus Global Routing & Configuration Registry
 * 
 * Target Domain: akihaus.co.uk
 * Description: Gateway routing hub for directing traffic to specialized vertical stores and media channels.
 */

export const AkiHausConfig = {
  domain: "akihaus.co.uk",
  
  contact: {
    email: "hello@akihaus.co.uk", // Future-proof official contact email
  },

  // Isolated redirection routing target configurations
  routes: {
    inside: {
      name: "Space & Furniture",
      target: "https://inside.akihaus.co.uk", // Redirection to vertical sales site
      channel: "vertical_store",
    },
    outside: {
      name: "Garden Essentials & Yard Landscape",
      target: "https://outside.akihaus.co.uk", // Redirection to vertical sales site
      channel: "vertical_store",
    },
    companions: {
      name: "Seamless Pet Living",
      target: "https://companions.akihaus.co.uk", // Redirection to vertical sales site
      channel: "vertical_store",
    },
    rituals: {
      name: "Washroom Aesthetics & Self-Care",
      target: "https://rituals.akihaus.co.uk", // Redirection to subscription hub
      channel: "subscription_hub",
    },
    intelligent: {
      name: "Intelligent Personal Care Tech",
      target: "https://intelligent.akihaus.co.uk", // Redirection to vertical tech store
      channel: "vertical_store",
    }
  }
};

// Global fallback for standard browser script loading
if (typeof window !== "undefined") {
  window.AkiHausConfig = AkiHausConfig;
}
