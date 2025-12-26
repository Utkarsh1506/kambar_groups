import { Leaf } from 'lucide-react'

interface LogoProps {
  className?: string
  textColor?: string
}

export default function Logo({ className = '', textColor = 'text-gray-900' }: LogoProps) {
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-lg">
          <Leaf className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-lg ${textColor} leading-tight`}>Kambar</span>
        <span className={`text-xs font-semibold text-emerald-600`}>Groups</span>
      </div>
    </a>
  )
}
