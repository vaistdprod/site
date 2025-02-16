import mergedServices from '@/data/mergedServices.json';

interface Service {
  title: string;
  icon: string;
  desc: string;
  link: string;
  tags: string[];
  // Additional properties can be allowed:
}

// Cast the imported JSON data to our defined type.
// This assumes mergedServices is an object with string keys and Service values.
const services = mergedServices as { [key: string]: Service };

export function getLightServices() {
  const lightServices: { [key: string]: Pick<Service, 'title' | 'icon' | 'desc' | 'link' | 'tags'> } = {};
  for (const [key, service] of Object.entries(services)) {
    lightServices[key] = {
      title: service.title,
      icon: service.icon,
      desc: service.desc,
      link: service.link,
      tags: service.tags
    };
  }
  return lightServices;
}

export function getHeavyService(serviceKey: string): Service | null {
  const service = services[serviceKey];
  return service || null;
}

export function getAllHeavyServices() {
  const heavyServices: { [key: string]: Partial<Service> } = {};
  for (const [key, service] of Object.entries(services)) {
    // Exclude light properties to get only heavy data:
    // Using rest to capture extra properties is now safe because service has a known object type.
    const { title, icon, link, tags, ...heavyData } = service;
    heavyServices[key] = heavyData;
  }
  return heavyServices;
}
