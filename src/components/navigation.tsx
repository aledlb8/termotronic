import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import {
  LayoutDashboard,
  Users,
  Package,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const links = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    ...(session?.user?.role === 'ADMIN' ? [
      {
        href: '/dashboard/users',
        label: 'Users',
        icon: Users,
      },
      {
        href: '/dashboard/products',
        label: 'Products',
        icon: Package,
      },
    ] : []),
    ...((session?.user?.role === 'ADMIN' || session?.user?.role === 'RETAILER') ? [
      {
        href: '/dashboard/warranties',
        label: 'Warranties',
        icon: FileText,
      },
    ] : []),
    {
      href: '/dashboard/settings',
      label: 'Settings',
      icon: Settings,
    },
  ];

  return (
    <nav className="flex flex-col gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
              pathname === link.href
                ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
} 