import os
import http.server
import socketserver

PORT = int(os.environ.get('PORT', 5000))
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()