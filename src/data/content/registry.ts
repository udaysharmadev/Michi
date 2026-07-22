import { RoadmapContent } from "../types";

export async function getContentBySlug(slug: string): Promise<RoadmapContent | null> {
  try {
    switch (slug) {
      case "frontend":
        return (await import("./frontend")).frontendContent;
      case "backend":
        return (await import("./backend")).backendContent;
      case "fullstack":
        return (await import("./fullstack")).fullstackContent;
      case "mobile":
        return (await import("./mobile")).mobileContent;
      case "android":
        return (await import("./android")).androidContent;
      case "ios":
        return (await import("./ios")).iosContent;
      case "devops":
        return (await import("./devops")).devopsContent;
      case "cloud":
        return (await import("./cloud")).cloudContent;
      case "ai-engineer":
        return (await import("./ai-engineer")).aiEngineerContent;
      case "cyber-security":
        return (await import("./cyber-security")).cyberSecurityContent;
      case "blockchain":
        return (await import("./blockchain")).blockchainContent;
      case "game":
        return (await import("./game")).gameDeveloperContent;
      case "machine-learning":
        return (await import("./machine-learning")).machineLearningContent;
      case "system-design":
        return (await import("./system-design")).systemDesignContent;
      // Stub roadmaps are excluded from the registry so they show as "Coming Soon"
      // case "data-scientist":
      // case "data-engineer":
      // case "mlops":
      // case "llm":
      // case "sre":
      // case "ux-ui":
      // case "software-architect":
      // case "qa-engineer":
      // case "product-manager":
      // case "dba":
      default:
        return null;
    }
  } catch (error) {
    console.error(`Error loading content for slug ${slug}:`, error);
    return null;
  }
}
