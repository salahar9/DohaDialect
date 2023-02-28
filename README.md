# DohaDialect

To use libreTranslate Locally:
First:

- Download Docker ["Docker"](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module)
- Add Docker TO path
- run this command

```bash
docker build --build-arg with_models=true -t libretranslate
```

- Wait for installation (~2Gb)
- run the server

```bash
docker run -it -p 5000:5000 libretranslate
```

- to get the server with logs use:

```bash
docker run -it -p 5000:5000 libretranslate --debug
```

Enjoy
# DohaDialect
