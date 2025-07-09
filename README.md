# Book Management System

This is a web application for managing a collection of books, allowing users to add, view, update, and delete book entries. It also includes user authentication features (login and signup).

## Demo

You can access a live demo of the application here: [https://bookstore-management-system-coral.vercel.app/](https://bookstore-management-system-coral.vercel.app/)

## Features

*   **User Authentication:**
    *   Login with existing credentials.
    *   Sign up for a new account.
    *   Logout functionality.
*   **Book Management:**
    *   **Add Books:** Input details like book name, author name, price, publication date, and genre.
    *   **View Books:** Display a list of all added books.
    *   **Update Books:** Modify existing book details.
    *   **Delete Books:** Remove books from the collection.
*   **Filtering and Searching:**
    *   Filter books by genre.
    *   Search books by name or author.
*   **Responsive Design:** The application is designed to be accessible on various screen sizes.
*   **Notifications:** Toast notifications provide feedback for successful operations (add, update, delete, login, logout, signup).

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Redux Toolkit:** For efficient state management.
    *   `authSlice.js`: Manages user authentication state (user, loading, error).
    *   `booksSlice.js`: Manages book data state (books array, selected book for editing, error, loading).
    *   `hideShowSlice.js`: Manages the visibility of the book form.
*   **React Router DOM:** For handling navigation and routing within the application.
*   **Firebase (Firestore & Authentication):**
    *   **Firestore:** A NoSQL cloud database used for storing book data.
    *   **Authentication:** For user registration and login.
*   **React Icons:** For various icons used throughout the application.
*   **React Toastify:** For displaying toast notifications.
*   **Bootstrap:** A popular CSS framework for responsive and modern UI components.

## Project Structure

The project is organized into the following main directories:

*   `src/`: Contains all the source code.
    *   `app/`: Redux store configuration.
    *   `assets/`: Static assets like images.
    *   `auth/`: Redux slices and thunks related to user authentication.
    *   `components/`: Reusable React components (e.g., `Form`, `Header`, `Login`, `SignUp`, `Table`).
    *   `features/`: Redux slices and thunks for managing book data and UI state.
        *   `books/`: Redux slice for book-related state and actions.
        *   `hide/`: Redux slice for controlling form visibility.
        *   `thunk/`: Asynchronous Redux thunks for interacting with Firestore.
    *   `firebase/`: Firebase configuration.
    *   `pages/`: Main application pages (e.g., `AuthPage`, `Home`).

## Setup and Installation

To run this project locally, follow these steps:

**1. Clone the repository:**

```bash
git clone <repository-url>
cd book-management-system
```

**2. Install dependencies:**

```bash
npm install
# or
yarn install
```

**3. Set up Firebase:**

*   Go to the [Firebase Console](https://console.firebase.google.com/).
*   Create a new Firebase project.
*   Enable **Firestore Database** and **Authentication** (Email/Password provider).
*   Register a new web app and copy your Firebase configuration.
*   Create a `.env` file in the root of your project and add your Firebase credentials:

    ```
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

**4. Run the application:**

```bash
npm run dev
# or
yarn dev
```

The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

## Usage

1.  **Authentication:**
    *   Upon opening the application, you will be directed to the `AuthPage`.
    *   You can either `Login` with existing credentials or `Sign up` for a new account.
2.  **Home Page:**
    *   After successful login/signup, you will be redirected to the `Home` page.
    *   The `Home` page displays a banner and the "Explore Collections" section.
3.  **Adding a Book:**
    *   Click the "+ Add" button.
    *   A form will appear where you can enter book details.
    *   Fill in the `Book Name`, `Author Name`, `Book Price`, `Date`, and select a `Genre`.
    *   Click the `Tick` icon to add the book.
4.  **Viewing Books:**
    *   All added books are displayed in cards within the "Explore Collections" section.
5.  **Updating a Book:**
    *   Click the `Pencil` icon on a book card.
    *   The form will pre-populate with the selected book's data.
    *   Modify the desired fields and click the `Tick` icon to save changes.
6.  **Deleting a Book:**
    *   Click the `Trash` icon on a book card to delete it.
7.  **Filtering and Searching:**
    *   Use the `Search` input field to search for books by `Book Name` or `Author Name`.
    *   Use the `Sort` dropdown to filter books by `Genre`.
8.  **Logout:**
    *   Click the `Logout` button in the header to log out of your account.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or want to contribute to the codebase, please feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
