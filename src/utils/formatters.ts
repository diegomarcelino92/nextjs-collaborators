export const slugify = (str: string) => {
  if (str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(' ', '-')

      .toLowerCase();
  }

  return '';
};

export const createCollaboratorLink = (name: string, id: string) => `/${slugify(name)}`.concat(`-id-${id}`);
