
# Project Title

A brief description of what this project does and who it's for


## Installation 

Install my-project with npm

```bash 
  npm install 
```
    
## FYI

How to generate certs.
```bash 
openssl genrsa -out server.key
openssl req -new -key server.key -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey server.key -out server.cert
rm csr.pem
```

[Source Node Docs](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/)
[Cert Decoder](https://www.sslchecker.com/certdecoder)