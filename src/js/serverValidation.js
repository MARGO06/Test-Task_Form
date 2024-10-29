export const serverValidation = async (inputs) => {
  try {
    const response = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    const data = await response.json();
    if (data.status === "error") {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
