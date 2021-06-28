<template>
    <button class="wanwan-button"
            :class="classes"
            :disabled="disabled">

        <span  v-if="loading" class="wanwan-loadingIndicator"></span>
        <slot></slot>
    </button>

</template>

<script lang="ts">
    import {computed} from 'vue'
    export default {
        name: "button",
        props:{
            theme:{
                type:String,
                default:'button'
            },
            size:{
                type:String,
                default:"normal"
            },
            level:{
                type:String,
                default:"normal"
            },
            disabled:{
                type:Boolean,
                default:false
            },
            loading:{
                type:Boolean,
                default:false
            }
        },
        setup(props){
            const {theme,size,level} = props
            const classes = computed(()=>{
                return {
                    [`wanwan-theme-${theme}`]: theme,
                    [`wanwan-size-${size}`]: size,
                    [`wanwan-level-${level}`]: level,
                }
            })
            return {classes}
        }
    }
</script>
<style lang="scss" >
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: lightblue;
    $radius: 4px;
    $red: red;
    $grey: grey;
    .wanwan-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        transition: background 250ms;
        & + & {
            margin-left: 8px;
        }
        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }
        &:focus {
            outline: none;
        }
        /*针对firefox*/
        &::-moz-focus-inner {
            border: 0;
        }
        &.wanwan-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover
            ,&:focus{
                color: lighten($blue, 10%);
            }
        }
        &.wanwan-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,
            &:focus{
                background: darken(white, 5%);;
            }
        }
        &.wanwan-size-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }
        &.wanwan-size-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }
        /*level-css*/
        &.wanwan-theme-button {
            &.wanwan-level-main {
                background: $blue;
                color: white;
                border-color: $blue;
                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }
            &.wanwan-level-danger {
                background: $red;
                border-color: $red;
                color: white;
                &:hover,
                &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }
            }
        }
        &.wanwan-theme-link {
            &.wanwan-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }
        &.wanwan-theme-text {
            &.wanwan-level-main {
                color: $blue;
                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }
            &.wanwan-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }
        /*disabled button*/
        &.wanwan-theme-button {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
                &:hover {
                    border-color: $grey;
                }
            }
        }
        &.wanwan-theme-link, &.wanwan-theme-text {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
            }
        }
        /*loading*/
        > .wanwan-loadingIndicator{
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: wanwan-spin 1s infinite linear;
        }
    }
    @keyframes wanwan-spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}

    }
</style>
