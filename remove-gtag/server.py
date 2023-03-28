import http.server
import socketserver
import webbrowser

PORT = 7000

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

print("Serving at port", PORT)

webbrowser.open_new_tab(f"http://localhost:{PORT}/")

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    pass

httpd.server_close()
print("Server stopped.")
