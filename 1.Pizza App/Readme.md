Installing Typscript
npm init -y

npm install -g typescript

tsc --version

tsc --init --sourceMap --rootDir src --outDir dist

Create Directories
--src

Go to "Run and Debug" to find the "Launch json" 

In the launch.json file 
Change to "program": "${workspaceFolder}/src/index.ts"

tsc (To compile)

Change launch.json src => to dist (index.js)

Install a copy of typescript locally

npm install --save-dev typescript

Crtl + F1

Task Configure Defualt Build Task 

Look for tsc: watch

Task run build task


-----Running Typescript File
npm install tsx
tsx "filename"