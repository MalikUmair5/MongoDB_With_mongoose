import { CreateUser, DeleteUser, GetAllUsers, UpdateUser } from "@/lib/actions";
import Form from "next/form";

export default function Home() {
  let handleSubmit = async (formData: FormData) => {
    "use server";
    let name = formData.get("username") as string;
    let email = formData.get("email") as string;
    let dateOfBirth = new Date(formData.get("dateofbirth") as string);
    let contactNumber = formData.get("contactnumber") as string;

    CreateUser({ name, email, dateOfBirth, contactNumber });
  };
  const handlefetchSubmit = async (formData: FormData) => {
    "use server";
    let email = formData.get("email") as string;
    GetAllUsers({ email });
  };

  const handleUpdateSubmit = async (formData: FormData) => {
    "use server";
    let email = formData.get("email") as string;
    let name = formData.get("name") as string;
    UpdateUser({ email, name });
  };

  const handleDeleteUser = async (formData: FormData) => {
    "use server";
    let email = formData.get("email") as string;
    DeleteUser({ email });
  };
  return (
    <div>
      <h1>Welcome to the Authentication App</h1>
      {/* Create a user form */}
      <Form action={handleSubmit} className=" flex gap-5 justify-center">
        <input
          name="username"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="Username"
        />
        <input
          name="email"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="Email"
        />
        <input
          name="dateofbirth"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="Date of Birth"
        />
        <input
          name="contactnumber"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="contactnumber"
        />
        <button type="submit">Submit</button>
      </Form>
      {/* Search a user or all users form */}

      <Form action={handlefetchSubmit} className=" flex gap-5 justify-center">
        <input
          name="email"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="Email"
        />
        <button type="submit">Fetch</button>
      </Form>

      {/* Update a users form */}
      <Form action={handleUpdateSubmit} className=" flex gap-5 justify-center">
        <input
          name="email"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="Email"
        />
        <input
          name="name"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="Email"
        />
        <button type="submit">Fetch</button>
      </Form>

       {/* Delete a users form */}
       <Form action={handleDeleteUser} className=" flex gap-5 justify-center">
        <input
          name="email"
          type="text"
          className="border border-x-4 border-y-4 border-black"
          placeholder="Email"
        />
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
