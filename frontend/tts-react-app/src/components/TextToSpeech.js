// src/components/TextToSpeech.js
import React, { useState } from "react";
import axios from "axios";
import "./TextToSpeech.css"; // Ensure to create a CSS file for specific styles

const voices = [
  { name: "en-US-Wavenet-A", label: "English (US) - Wavenet A (Female)" },
  { name: "en-US-Wavenet-B", label: "English (US) - Wavenet B (Male)" },
  { name: "en-US-Wavenet-C", label: "English (US) - Wavenet C (Female)" },
  { name: "en-US-Wavenet-D", label: "English (US) - Wavenet D (Male)" },
  { name: "en-US-Wavenet-E", label: "English (US) - Wavenet E (Female)" },
  { name: "en-US-Wavenet-F", label: "English (US) - Wavenet F (Male)" },
  // Add more voices as needed
];

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [languageCode, setLanguageCode] = useState("en-US");
  const [voiceName, setVoiceName] = useState(voices[0].name);
  const [gender, setGender] = useState("NEUTRAL");
  const [pitch, setPitch] = useState(0.0);
  const [speakingRate, setSpeakingRate] = useState(1.05);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/speak", {
        text,
        language_code: languageCode,
        voice_name: voiceName,
        gender,
        pitch,
        speaking_rate: speakingRate,
      });
      setAudioUrl(response.data.audio_file);
    } catch (error) {
      console.error("Error generating speech", error);
    }
  };

  return (
    <div className="container">
      <img
        src="/textToSpeech.png"
        alt="Text to Speech"
        className="header-image"
      />
      <h1>Text-to-Speech</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="4"
            cols="50"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Language Code:</label>
          <input
            type="text"
            value={languageCode}
            onChange={(e) => setLanguageCode(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Voice Name:</label>
          <select
            value={voiceName}
            onChange={(e) => setVoiceName(e.target.value)}
            className="form-control"
          >
            {voices.map((voice) => (
              <option key={voice.name} value={voice.name}>
                {voice.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="form-control"
          >
            <option value="NEUTRAL">Neutral</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Pitch:</label>
          <input
            type="number"
            value={pitch}
            onChange={(e) => setPitch(parseFloat(e.target.value))}
            min="-20.0"
            max="20.0"
            step="0.1"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Speaking Rate:</label>
          <input
            type="number"
            value={speakingRate}
            onChange={(e) => setSpeakingRate(parseFloat(e.target.value))}
            min="0.25"
            max="4.0"
            step="0.1"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Convert
        </button>
      </form>
      {audioUrl && (
        <audio controls className="audio-player">
          <source src={`http://127.0.0.1:5000/${audioUrl}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default TextToSpeech;
