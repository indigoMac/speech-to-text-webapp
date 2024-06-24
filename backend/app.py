from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from google.cloud import texttospeech
from textblob import TextBlob
import os

app = Flask(__name__)
CORS(app)

# Initialize Google Cloud Text-to-Speech client
client = texttospeech.TextToSpeechClient()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/speak', methods=['POST'])
def speak():
    data = request.get_json()
    text = data['text']

    # Perform sentiment analysis
    sentiment = TextBlob(text).sentiment
    if sentiment.polarity > 0:
        tone = "happy"
    elif sentiment.polarity < 0:
        tone = "sad"
    else:
        tone = "neutral"

    # Adjust voice_params based on sentiment
    voice_params = {
        "language_code": data.get('language_code', 'en-US'),
        "name": data.get('voice_name', 'en-US-Wavenet-D'),
        "ssml_gender": texttospeech.SsmlVoiceGender[data.get('gender', 'NEUTRAL')]
    }
    audio_config = {
        "audio_encoding": texttospeech.AudioEncoding.MP3,
        "pitch": data.get('pitch', 0.0),
        "speaking_rate": data.get('speaking_rate', 1.0)
    }

    # Prepare synthesis input using SSML
    ssml_text = f"""
    <speak>
        {text}
    </speak>
    """
    input_text = texttospeech.SynthesisInput(ssml=ssml_text)
    voice = texttospeech.VoiceSelectionParams(**voice_params)
    audio_config = texttospeech.AudioConfig(**audio_config)

    # Perform text-to-speech request
    response = client.synthesize_speech(input=input_text, voice=voice, audio_config=audio_config)

    # Save the audio file
    with open("static/output.mp3", "wb") as out:
        out.write(response.audio_content)

    return jsonify(audio_file="static/output.mp3")

if __name__ == "__main__":
    app.run(debug=True)
