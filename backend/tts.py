from gtts import gTTS
import os

def text_to_speech(text, lang='en'):
    tts = gTTS(text=text, lang=lang)
    tts.save("static/output.mp3")
    os.system("start static/output.mp3")  # Use "afplay static/output.mp3" on Mac or "mpg321 static/output.mp3" on Linux

if __name__ == "__main__":
    text = "Hello, this is a text-to-speech conversion."
    text_to_speech(text)
