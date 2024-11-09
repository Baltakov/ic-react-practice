import { User } from "../User/User";

export const Users = ({ users }) => {
  return (
    <ol>
      {users.map(({ id, name, email }) => (
        <li key={id}>
          <User name={name} email={email} />
          {/* <p>Name:{name}</p>
          <p>Email:{email}</p> */}
        </li>
      ))}
    </ol>
  );
};
