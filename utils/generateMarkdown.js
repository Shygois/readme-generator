// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Hashmap
  // choices: ['Apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'CC0', 'EPL 1.0', 'GPLv3', 'IPL 1.0', 'ISC', 'MIT', 'MPL 2.0', 'ODC', 'Perl', 'Artistic 2.0', 'OFL 1.1', 'Unlicense', 'WTFPL', 'Zlib'
  const badgesMap = {
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'Boost 1.0': '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
		'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'CC0': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    'EPL 1.0': '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'IPL 1.0': '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'MPL 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'ODC': '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)',
    'Perl': '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    'Artistic 2.0': '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
    'OFL 1.1': '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
    'Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'WTFPL': '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    'Zlib': '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'      
  }
  // console.log('license: ', license);
  // console.log('(badgesMap[license]: ', badgesMap[license]);
  return badgesMap[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log('data: ', data);
  const badge = renderLicenseBadge(data.licenses);
  // console.log('badge: ', badge);

  return `

## Table of Contents 
[Badges](#badges)

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Test Instructions](#testinstructions)

[License](#license)

## Basic Information
${data.name}

${data.email}
  

### GitHub Project Information
GitHub Username: ${data.github}
  
Project Title: ${data.project}
  
Project Link: ${data.link}

<a name="badges"></a>
### Badges
${badge}

<a name="description"></a>
### Description
${data.description}

<a name="installation"></a>
### Installation
\`\`\`bash 
${data.installation}
\`\`\`

<a name="usage"></a>
### Usage
\`\`\`bash 
${data.usage}
\`\`\`
 
<a name="contributing"></a>
### Contributing
${data.contribution}

<a name="test instructions"></a>
### Test Instructions 
${data.test}
  
<a name="license"></a>
### License 
${data.project} is released under the ${data.licenses} license & supports modern environments.

`;
}

module.exports = generateMarkdown;
