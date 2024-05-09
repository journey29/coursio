import Navbar from "../_components/Navbar"

const navLinks = [
  {
    label: "Profile",
    href: "/profile"
  },
  {
    label: "Settings",
    href: "/settings"
  },
  {
    label: "Admin",
    href: "/admin"
  }
]

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Navbar navLinks={navLinks} />
      {children}
    </div>
  )
}

export default ProtectedLayout
