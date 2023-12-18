/*
======================================
Title: footer.js 
Author: Evelyn Zepeda
Date: 12/17/23
Description: Footer
=====================================
*/
//Creating the Footer 
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id='footer'>
                
                    
                    <p class='footer-padding'>Copyright &copy; 2023 </p>
                    <p class='footer-padding'><a href='https://www.bellevue.edu/'>Bellevue University</a>
                    </p>
                    <p class='footer-padding'><a href='https://github.com/evelinacoding?tab=repositories'>GitHub</a></p>
                    <p class='footer-padding'><a href='https://www.bellevue.edu/degrees/bachelor/web-development-bs/'>Bellevue Web Development</a></p>
                    <p class='footer-padding'><a href='https://www.youtube.com/user/bellevueuniversity'>Bellevue Youtube</a></p>
                    <p class='footer-padding'><a href='https://github.com/buwebdev'>Bellevue Github</a></p>
               
            </div>
        `;
    }
}

customElements.define("footer-component", Footer)