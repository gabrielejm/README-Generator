// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [License](#license)


### Description<a name="description"></a>

${data.description}

### Installation<a name="installation"></a>

${data.installation}

### Usage<a name="usage"></a>

${data.usage}

### Contributing<a name="contributing"></a>

${data.contribution}

### Tests<a name="tests"></a>

${data.test}

### Questions?<a name="questions"></a>

Have some questions? Contact me at:

Github: ${data.github}

Email: ${data.email}

### License<a name="license"></a>

`;
}

module.exports = generateMarkdown;
