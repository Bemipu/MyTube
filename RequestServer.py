#! python3
from flask import Flask,request,redirect
import download

app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def test():
    
    if request.method =='POST':
        target_url=request.values['target_url']
        print("收到請求!")
        print("開始下載:",target_url)
        download.start_download(target_url)
    return redirect(target_url)

if __name__ == "__main__":
    app.run(host="127.0.0.1",port="5000",debug=True)
