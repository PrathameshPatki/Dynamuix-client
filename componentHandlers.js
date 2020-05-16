import React from "react";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

import {RegisterClick, GetPriorities, map} from './utils'

function getDisplayName(Component){return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');}

function ownKeys(object, enumerableOnly){var keys = Object.keys(object);if(Object.getOwnPropertySymbols){var symbols = Object.getOwnPropertySymbols(object);if(enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}

function _objectSpread(target){for(var i = 1; i < arguments.length; i++){var source = arguments[i]!=null?arguments[i]:{};if(i % 2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}

export function RegisterComponent(name){
    return function Extend(WrappedComponent) {
        function Rearrange(_ref){
            RegisterClick(name);
            var forwardedRef = _ref.forwardedRef;
            let rest = _objectWithoutProperties(_ref, ["forwardedRef"]);
            var passDownProps = _objectSpread({}, rest, {
                //Add Props if needed
            });
            if (forwardedRef) {
                passDownProps.forwardedRef = forwardedRef;
            }
            return React.createElement(WrappedComponent, passDownProps);
        }
        Rearrange.displayName = "withPriorityClick(".concat(getDisplayName(WrappedComponent), ")");
        Rearrange.WrappedComponent = WrappedComponent;
        return Rearrange;
    }
}

export function RegisterDashboard(){
    return function Extend(WrappedComponent){
        function Rearrange(_ref){
            var forwardedRef = _ref.forwardedRef;
            let rest = _objectWithoutProperties(_ref, ["forwardedRef"]);
            var passDownProps = _objectSpread({}, rest, {
                getPriorities: GetPriorities
            });
            if (forwardedRef) {
                passDownProps.forwardedRef = forwardedRef;
            }
            return React.createElement(WrappedComponent, passDownProps);
        }
        Rearrange.displayName = "withPriorityRearrange(".concat(getDisplayName(WrappedComponent), ")");
        Rearrange.WrappedComponent = WrappedComponent;
        return Rearrange;
    }
}