from flask import Flask,request
import download

app = Flask(__name__)

@app.route('/',methods=['GET','POST'])
def test():
    
    if request.method =='POST':
        target_url=request.values['target_url']
        print("Get Request!")
        print("Start downloading:",target_url)
        download.start_download(target_url)
    return "正在下載"

if __name__ == "__main__":
    app.run(host="127.0.0.1",port="5000",debug=True)