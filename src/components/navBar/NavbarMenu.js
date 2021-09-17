import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menuStyles.css';
function NavbarMenu() {
    return (
        <div>
            <Menu clssName="bm-burger-button,bm-burger-bars,
            bm-burger-bars-hover,bm-cross-button,bm-cross,
            bm-menu-wrap,bm-menu,bm-morph-shape,bm-item-list
            ,bm-item,bm-overlay" >
                <a id="home" className="menu-item" href="/">قائمة الكتب</a>
                <a id="about" className="menu-item" href="/about">الاصناف</a>
                <a id="contact" className="menu-item" href="/contact">تواصل معنا</a>
            </Menu>
        </div>
    )
}

export default NavbarMenu
