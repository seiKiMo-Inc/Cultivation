import React from "react";

import "@css/components/TopBar.scss";

class TopBar extends React.PureComponent {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={"TopBar"}
                 data-tauri-drag-region={true}
            >
                <a>Cultivation</a>
                <a>3.5.0</a>
            </div>
        );
    }
}

export default TopBar;
