
'use client'

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"


type ChartProps = {
    chartData: { month: string; desktop: number; mobile: number; device: number; }[];

};

export const Chart = ({ chartData }: ChartProps) => {

    const chartConfig = {
        desktop: {
            label: "طلا",
            color: "hsl(var(--chart-3))",
        },
        mobile: {
            label: "مسکن",
            color: "hsl(var(--chart-2))",
        },
        device: {
            label: "ارز",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig

    return <div className='px-[13svw]  py-30  text-center'>
        <h1 className=' text-3xl text-koosha-pr font-bold'>مقایسه بازدهی بازار‌های مختلف در ۵ سال اخیر</h1>

        <div className=' flex gap-2 mt-11 mb-4'>
            <div className='bg-green-400 text-white rounded-2xl p-3 md:text-base text-xs'> بورس</div>
            <div className='bg-koosha-pr text-white rounded-2xl p-3 md:text-base text-xs'> سپرده بانکی</div>
            <div className='bg-yellow-500 text-white rounded-2xl p-3 md:text-base text-xs'> ارز</div>
            <div className='bg-blue-500 text-white rounded-2xl p-3 md:text-base text-xs'> مسکن</div>
        </div>
        <ChartContainer config={chartConfig} style={{ height: 500, width: '100%' }}>
            <AreaChart
                accessibilityLayer
                data={chartData}

                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={true} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="var(--color-koosha-pr)"
                            stopOpacity={0.9} />
                        <stop
                            offset="95%"
                            stopColor="var(--color-koosha-pr)"
                            stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="var(--color-koosha-orange)"
                            stopOpacity={0.9} />
                        <stop
                            offset="95%"
                            stopColor="var(--color-koosha-orange)"
                            stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillDevice" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="var(--color-koosha-greenChart)"
                            stopOpacity={0.9} />
                        <stop
                            offset="95%"
                            stopColor="var(--color-koosha-greenChart)"
                            stopOpacity={0.1} />
                    </linearGradient>

                </defs>
                <Area
                    dataKey="mobile"
                    type="natural"
                    fill="url(#fillMobile)"
                    fillOpacity={0.5}
                    stroke="var(--color-mobile)"
                    stackId="a" />
                <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.5}
                    stroke="var(--color-desktop)"
                    stackId="a" />
                <Area
                    dataKey="device"
                    type="natural"
                    fill="url(#fillDevice)"
                    fillOpacity={0.5}
                    stroke="var(--color-device)"
                    stackId="a" />
            </AreaChart>
        </ChartContainer>
    </div>;
}