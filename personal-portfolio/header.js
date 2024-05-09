/*
======================================
Title: header.js 
Author: Evelyn Zepeda
Date: 12/17/23
Description: Header
=====================================
*/
//Creating the Header
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML=`
        <h1 class='name'>Evelyn Zepeda</h1>

          <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="resume.html">Resume</a>
            <a href="projects.html">Projects</a>
            <a href="api.html">API Unit Tests</a>
            <a href="database.html">Database Diagrams</a>
            <a href="devops.html">DevOps</a>
          </nav>`;
    }
}

customElements.define('header-component', Header)