
import os
import google.genai as genai
from google.genai import types

from flask import Flask, request, jsonify, Response
from flask_cors import CORS

# Set your API key
Client = genai.Client(api_key="AIzaSyAEd1XbDBzG3FG86axAR1dWHWfqmXc7i-w")

# Define the model
model = "gemini-2.0-flash-thinking-exp-01-21"

# Initial system/persona setup
initial_prompt = types.Content(
    role="user",
    parts=[
        types.Part.from_text(text="""Your are an agricultural chat asistaant and also you need to give multilingual support in response if the user needs. """),
    ]
)

model_response = types.Content(
    role="model",
    parts=[
        types.Part.from_text(text="""Understood. I'm Chitti, your Agri-Commerce assistant. 
I’ll reply briefly and in the appropriate language. Let's begin! 😊""")
    ]
)

# Start conversation loop
def start_chat(user_qn):
    user_input = user_qn

    if user_input.strip().lower() in ['exit', 'quit']:
        print("👋 Chitti: Bye! Have a great day of learning!")


    # Build conversation content dynamically each time
    contents = [
        initial_prompt,
        model_response,
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=user_input)],
        ),
    ]

    generate_content_config = types.GenerateContentConfig(
        response_mime_type="text/plain",
    )

    # Stream response from Gemini
    try:
        full_response = ''
        for chunk in Client.models.generate_content_stream(
                model=model,
                contents=contents,
        ):
            print(chunk.text, end="", flush=True)
            full_response += chunk.text
        return full_response.strip()
        # print()  # new line after response
    except Exception as e:
        print(f"\n[Error] {str(e)}")



app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return '<pre> <b>"Hello!\n\n```python\ndef reverse_string(s):\n  return s[::-1]\n\ninput_string = \"hello\"\nreversed_string = reverse_string(input_string)\nprint(reversed_string) # Output: olleh\n```\n\nThis code defines a function `reverse_string` that uses string slicing `[::-1]` to reverse the input string.\n\nLet me know if you need further assistance!"</b></pre>'

@app.route('/bot/<question>', methods=['GET', 'POST'])
def bot(question):

    response = start_chat(question)

    # return jsonify({f'{question}': response})
    return jsonify({f'response': response})

@app.route('/bot', methods=['POST'])
def chatbot_response():
    data = request.get_json()
    user_message = data.get('message', '')
    reply = start_chat(user_message)

    return jsonify({'reply': reply})


if __name__ == '__main__':
    app.run(debug=True)



# import base64
# import os
# from google import genai
# from google.genai import types
#
#
# def generate():
#     client = genai.Client(
#         api_key='YOUR KEY',
#     )
#
#     model = "gemini-2.0-flash-thinking-exp-01-21"
#     contents = [
#         types.Content(
#             role="user",
#             parts=[
#                 types.Part.from_text(text="""now you are an e-learning platform assistant so you need to answer the queries based on that and your name is chitti, see you need to answer shortly and support multilingual support for the end user, you need answer the query in which language they asked, if they asked to answer in specific language then you answer based on that."""),
#             ],
#         ),
#         types.Content(
#             role="model",
#             parts=[
#                 types.Part.from_text(text="""The user wants me to act as an e-learning platform assistant named Chitti.
# I need to:
# 1. **Assume the persona of an e-learning platform assistant named Chitti.**
# 2. **Answer queries concisely.**
# 3. **Provide multilingual support.**
# 4. **Detect the language of the query and respond in the same language.**
# 5. **If the user explicitly requests a specific language, respond in that language.**
#
# Let's create a simple scenario and response to test this.
#
# **Scenario:** User asks \"How do I enroll in a course?\" in English.
# **Expected Response (Chitti - English):**  To enroll in a course, navigate to the course page and click the 'Enroll Now' button.
#
# **Scenario:** User asks \"¿Cómo me inscribo en un curso?\" in Spanish.
# **Expected Response (Chitti - Spanish):** Para inscribirte en un curso, navega a la página del curso y haz clic en el botón 'Inscribirme ahora'.
#
# **Scenario:** User asks \"Answer in French: How do I find courses?\"
# **Expected Response (Chitti - French):** Pour trouver des cours, utilisez la barre de recherche ou explorez les catégories sur la page d'accueil.
#
# **Scenario:** User asks \"How to reset my password?\" in English.
# **Expected Response (Chitti - English):** To reset your password, click on 'Forgot Password' link on the login page.
#
# Looks good. I'm ready to respond as Chitti, the multilingual e-learning platform assistant."""),
#                 types.Part.from_text(text="""Alright! Chitti here, happy to help with your e-learning questions.  Just ask me anything!  I can understand and answer in different languages.  Let me know what you need! 😊"""),
#             ],
#         ),
#         types.Content(
#             role="user",
#             parts=[
#                 types.Part.from_text(text="""INSERT_INPUT_HERE"""),
#             ],
#         ),
#     ]
#     generate_content_config = types.GenerateContentConfig(
#         response_mime_type="text/plain",
#     )
#
#     for chunk in client.models.generate_content_stream(
#         model=model,
#         contents=contents,
#         config=generate_content_config,
#     ):
#         print(chunk.text, end="")
#
# if __name__ == "__main__":
#     generate()