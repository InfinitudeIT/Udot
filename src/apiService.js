<<<<<<< Updated upstream
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
=======
const API_BASE_URL = "http://localhost:8000"; // FastAPI server URL

// Generic function for API requests
const apiRequest = async (endpoint, method, body = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.detail || "API request failed");
    }

    return { success: true, data: result };
  } catch (error) {
    console.error(`Error in API request: ${error.message}`);
    return { success: false, error: error.message || "Something went wrong." };
  }
};

// 1. Submit Feedback
export const submitFeedback = async (formData) => {
  return await apiRequest("/feedback/", "POST", formData);
};

// 2. Get Feedback List
export const getFeedback = async () => {
  return await apiRequest("/feedback/", "GET");
};

// 3. Agent Registration
export const registerAgent = async (agentData) => {
  return await apiRequest("/agent/register/", "POST", agentData);
};

// 4. Agent Login
export const loginAgent = async (loginData) => {
  return await apiRequest("/agent/login/", "POST", loginData);
};

// 5. Send OTP for User Login
export const sendOTP = async (phone_number) => {
  return await apiRequest("/user/login/", "POST", { phone_number });
};

// 6. Verify OTP for User Login
export const verifyOTP = async (phone_number, otp) => {
  return await apiRequest("/user/verify-otp/", "POST", { phone_number, otp });
};
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
