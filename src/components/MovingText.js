/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'

export default function MovingText(props) {

    let mText = { backgroundColor: props.mode === "dark" ? "#212529" : "#ffa1a1", color: props.mode === "light" ? "black" : "white", fontSize: "20px", height: "25px"}


    return (
        <div style={mText}>
            <marquee className="mText" behavior="" direction="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt neque officia soluta quas ullam id. Ad quae reprehenderit quidem expedita id incidunt dolores deleniti excepturi animi magni odio consequuntur similique provident dolor repudiandae atque, officiis voluptatibus reiciendis. Nihil quod quis magnam mollitia nostrum quibusdam aut cum accusantium impedit numquam fugit culpa, nam laboriosam sed? Necessitatibus provident porro optio et ipsum magni praesentium quos error doloribus quaerat voluptate repudiandae culpa earum laboriosam, sit eligendi veritatis blanditiis minus aperiam. Ab reprehenderit id hic voluptas enim odio. Nisi laborum illum dolore eum ipsum debitis similique cum suscipit enim officiis fugiat maxime, distinctio dignissimos natus ipsa, non quia culpa facere veritatis optio est ratione rem perspiciatis eius. Quibusdam et natus officia nostrum debitis, asperiores commodi consectetur quasi quia similique minima veniam esse sed voluptatibus porro dolores. Expedita quibusdam harum laborum. Sunt, similique doloremque autem illum iure iste recusandae, adipisci mollitia beatae minus quod, debitis sit ipsam dolores nemo ea? Voluptatem porro aliquid ullam sequi officiis illo quo voluptates facilis deserunt nemo illum aspernatur fugiat autem vero est blanditiis quos at, cum tenetur quas magnam eos. Repellendus corporis odit, consequuntur et debitis rem enim veritatis unde repudiandae, perspiciatis incidunt labore eaque, tenetur itaque necessitatibus illo!</marquee>
        </div>
    )
}