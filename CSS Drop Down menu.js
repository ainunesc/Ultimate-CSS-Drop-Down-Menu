/* Ultimate Drop Down v1.0
	Project URL: http://www.dynamicdrive.com/style/csslibrary/item/ultimate_drop_down/
*/

.ultimatedropdown {
    font: bold 16px 'Bitter', sans-serif;
    background: #BC1818;
		position: relative;
    width: 100%;
}


/* Top Level Menu */
.ultimatedropdown ul {
    z-index: 100;
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
}

/* Top level list items */
.ultimatedropdown ul li {
    position: relative;
    display: inline;
    float: left;
}

/* Top level menu items link style */
.ultimatedropdown ul li a, .ultimatedropdown ul li span {
    display: block;
    position: relative;
    /* background of menu items (default state) */
    background: #BC1818;
    color: white;
    padding: 14px 10px;
    border-right: 1px solid red;
    color: #2d2b2b;
    text-decoration: none;
}


.ultimatedropdown ul li a:link, .ultimatedropdown ul li a:visited {
    color: white;
}

/* Top level menu items link style on hover and when active */
.ultimatedropdown ul li:hover > a {
    background: #a83a34;
}

/* Sub ULs style */
.ultimatedropdown ul li ul {
    position: absolute;
    left: -5000px;
		top: auto;
    opacity: 0;
    width: 170px;
    visibility: hidden;
    box-shadow: 2px 2px 5px gray;
    -webkit-transition: opacity .3s, visibility 0s .3s, left 0s .3s;
    transition: opacity .3s, visibility 0s .3s, left 0s .3s;
}

/* First Sub Levels UL style on hover */
.ultimatedropdown ul li:hover > ul {
    visibility: visible;
    left: 0;
    opacity: 1;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}

/* Sub level Menu list items (alters style from Top level List Items) */
.ultimatedropdown ul li ul li {
    display: list-item;
    float: none;
}

/* 2nd and beyond Sub Levels vertical offset after 1st level sub menu */
.ultimatedropdown ul li ul li ul {
    top: 0;
    left: 100%;
}

/* Sub Levels link style on hover and when active */
.ultimatedropdown ul ul li:hover > a {
    background: #70402E;
}

/* Sub Levels UL style on hover */
.ultimatedropdown ul ul li:hover > ul {
    left: 100%;
}

/* Sub level menu links style */
.ultimatedropdown ul li ul li a {
    font: normal 14px 'Bitter', sans-serif;
    padding: 10px;
    margin: 0;
    background: #9B5323;
    border-right: none;
    border-top-width: 0;
    border-bottom: 1px solid gray;
}

/* LIs with a sub UL style */
.ultimatedropdown ul li > a {
    /* add padding to accomodate arrow inside LIs */
    padding-right: 25px;
}

/* LIs with NO sub UL style */
.ultimatedropdown ul li > a:only-child {
    /* undo padding for non submenu LIs */
    padding-right: 10px;
}

/* LIs with a sub UL pseudo class */
.ultimatedropdown ul li > a:after {
    /* add arrow inside LIs */
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border: 5px solid transparent;
    border-top-color: #FFFFFF;
    top: 50%;
    right: 8px;
}

/* LIs with NO sub UL pseudo class */
.ultimatedropdown ul li > a:only-child:after {
    /* undo arrow for non submenu LIs */
    display: none;
}

/* Sub ULs' LIs with a sub UL pseudo class */
.ultimatedropdown ul li ul li > a:after {
    /* change arrow to right arrow inside sub UL LIs */
    border-top-color: transparent;
    border-left-color: #FFFFFF;
    top: 40%;
    right: 8px;
}

/* ####### responsive layout CSS ####### */

@media (max-width: 800px) {
    /* FIRST breaking point
			Last two top menu items' sub ULs should drop to the left (instead of right)
			Change 2 to a different number to exclude/include more top menu items based on menu and max-width setting above
		*/

		.ultimatedropdown ul li:nth-last-of-type(-n+2) ul li:hover > ul {
        left: -100%;
    }
}

@media (max-width: 500px) {
    /* SECOND breaking point 
			For mobile and screen browser windows
			Get Sub ULs to expand entire width of document and drop down
			Changes menu reveal type from "visibility" to "display" to overcome bug. See comments below
		*/

		.ultimatedropdown ul li {
        position: static;
    }

    .ultimatedropdown ul li ul {
        width: 100%;
        border-top: 2px solid #eee;
				/* change menu reveal type from "visibility" to "display". Former seems to cause browser to jump to top of page sometimes when menu header is tapped on */
				display: none;
    }

    .ultimatedropdown ul li:hover > ul {
				display: block;
        left: 0 !important;
        top: auto;
    }

    .ultimatedropdown ul ul li:hover > ul {
        left: 0 !important;
        top: auto;
    }
}