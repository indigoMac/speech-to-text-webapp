# Text-to-Speech Web Application

This repository contains a text-to-speech web application built using Flask for the backend and React for the frontend. The application uses Google Cloud Text-to-Speech API to convert input text into speech.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Convert text to speech using Google Cloud Text-to-Speech API.
- Supports multiple voices and languages.
- Allows customization of pitch, speaking rate, and voice gender.
- Simple and user-friendly web interface.

## Prerequisites

- [Python 3.x](https://www.python.org/downloads/)
- [Node.js and npm](https://nodejs.org/)
- [Google Cloud Account](https://cloud.google.com/)

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/speech-to-text-webapp.git
   cd speech-to-text-webapp/backend
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up Google Cloud credentials:

   - Download your service account key from Google Cloud Console.
   - Save the key file as `texttospeech-credentials.json` in the `backend` directory.
   - Set the environment variable:

     ```bash
     export GOOGLE_APPLICATION_CREDENTIALS="path/to/texttospeech-credentials.json"
     ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend/tts-react-app
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

## Running the Application

### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd ../backend
   ```

2. Run the Flask server:

   ```bash
   python app.py
   ```

### Frontend

1. Navigate to the `frontend/tts-react-app` directory:

   ```bash
   cd ../frontend/tts-react-app
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

3. Open your browser and go to `http://localhost:3000`.

## Usage

1. Enter the text you want to convert to speech in the text area.
2. Select the desired language, voice name, gender, pitch, and speaking rate.
3. Click the "Convert" button.
4. The audio will be generated and displayed as an audio player below the form.

## Project Structure

speech-to-text-webapp/
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ ├── templates/
│ │ └── index.html
│ ├── static/
│ │ └── output.mp3
│ └── texttospeech-credentials.json
├── frontend/
│ └── tts-react-app/
│ ├── public/
│ │ ├── index.html
│ │ └── textToSpeech.png
│ ├── src/
│ │ ├── components/
│ │ │ ├── PitchRateInput.js
│ │ │ ├── SelectInput.js
│ │ │ ├── TextInput.js
│ │ │ ├── TextToSpeech.css
│ │ │ └── TextToSpeech.js
│ │ ├── App.css
│ │ ├── App.js
│ │ ├── index.js
│ ├── .gitignore
│ ├── package.json
│ └── README.md
└──

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
