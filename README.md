# Fuel-Feast

Fuel-Feast is a comprehensive food platform tailored for fitness enthusiasts seeking nutritious food options. Designed to streamline food ordering and offer personalized cooking assistance, Fuel-Feast is ideal for gym-goers looking to maintain a healthy diet. With seamless ordering, AI-powered cooking guides, and a secure payment system, Fuel-Feast supports users in meeting their nutritional goals, whether dining out or cooking at home.

## Features

1. *Convenient Food Ordering*  
   - An intuitive platform for browsing, customizing, and ordering nutritious food from local restaurants.
   - A user-friendly interface that minimizes the time spent on each step of the ordering process.

2. *Personalized Cooking Guide*  
   - Provides step-by-step cooking instructions tailored to user preferences, dietary needs, skill levels, and available ingredients.
   - Leverages generative AI (via the Gemini API) to help users cook healthy recipes with confidence and discover new nutritious options.

3. *Customizable Calorie Count*  
   - Allows users to customize dishes based on their specific calorie needs, making it easier to adhere to fitness and nutrition goals.
   - Offers suggestions for ingredient modifications and portion adjustments to meet desired calorie counts.

4. *Secure Payment System*  
   - A secure and user-friendly payment gateway that ensures smooth transactions and builds user trust.

5. *Dynamic User Interface*  
   - A responsive React-based frontend that enables easy navigation between ordering, payment, and cooking functions.

6. *High Performance and Scalability*  
   - A robust Node.js backend that efficiently handles a growing user base and large transaction volumes.

7. *Holistic Food Experience*  
   - Supports both food ordering and home cooking, making Fuel-Feast a versatile resource for fitness-focused dining and meal prep.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/himani080/Fuel-Feast.git
    ```

2. Install dependencies for all `package.json` files in the project:

    ```bash
    npm install
    ```

3. Set your own API key for Google Gemini in `chatbot_server.js`.

4. Run the chatbot server:

    ```bash
    node chatbot_server.js
    ```

5. In the `frontend` folder's integrated terminal, start the frontend server:

    ```bash
    npm run dev
    ```

6. In the `backend` folder's integrated terminal, start the backend server:

    ```bash
    npm run dev
    ```

7. Configure the MongoDB Atlas database link and password in the `config.env` file.

8. Start the site on the frontend server port (localhost).

## Usage

1. Open the application.
2. Browse nutritious food options, customize orders, or access the cooking guide.
3. Use AI-powered recipe instructions to prepare healthy meals at home.
4. Customize your dish’s calorie content to meet dietary needs.
5. Make secure payments through the integrated payment system.

## Contributing

We welcome contributions! Here’s how you can help:

1. Fork the project.
2. Create a new branch:

    ```bash
    git checkout -b feature/YourFeature
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m 'Add YourFeature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/YourFeature
    ```

5. Submit a pull request.

## Contributors

- Himani Arora
- Aryan Malkani
- Yogita Beniwal
- Gargi Mittal

## License

This project does not currently have a license. 

## Contact

For questions or suggestions, please feel free to open an issue on this repository.
