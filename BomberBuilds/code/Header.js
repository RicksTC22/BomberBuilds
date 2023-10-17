class Header extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<header id="header"><div class="title">Bomber Builds</div><div class="logo"><img class="logoPic" src="/BomberBuilds/Photos/BomberBuildsLogo.png" alt="Logo"></div><ul class="headerButtons"><li><button class="homeBtn" onclick="window.location.href=\'/BomberBuilds/index.html\'">Home</button></li><li><button class="aboutUsBtn" onclick="window.location.href=\'/BomberBuilds/pages/aboutUs.html\'">About Us</button></li><li><button class="adBtn" onclick="window.location.href=\'/BomberBuilds/pages/advertisements.html\'">Advertisements</button></li><li><button class="financesBtn" onclick="window.location.href=\'/BomberBuilds/pages/finances.html\'">Finances</button></li></ul></header>';
    }
}

customElements.define('header-component', Header);
