# Components

## Outline

- Notable components and HTML elements
- How are they constructed?
- How are they projected onto the DOM?
  1. MediaComponent
  2. About Aufbau
  3. Post mit und ohne Daten
  4. Astro CreateForm
- Code Snippets
- Graphical Outlines
- Uses and negated alternatives

## Content

While most of the design decisions for the components of the application have been made during the design of the application, the design choice concerning the implementation of said components are open to adapt to the framework. The list of goals for this implementation period is short. The implementation for each framework should be as equal to the others as possible, should follow the design language of the framework and has to follow the component design as described above.
This section describes selected components and code snippets where they are either interesting or unforeseen choices or where differ from framework to framework. Because it is the framework with which the author had had the most experience prior to this project and therefore the code snippets have the most presentability, code snippets are shown in this paper in Vue.js whereever possible. 
The components described in this section are the About and the Create page, the Post component as it has two variations and the MediaComponent.

The About page is an interesting case because, as described in section `X`, it is the only static page of the application. Its components and HTML children are therefore also static. Figure `X` shows a graphical demonstration of the pages contents from a DOM perspective. Because of its static nature, it is also the only page that can be fully prerendered. Notably, the lower part of the page consists of multiple subcomponents `<InfoBlock>` with a title passed as a prop and a paragraph passed in a slot for the component. Functionally, its only purpose is styling and its only effect on the DOM is the addition of a `<h2>` and a `p` element. The other imported components `<NotInstagramLogo>` and `<SendIcon>` are also wrappers for a `<h1>` and a `<img>` element, respectively. Listing `X` demonstrates the static nature of the page and the addition of all text and multimedia in the template.

---

The Create Page posts an opposite to the About Page. In contrast to the static page with non-changing content, the purpose of the Create page is to preview a new post. It is in its nature, to update after user input. Listings `X` and `Y` show the implementation of the Create page in Vue.js. The data of the component has 4 changing parts: The options and the choice for the `<select>` element, the caption of the new post and the media URL for the `<input>` element. The last data point for the component is the user handle, which is static for the preview in this example application. The computed property `mediaSource` represents the logical choice between the media selection and source URL. The template contains a static `<header>`, the `<form>` with dynamic attributes and a `Post` component.
This subcomponent has to be dynamic to its props as they are changing throughout the process of post creation.

Listing `X` shows the implementation of the Post component in Vue.js. It takes 7 props for the 5 data points of a post and two additional props for control over the design and loading behaviour of the posts image or video. Additionally, the `mounted` method loads the user data through the `ProvileService`. The template of the component uses `MediaComponent` twice, once for the profile picture and once for the post image or video. The attributes for the profile picture are mainly static because the user data is not edited through the create form. The attributes of the post multimedia except the class, width and height are dynamic and edited through user input. Additionally, the projection of the post caption onto the DOM is dynamic. Every time the caption changes, the string is split by whitespaces and each word is projected onto a span, so it can be styled as an hashtag. After each word, another whitespace is appended. The purpose of this method for the projection of the caption is only for the styling of hashtags.

Because the creation of dynamic components is an intended use case for Angular, Next, Nuxt, React, Svelte <!-- REVIEW: is it? --> and Vue, their implementation (see listings `V`-`W`) is not necessarily unusual. Astro poses as an opposite to this. Because changing components are not implementable natively in Astro components, another framework has be used in Astro Islands. For this reason, another component had to be invented in addition to the components as described in figure `X`. `CreateForm` encapsulates the dynamic parts of the Create page. It is a React component with the form and post preview. Because Astro components cannot be used in Islands, every subcomponent used here had to be implemented with React as a duplicate to an Astro component.

Listings `X`- `Y` show the implementation of this unique design for Astro. The Create component imports and inserts the React component `CreateForm` into HTML snippet for the page and marks it as CSR component with `client:load`. From this component inwards, all HTML is generated on the client and purely a React application.  The CreateForm itself contains the form and a post subcomponent. With this structure, Post, MediaComponent, BookmarkIcon, CommentIcon, HeartIcon and SendIcon had to be implemented as Astro components and as React components. Figure `X` shows an updated component structure with Astro islands.

---

The MediaComponent is the presenter component for multimedia content, namely images and videos. It is used within the ProfileList, Profile and Post components (see figure `X`). As described in section `X`, the main use of this component for a developer is to optimize multimedia files whereever possible and to ensure its correction size and style. As such, it is a catch-all for all kinds of multimedia sources. Listings `X` and `Y` show parts its implementation in Vue.js.

<!-- 
5 props
computed property
v-ifs (mediaSource.endsWith)
image attributes
video attributes (not source)
 -->

First, the component takes five props that can be passed to it as HTML attributes (lines 5-19). The `src` string contains either the file name or URL to the file. The `alt` props is the alternative text for an image to simply pass to the `alt` attribute of the `<img>` tag. The width and height of the image or video. This prop is primarily needed for optimizations and optionally source sets to tell the browser which image variant is needed on the page. Lastly, the `eagerLoading` prop is a boolean indicator for whether the file needs to be loaded first for images or fully for videos.

Second, the computed property `mediaSource` returns the correct link to the image or video source based on the start of the `src` prop. This allows the component to identify faulty or external source URLs and only import needed local multimedia files. This implementation design is unique to Vue.js and Nuxt. Looking at the implementation in React and Next, the same effect is achieved through the `useState` and `useEffect` hooks and for Angular the `ngOnChanges` hook is used. In Svelte, the `mediaSource` is defined with a leading `$: `, making it reactive. Because of its non-dynamic nature, the native Astro component defines `mediaSource` statically server-side. On the other hand, the dynamic component uses the same React implementation as the fully React application.

Third, every framework uses conditional rendering to project either an image, a video or an error message onto the DOM.
Additionally, the Svelte component checks another condition: external and internal images. For image source strings starting with "http", a HTML-native `<img>` element is used, whereas for all other images the Svelte-native `<enhanced:img>` tag is used. The rest of the frameworks uses either one or the other. Vue.js, React and Angular do not support enhanced image elements. In contrast, Astro, Next, Nuxt and Svelte do have components that improve the performance of image elements. Astro supports an `<Image>` component that outputs an `<img>` tag with optimized attributes. Next comes natively with another `<Image>` components that optimizes images with a predefined width and height and Nuxt has a `<NuxtImg>` components to optimize images and define presets for its images. Svelte is the only one of that group that does not support full URLs to be passed to the `<enhanced:img>` component.

The attributes of the `<img>` elements are design to optimize their load performance, size and quality. While there is no way to optimize the size and quality of the source of simple `<img>` elements, the load performance is adapted to the usage of a `<MediaComponent>`. The first Post of a PostList is always eager loaded, whereas all other images are lazy loaded. The size of the bounding box of the image is also defined to prevent layout shifts during or after the laoding of the image. Enhanced image components are configured to optimize the size and quality of the requested image, as well to insert placeholder images if possible.

The `<video>` elements are designed to optimize the load behaviour of the browser and to change the default presentation and styling. Each video has a defined width and height, controls and playback behaviour. To come as close to the applications model, Instagram, videos should autoplay, but stay muted. Each behaviour is a single attribute to set, but autoplaying every video requires every video to be loaded on page load. This network load bears a performance decrease. For this reason, only the metadata is preloaded unless it is the first post in the PostList. To ensure the wanted autoplay feature, each `<video>` element is referenced using the framework and custom code ensures videos play within the viewport and pause outside of it. This is achieve using an `IntersectionObserver` (SOURCE).