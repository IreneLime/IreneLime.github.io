const projects = [
    {
        name: "Ergonomic Keyboard",
        date: '2024-02-01',
        alt_name: "keyboard",
        img: "/assets/img/keyboard.jpg",
        short_description: "A personalized ergonomic keyboard implemented with AVR microcontroller.",
        description: `<li><b>Skills:</b> Firmware programming with C, PCB Design, I2C, Linux development</li>
            <li>Design PDB layout of a personal ergonomic keyboard in KiCad.</li>
            <li>Build and implement firmware for AVR microcontroller in C.</li>
            <li>Implement OLED display module using I2C ptorocol.</li>`,
        link: [
            {
                label: "Visit the GitHub repo for the keyboard design",
                ref_link: "https://github.com/IreneLime/keyboard-design"
            },
            {
                label: "Visit the GitHub repo for firmware implementation",
                ref_link: "https://github.com/HWXLR8/qmk_firmware"
            }
        ],
        link_html: ""
    },
    {
        name: "Spoken Digit AI",
        date: '2022-05-01',
        alt_name: "cnn",
        img: "/assets/img/cnn.png",
        short_description: "An AI model that recognizes and classifies spoken number of digits.",
        description: `<li><b>Skills:</b> Python, Convoltional Neural Networks Architecture design, Windows Developement</li>
            <li>Design, implement, and train a Convolutional Neural Network Model in Python.</li>
            <li>Model ended up with a training accuracy of around 94% with a testing accuracy of 85%.</li>
            <li>Design the layout and background of the GUI.</li>
            <li>Experience with Machine learning framdework and libraries such as PyTorch and Scikit-learn.</li>`,
        link: [
            {
                label: "Visit the GitHub repo for the project",
                ref_link: "https://github.com/OPTIMUSGYZ/Spoken-Digits"
            }
        ],
        link_html: ""
    },
    {
        name: "Mapnify GIS",
        date: '2022-01-01',
        alt_name: "gis",
        img: "/assets/img/mapnify.png",
        short_description: "A responsive, user-friendly Geographic Information System(GIS) that helps user explore activities and optimal travel route.",
        description: `<li><b>Tools and Skills:</b> C++, Front-end design, Back-end implementation, Linux Ubuntu, Software Project Management</li>
            <li>Develop a GIS using C++ under Linux Ubuntu environment.</li>
            <li>Develop the back-end logic and path-finding optimization algorithms for the GIS.</li>
            <li>Use the GTK library to develop the front-end interface and features of the GIS.</li>
            <li>Organize tasks and manage team progress to reach milestone deadlines.</li>`,
        link: [],
        link_html: ""
    }
];

let sort_proj = projects.sort((a, b) => new Date(b.date) - new Date(a.date));

// Navigate to the project section and only load the first project
const projects_sect = document.getElementById("projects");
project_load_more(1);

// 'Load More' button container
const button_class = document.createElement("div");
button_class.setAttribute("class", "container");
button_class.style.display = 'flex';
button_class.style.height = '100';
button_class.style.justifyContent = "center";
button_class.style.alignItems = "center";
button_class.style.margin = '0';

// 'Load More' button configuration
const button_sect = document.getElementById("project_buttton");
const project_button = document.createElement("button");
project_button.name = "load_more";
project_button.onclick = function(){
    project_load_more(sort_proj.length)
};
project_button.innerText = "Load more";
project_button.style = "height: 80%; width: 50%;";
button_class.appendChild(project_button);
projects_sect.appendChild(button_class);

function project_load_more(project_num) {
    let project_start = 0;
    if (project_num > 1) {
        project_start = 1;
    }
    // Loop through project list
    for (let i = project_start; i < project_num; i++) {
        const new_proj = document.createElement("div");
        new_proj.setAttribute("class", "container");

        // Loop through link list and append link references
        for (let j = 0; j < sort_proj[i].link.length; j++) {
            sort_proj[i].link_html = sort_proj[i].link_html.concat(`
                <a aria-label=${sort_proj[i].link[j].label} href=${sort_proj[i].link[j].ref_link}
                target="_blank" data-position="top" data-tooltip="View Source"
                class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                    class="fa fa-github"></i></a>
            `);
        }

        new_proj.innerHTML = `
            <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img alt=${sort_proj[i].alt_name} src=${sort_proj[i].img} style="height: 100%; width: 100%" class="activator" />
                    </div>
                    <div class="card-content">
                    <span class="card-title activator teal-text hoverline">${sort_proj[i].name}<i
                        class="mdi-navigation-more-vert right"></i></span>
                    <p>
                        ${sort_proj[i].short_description}
                    </p>
                    </div>
                    <div class="card-reveal">
                    <!-- TODO: change this -- only close button -->
                    <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                    <span class="card-title grey-text"><small>Accomplishments</small><i
                        class="mdi-navigation-close right"></i></span>
                    <ul>
                        ${sort_proj[i].description}
                    </ul>
                    <div class="card-action">
                        ${sort_proj[i].link_html}
                    </div>
                    </div>
                </div>
            </div>
        `;

        // Append HTML of a project to the project section
        projects_sect.appendChild(new_proj);
    }

    // Remove the 'Load more' button after one press
    if (project_num > 1) {
        projects_sect.removeChild(button_class);
    }
    return;
}