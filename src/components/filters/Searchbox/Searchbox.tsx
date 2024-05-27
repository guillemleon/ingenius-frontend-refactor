import React from "react";
import Search from "@/assets/icons/search.svg";
import Image from "next/image";

interface SearchboxProps {
    handleSearch: (search: string) => void;
}

export default function Searchbox({ handleSearch }: SearchboxProps) {
    return (
        <div>
            <Image
                className="search-icon"
                src={Search}
                alt="Icon"
                width={20}
                height={20}
            />
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
}
