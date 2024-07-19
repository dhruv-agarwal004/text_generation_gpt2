from flask import Flask, render_template, request, jsonify
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch

app = Flask(__name__)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(device)

tokenizer = GPT2Tokenizer.from_pretrained("gpt2-xl")
model = GPT2LMHeadModel.from_pretrained("gpt2-xl").to(device)
model.eval()

def generate_content(prompt, max_length=200):
    
    input_ids = tokenizer.encode(prompt, return_tensors="pt").to(device)
    
    output = model.generate(
        input_ids,
        max_length=max_length,
        num_return_sequences=1,
        no_repeat_ngram_size=3,
        do_sample=True,
        top_k=50,
        top_p=0.95,
        temperature=0.8,
        repetition_penalty=1.2,
        pad_token_id=tokenizer.eos_token_id,
        early_stopping=True
    )
    
    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
    print(output)
    return generated_text.replace(prompt, "").strip()


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt', '')
    response = generate_content(prompt)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)