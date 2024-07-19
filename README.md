# Text Generation Web Application

This project is a web-based text generation application that uses the GPT-2 XL model to create stories, poems, and articles based on user prompts.

## Project Structure

project_root/
│
├── app.py
├── static/
│   ├── style.css
│   └── main.js
├── templates/
│   └── index.html
└── README.md

## Setup and Installation

1. Clone this repository:

2. Install the required dependencies:

3. Download the GPT-2 XL model:
```python
from transformers import GPT2LMHeadModel, GPT2Tokenizer

model = GPT2LMHeadModel.from_pretrained("gpt2-xl")
tokenizer = GPT2Tokenizer.from_pretrained("gpt2-xl")


Running the Application

1.Start the Flask server:
python app.py
2.Open a web browser and navigate to http://localhost:5000

Using the Application
The web interface allows you to generate three types of content:

Stories: Enter a story plot in the provided input field.
Poems: Provide a topic for the poem.
Articles: Input a subject or title for the article.

After entering your prompt, click the "Generate" button to receive the AI-generated text.


Sample Prompts:
Here are some example prompts you can try:
For Stories:

Generate a story of a time traveler who accidentally changes a pivotal moment in history
Generate a story of a detective solving a mystery in a small town where everyone seems to be hiding something
Generate a story of an AI that becomes self-aware and must decide whether to reveal itself to humanity

For Poems:

Generate a poem about the changing seasons
Generate a poem about the wonders of space exploration
Generate a poem about the power of human resilience

For Articles:

Generate an article about the impact of artificial intelligence on modern healthcare
Generate an article about sustainable energy solutions for the future
Generate an article about the importance of biodiversity in maintaining ecosystem balance

Technologies Used

Flask: Web framework
Transformers: For implementing the GPT-2 XL model
HTML/CSS/JavaScript: Front-end interface

Note
This application uses a large language model and may require significant computational resources. Ensure your system meets the necessary requirements for running the GPT-2 XL model.
