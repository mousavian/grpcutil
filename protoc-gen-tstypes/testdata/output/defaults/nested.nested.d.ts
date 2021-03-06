// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace nested {

    export enum Continent {
        UNIVERSAL = "UNIVERSAL",
        AFRICA = "AFRICA",
        ANTARCTICA = "ANTARCTICA",
        ASIA = "ASIA",
        AUSTRALIA_OCEANIA = "AUSTRALIA_OCEANIA",
        EUROPE = "EUROPE",
        NORTH_AMERICA = "NORTH_AMERICA",
        SOUTH_AMERICA = "SOUTH_AMERICA",
    }
    export interface Country {
        name?: string;
        alpha2Code?: string;
        numericCode?: number;
    }

    export interface Location {
        continent?: Continent;
        country?: Country;
    }

}

