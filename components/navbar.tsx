import { Component } from "react";
import classNames from "classnames";

class Navbar extends Component<{}, { showMenu: boolean }>{
    constructor(props: any) {
        super(props);
        this.state = { showMenu: false };
    }

    showOrHideMenu = () => {
        this.setState(state => ({
            showMenu: !state.showMenu
        }));
    }

    render() {
        return (
            <div className="fixed top-0 z-10 w-full b-color-faded bg-green-700 bg-opacity-75">
                <nav className={`h-full flex content-center justify-between flex-wrap px-6 py-2  ${!this.state.showMenu && 'lg:h-20'}`}>
                    <div className="block mb-1 lg:hidden">
                        <button onClick={this.showOrHideMenu} className="flex items-center px-3 py-2 border rounded text-grey-2 border-grey-2 mr-2">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div className={classNames({
                        // 'h-20': !this.state.showMenu,
                        "overflow-hidden": true,
                        'w-full lg:w-auto lg:inline-block': true,
                        "transition-max-height duration-300 ease-in-out": true,
                        "transition-height duration-300 ease-in-out": true,
                        'lg:max-h-12 max-h-0': !this.state.showMenu,
                        'max-h-56': this.state.showMenu
                    })}>
                        <div className="pb-1 w-full block flex-grow lg:flex lg:w-auto justify-center">
                            <a href="#projects" className="self-center transition duration-300 ease-in-out block cursor-pointer lg:inline-block lg:mt-0 hover:text-primary mr-8">Projects</a>
                            <a href="#experience" className="self-center transition duration-300 ease-in-out block cursor-pointer lg:inline-block lg:mt-0 hover:text-primary mr-8">Experience</a>
                            <a href="#education" className="self-center transition duration-300 ease-in-out block cursor-pointer lg:inline-block lg:mt-0 hover:text-primary mr-8">Education</a>
                            <a href="./static/files/resume.pdf" target="_blank" rel="noreferrer" className="inline-block mt-1 cursor-pointer font-bold lg:inline-block lg:mt-0 gradient border border-white lg:px-2 lg:py-1">Resume</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;