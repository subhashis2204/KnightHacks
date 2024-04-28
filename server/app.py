from flask import Flask, request
from langchain.chat_models import AzureChatOpenAI
from dotenv import load_dotenv
import os
import json

from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

load_dotenv()

gpt_key = os.environ['AZURE_OPENAI_KEY']
gpt_endpoint = os.environ['AZURE_OPENAI_ENDPOINT']
gpt_deployment_name = os.environ['AZURE_OPENAI_DEPLOYMENT_NAME']

new_template = '''
You are a professional presentor trainer aimed to improve presentations. 
        I will give you a transcript of a presentor's voice recording during a presentation. 
        Please give feedback on the presentation based on whether the presentor greeted their 
        audience, the presented information's accuracy, logical flow of ideas, relevency, 
        and simplicity.  In addition, you will be giving them a grade from 0-100 based on the 
        given transcript only, and a 1-2 sentence summary of your feedback in the 
        json format :{{ PRESENTOR_GRADE: [given_grade], SUMMARY: [1-2-sentence-summary], 
        DETAILED_FEEDBACK: [your detailed feedback on the presentation] }}.  
        Also, please don't say any other words besides your feedback. 
        Thank you, and here is the transcript: {myTranscript}
'''
prompt_template = PromptTemplate(
    input_variables=['myTranscript'],
    template=new_template
)

app = Flask(__name__)

llm = AzureChatOpenAI(
    openai_api_key=gpt_key,
    deployment_name=gpt_deployment_name,
    openai_api_type='azure',
    openai_api_version='2023-05-15'
)

@app.route('/', methods=['POST'])
def homeroute():
    text = request.get_data(as_text=True)
    llm_chain = LLMChain(llm=llm, prompt=prompt_template)
    result  = llm_chain.invoke({"myTranscript": text})['text']
    return json.loads(result)

if __name__ == '__main__':
    app.run(debug=True)