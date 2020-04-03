## Local Installation
Use this guide if you want to install the project for some internet instability reasons.  
**Remote site usage is always more recommended as local sites may interfere with other local site's data!**


You will need `git` to install the project, and `nodejs-lts` to run the project. Install them before continuing to guide.

### Clone the repo and install
* #### Tip: Don't use Powershell to install the project as Powershell installed to Windows are not compatible with cmd syntax totally.
```sh
mkdir ./<newFolderName>
cd ./<newFolderName>
git init
git clone https://github.com/fbarda/Sprite-Generator.git
git submodule init && git submodule update --recursive
```

### Launch the server
Due to browser security reasons you **cannot** just open the files and use it as a site.
You have to use the site by launching the node.js server.

```sh
npm start #Server will point to localhost:8080.
```
Open an updated browser and enter `localhost:8080` on your search bar.
You should be inside the site.