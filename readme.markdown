### Introduction

NodeConcat is a command line utility that concatentates files listed in a manifest. It is useful as a simple build tool for CSS, JavaScript, and other text files. It does not do minification or compression. You will need another tool for that. 

NodeConcat is released under the MIT license.

### Instructions

#### Install NodeConcat

You can install NodeConcat with NPM. It should be installed globally.

`
npm install concat -g
`

#### Create a manifest file

Your manifest file should include the names of files you want to concatenate. You can include directories and the contents of the directory will be recursively included into the list of files to conctenate. Hidden files and duplicate files will be ignored. List one file or directory per line.

#### Run the utility

Run NodeConcat by passing in the name of the manifest and the name of the destination file. 

`
concat manifest.txt app.js
`

### License

Copyright (c) 2012 Nickolas Kenyeres

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.