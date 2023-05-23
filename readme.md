# MyTube!
A chromium extension for downloading high quality YouTube video by your own server!

## Requirement
* Python3
    * `pyTube` for fetching YouTube videos.
    * `flask` for hosting a server to process the request from chrome extension.

## Usage
This application only support Linux OS, or you should try it on WSL(Windows Subsystem for Linux)

```
python3 RequestServer.py
```
and view on a YouTube web page and click the "download" button in MyTube! extension

## Versions
* v2.0: a stable version of myTube after chromium extension upgraded to 3
* v1.1: upgrade the chromium extension to manifest v3
* v1.0: a stable and release version
* v0.2.1: fix a bug that RequestServer will occur some problem when downloading second video
* v0.2: a preview and still in developing version that extension work without any debug messages
* v0.1.2: decided not to support Windows OS
* v0.1.1: testing pyinstaller to pack RequestServer.py
* v0.1: a preview and still in developing version that extension has its own function and CAN WORK!