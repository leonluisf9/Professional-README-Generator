// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let htmlurl;

  // select correct license url for the selected license
  switch(license) {
    case "MIT License":
      htmlurl = "http://choosealicense.com/licenses/mit/";
      break;
    case "LGPL-3.0":
      htmlurl = "http://choosealicense.com/licenses/lgpl-3.0/";
      break;
    case "MPL-2.0":
      htmlurl = "http://choosealicense.com/licenses/mpl-2.0/";
      break;
    case "AGPL-3.0":
      htmlurl = "http://choosealicense.com/licenses/agpl-3.0/";
      break;
    case "Unlicense":
      htmlurl = "http://choosealicense.com/licenses/unlicense/";
      break;
    case "Apache-2.0":
      htmlurl = "http://choosealicense.com/licenses/apache-2.0";
    break;
    case "gpl-3.0":
      htmlurl = "http://choosealicense.com/licenses/gpl-3.0/";
    break;
  } 
  return htmlurl;
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {  
  let licenseSection = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += "Please visit " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
    const sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];
  
    // add title
    let markdown = "# " + data.title + "\n";
  
    // add license badge
    markdown += renderLicenseBadge(data.license) + "\n";
  
    // add table of contents
    markdown += "## Table of Contents\n";
    for (let i=0; i<sections.length; i++) {
      if (! (sections[i] === "License" && data.license === "None")) {
        markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
      }
    }
    markdown += "\n";
  
    // add description
    markdown += "## " + sections[0] + "\n";
    markdown += data.description + "\n";
  
    // add installation
    markdown += "## " + sections[1] + "\n";
    markdown += data.installation + "\n";
  
    // add usage
    markdown += "## " + sections[2] + "\n";
    markdown += data.usage + "\n";
  
    // add contributing
    markdown += "## " + sections[3] + "\n";
    markdown += data.contributing + "\n";
  
    // add testing
    markdown += "## " + sections[4] + "\n";
    markdown += data.tests + "\n";
  
    // add license
    markdown += renderLicenseSection(data.license) + "\n";
  
    // add questions
    markdown += "## " + sections[6] + "\n";
    markdown += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
    markdown += "You can email me at " + data.email + " if you have any additional questions.\n"
  
    return markdown;
  }