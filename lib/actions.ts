import { registerUser } from "./definations";

export async function CreateUser({
  name,
  email,
  dateOfBirth,
  contactNumber,
}: registerUser) {
  const userData = {
    name,
    email,
    dateOfBirth,
    contactNumber,
  };
  const apiUrl = "http://localhost:3000/api/users/create"; // Update with the correct URL if deployed

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Parse and log the response
    const result = await response.json();
    console.log("API Response:", result);

    if (response.ok) {
      console.log("Test Passed: User created successfully!");
    } else {
      console.error("Test Failed:", result.error || "Unknown error");
    }
  } catch (error) {
    console.error("Test Failed: Unable to connect to API", error);
  }
}

export async function GetAllUsers({ email }: { email?: string }) {
  const apiUrl = email
    ? `http://localhost:3000/api/users/fetch?email=${email}`
    : "http://localhost:3000/api/users/fetch/"; // Update with the correct URL if deployed
  console.log(apiUrl);
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) console.log("Data fetched successfully", result);
    else if (response.status === 404) console.error(response.statusText);
    return result;
  } catch (err) {
    console.error("Failed to fetch Data", err);
  }
}

export async function UpdateUser({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  if (!email || !name) {
    return "email and name are required";
  }
  const apiUrl = `http://localhost:3000/api/users/update?email=${email}&name=${name}`; // Update with the correct URL if deployed
  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) console.log(`User ${email} updated successfully`, result);
    return result;
  } catch (err) {
    console.error("Failed to Update the user", err);
  }
}

export async function DeleteUser({ email }: { email: string }) {
  if (!email) {
    return "email is required";
  }
  const apiUrl = `http://localhost:3000/api/users/delete?email=${email}`; // Update with the correct URL if deployed
  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (response.ok) console.log(`User ${email} Deleted successfully`, result);
    return result;
  } catch (err) {
    console.error("Failed to Update the user", err);
  }
}
