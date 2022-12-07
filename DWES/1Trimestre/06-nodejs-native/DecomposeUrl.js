const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

  const enl = {port: myURL.port,
  protocolo: myURL.protocol,
  idAdress: myURL.host,
  subDomain: myURL.hostname,
  pathName: myURL.pathname,
  search: myURL.search,
};
  console.log(enl);