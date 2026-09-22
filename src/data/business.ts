export const business = {
  name: 'KGN Enterprises',
  shortName: 'IK Sliding Window',
  tagline: 'Manufacturers of Sliding Windows, Doors, Grills, Decorative Gates & Prefab Structures',
  owners: [
    { name: 'Irfan Khan', phone: '7709562968' },
    { name: 'Nayab Khan', phone: '8208144316' },
  ],
  email: 'ik8029359@gmail.com',
  address: 'Man Road, Near Shivparvati Mangal Karyalaya, Hinjewadi Phase-3, Pune - 411057',
}

export const primaryPhone = business.owners[0].phone
export const telHref = (phone: string) => `tel:+91${phone}`
export const mailHref = `mailto:${business.email}`
