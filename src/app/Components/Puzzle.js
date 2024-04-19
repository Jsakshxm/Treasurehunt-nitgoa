"use client";

import { FilledTile, EmptyTile } from "./Tile1";

export default function Puzzle({ shuffledArray, dragOver, dragStart, dropped }){
	return (
		<div className="grid grid-cols-4 gap-8 px-6 mt-6 rounded">
		{shuffledArray.map((value, index) => {
		if (value === "")
			return (
			<EmptyTile dragOver={dragOver} dropped={dropped} index={index} />
			);
		return (
			<FilledTile index={index} value={value} dragStart={dragStart} />
		);
		})}
	</div>
	)
}
