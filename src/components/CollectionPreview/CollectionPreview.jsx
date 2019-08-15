import React from 'react'
import "./CollectionPreview.scss"
import CollectionItem from "../collection-item/CollectionItem"
export default function CollectionPreview({ title, items }) {

    const Items = items.filter((item, indx) => indx < 4).map(({id,...otherProps}) => (
        <CollectionItem key={id} {...otherProps} />
    ))

    return (
        <div className="collection-preview">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {Items}
            </div>
        </div>
    )
}
