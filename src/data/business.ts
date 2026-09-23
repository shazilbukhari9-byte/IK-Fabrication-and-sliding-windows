export const business = {
  name: 'IK Sliding Window',
  shortName: 'ik fabrication and sliding window',
  tagline: 'Manufacturers of Sliding Windows, Doors, Grills, Decorative Gates & Prefab Structures',
  owner: { name: 'Irfan Khan', phones: ['9930314358', '7709562968'] },
  email: 'ik8029359@gmail.com',
  address: 'Man Road, Near Shivparvati Mangal Karyalaya, Hinjewadi Phase-3, Pune - 411057',
}

export const primaryPhone = business.owner.phones[0]
export const telHref = (phone: string) => `tel:+91${phone}`
export const mailHref = `mailto:${business.email}`
