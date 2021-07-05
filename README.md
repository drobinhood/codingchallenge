# Coding Challenge

### Requirements:
• Build a React app
• Utilize the Fake Store API
• Display all products
• Allow user to search through products
• Allow users to filter on product results
o Price
o Category
• Allow user to sort on product price
• Detailed product page
• Checkout flow
o Shopping Cart
o Checkout page (ok to use fake checkout information)
o Checkout confirmation (please include information you would regularly find on a
checkout confirmation page)


## Run it
Dev commands:

```bash
yarn
yarn dev
```

Build commands:

```bash
yarn build
yarn start
```

View dev pages [http://localhost:3000](http://localhost:3000) 

## Quick Link

*add quick link*

## Goal

Build a fake store with a number of features which you can find listed above. Build it in a short amount of time and learn some things along the way.
## General Idea

My idea when starting this coding challenge was to try to learn a few new things along the way as well as build something I would feel like I could keep expanding in the future.

I've had previous experience with SSG and SSR in the past, mostly SSG with Gatsby. So, I felt like Next.js would be a good place to start.

At the end of this I wanted to feel like I have a better understanding of what Next.js provides.

There were also a couple ideas I had for building my own components, but I started to run short of time and prioritized the requirements.

## Functionality
I chose to use a few libraries to make developing a bit easier.
- react-hook-forms
- lunr
- reactn
- react-icons

I wanted to make sure that I could provide some nice functionality without losing time. For state management I wanted to stay close to the "standard" way of managing state without a lot of excess. ReactN added some nice global state management. I haven't used lunr before, but I was aware of it in the past and have been trying to find some way to start using it. I realise there is bit more you can do with lunr to optimize search queries and at some point I will implement some of that in other projects. But it works pretty good for implementing a small search feature. React-hook-forms was a last minute addition since I didn't have a lot of time to wire up the state for managing the checkout flow. It works pretty nice and provides a lot of neat features.


## Product/Category API

I would have liked to find a way to cache the api result to a service worker, but since the data set is pretty small it works alright as is.

## Maintainability/Reusability

For reuse purposes I tried to stick to a couple of components I could make work for multiple purposes. I'm not loving the strucutre of my components and I would probably refactor them if given more time.


## Styling
It bothers me not to build out a small design system for this, so the styling was put together kind of haphazardly. I normally like to identify reusable design components first and build out the styling to suit the plan I have for reuse and flexibilities of styles.

## Stumbles
When I started I forgot that I didn't have my linter working properly and there were some issues I missed when testing the filter features that caused me a few headaches. But once I got it working again, I was able to quickly track down and fix some of the issues causing unneccesary re renders.

The dynamic page routes and staticProps/Paths had me a bit confused for a bit ... not entirely sure why I was confused, but I was able to figure out how those work.

## If I had more time
- I would make the detail pages look a little more interesting and provide recommendations for other products. 
- I would implement more caching for images and json from the api.
- I would implement a better design and design system.
- I would make it mobile friendly.
- I would fix the cart in the nav, it really bothers me.
- I would like to make it more reusable.
- I would drink another cup of coffee.
- I would play around with the api routes, not sure for what though....
- and given enough time I would probably implement a small cms.

## What did I learn?
I refreshed my memory with hooks, I've been spending a lot of time working with Svelte/js and state management is a bit different. I learned some more about next.js, which I have been meaning to do. I got to spend a little bit of time working with search, I haven't spent a lot of time working with search, but I have a lot of experience with Regex and would have probably built something from scratch for running search queries if I had more time.

## Conclusion
I feel pretty good about this challenge. Could it have been implemented better? Yes, but I feel it is great start to showcase my skills in meeting requirements. I would have like to spend some more time thinking about reusability of components. There is a lot I could tweak or adjust, but I feel confident with my submission for this challenge.

I like what I did and I'm excited to discuss it further. I was only able to get feedback from a few people while working on this. I crave feedback, good or bad, when working on a project. It's one of the best way to improve yourself and others around you.

## Suggestions
Personally I struggle trying to find the balance between "Just make it work" and "Build everything from scratch and make it perfect". Knowing when to pull in an open source library or even deciding to use some library to provide functionality feels like a guessing game to me. Having a better expectation about the level of individual contribution to solving the problem can be helpful to someone like myself. When is it okay to pull in a resource? I find myself saying "no, I should just build it all out myself to prove I know how implement the functionality".

