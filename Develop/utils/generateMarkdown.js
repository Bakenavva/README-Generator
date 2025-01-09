// TODO: Create a function that returns a license badge based on which license is passed in if there is no license, return an empty string
// Takes in license name, if not None, and returns string with spaces swapped for underscores. Ex: APACHE 2.0 returns APACHE_2.0 and populates the url.
const renderLicenseBadge = license => license === "None" ? "" : `\n\n![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;

// Generate a link to the license section of the README if a license is selected, within the Table of Contents.
const renderLicenseLink = license => license === "None" ? "" : `\n- [License](#license)`;

// Populate the license section within the README.
const renderLicenseSection = license => license === "None" ? "This project is Unlicensed." : `This project is licensed under the ${license} license.`;

// TODO: Create a function to generate markdown for README
// renderLicenseLink() intentionally placed by [Usage]. If no license is selected, this prevents the empty string from creating empty space between [Usage] & [Contributing].
// similar to renderLiceneLink(), renderLicenseBadge() is placed by the title to prevent awkward spacing between the title and the description.
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions
Further questions can reach me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email:  ${data.email}`;
}

export default generateMarkdown;