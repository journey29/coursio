import { logout } from "@/actions/logout";
import { auth } from "@/auth";
import Container from "@/components/Container";
import Contacts from "@/components/main/Contacts";
import Main from "@/components/main/Main";

export default async function Home() {
  const session = await auth()

  return (
    <main className="py-20">
      <Container>
        <Main />
        <Contacts />
      </Container>
      {JSON.stringify(session?.user)}
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </main>
  );
}
