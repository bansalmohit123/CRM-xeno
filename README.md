# Xeno
---

## Features Implemented

*   **Data Ingestion APIs:**
    *   Secure REST APIs for ingesting customer and order data via CSV uploads.
    *   Backend validation of uploaded data.
    *   Swagger UI for API documentation and testing.
*   **Campaign Creation UI:**
    *   **Audience Segmentation:**
        *   Define audience segments using flexible rule logic (e.g., `spend > 10000 AND visits < 3`).
        *   Combine conditions using AND/OR logic.
        *   Dynamic rule builder for creating segment conditions (field, operator, value).
    *   **Campaign Definition:**
        *   Create campaigns with a name, message content, and optional intent.
        *   Link campaigns to pre-defined audience segment rules.
        *   Select specific customers for a campaign.
*   **Authentication:**
    *   Google OAuth 2.0 based authentication for secure access.
    *   Ensures only logged-in users can create audiences or view/manage campaigns.
*   **AI Integration:**
    *   **AI-Driven Message Suggestions:**
        *   Generate personalized campaign message variants using Google Gemini.
        *   Users can trigger AI message generation based on campaign name and selected audience rules.
*   **Core CRM Functionality:**
    *   Listing and viewing customer data.
    *   Creating and listing segment rules.

---

## Tech Stack

*   **Frontend:**
    *   Next.js (v15+ with App Router)
    *   React (v19+)
    *   TypeScript
    *   Ant Design (for UI components)
    *   Tailwind CSS (for styling)
*   **Backend:**
    *   Node.js
    *   Express.js
    *   TypeScript
    *   MongoDB (with Mongoose ODM)
*   **Authentication:**
    *   Google OAuth 2.0
    *   JSON Web Tokens (JWTs) for session management (implicitly via Google ID token verification).
*   **API Documentation:**
    *   Swagger (OpenAPI)
*   **AI:**
    *   Google Gemini API (for message generation)
*   **Development Tools:**
    *   VS Code
    *   Git & GitHub

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm (v9.x or later) or yarn
*   MongoDB instance (local or a cloud-hosted version like MongoDB Atlas)
*   Google Cloud Platform project with OAuth 2.0 credentials enabled.

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory by copying `.env.example` (if provided, otherwise create it manually):
    ```
    PORT=5001 # Or any port you prefer
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_strong_jwt_secret_key # For any custom JWTs if used beyond Google token
    GOOGLE_CLIENT_ID=your_google_oauth_client_id
    GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
    # Add any other backend-specific variables
    ```
    Replace placeholders with your actual credentials.

4.  **Run the backend server:**
    ```bash
    npm run dev
    ```
    The backend server should start, typically on `http://localhost:5001`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the `frontend` directory:
    ```
    NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_oauth_client_id
    NEXT_PUBLIC_BACKEND_URL=http://localhost:5001 # Or your backend's URL if different

    # For AI message generation via Next.js API route
    GEMINI_API_KEY=your_google_gemini_api_key
    ```
    Replace placeholders with your actual credentials. Ensure the `GOOGLE_CLIENT_ID` here is the same as the one used for the backend if you are verifying tokens on both sides or if the frontend directly interacts with Google for the token.

4.  **Run the frontend development server:**
    ```bash
    npm run dev
    ```
    The frontend application should start, typically on `http://localhost:3000`.

---

Thank you!
