import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { defineConfig } from 'unocss'
export default defineConfig({
    rules: [
    [
        'bg-home-image',
        {
            'background-image': 'url(@/img/top_bg.png)',
            'background-size': 'cover',
            'background-attachment': 'fixed',
        },
    ],
    [
        'bg-texture',
        {
            'background-image': 'url(@/img/fabric.png)',
            'background-repeat': 'repeat',
        },
    ],
    [
        'flage_t_l_border',
        {
            'content': `''`,
            'position': 'absolute',
            'width': '0',
            'height': '0',
            'border-top': '8px solid',
            'border-left': '12px solid',
            'border-right': '12px solid',
            'border-bottom': '8px solid',
            'border-color': ' transparent black black transparent',
            'left': '0',
            'top': '-16px',
        },
    ],
    [
        'flage_l_t_flag',
        {
            'content': `''`,
            'position': 'absolute',
            'width': '0',
            'height': '0',
            'border': '40px solid',
            'border-color': '#C2951B #C2951B #C2951B transparent',
            'right': '100%',
            'top': '-16px',
            'margin-right': '-24px',
        },
    ],
    [
        'flage_l_t_flag_ocean_blue',
        {
            'content': `''`,
            'position': 'absolute',
            'width': '0',
            'height': '0',
            'border': '40px solid',
            'border-color': '#0A4362 #0A4362 #0A4362 transparent',
            'right': '100%',
            'top': '-16px',
            'margin-right': '-24px',
        },
    ],
    [
        'flage_r_b_border',
        {
            'content': `''`,
            'position': 'absolute',
            'width': '0',
            'height': '0',
            'border-top': '8px solid',
            'border-left': '12px solid',
            'border-right': '12px solid',
            'border-bottom': '8px solid',
            'border-color': 'black transparent transparent black',
            'right': '0',
            'bottom': '-16px',
        },
    ],
    [
        'flage_r_b_flag',
        {
            'content': `''`,
            'position': 'absolute',
            'width': '0',
            'height': '0',
            'border': '40px solid',
            'border-color': '#C2951B transparent #C2951B #C2951B',
            'left': '100%',
            'bottom': '-16px',
            'margin-left': '-24px',
            'z-index': '1'
        },
    ],
    [
        'flage_r_b_flag_ocean_blue',
        {
            'content': `''`,
            'position': 'absolute',
            'width': '0',
            'height': '0',
            'border': '40px solid',
            'border-color': '#0A4362 transparent #0A4362 #0A4362',
            'left': '100%',
            'bottom': '-16px',
            'margin-left': '-24px',
            'z-index': '1'
        },
    ],
    [
        'text-shadow-dual',
        {
            'text-shadow': '#ffffff -6px -6px, #221d15 -3px -3px;',
            '-webkit-text-fill-color': 'transparent'
        }
    ],
    [
        'start_icon',
        {
            'content': `'\\2605'`,
            'width': '10px'
        }
    ],
    ],
    shortcuts: {
        'flag-amber': 'relative w-fit text-shadow-dual max-sm-before:border-[25px] max-sm-after:border-[25px] before:flage_l_t_flag after:flage_r_b_flag children:h-50px sm-children:h-80px children:flex children:z-2 children:justify-center children:items-center children:relative children:bg-amber children:px-20px children:before:flage_t_l_border children:after:flage_r_b_border [&>div>span]:after:start [&>div>span]:before:start'
        , 'flag-ocean_blue': 'relative w-fit text-shadow-dual max-sm-before:border-[25px] max-sm-after:border-[25px] before:flage_l_t_flag_ocean_blue after:flage_r_b_flag_ocean_blue children:h-50px sm-children:h-80px children:flex children:z-2 children:justify-center children:items-center children:relative children:bg-ocean_blue children:px-20px children:before:flage_t_l_border children:after:flage_r_b_border [&>div>span]:after:start [&>div>span]:before:start'
        , 'start': 'start_icon text-sm sm-text-xl'
    },
    presets: [
        presetUno(),
        require('@unocss/preset-attributify'),
        require('@unocss/preset-uno'),
        presetWebFonts({
            provider: 'google', // 默认提供商
            fonts: {
                DotGothic16: [
                    {
                        name: 'DotGothic16',
                        weights: ['400', '500', '700'], // 可根據需要指定其他權重
                    },
                ],
            },
        }),],
    //自訂主題
    theme: {
        colors: {
            'ocean_blue': '#2C6C8F',
            'deep_ocean_blue': '#0A4362',
            'amber': '#E1B43D'
        },
    }
})