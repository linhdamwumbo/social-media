export const host = 'https://landing-api-uat.wewumbo.io';

const apiUrl = host + '/wp-json';

export const getPageListURL = () => `${apiUrl}/wp/v2/pages`;

export const getPageDetailURL = (id) => `${apiUrl}/wp/v2/pages/${id}`;

export const getPageDetailBySlugURL = (slug) =>
  `${apiUrl}/wp/v2/pages?slug=${slug}`;

export const getMenuListURL = () => `${apiUrl}/menus/v1/menus`;

export const getMenuDetailURL = (id) => `${apiUrl}/menus/v1/menus/${id}`;
