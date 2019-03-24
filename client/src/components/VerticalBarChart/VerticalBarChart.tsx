import * as React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';
import './VerticalBarChart.css';

interface Props {
    data: any[];
    chartTitle: string;
    emphasisText: string;
}

interface VerticalBarChartState {
    data: any[];
}

const bodyLocation = ['Scalp', 'Brows', 'Lashes', 'Other'];

function getRandomData() {
    return new Array(50).fill(0).map(row => {
        let day = Math.floor(Math.random() * (4));
        return {
            y: Math.floor((Math.random() * 24) / 2) * 2,
            x: bodyLocation[day],
            color: Math.random() * 10,
            opacity: Math.random() * 0.5 + 0.5
        };
    });
}

const randomData = getRandomData();

export default class VerticalBarChart extends React.Component<Props, VerticalBarChartState> {
    static defaultProps: Props = {
        data: [],
        chartTitle: '',
        emphasisText: ''
    };
    
    constructor(props: any) {
        super(props);
        this.state = {
            data: randomData,
        };
    }

    public render(): JSX.Element {
        let { chartTitle, emphasisText } = this.props;
        let { data } = this.state;
        const chartWidth = 320;
        const chartHeight = 250;
        return(
            <div className="verticalBarChart">
                <span className="chartHeader">{chartTitle}
                    <strong>
                        {emphasisText}
                    </strong>
                </span>
                <XYPlot
                    xType="ordinal"
                    strokeWidth={5}
                    xDomain={bodyLocation}
                    width={chartWidth}
                    height={chartHeight}
                    style={{
                        'font-weight': 'bold',
                        'font-family': 'sans-serif'
                    }}
                >
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries
                        color="#59E4EC"
                        data={data}
                    />
                </XYPlot>
            </div>
        );
    }
}
