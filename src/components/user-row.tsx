import { User } from "../types";
import { capitalizeFirstLetter } from "../utils";

export default function UserRow({ user }: { user: User }) {
  return (
    <tr className="bg-white border-b border-gray-200">
      <td className="px-6 py-4">
        <img src={user.image} width={40} height={40} alt={user.username} />
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {capitalizeFirstLetter(user.name)}
      </th>
      <td className="px-6 py-4">{capitalizeFirstLetter(user.username)}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="px-6 py-4">{capitalizeFirstLetter(user.role)}</td>
    </tr>
  );
}
