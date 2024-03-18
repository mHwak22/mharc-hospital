'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname hook

interface SidebarLink {
  href: string;
  label: string;
}

const sidebarLinks: SidebarLink[] = [
  { href: '/services', label: 'Ambulance' },
  { href: '/services/doctor-app', label: 'Doctor Appointment' },
  { href: '/services/elder-care', label: 'Elder Care' },
  { href: '/services/international-doctor-consultation', label: 'International Doctor Consultation' },
  { href: '/services/medical-tourism', label: 'Medical Tourism' },
  { href: '/services/mharc-international-lab', label: 'MHARC International Lab' },
  { href: '/services/supplement-product', label: 'Supplement Product' },
  { href: '/services/voc-medical-course', label: 'Vocational Medical Course' },
];

const Sidebar = () => {
  const currentPath = usePathname(); 

  return (
    <div className="bg-[#72a2f7] text-white w-[95%] h-screen rounded-lg gap-6 items-center justify-center">
      <div className="m-4">
        <ul>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="mb-2">
              <Link href={link.href} className={`text-lg  hover:text-yellow-700 ${currentPath === link.href ? 'active-link' : ''}`}>
                  {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
