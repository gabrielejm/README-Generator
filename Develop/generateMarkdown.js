// function to generate markdown for README
const badgeMIT =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

const badgeISC =
  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

const badgeIBM =
  "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
const renderBadges = (badge) => {
  if (badge === "MIT") {
    return badgeMIT;
  } else if (badge === "ISC") {
    return badgeISC;
  } else {
    return badgeIBM;
  }
};

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

Github: [${data.github}](https://github.com/${data.github})

Email: ${data.email}

### License<a name="license"></a>

${renderBadges(data.license)}

`;
}

module.exports = generateMarkdown;
