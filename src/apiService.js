const API_BASE_URL = "http://localhost:8000"; // FastAPI server URL

export const submitFeedback = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/feedback/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return { success: response.ok, data: result };
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
};
