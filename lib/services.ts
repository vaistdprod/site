import mergedServices from '@/data/mergedServices.json';

export interface Service {
  title: string;
  icon: string;
  desc: string;
  link: string;
  tags: string[];
  img: string;
  bullets: string[];
  stats: { value: string; label: string }[];
  feat: { step: string; title: string; desc: string }[];
  intro2: { whyTitle: string; accordion: { title: string; desc: string }[] };
}

const services: { [key: string]: Service } = mergedServices;

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
    const heavyServices: { [key: string]: Omit<Service, 'title' | 'icon' | 'link' | 'tags' | 'desc'> } = {};
    for (const [key, service] of Object.entries(services)) {
      const { title, icon, link, tags, desc, ...heavyData } = service;
      heavyServices[key] = heavyData;
    }
    return heavyServices;
}
