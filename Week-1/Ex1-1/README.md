# Exercise 1.1

1. When a user enters an URL in the browser, how does the browser fetch the desired result ? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.

   - What is the main functionality of the browser?
   - High level components of a browser.
   - Rendering engine and its uses.
   - Parsers(HTML, CSS , etc)
   - Script processors
   - Tree construction
   - Order of script processing
   - Layout and painting

## Answer

After entering the URL in the browser the following steps take place in order to show the desired webpage :

1. DNS lookup for finding IP address

   - Checking **browser cache** for DNS records.

   - If DNS query does not get resolved, then the browser checks the **OS cache** followed by **Router cache**.

   - If after perfoming all the above steps, the DNS query is not resolved, then the browser sends it to the resolver server i.e. ISP. This query is now run on the **ISP cache**

   - If the DNS query is still not resolved, then the **ISP's DNS server** initiates a DNS query. This query searches multiple DNS servers on the internet untill it finds out the correct IP address. This type of search is called recursive search. If we are searching for the IP address of a top level domain(.com, ,net, .gov, .org), then the query is sent to the **TLD server**(Top Level Domain) which gives the IP address information to the ISP. Finally, the ISP gives the IP address to the browser.

   ![Top Level Domain server](https://miro.medium.com/max/861/0*udK6jZ3PjlhjqW8U.png)

2. TCP connection initiation with the server by the browser

   - Once the IP address of the required webpage is found, the browser initiates connection with it. In order to do that, an Internet Protocol is used known as TCP/IP(Transmisson Control Protocol/Internet Protocol). A process called _TCP 3-way handshake_ is used, which is detailed below:
     - A SYN message is sent by the client computer to check if the server is open for connection or not.
     - If the server is open for connection, the server sends an ACK message along with the SYN message back to the client.
     - On receiving this message, the client computer acknowledges by sending ACK message to the server. After this finally a connection between the client and the server is established.

3. Request Response Process - Communication starts

   Now that the connection between client and server is established, the client(browser) sends a request to the server for a particular content. The server then responds back with the a appropriate response. The response contains every information requested like web page, status-code, cache-control, etc.

   Finally, the browser renders the content that had been requested.

### Drawing

![Flow chart showing the process of showing a web page](/Week-1/Ex1-1/Ex1%20drawing.jpg)

The above flow-chart shows the process in which a browser fetches the desired result. The steps for which are explained below:

1. The browser checks the Browser cache, OS cache and the Router cache for the IP address of the domain name requested
2. When the IP address is not found, the browser sends the query to the Resolver i.e. the ISP which checks the IP address in the ISP cache and if found, returns the same to the browser.
3. If not resolved, the query is sent to the TLD server by the Resolver.
4. The TLD server provides the IP address of the required server to the Resolver.
5. Now that the Resolver has the IP address, it saves the same in its cache and sends it to the browser.
6. The browser establishes connection with the server having the website using SYN and ACK messages and requests it for the content.
7. The server responds with the requested content and the browser renders it.

### Questions

- What is the main functionality of the browser?

  The main functionality of a web browser is to locate, retrieve and display content on the World Wide Web, including a variety of Web pages, images, video and other files. The process of this starts when the user inputs a URL in the browser. It also needs to connect with various web servers to find the desired web page and show it to the user.

- High level components of a browser.

  1.  **The user interface**: The address bar, back/forwared button, bookmarking menu, etc are included in this. In other words, every part of the browser excluding the window where we the web page is the user interface.

  2.  **The browser engine**: It acts as a bridge between the UI and the rendering engine.

  3.  **The rendering engine**: It is the rendering engine which is responsible for displaying the requested web page on the browser screen.  
  
  4.  **Networking**: All the networking taks such as retrieving the URLs by using various internet protocols are handled by this component.

  5.  **UI backend**: 
   
   UI backend is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. It underneath uses operating system user interface methods.
   used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

  6.  **JavaScript interpreter**: It is used by the browser to interpret and execute javascript code. The results are then sent to the rendering engine for displaying the content.

  7.  **Data storage**: It is a small database created on the local drive of the computer by the browser to store various types of data such as cookies. 

  ![High level components of browser](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650)

- Rendering engine and its uses.

   As soon as the networking layer starts sending the contents of the requested documents to the rendering engine, it starts to parse the chunks of HTML document and convert the elements to the DOM nodes in a tree called *content tree* / *DOM tree*. Also, it parses CSS files present in the contents. 

   It also constructs the *render tree* in which the visual elements are to be displayed. After this, the render tree goes through a layout process which gives each element its position and size on the web page.

   The next stage is called painting in which the render tree is traversed *paint() method* is called to display the content on screen. Painting uses the UI backend layer discussed above.

   The rendering engine always tries to display the contents on the screen as soon as possible for better user experience. It does not wait for the HTML parsing to complete before starting to build and layout the render tree. It parses and displays the content it has received from the network, while rest of the contents stills keeps coming from the network.

- Parsers(HTML, CSS , etc)

   1. HTML parser: The main job of the HTML parser is to parse the HTML markup into a parse tree. The formal format for defining HTML is called DTD(Document Type Definition).

   2. CSS parser: The CSS parser follows a defined set of rules to parse CSS code to a parse tree.

- Tree construction

   While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

- Order of script processing

   The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a ``<script>`` tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.

- Layout and painting

   When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

   In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.
