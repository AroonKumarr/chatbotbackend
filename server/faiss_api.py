from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import OpenAIEmbeddings
from langchain.chains.question_answering import load_qa_chain
from langchain_community.llms import OpenAI

# Load API key from .env
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow React frontend access

# Load and index PDF once at startup
loader = PyPDFLoader("Chatbot_QA_Sample.pdf")
docs = loader.load()
embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
vectorstore = FAISS.from_documents(docs, embeddings)
retriever = vectorstore.as_retriever()

llm = OpenAI(openai_api_key=OPENAI_API_KEY)
chain = load_qa_chain(llm, chain_type="stuff")

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    query = data.get("query", "")

    relevant_docs = retriever.get_relevant_documents(query)
    result = chain.run(input_documents=relevant_docs, question=query)

    return jsonify({"answer": result})


if __name__ == "__main__":
    app.run(port=8000)
