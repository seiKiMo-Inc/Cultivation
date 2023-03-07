import React from "react";

import TopBar from "@components/TopBar";
import SideBar from "@components/SideBar"

import "@css/App.scss";

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopBar />

                <img className={"Background"}
                     alt={"Background"}
                     src={"https://api.grasscutter.io/cultivation/bgfile"}
                />

                <a>Hello World!</a>
                <SideBar />
            </div>
        );
    }
}

export default App;
