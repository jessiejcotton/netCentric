#credit to JJ from the whats app for the os thing
#credit to https://www.afternerd.com/blog/python-http-server/
#for teaching me how to make a server


import os
import http.server
import socketserver

PORT = int(os.environ.get('PORT', 5000))
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()