import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import UserRow from "../components/user-row";
import { getUsers } from "../services/users";

export default function Users() {
  const { user } = useAuth();
  const [users, setUsers] = useState<any[] | null>(null);

  useEffect(() => {
    if (!user) {
      window.location.replace("/");
    } else {
      (async () => {
        try {
          const response = await getUsers();
          console.log(response);
          setUsers(response);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, []);

  return (
    <section className="text-3xl text-red-500">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody>{users?.map((u) => <UserRow key={u.id} user={u} />)}</tbody>
        </table>
      </div>
    </section>
  );
}
