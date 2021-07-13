# Node.js Microservice Example

## Install Dependencies
### Node.js v16.x
`curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -`

`sudo apt-get install -y nodejs`

### Mocha
`npm install --save-dev mocha chai`

`mkdir test`

`touch test/test.js`

## Setup
`npm init`

`npm install express request --save`

## Execute Microservice
`npm start`

`npm test`

## Sample URLS
http://localhost:3000/about

http://localhost:3000/distance/63109/63139

## Testing
One test created for /distance endpoint.

Start server with `npm start` and then execute `npm test` to run the test.