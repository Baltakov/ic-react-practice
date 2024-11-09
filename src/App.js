import { User } from "./components/User/User";
import { data } from "./data/data";
import { Section } from "./components/Section/Section";
import { Users } from "./components/Users/Users";

function App() {
  return (
    <>
      <Section>
        {/* <User name={data[0].name} email={data[0].email} /> */}
      </Section>
      <Section title="Users">
        <Users users={data} />
      </Section>
    </>
  );
}

export default App;
