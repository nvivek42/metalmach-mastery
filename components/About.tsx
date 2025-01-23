'use client'
import { companyInfo } from '../data/companyInfo'
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  CogIcon, 
  CheckBadgeIcon 
} from '@heroicons/react/24/solid'

const IconWrapper = ({ Icon }: { Icon: any }) => {
  return <Icon className="h-12 w-12 text-primary/80 mb-4 group-hover:text-primary transition-colors duration-300" />
}

export default function About() {
  
  
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      
    </section>
  )
}