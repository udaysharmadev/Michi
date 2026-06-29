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
      case "data-scientist":
        return (await import("./data-scientist")).dataScientistContent;
      case "data-engineer":
        return (await import("./data-engineer")).dataEngineerContent;
      case "mlops":
        return (await import("./mlops")).mlopsContent;
      case "llm":
        return (await import("./llm")).llmContent;
      case "sre":
        return (await import("./sre")).sreContent;
      case "ux-ui":
        return (await import("./ux-ui")).uxUiDesignerContent;
      case "software-architect":
        return (await import("./software-architect")).softwareArchitectContent;
      case "qa-engineer":
        return (await import("./qa-engineer")).qaEngineerContent;
      case "product-manager":
        return (await import("./product-manager")).productManagerContent;
      case "dba":
        return (await import("./dba")).dbaContent;
      default:
        return null;
    }
  } catch (error) {
    console.error(`Error loading content for slug ${slug}:`, error);
    return null;
  }
}
