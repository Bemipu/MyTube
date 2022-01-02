# MyTube!
A chromium extension for downloading high quality YouTube video by your own server!

## Requirement
* Python3
    * `pyTube` for fetching YouTube videos.
    * `flask` for hosting a server to process the request from chrome extension.

## To use
This application only support Linux OS, or you should try it on WSL(Windows Subsystem for Linux)

```
./RequestServer
```
OR
```
python3 RequestServer.py
```
and view on a YouTube web page and click the "download" button in MyTube! extension

## Versions
* v0.2: a preview and still in developing version that extension work without any debug messages
* v0.1.2: decided not to support Windows OS
* v0.1.1: testing pyinstaller to pack RequestServer.py
* v0.1: a preview and still in developing version that extension has its own function and CAN WORK!