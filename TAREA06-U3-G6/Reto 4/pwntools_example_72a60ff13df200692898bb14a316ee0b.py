import socket
import json

HOST = "socket.cryptohack.org"
PORT = 11112

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))

def readline():
    buffer = b""
    while b"\n" not in buffer:
        chunk = s.recv(1024)
        if not chunk:
            break
        buffer += chunk
    
    line, buffer = buffer.split(b"\n", 1)
    return line # Return bytes not including newline for printing

# Simplification: The original pwntools readline reads until newline. 
# Implementing a proper buffered reader is safer but for this simple script,
# we can read line by line. However, sockets don't guarantee line boundaries in one packet.
# A file wrapper is easier.

f = s.makefile('rb') # Read binary
f_w = s.makefile('wb') # Write binary

def json_recv():
    line = f.readline()
    return json.loads(line.decode().strip())

def json_send(hsh):
    request = json.dumps(hsh).encode()
    f_w.write(request + b"\n")
    f_w.flush()

# Read the initial banner
print(f.readline().decode().strip())
print(f.readline().decode().strip())
print(f.readline().decode().strip())
print(f.readline().decode().strip())

request = {
    "buy": "flag"
}
json_send(request)

response = json_recv()

print(response)
