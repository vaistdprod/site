import mergedServices from '@/data/mergedServices.json';
export function getLightServices() {
  const lightServices = {};
  for (const [key, value] of Object.entries(mergedServices)) {
    lightServices[key] = {
      title: value.title,
      icon: value.icon,
      desc: value.desc,
      link: value.link,
      tags: value.tags
    };
  }
  return lightServices;
}

export function getHeavyService(serviceKey) {
  const service = mergedServices[serviceKey];
  if (!service) return null;

  return service;
}

export function getAllHeavyServices() {
  const heavyServices = {};
  for (const [key, value] of Object.entries(mergedServices)) {
    const { title, icon, link, tags, ...heavyData } = value;
    heavyServices[key] = heavyData;
  }
  return heavyServices;
}