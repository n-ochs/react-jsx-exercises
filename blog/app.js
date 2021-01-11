let Header = () => {
    return <h1>Bad Titles != Bad Articles</h1>
}
let Article = () => {
    return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Nunc sed id semper risus in hendrerit. Faucibus interdum posuere lorem ipsum dolor. Pellentesque massa placerat duis ultricies lacus sed turpis. Urna nunc id cursus metus aliquam eleifend. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.<br></br>

    Phasellus faucibus scelerisque eleifend donec pretium. Ac turpis egestas maecenas pharetra. Accumsan sit amet nulla facilisi morbi. Laoreet sit amet cursus sit amet. Fermentum posuere urna nec tincidunt praesent semper. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Nunc id cursus metus aliquam eleifend mi in nulla. Quisque egestas diam in arcu. Integer eget aliquet nibh praesent tristique. Mauris cursus mattis molestie a iaculis at erat. Tellus elementum sagittis vitae et leo. Fermentum iaculis eu non diam. Rhoncus mattis rhoncus urna neque.</p>
}
let Footer = () => {
    return <footer>
        <p>
            Dank Blogs &copy;
        </p>
    </footer>
}

let Blog = () => {
    return <div>
        <Header></Header>
        <Article></Article>
        <Footer></Footer>
    </div>
}


ReactDOM.render(<Blog />, document.getElementById('root'))