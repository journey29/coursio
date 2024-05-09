import Contacts from "@/components/main/Contacts"
import Main from "@/components/main/Main"

export default async function Home() {
  return (
    <div className="py-10">
      <Main />
      <Contacts />
    </div>
  )
}
